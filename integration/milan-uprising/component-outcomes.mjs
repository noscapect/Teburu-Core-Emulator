import {readFeedCards} from './feed-cards.mjs';
import {readCompletedMovement} from '../../src/games/milan-uprising/completed-movement.js';
export const COMPONENT_OUTCOMES_VERSION='masquerade-lifecycle-v1';
const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
// Observed capital-I/l confusion in this exact NPC name, not fuzzy matching.
export function matchesOutcomeName(component,name){
 return normalize(component.label.split('·')[0])===name||component.id==='npc-il-dottore'&&name==='iidottore';
}
export function readComponentOutcomes(raw,profile){
 const groups=readFeedCards(raw);if(!groups)return null;
 const latest=new Map(),unsupported=[];
 for(const group of groups){
  const text=group.map(l=>l.text).join(' '),compact=normalize(text);
  const removedAt=compact.match(/^(masqueradeencounter)removedfrom(.+)$/);
  const movement=removedAt?null:readCompletedMovement(text,profile.zones),placed=compact.match(/^(.+?)(?:placedin|placedat)(.+)$/)||compact.match(/^(masqueradeencounter)addedin(.+)$/),removed=compact.match(/^remove(.+?)from(?:the)?map$/)||compact.match(/^(.+?)removedfrom(?:the)?map$/)||removedAt;
  if(!placed&&!removed&&!movement)continue;
  const name=movement?.name||(placed||removed)[1],matches=profile.components.filter(c=>matchesOutcomeName(c,name));
  if(matches.length!==1){unsupported.push(text);continue;}
  const componentId=matches[0].id;
  if(movement&&matches[0].groupId==='characters')continue;
  if(removed){
   if(removedAt&&!profile.zones.some(z=>z.area==='city'&&normalize(z.label)===removedAt[2])){latest.set(componentId,null);unsupported.push(text);continue;}
   latest.set(componentId,{componentId,operation:'remove'});continue;
  }
  const zone=profile.zones.find(z=>z.area==='city'&&(movement?z.id===movement.zoneId:normalize(z.label)===placed[2]));
  if(!zone){latest.set(componentId,null);unsupported.push(text);continue;}
  latest.set(componentId,{componentId,operation:'place',zoneId:zone.id});
 }
 const instructions=[...latest.values()].filter(Boolean).sort((a,b)=>a.componentId.localeCompare(b.componentId));
 return instructions.length||unsupported.length?{instructions,unsupported,scope:'explicit-named-component-feed-cards'}:null;
}
