# Milan Uprising module

This module adds **Vampire: The Masquerade – Milan Uprising** to [TCE](../../../README.md): board, components, artwork, tabletop controls and an official-app adapter. TCE supplies shared Core emulation, transport, installation and session infrastructure.

## Availability and app requirements

Milan is currently the only registered game module. It provides a manual standalone sandbox and an optional linked table. Registration, movement, dice interaction, resuming a campaign and selected board updates have been demonstrated in limited tests with the unmodified official app. Full campaigns and all expansions remain unvalidated.

Linked play requires the official Android app. Screen recognition is calibrated to **English, landscape, 2560 × 1600**. Follow [general installation](../../INSTALLATION.md) to prepare TCE and the PC, then open Milan and connect through **Connect Android → Start Core**. The Android package is `com.xplored.teburu.vtm`.

## Installation and artwork

Choose **Add game** for Milan. The module uses `resources/milan-artwork.json.gz`, containing 156 selected images. If missing, the packaged edition can download the verified official Windows 1.0.9 client (about 1.01 GB) and extract the images. Allow roughly 3 GB of disk space. The Windows game is never installed or started. Source extraction also requires Python/UnityPy.

Keep the archive. Milan uses `private/bundled-artwork/` for its image cache and `private/linked/` for its adapter workspace. Shared TCE PC configuration is stored in `private/tce-machine.json`.

## Board and session

The board contains thirty city districts and ten Haven rooms. Click areas approximate the printed map; they are not a verified adjacency model or complete campaign starting state. Inventory includes 132 base components and 101 components from six expansions.

The sandbox has no automated Milan rules. Positions are manual. Save a JSON export before closing or reloading. Import checks the profile, events and final state; undo/redo retains up to one hundred local operations. Switching profiles does not silently migrate a session.

During linked play, Milan determines input. Requested positions have a pending marker until recognizable app confirmation arrives. Hidden or unreadable pieces may be missing; an absent icon is not a removal instruction. Choices, costs and campaign progress remain in Milan.

## Guides

- [Dragging and confirmation](SLEPEN-EN-SENSOREN.md)
- [Scanning, saved roster and input recovery](SAVEGAME-PERSONAGES.md)
- [Allies and ghouls](ALLIES-EN-GHOULS.md)
- [Location tiles and Haven rooms](LOCATIETEGELS.md)
- [Clearing and partially restoring the table](TAFEL-LEGEN.md)
- [City-map recovery](KAARTHERSTEL.md)
- [Investigation marker synchronization](ONDERZOEKFICHES-SYNC.md)
- [Expansions](UITBREIDINGEN.md)
- [Prospero and the LED ring](PROSPERO.md)

[LAN sharing](../../BORD-DELEN.md) and [firmware simulation](../../FIRMWARE-SIMULATIE.md) are shared TCE features. Prospero's presentation and interpretation of app output belong to this module.

Technical findings and acceptance evidence are recorded in [project validation](../../VALIDATIE.md); they do not establish support for other game apps.
