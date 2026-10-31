import test from 'node:test';
import assert from 'node:assert/strict';
import {cp,mkdir,mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {createTabletop} from '../src/application/tabletop.js';
import {milanModule} from '../src/games/milan-uprising/module.js';
import {buildVisibleControlArrangement} from '../src/games/milan-uprising/control-update.js';

test('real adapter applies Control independently of an unreadable Influence card and later accepts verified Influence and bonus',async t=>{
 const root=await mkdtemp(join(tmpdir(),'tce-control-replay-'));t.after(()=>rm(root,{recursive:true,force:true}));
 const source=fileURLToPath(new URL('../',import.meta.url)),runtime=join(root,'private','linked'),state=join(root,'state'),frame=join(root,'frame.json');
 const filter=path=>!path.split(/[\\/]/).some(part=>['bin','obj','build','__pycache__'].includes(part));
 await mkdir(runtime,{recursive:true});await mkdir(state);
 await Promise.all(['src','data'].map(name=>cp(join(source,name),join(root,name),{recursive:true,filter})));
 await cp(join(source,'integration','runtime'),runtime,{recursive:true,filter});await cp(join(source,'integration','milan-uprising'),runtime,{recursive:true,filter});await writeFile(join(runtime,'machine.json'),'{}');
 const profile=JSON.parse(await readFile(join(root,'data/games/milan-uprising/city-expansions.json'),'utf8'));
 const table=createTabletop({profile,module:milanModule});table.place('character-nosferatu','qt8');table.place('investigation-1','washington');table.flip('investigation-1');table.arrange(buildVisibleControlArrangement(profile,table.snapshot(),[{zoneId:'city-life',faction:'camarilla'}]));
 table.place(profile.components.find(c=>c.groupId==='anarch-cubes').id,'cadorna');
 for(const name of ['current-chronicle-table-expansions.json','tablet-chronicle-table-expansions.json'])await writeFile(join(state,name),JSON.stringify(table.exportSession()));
 const raw={available:true,width:2560,height:1600,mapGeometry:'android-city-v1',lines:[{text:'NIGHT 4 HOUR 2 SUSPICION MASQUERADE',x:300,y:80},...[['Anarch is now',1398,821],['controlling CityLife',1347,872],['CityLife has now Z 1',1348,993],['Anarch Influence',1346,1047],['Media Office Locatiorv',1511,1167],['Bonus revealed in',1512,1220],['CityLife',1512,1267]].map(([text,x,y])=>({text,x,y}))]};
 await writeFile(frame,JSON.stringify(raw));
 const script=`
 import assert from 'node:assert/strict';import {readFile,writeFile} from 'node:fs/promises';
 import {observe,setFeedbackSource,tableSession} from ${JSON.stringify(pathToFileURL(join(runtime,'app-feedback.mjs')).href)};
 import {boardTiles} from ${JSON.stringify(pathToFileURL(join(runtime,'location-tiles-store.mjs')).href)};
 const profile=JSON.parse(await readFile(${JSON.stringify(join(root,'data/games/milan-uprising/city-expansions.json'))},'utf8'));
 const control=()=>{const state=tableSession().state,token=profile.components.find(c=>c.groupId==='control'&&state.placements[c.id]==='city-life');return state.faces[token.id]};
 const count=()=>{const state=tableSession().state;return profile.components.filter(c=>c.groupId==='anarch-cubes'&&state.placements[c.id]==='city-life').length};
 setFeedbackSource('android');await observe(true);assert.equal(control(),'camarilla');
 const confirmed=await observe(true);assert.equal(confirmed.cityOutcomes.confirmedControlApplied,true);assert.equal(control(),'anarchs');assert.equal(count(),0);
 const frame=JSON.parse(await readFile(process.env.MILAN_FEEDBACK_REPLAY_OBSERVATION,'utf8'));for(const line of frame.lines)line.text=line.text.replace('has now Z 1','has now 1').replace('Locatiorv','Location');await writeFile(process.env.MILAN_FEEDBACK_REPLAY_OBSERVATION,JSON.stringify(frame));
 await observe(true);await observe(true);assert.equal(count(),1);assert.equal(boardTiles().tiles['city-life'].bonus.value,'media');assert.equal(boardTiles().tiles['city-life'].bonus.face,'visible');
 assert.equal(tableSession().state.placements['character-nosferatu'],'qt8');assert.equal(tableSession().state.faces['investigation-1'],'restricted');
 const revision=tableSession().state.revision;await observe(true);assert.equal(tableSession().state.revision,revision);
 const cadorna={available:true,width:2560,height:1600,mapGeometry:null,lines:[{text:'NIGHT 5 HOUR 2',x:396,y:77},{text:'MASQUERADE',x:1257,y:77},...[['Anarch is now',1398,666],['controlling Cadorna',1348,718],['Cadorna has now O',1348,841],['Anarch Influence',1346,892],['Media Office Location',1512,1008],['Bonus revealed in',1512,1060],['Cadorna',1512,1112]].map(([text,x,y])=>({text,x,y}))]};
 await writeFile(process.env.MILAN_FEEDBACK_REPLAY_OBSERVATION,JSON.stringify(cadorna));
 const cadornaCount=()=>profile.components.filter(c=>c.groupId==='anarch-cubes'&&tableSession().state.placements[c.id]==='cadorna').length;
 await observe(true);assert.equal(cadornaCount(),1);await observe(true);assert.equal(cadornaCount(),0);
 const final=tableSession().state,token=profile.components.find(c=>c.groupId==='control'&&final.placements[c.id]==='cadorna');assert.equal(final.faces[token.id],'anarchs');
 assert.equal(boardTiles().tiles.cadorna.bonus.value,'media');assert.equal(final.placements['character-nosferatu'],'qt8');assert.equal(final.faces['investigation-1'],'restricted');
 await observe(true);assert.equal(tableSession().state.revision,final.revision);
 // Exercise the complete parser -> two observations -> persisted session path.
 // Keep older cards visible as Milan does, then add/remove/add in one process.
 const history=[];
 async function encounter(text,expected){
  history.push(text);
  const lines=history.map((text,i)=>({text,x:1348,y:400+i*170}));
  const next={available:true,width:2560,height:1600,mapGeometry:'android-city-v1',lines};
  await writeFile(process.env.MILAN_FEEDBACK_REPLAY_OBSERVATION,JSON.stringify(next));
  const before=tableSession().state.placements.masquerade;
  await observe(true);assert.equal(tableSession().state.placements.masquerade,before);
  await new Promise(resolve=>setTimeout(resolve,2));
  const result=await observe(true);
  assert.equal(result.componentOutcomes.applied,true);
  assert.equal(tableSession().state.placements.masquerade,expected);
  const revision=tableSession().state.revision;
  await observe(true);assert.equal(tableSession().state.revision,revision);
  const persisted=JSON.parse(await readFile(${JSON.stringify(join(state,'tablet-chronicle-table-expansions.json'))},'utf8'));
  assert.equal(persisted.state.placements.masquerade,expected);
 }
 await encounter('Masquerade Encounter added in Città Studi','citta-studi');
 await encounter('Masquerade Encounter removed from Città Studi',null);
 await encounter('Masquerade Encounter added in Isola','isola');
 await encounter('Masquerade Encounter removed from Isola',null);
 await encounter('Masquerade Encounter added in Duomo','duomo');
 assert.equal(tableSession().state.placements['character-nosferatu'],'qt8');
 assert.equal(tableSession().state.faces['investigation-1'],'restricted');
 const portraitFrame={available:true,width:2560,height:1600,mapGeometry:'android-city-v1',lines:[{text:'NIGHT 6 HOUR 3 SUSPICION MASQUERADE',x:300,y:80}],mapPieces:{ready:true,stable:true,characterMoves:[{componentId:'character-nosferatu',zoneId:'cinque-giornate'}],confirmedCharacterMoves:[{componentId:'character-nosferatu',zoneId:'cinque-giornate'}],investigationLocations:[]}};
 await writeFile(process.env.MILAN_FEEDBACK_REPLAY_OBSERVATION,JSON.stringify(portraitFrame));
 const portraits=await observe(true);assert.equal(portraits.influenceMap.ready,false);
 assert.equal(tableSession().state.placements['character-nosferatu'],'cinque-giornate');
 // A single unconfirmed portrait never qualifies, even if another item is stable.
 portraitFrame.mapPieces.characterMoves=[{componentId:'character-nosferatu',zoneId:'qt8'}];
 portraitFrame.mapPieces.confirmedCharacterMoves=[];
 await writeFile(process.env.MILAN_FEEDBACK_REPLAY_OBSERVATION,JSON.stringify(portraitFrame));await observe(true);
 assert.equal(tableSession().state.placements['character-nosferatu'],'cinque-giornate');
 console.log('independent Control and verified later outcomes passed');`;
 const {stdout}=await promisify(execFile)(process.execPath,['--input-type=module','-e',script],{windowsHide:true,timeout:30000,env:{...process.env,MILAN_FEEDBACK_STATE_DIR:state,MILAN_FEEDBACK_REPLAY_OBSERVATION:frame,MILAN_FEEDBACK_REPLAY_IMAGE:''}});
 assert.match(stdout,/independent Control and verified later outcomes passed/);
});
