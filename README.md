# Teburu Core Emulator (TCE)

TCE emulates Teburu Core behavior and provides a virtual tabletop for supported games. Its goal is to let unmodified official game apps work without physical game components. The official apps remain responsible for their rules, story and campaign progress.

TCE provides the shared Core runtime, Bluetooth transport, device simulation, game library, installation tools and session infrastructure. Game modules provide each game's components, board, artwork, app adapter and screen recognition. A standalone sandbox is available for manual tabletop use.

## Supported game modules

| Module | Available support | Validation limit |
| --- | --- | --- |
| [Vampire: The Masquerade – Milan Uprising](docs/games/milan-uprising/README.md) | Sandbox and linked Android app adapter | Limited real-app interaction demonstrated; full campaigns and all expansions remain unvalidated |

The bundled registry currently contains this one game module. TCE is structured for multiple independently enabled modules; adding a game requires its own implementation and app validation. Shared Core emulation does not by itself establish compatibility with every Teburu game.

## Start TCE

The source edition requires **Node.js 22 or later**. With a game's supplied artwork archive, the standalone table needs no package installation or additional runtime dependencies.

```powershell
node server.mjs
```

Open http://127.0.0.1:5178, choose **Add game** for a listed module, then **Open tabletop**. `npm start` is an equivalent shortcut. Stop the server with Ctrl+C.

On Windows, **Start-TCE.cmd** opens the game library. The local Windows release candidate includes runtimes, an installer and automatic PC preparation; no reviewed public release is available yet. See [installation](docs/INSTALLATION.md).

## Connect an official app

For a module with a linked Android adapter, install its official app normally on your tablet. Start TCE through its launcher, choose the game and **Connect Android**. The complete Windows package offers **Set up automatically** in the Control Center to prepare the shared PC prerequisites.

Connect the tablet over USB, allow debugging and open the selected game's app. Follow the module's language, orientation and display requirements, then choose **Start Core** and connect through the app's normal flow. Source checkouts require the helper prerequisites described in [installation](docs/INSTALLATION.md).

Use **Stop Core** to return the session's Bluetooth adapter to Windows. **Quit app and return Bluetooth to Windows** also closes the services. Closing only the browser does not stop TCE.

## Emulator features and limits

| Area | TCE provides | Boundary |
| --- | --- | --- |
| Core runtime | Shared codec, Bluetooth transport and lifecycle management | Real-app compatibility requires separate validation |
| Virtual devices | Simulated Core, dice and LED-ring state | Official firmware execution and full hardware animation behavior are not implemented |
| Game library | Independent installation/enabling, archive validation and supported artwork acquisition | Each game needs a registered module and its own assets |
| Linked play | Shared runtime with a selected game adapter | One linked Android/Core session at a time |
| Virtual tabletop | Headless state, commands, replay and manual sandbox sessions | Board layouts, input constraints and app observations belong to each game |
| LAN access | Shared host session and access-code protection | Available board controls depend on the module; technical Core controls remain local |
| Windows package | Bundled tools, per-user installation and recovery controls | Clean-machine physical acceptance remains open |

## Documentation

General TCE user guides:

- [Installation and updating](docs/INSTALLATION.md)
- [Automatic PC preparation](docs/AUTOMATIC-SETUP.md)
- [Adding and managing games](docs/GAME-ADDONS.md)
- [Sharing a linked board on the LAN](docs/BOARD-SHARING.md)
- [Firmware simulation](docs/FIRMWARE-SIMULATION.md)

For board operation, setup, expansions and game-specific limits, open the selected [game module's guide](docs/README.md#game-modules).

## Development and project documentation

Engine, game modules, application, UI and presentation are separate. Domain state is headless and contains no graphical objects. Shared infrastructure must not depend on a particular game. The preserved original demo is under `legacy/`.

| Path | Purpose |
| --- | --- |
| `src/engine/`, `src/application/` | Generic commands, state, replay and session orchestration |
| `src/ui/`, `src/presentation/`, `src/adapters/` | Shared controls, presentation and adapters |
| `server/`, `server.mjs` | Library, module installation, serving and restricted LAN sharing |
| `integration/runtime/` | Shared Core, WSL/Bluetooth and recognition infrastructure |
| `games/<game-id>/` | Module descriptors |
| `src/games/<game-id>/`, `data/games/<game-id>/` | Game behavior, screens, presentation and profiles |
| `integration/<game-id>/` | Game-specific app adapter, recognition and component semantics |
| `resources/` | Module registry and artwork archives |
| `test/`, `tests/` | Public software tests |
| `private/` | Ignored local settings, sessions, observations and identifiers |

Run the public suites with `npm test` or `node --test test/*.test.mjs tests/*.test.js`. Both CI workflows use the same selection. A bare `node --test` can include temporary working copies. The latest recorded local run passed 169 public tests on Windows/Node 26.7.0; this is software evidence, not universal app or hardware acceptance.

Use the [documentation index](docs/README.md) for architecture, module contracts, research and validation. Compatibility evidence must identify the game, app version, scenario and hardware tested.

## Rights and boundaries

TCE is independent of Xplored, Teburu and the owners of supported games. No public software license has been selected.

Distribution permission for the selected Milan artwork and this project's derived integration code does not cover other games' assets. The original SDK, SDK libraries, documentation and examples remain excluded. App binaries, other protected assets and private machine data are not bundled. Do not bypass security, clone physical RFID identities or patch firmware.

The standalone virtual-core behavior study is a simulation, separate from the linked adapter. Own domain events are not Teburu protocol messages.
