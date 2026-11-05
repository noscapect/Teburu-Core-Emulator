# Teburu Core Emulator (TCE)

TCE is a digital tabletop with **Vampire: The Masquerade – Milan Uprising** as its first game module. Its goal is to use the unmodified official game app without physical game components. The official app remains responsible for rules, story and campaign progress.

The standalone table is a manual sandbox. The optional linked table supports limited, demonstrated interaction with the official app, including registration, movement, dice interaction, resuming a campaign and copying recognized board updates. Full campaigns, all expansions and first-time physical installation on a clean second PC remain unvalidated.

## Start the table

The source edition requires **Node.js 22 or later**. With the included artwork archive, it needs no package installation or external runtime dependencies.

```powershell
node server.mjs
```

Open http://127.0.0.1:5178, choose **Add game** for Milan, then **Open tabletop**. `npm start` is an equivalent shortcut. Stop the server with Ctrl+C.

On Windows, **Start-TCE.cmd** opens the game library. **Start-Milan.cmd** is also supported. A local Windows release candidate includes the runtimes, installer and automatic PC preparation; no reviewed public release is available yet. See [installation](docs/INSTALLATION.md) for packaged and source-edition requirements.

## Add Milan and connect Android

**Add game** installs and enables Milan using its artwork archive. If the archive is missing, the packaged edition can download a verified official Windows client and extract the required 156 images. It does not install or start that client. Source-edition extraction additionally requires Python/UnityPy. Keep the resulting archive; the game requires it even when an extracted cache exists. See [adding games](docs/GAME-ADDONS.md).

For linked play, install the official Milan app normally on an Android tablet. In the game library choose **Connect Android**, then use **Set up automatically** in the Control Center of the complete Windows package. After PC preparation, connect the tablet over USB, allow debugging, open Milan and choose **Start Core**. Screenshot recognition is calibrated to **English, landscape, 2560 × 1600**. Source checkouts require the helper prerequisites described in [installation](docs/INSTALLATION.md).

Use **Stop Core** to return the session's Bluetooth adapter to Windows. **Quit app and return Bluetooth to Windows** also closes the services. Closing only the browser does not stop TCE. See [automatic setup and recovery](docs/AUTOMATIC-SETUP.md).

## Features and limits

| Feature | Available behavior | Current limit |
| --- | --- | --- |
| Sandbox | Place, move, remove and flip components; JSON export/import; undo/redo | Manual positions; no automatic Milan rules |
| Milan inventory | 132 base components plus 101 components from six expansions | Full expansion campaigns and every miniature are not validated |
| Linked table | App-led input and supported recognized board updates | Unrecognized, hidden or obscured information can remain incomplete |
| Haven rooms | Ten fixed rooms, both side descriptions and recorded upgrades | Purchases and effects are performed in Milan |
| Location tiles | Symbols, recorded sides, supported setup/feed recognition and corrections | Special-tile recognition is incomplete |
| Allies and ghouls | Supported Sunset placement, confirmation and Day return to stock | Arbitrary story-driven removals may need correction |
| Prospero LED ring | Supported static colors and simulated device status | Full hardware animations are not implemented |
| LAN board | Shared table, access code and supported board input | Core and technical controls remain local |
| Windows candidate | Bundled tools, per-user installer and preparation/recovery controls | Clean-machine physical acceptance remains open |

## Use the table

Hold the left mouse button to drag a miniature, then release at its destination. Selecting a component and clicking a destination also works. Escape or dropping outside the board cancels a drag. Use **Stock**, **Location** and **Session** for inventory, selected-location details and session controls. Zoom to inspect crowded districts.

In the sandbox, save a JSON export before closing or reloading. Import validates the profile, event history and final state before replacing the session. Undo/redo preserves up to 100 local operations, including recorded dice results. These controls do not change the official app.

On the linked table, follow Milan's current request. A dropped miniature appears provisionally at the requested destination with an amber waiting marker; its saved position changes only after confirmation. Check Milan before retrying a delayed action: the app may have accepted input that TCE has not yet recognized. Missing or covered icons alone do not remove pieces.

The city map has 30 named districts and ten Haven rooms. Click areas approximate the printed map; they are not a verified adjacency model or a complete campaign starting state. Older table profiles remain available for compatible existing exports. A profile change does not silently migrate a session.

## User guides

- [Scanning, loaded groups and input recovery](docs/SAVEGAME-PERSONAGES.md)
- [Dragging and placement confirmation](docs/SLEPEN-EN-SENSOREN.md)
- [Allies and ghouls](docs/ALLIES-EN-GHOULS.md)
- [Location tiles and Haven rooms](docs/LOCATIETEGELS.md)
- [Clear and partially restore the table](docs/TAFEL-LEGEN.md)
- [Expansions](docs/UITBREIDINGEN.md)
- [LAN sharing](docs/BORD-DELEN.md)
- [Prospero and the LED ring](docs/PROSPERO.md)
- [Firmware simulation](docs/FIRMWARE-SIMULATIE.md)

## Development and project documentation

Engine, game modules, application, UI and presentation are separate. Domain state is headless and contains no graphical objects. Milan-specific data and behavior belong to its module; the shared engine does not depend on Milan. The original demo remains under `legacy/` and at http://127.0.0.1:5178/legacy/index.html.

| Path | Purpose |
| --- | --- |
| `src/engine/`, `src/application/` | Generic commands, state, replay and session orchestration |
| `src/games/milan-uprising/`, `data/games/` | Game-specific behavior, UI, presentation and profiles |
| `src/ui/`, `src/presentation/`, `src/adapters/` | Shared controls, presentation and adapters |
| `server/`, `server.mjs` | Local server and restricted LAN sharing |
| `integration/runtime/` | Shared Core, WSL/Bluetooth and recognition infrastructure |
| `integration/milan-uprising/` | Milan app adapter and recognition |
| `games/`, `resources/` | Module contracts and artwork archives |
| `test/`, `tests/` | Public software tests |
| `private/` | Ignored settings, sessions, observations and identifiers |

Run the public suites with `npm test` or `node --test test/*.test.mjs tests/*.test.js`. Both CI workflows use the same selection. A bare `node --test` can include temporary working copies. The latest recorded local run passed 169 public tests on Windows/Node 26.7.0; software tests do not establish hardware or full-campaign acceptance.

Use the [documentation index](docs/README.md) for the separate user and project documentation. Project references include [architecture](docs/ARCHITECTUUR.md), [module contracts](docs/GAME-MODULES.md), [plan](docs/PLAN.md), [validation evidence](docs/VALIDATIE.md), [research](docs/ONDERZOEK.md), [release review](docs/RELEASE-REVIEW.md) and [contributor instructions](AGENTS.md).

## Rights and boundaries

TCE is independent of Xplored, Teburu and the owners of Vampire: The Masquerade. No public software license has been selected.

The project owner has authorized distribution of the selected artwork archive and this project's derived integration code. The original SDK, SDK libraries, documentation and examples remain excluded. App binaries, other protected assets and private machine data are not bundled. Do not bypass security, clone physical RFID identities or patch firmware.

The local virtual-core behavior study is a simulation, separate from the optional linked adapter. Own domain events are not Teburu protocol messages. Compatibility claims must stay within reproducible official-app tests.
