# Documentation

## Using TCE

TCE provides the emulator and shared infrastructure. The selected game's official app remains responsible for rules and campaign progress.

- [Overview and startup](../README.md)
- [Installation and updates](INSTALLATION.md)
- [Automatic PC preparation](AUTOMATIC-SETUP.md)
- [Adding game modules and managing artwork](GAME-ADDONS.md)
- [Sharing a linked board over LAN](BOARD-SHARING.md)
- [Firmware simulation](FIRMWARE-SIMULATION.md)

## Game modules

Each module documents its app requirements, board controls, components and limitations. The current bundled module is:

- [Vampire: The Masquerade – Milan Uprising](games/milan-uprising/README.md)

An extensible module architecture does not mean every Teburu game is supported. Compatibility is established for each module and official app.

## Development and project review

- [Development plan](PLAN.md), [architecture](ARCHITECTURE.md), [contracts](CONTRACTS.md) and [decisions](DECISIONS.md).
- [Game module contract](GAME-MODULES.md) and [Milan artwork sources and extraction](ARTWORK.md).
- [Validation reports](VALIDATION.md), [app validation](APP-VALIDATION.md) and [Core validation](CORE-VALIDATION.md).
- [Research register](RESEARCH.md) and [Teburu/Milan source research](TEBURU-DEEPSEARCH.md).
- [Release review and acceptance](RELEASE-REVIEW.md).
- [Feature development records](project-history/README.md).

Project records contain dated experiments, technical decisions and evidence limits. Distinguish shared Core behavior from the tested game module. Test counts and correction history belong in these records. Run public software tests with `npm test` or `node --test test/*.test.mjs tests/*.test.js`.

Documentation and document filenames are maintained in English. Internal identifiers and runtime storage paths retain their compatibility requirements.
