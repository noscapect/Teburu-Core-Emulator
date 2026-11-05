# Six expansion packs

Added on October 25, 2026. Inventory follows [Xplored Official Physical Inventory](https://teburu.zendesk.com/hc/en-us/articles/25458904976667-Physical-components-VTM). Names of the four additional characters have also been checked on the [official game page](https://games.teburu.com/vtm-milan-uprising). Only names, numbers and own schematic presentation are included; stories and rules remain in the official app.

| Package | Additional parts | Contents on the table |
| --- | ---: | --- |
| Faction Miniatures | 50 | 20 Anarchs, 20 Camarilla and 10 St. Ambrose control miniatures |
| Allies & Ghouls | 6 | Food Delivery Driver, Paramedic, Taxi Driver, Blood Addict, Enforcer and Punk |
| Playable Characters | 4 | Jamilah Ianni (Hecata), Domenica Amato (Lasombra), Aristide Demiana (Ministry) and Romeo De Carlo (Tzimisce) |
| Mystical Milan | 10 | Investigator, Burglar, two NPC tokens, four amulet location tokens and two special location tokens |
| Prospero's Legacy | 13 | Hacker, six Sabbat control miniatures and six influence cubes |
| The Unending Dream | 18 | Real Estate Agent, Vagrant, ten Nephilim influence cubes and six NPC tokens |

Together these are **101 extra parts**, in addition to the 132 parts of the basic game. The check miniatures are alternative physical representations: do not place both a basic check token and a check miniature to double count the same check. The table does not calculate a check from the number of miniatures.

## Operation

The standalone demo offers the new profile **Milan · base game + 6 expansion packs** under **Table settings → Table profile**. **Start an empty table with this profile** starts an empty table; first save an existing session. The existing basic profiles remain available for their old exports. In **Stock** you can filter by base game or one of the six packs. All components support regular placement, shared zones, reset, undo/redo, and JSON storage.

The private linked table uses the extensive stock. It offers eleven characters, eight allies and seven ghouls as scannable miniatures. Scans are only available when the official app enables its reader; they use their own persistent simulation identities. The new catalog has been loaded into the PC Core. The older Android helper does not support this extension.

For control miniatures, expansion cubes and tokens, under **Stock → Place expansion markers** you will find a component selection, location selection and control for placing or replacing. This also works via the shared board link. These actions only change our table: follow the installation instructions in Milan. The automatic influence/control recognition is limited to the three basic factions. Sabbat, Nephilim and special expansion markers are taken over manually. A marker operation cannot move a scannable miniature and rejects an outdated table revision.

Selecting or filtering on our table will not activate an expansion story in the official app. Use the normal expansion choice in Milan for this. No activation codes, official tag identities, campaign content, or modified app files have been added. The Prospero accessory miniature with LED ring remains a separate accessory.

## Data and storage

`expansions.json` contains six separate source-referenced inventories. `withExpansions` compiles its own Milan profile from this; the generic engine has no extension dependencies. The combination included in `city-expansions.json` is reproducible with:

```powershell
node tools/milan-build-expansion-profile.mjs
```

Each combination has its own release ID. The import check continues to require the exact profile version. There is no tacit extension of the generic save import.

The private adapter explicitly converts existing own basic board exports with `extendTableSession`: first checking the old save by replay, then replaying the same events on the extended profile and validating again. Positions, existing token sides, revision and recorded rolls are retained; new parts start in stock. The adapter uses separate files with the suffix `-expansions.json` and leaves the original base board files. This is not a conversion or modification of official Android campaign saves. The private read-only roster link now also has the four additional character definitions.

## Authentication and boundaries

All 73 public tests pass, including six pack inventories, all 101 additional parts together in one zone, save/replay, undo/redo, incompatible profile import, retention of existing saves, four expansion characters in the setup aid, and the shared marker route.

The private check compares all 26 scan payloads against the previously locally read semantic miniature data, checks individual self-identities and monitors reader status. In addition, the 24 Core regression scenarios, the virtual Bluetooth test, the existing setup/grid regressions and the browser test on desktop and mobile pass. That browser test checks six inventory filters, 26 scan buttons, and marker placement/return. The linked table is locally loaded with 233 parts and the Core is running with the new catalog.

Full campaigns of the six expansions and all new miniatures have not yet been accepted through actual Android gaming operations. The offline payload and browser tests do not prove that compatibility. All 101 expansion parts have an artwork link; all eleven new allies/ghouls also have their full portraits. This selection is now part of the permitted, included artwork archive. See [artwork coverage and numbering boundaries](../ARTWORK.md). Individual synthetic identities, machine configuration and raw observations remain ignored under `private/`; the required custom runtime code is in `integration/runtime/`. The SDK itself remains excluded.