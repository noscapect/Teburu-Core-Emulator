# Architecture — Teburu Core Emulator

## Product border

TCE provides Core emulation, virtual devices, transport, module management and table/session infrastructure for supported Teburu games. Official apps remain responsible for rules, story and campaign. The sandbox is a tool within TCE; the project goal is to use the unmodified official apps without physical game components.

A game module provides components, board geometry, presentation, app recognition, and game-specific input. District, faction, stage, or character names do not belong in the generic engine or shared transport. Milan Uprising is the current concrete module and validation case. The registration currently does not include a second game module; multi-module support is an architectural feature, not a compatibility claim for all games.

## Current scope — October 29, 2026

`resources/addons.json` registers versioned game modules. The generic engine, server, installer and Core/WSL transport do not import a Milan module. Milan screens and presentation are under `src/games/milan-uprising/`, data under `data/games/milan-uprising/` and the app adapter under `integration/milan-uprising/`; `integration/runtime/` contains shared infrastructure. Multiple games can be enabled independently. The current linked launcher opens one game session at a time and closes the previous one in a controlled manner when switching. See [module contract](GAME-MODULES.md).

Game installation uses an existing artwork archive or a registered download/extraction recipe. The Windows client is not installed or running. Node monitors the controlled source, integrity and cleanup; a separate Python process exports only selected images. Engine and rules remain artwork-free. WSL2 remains the fixed Bluetooth route; SDK and machine data remain excluded from distribution. See [installation](INSTALLATION.md) and [validation](VALIDATION.md).

The current application offers sandbox rules, validated import/replay of custom table sessions, and an optional app adapter. Milan now contains thirty city districts and ten Haven rooms; the official app remains the rules authority for linked play. Full campaign validation remains open. See [validation](VALIDATION.md).

## Historical structure — from October 21, 2026

The description below preserves the successive architectural steps. Statements about missing locations, export only or absent app integration belong to the described earlier version.

Architecture established and first sandbox cross-section implemented on October 21, 2026. Milan Uprising has a separate game module with neutral profile data in that first cross-section; real rules and locations are still missing. Priority: faithful functional 2D reproduction, then automation and optional visual extension.

Expansion 0.5 on October 22: A separate Schema 2 retail package contains source-verified physical components and identities. Generic component sides are maintained as IDs in the engine; categories, source references and colors remain in data/projections. Rules and full location map remain open. The older neutral profiles and their saves will continue to work.

Extension 0.6: a separate city profile contains thirty district labels and ten Haven spaces in its own schema. The Milan lineup builder and its UI are external to the engine; the engine only receives the generic atomic command `table.arrange`. There is no fixed campaign start position built in and no automatic adjacency/movement rule added.

## Existing prototype

Current: browser input → application → generic engine and sandbox module → state/events → projection → 2D renderer. JSON download is a separate adapter.
No network transport, BLE or official app integration in the application.

The local Node server only serves explicitly allowed static files on loopback.

The old model with four pawns and coordinates remains available in legacy/ and src/model.js. The active engine uses component and zone IDs; numbers and capacity come from validated profile data. This is not a statement about Milan game rules. There is no hardware mapping.

The original demo will be retained for reference. The active Milan demo has been migrated to the layers below. A synthetic profile with three irregular zones and capacity greater than one is tested headless; this proves no second complete game or 3D support.

## Layers and dependencies

| Layer | Responsibility | Allowed dependencies |
| --- | --- | --- |
| Engine | serializable state, entities, zones, generic commands and events | own contracts; no Milan, DOM or renderer |
| Game module | setup, game rules, turn progression, card actions and game validation | engine contracts and validated game data |
| Game data | boards, cards, tokens, characters, scenarios and releases | versioned schemas; no executable data scripts |
| Application | coordinate sessions, module selection, storage and adapters | engine contracts, registered modules and ports |
| User interface | menus, accessible controls, intentions to commands | application contracts and read-only projections |
| Presentation | 2D; later optional 3D, animations and effects | read-only scene projection and presentation data |
| Adapters | storage, randomness and optional app/hardware integration | engine/application contracts; never the other way around |

Flow: input → application → command → engine and chosen rules → state/events → projections → UI and renderer. Hit tests provide entity or zone IDs; the renderer does not determine legality. Animation timing does not change game outcome.

## Domain contracts

- Stable IDs for players, components, zones, cards and scenarios. Logical placement uses zones, optional stacking order and orientation. Pixels, cameras and meshes belong exclusively to presentation.
- Boards support zones and connections; a grid is one profile. The 8×5 sensor mapping requires separate adapter configuration. One pawn per sensor does not become a universal limit per game zone.
- Data packages include gameId, releaseId, package version, schemaVersion, and asset origin/rights. Other games and publisher releases load as separate packages; same publisher does not imply identical rules.
- Commands include type, actorId, payload and expected revision. Validation and application are atomic; an error leaves the state intact. Events are given order and payload version. These are project-defined contracts, not Teburu protocol.
- A game module provides setup, validation and state transitions. Simple content is declarative data; complex rules remain isolated module code.
- Randomness enters through a replaceable port. Save roll results so that replay does not create new rolls. Time and rendering don't drive rules.
- Saves contain schema, engine, module and package versions, mode, revision and state. Import explicitly validates and migrates or understandably refuses. The current v1 demo export remains a separate format and is not tacitly a platform session save.

## Sandbox and automation

Sandbox becomes a full-fledged mode with manual table actions without full rule automation. Structural controls remain in place: existing IDs, valid zones and consistent data. Game-rule checks belong to the module and mode. Save mode; do not unknowingly convert a sandbox session into a validated rules session.

In automation mode, the game module manages legal actions and turn progression. Any AI uses the same command contract as players. If an official app manages rules, the adapter explicitly records the state owner; avoid duplicate regulatory authority.

## Intended structure for migration

```text
src/engine/                 # generic domain logic and contracts
src/application/            # sessions and ports
src/games/milan-uprising/   # module manifest and Milan rules
data/games/milan-uprising/  # permitted declarative content
src/ui/                     # controls
src/presentation/2d/         # initial renderer
src/presentation/3d/         # phase 3 only
src/adapters/                # storage, randomness, optional integration
```

The first modules in this directory plan now exist; 3D is deliberately missing. No additional toolchain. Contracts and current restrictions are in CONTRACTS.md. Since extension 0.4, single cubes/tokens and validated JSON recovery via event replay are available for the same profile. Migrations, complex component types, rules, stacking order and orientation will follow later.

## App and hardware

The end goal is now explicitly using the official app without physical game components. The app is the rule/campaign authority; the engine provides the generic virtual table and presentation. Future app updates to our table must come through a proven adapter, not through duplicated Milan rules. The standalone sandbox remains supportive.

The local virtual core adapter is a behavioral simulator only. Identity selection, temporary sensor contact and logical zone placement are separated. Releasing a sensor does not remove a pawn. Repeated contact provides an interaction intention, not a rule action. Actual hardware identity mapping, sensor ordering and handshake are not reproduced. Public resources and restrictions are in TEBURU-DEEPSEARCH.md.

Retaining the official app remains preferable, but is not an engine dependency. Only add an adapter once a documented/permitted interface has been proven. The UI does not create GATT payloads. Keep mock, hardware presence and proven app compatibility visible separately. Research remains in RESEARCH.md; no security circumvention or protected assets without permission.

## Acceptance of the architecture

1. Engine and Milan rules work in Node without a browser or graphics library.
2. The same commands and recorded rolls yield the same state headless, in 2D and later 3D, without rewriting rules.
3. A second synthetic game profile with a different board shape and occupation does not require any core change.
4. Invalid data/commands do not change anything; incompatible saves are rejected or explicitly migrated.
5. Sandbox works without full Milan rules or Teburu.

See DECISIONS.md for changes from the original design.


## Table view and future app updates (October 22, 2026)

The physical renderer combines the optional local map view with custom visual click polygons and part anchors from `src/presentation/2d/milan-map.js`. This is presentation geometry only; no sensor index, adjacency or domain position. The schematic renderer uses the same projections and commands. Inventory, selected location, camera zoom, tab selection and place mode remain UI state outside of the session export.

`tabletop.subscribe(listener)` reports successful state changes, undo, redo, reset and import. A listener reads a new projection; the return function writes it out. An adapter can thus work via the same application commands as a player; the renderer is updated without DOM access from the adapter. Switching table profiles unwrites the old UI and removes its resize and keyboard listeners. Errors in an observer do not roll back a successful domain request.

The official app remains the intended source of rules, campaign and assignments such as placing influence during a city round. A future proven bridge should translate such instructions into validated table changes, while preserving the remaining chunks, atomic application, and handling duplicate or outdated messages. Transport, message mapping and automatic influence transfer are still missing. No fictional Teburu protocol has been added. See TABLE-LAYOUT.md.
