# Contracts v1 — first cross-section

## Game Add-ons - October 29, 2026

`GET /api/game-addons` reports modules, their individual installation/enabled status, download progress, and the selected game. Private storage schema 2 has `installed`, `enabled[]` and `selected`; schema 1 migrates while preserving installation and sessions. `active` remains an API alias for selection. Local same-origin JSON actions support `add` (install and enable, possibly with background acquisition), `disable`, `select`, `acquire` and the older `install`/`activate`. `open-linked` starts the module adapter via the launcher. A matching artwork installation must be present before the module is usable. See [module and lifecycle contract](GAME-MODULES.md).

## Reading guide — October 29, 2026

Addition November 5, 2026: own table sessions support validated import/replay and undo/redo; see **Expansion 0.4** and **Recovery History**. The original export-only cross-section is historical. This recovery contract does not import official app saves; general autosave and migrations remain open.

This document stores the successive engine and module contracts. The engine still has sandbox rules only; the associated runtime is an optional adapter with the official app as the rules authority. Older inventory tables with “official app not connected” describe that earlier cross-section. The required own adapter code is now in `integration/runtime/`; current distribution and verification are in [installation](INSTALLATION.md), [release-review](RELEASE-REVIEW.md) and [validation](VALIDATION.md). Historical contract restrictions are not a current statement that app contact has never been demonstrated.

## Expansion stock 0.8

`withExpansions(base, catalog, selected)` only adds the selected Milan stocks to a copy of the base profile. Components are given a `expansionId` and presentation label; generic zone/component commands remain the same. The extended profile has its own release ID and package version. `extendTableSession` is an explicit additive conversion of our own base board exports, with validation and replay before and after conversion. Regular imports remain profile-related. See [packages, controls and private adapter boundaries](games/milan-uprising/EXPANSIONS.md).

## Expansion 0.6 - named map and atomic arrangement

Separate package `milan-city` version `0.6.0`, profile schema 2. The retail and demo packages are retained. Zones optionally have `area` (ID), `attributes` (unique IDs) and `sourceId` (existing resource). The presentation chooses its own schematic layout; these fields do not create a sensor protocol or adjacency graph. `boardEvidence` and `campaignSetup` are version 1 Milan metadata; official initial position and sensor mapping are explicitly unproven. See BOARD-AND-SETUP.md.

New generic command `table.arrange {placements: [{componentId, zoneId}], faces: [{componentId, faceId}]}` replaces all placements and token sides atomically. Parts not mentioned go to stock; sides not mentioned receive their first profile value. IDs, duplicates, zone capacity and allowed sides are checked before commit. Existing events and rolls are retained; the setup adds one event and revision. The application provides `arrange(payload)`. Undo/redo and export/import follow the same state and replay.

The separate Milan builder `buildCampaignArrangement(profile, input)` translates manual setup input into this generic command. Four different characters, local input bounds and finite retail supplies are controlled there. The engine has no faction names or Milan starting rules. A full matching allocates the control tokens without shortages caused by greedy allocation. The form is not an automatic campaign or rule mode; `sandbox` remains the only mode.

## Extension 0.5 — retail content and component sides

New profile `retail-core` version `0.5.0`, data schema 2; schema 1 remains accepted and older profiles remain unchanged. Schema 2 requires `sources` (unique ID, title, HTTPS URL), `componentGroups` (unique ID, label, optional description) and a valid `sourceId` and `groupId` per component. Optional `color` and `shortLabel` are presentation data. `faces` is optional and contains exactly two unique `{id, label, color?}` objects. Resources and inventory are in MILAN-CONTENT.md. The collections `characters`, `cards`, `tokens` and `scenarios` remain reserved for later content schemas; these physical characters and tokens are in `components`.

Only schema 2 sessions get `state.faces`, with each two-sided component having the active side ID. Initial value is the first profile side, not a prescribed game setup. New command: `component.flip {componentId}`. This changes sides without changing placement; unknown or one-sided components are atomically rejected. The application provides `flip(componentId)`. Projections provide derivative `faceId`, `faceLabel` and color; the domain state contains only side IDs, no colors or graphic objects. Undo/redo, reset and validated import use the same state/event replay. The session export format remains schema 1, with the existing exact package/module version control; old profiles and exports do not silently get a `faces` field.

## Recovery history — addition to 0.4

The application provides `undo()` and `redo()` with up to one hundred local steps. Valid commands and `reset()` preserve the previous immutable state. Errors also preserve existing recovery options. Another successful operation clears the redo sequence; redo uses the previous state and does not generate new randomness.

Recovery history is application state, not an engine event or Teburu protocol. The projection contains `canUndo` and `canRedo`. Export contains only the active session state and associated event sequence. A successful import and starting a new profile will start with no recovery history; a failed import changes nothing. Undone actions are not exported. The UI provides recovery only on the manual table and reference profile; sensor contact and input trace are not reversed.

## Extension 0.4 — virtual table and resume

Components now support `kind: piece | cube | token` with the same generic place/move/delete commands. The type solely determines the presentation; no Milan rule or capacity is imposed by type. Optional `shortLabel` is a presentation label. The content collection `tokens` remains empty and reserved for later game data; single tokens are now explicit components in `components`, not a new token schema.

The new profile `virtual-table` version `0.4.0` uses a synthetic working stock of four pawns, twelve influence cubes and eight tokens; zone capacity 32 is a work table choice. The forty zones are our own A1–H5 sensor labels, not a verified Milan location map. Reference and sensor study profiles are retained. The projection also provides zone capacity and all individual residents; design remains outside the domain state.

`restoreSession(saved)` now supports `tabletop-session` schema 1 for the same registered module/package ID and versions. The application executes the complete event sequence from an empty session and compares the reconstructed state with the saved state. Sequence, event schema, actor, command validation and recorded rolls are checked. Only after a complete success will the current session be replaced. Resuming does not generate new randomness. Unknown/legacy formats, non-standard end states and `inputSimulation` are rejected. The browser limits the file to 2 MB; the application accepts a maximum of 10,000 events. Sensor studies cannot yet be resumed. Migrations and automatic saves are missing. This is a restore from our own table, not an import from official app saves.

The older cross-sections below describe the historical scope; This extension replaces the `piece` and export-only restrictions.

## Extension 0.3 — local interaction study

New command type component.interact {componentId, zoneId}: Requires the pawn to already be in the named zone, only sets an intent and does not change placement. The sandbox does not perform any Milan action or rule. Existing command types and reference profile are retained.

The virtual core adapter uses our own explicit demo mapping and demo miniature IDs. Register selects identity, touch creates its own domain assignment and release ends only the temporary contact. Contact must be released before next entry/identity selection. This is a simplified testing workflow, not an established Core state machine. Capabilities show BLE/RFID/app connection as false. Trace is own simulator log, not a packet dump.

The interaction study package offers d10 and capacity four as a demo choice; neutral-demo remains unchanged. In the simulator, Export gets an inputSimulation field next to the existing session envelope. Import/restore remains unsupported. No official RFID identities are created, cloned, or exported.

Captured before migration. Scope: only existing neutral demo; no new assumptions about the physical game. Engine version 1, module contract 1, data schema 1. Extensions require explicit version and compatibility choices.

## Inventory and authority

| Part | Status | Authority |
| --- | --- | --- |
| 8×5 sensor grid | verified in RESEARCH.md | profile data, no engine constant |
| Sensor Orientation and Milan Locations | unknown | no mapping implemented |
| Four pawns and d6/d10 | existing synthetic demo, not a complete component list | local sandbox |
| Retail Miniatures, Influence Cubes and Tokens | counts and identities verified in extension 0.5 | separate retail package, manual placement/sides |
| Maps, Character Stats and Scenarios | not implemented | no protected story content; official app remains intended authority |
| Rules of the game and course of turns | not implemented | only sandbox available |
| Official app | not connected | does not manage local state |

Reference session: place p1 on A1; move to H5; place p2 on A1; reject p1 to occupied A1 without mutation; remove p2; enter recorded d6 outcome 4; export. Comparison with physical Milan remains open.

## Data and module

JSON profile contains schemaVersion, gameId, releaseId, version, provenance, zones (id, label, capacity), components (id, label, kind), dice (allowed side numbers), cards, tokens, characters, scenarios and presentation (grid with columns and zone order). Empty content collections are deliberate; their further schemas are specified before filling. IDs are unique. No scripts or external assets. Presentation fields are not copied to the domain state.

A trusted module contains id, version, contractVersion, modes, setup(profile) and validate(state, command, profile). The application registers modules; no arbitrary code is loaded from JSON. This first Milan module only offers sandbox; rules mode is explicitly denied. Validate should supplement structural checks, never replace them.

## Commands and conditions

Command: {type, actorId, expectedRevision, payload}. One local actor: local. Types: component.place {componentId, zoneId}, component.remove {componentId}, dice.record {sides, value}. A successful command returns a new state with ascending revision and one event {sequence, schemaVersion, type, actorId, payload}. Validation errors throw an error with no input mutation. No clock or randomness in the engine.

State: engineVersion, gameId, moduleVersion, packageVersion, mode, revision, placements (componentId → zoneId or null), events. Everything JSON serializable. The renderer gets a derived copy of zones, labels and occupancy, plus separate presentation data. Only commands change the session.

Export: format tabletop-session, schemaVersion 1, module identity, package identity and state. Only export in this section; no import, migration or recovery yet. The old demo export remains available via the saved legacy demo. Do not confuse the two formats.

## Expansion 0.7 — optional local artwork

`GET /local-artwork/catalog.json` returns a filtered catalog with `available`, `assets`, `components`, `zones`, `groups`, `faces` and `branding`; missing/invalid local package returns `available:false`. Asset values ​​are local PNG routes only. No private source paths in this response. `withArtwork` only enriches the derived presentation; engine, commands and session envelope do not change. Location images are only enabled for the corrected `city.json` profile 0.7.0. See [ARTWORK.md](ARTWORK.md).


## Presentation extension — physical table view

No change to engine, profile or save versions. The existing corrected map 0.7 gets an optional physical renderer with presentation geometry only. The schematic renderer and older profiles remain available. `tabletop.subscribe(listener)` provides an unsubscribe function and reports successful state changes, including import and restore; no notification of a rejected order. The callback does not get a mutable domain state. This is a native application contract for other input sources, not an app or Teburu protocol.

## Presentation extension — drag

`installPieceDrag` translates pointer input to one existing placement command after releasing on another board space. The preview does not change any domain state. An optional `tabletop.canMove(componentId)` can restrict input in advance; the adapter remains responsible for command validation and confirmation. During dragging, the controller defers external redraws. Miniatures remain visible on the physical map regardless of the number of other parts. Engine, profiles and session format do not change.

## Milan module — explicit final influence counts

`buildInfluenceArrangement(profile, state, updates)` accepts unique `{zoneId, faction, count}` combinations for city districts, with integers from zero to three. The pure builder checks inventory and returns `{changed, placements, faces}` for one existing `table.arrange` order. Only the named faction influence changes; other placements and sides are retained. The caller skips the command at `changed:false`. This is explicit data acquisition, not automatic Milan rules. See [day phase study](DAY-PHASE-AUTOMATION.md).

`buildBoardInstructions(profile, state, {influence, removeControl})` combines the same final influence counts with explicit control removal from unique city districts. Control deletion only removes the affected control tokens. All validation is done before the existing atomic assignment. The application does not perform phase or faction decisions.

`createPollingWorker({run, interval, onState})` provides a standalone serial background job. `start()` starts without browser request; errors are reported and the next cycle is rescheduled. `stop()` waits for the current cycle and prevents subsequent runs. The private app adapter uses this generic task outside of engine and UI.

`reconcileDistrictMap(profile, state, locations)` requires all city districts, unique and with valid faction numbers. The pure builder only replaces influence and control, including the removal of redundant old parts. This does not confirm or change characters, research, location tiles and other categories. Four seeded characters are not required for this limited map takeover. The result uses the same atomic command and changes nothing when repeated; session format and engine remain the same.

## Milan module — location tiles

`prepareComponentSetup(profile, state, locations)` initializes a newly presented component setup: the entire influence/control map is validated and old Investigation tokens are returned to stock. This only concerns tokens with the side `investigation`; restricted sides and other categories are retained. The adapter uses this step once per setup and saves the old local session beforehand. Regular map updates via `reconcileDistrictMap` will retain Investigation tokens. Fresh, explicitly confirmed markers during the same setup are not cleared repeatedly.

`setLocationTile(state, zones, {zoneId, kind, face, value, expectedRevision})` returns new `milan-location-tiles` state. `kind` is bonus or special; `face` is unconfirmed, hidden or visible. Only city districts and known values ​​are allowed. Projections copy the tile data. The city table optionally adds this module state as `locationTiles` to the existing session envelope; the engine remains unchanged. See [location tiles](games/milan-uprising/LOCATION-TILES.md).


## Optional reader controls in the UI

A linked table can offer `scan(componentId)`, `canScan(componentId)` and `scanStatus()`. The UI then presents a Core reader next to the card. The reader target has no zone ID and does not create an engine placement. Transient scan presentation and registration progress are adapter state; persistent board positions remain domain state. The regular sandbox does not offer this optional device control.


`createSingleFlight(read)` allows concurrent invocations to share the same running Promise. On success or failure, the next call performs a read again. The browser adapter uses this for status requests; it does not change any engine or game state.


The optional scan presentation groups a miniature strip and the Core into one peripheral UI container. `fit({width, height})` reserves that space before scaling the map. The strip only receives the part IDs provided by the adapter; additional slots are not hard coded. Searching and scrolling do not change domain or registration information. The scanning location remains the same temporary reader target without zone ID.


`buildBoardInstructions` also accepts `characterMoves: [{componentId, zoneId}]` with unique player characters and destinations. These explicit app outcomes are validated in advance and processed together with influence/control in one existing atomic table command. Other parts and token sides are retained. The builder does not determine night phase rules or default destination.


`mountDiceTray({onRoll, onWake, container})` presents five d10s in a dialogue. `update({connected, ready, canRoll, rolling, dice})` adopts the hardware state; `dice` contains only index, registration status, rolling status, and last known value. `onRoll(indices)` and `onWake()` return the new hardware state if necessary. The component has no RNG and does not create domain commands. Open/close does not send any input; selection remains local UI state. `dispose()` removes the dialog and opening button.

## Milan module — explicit component instructions

`buildComponentInstructions(profile, state, instructions)` validates a nonempty batch of unique known component IDs with `operation: place | remove | face`, an existing `zoneId` for placements, and an optional valid `faceId`. Face-only instructions require a side. It validates final ally/ghoul district occupancy before returning an idempotent `{changed, placements, faces}` arrangement for the existing atomic table command. No engine or session format changes are introduced. The private adapter uses this contract for supported explicit named app outcomes and user-verified table-only corrections. See [placement synchronization](PLACEMENT-SYNCHRONIZATION.md) for observed coverage and limitations.

## Presentation and observation timing — October 27, 2026

`withPendingPlacement(view, action)` in the presentation decorators returns a projected pending destination and `pendingPlacement` presentation flag without changing confirmed session state, events, revision or exports. The renderer marks it as awaiting confirmation. No graphical object is introduced into domain state.

`createPositiveObservations({key,maxGap})` tracks independent positive observations by input generation. It returns only items seen in two distinct successive captures within the allowed gap, including the previous capture time for post-request freshness checks. Missing items reset their candidate; absence is not a removal instruction. See [faster feedback](FASTER-FEEDBACK.md) for measured limits and private-reader activation.
