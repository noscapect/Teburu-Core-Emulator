# Location map and campaign setup 0.6

Implemented on October 22, 2026 in `data/games/milan-uprising/campaign.json`, release `milan-city` version `0.6.0`. The retail package 0.5 and its exports remain usable separately.

## Reconstructed board data

The [Xplored Official Production Update 42](https://gamefound.com/en/projects/xplored/vampire-the-masquerade-milan-uprising/updates/42) contains an unoccupied full board photo. The [later update 59](https://gamefound.com/en/projects/xplored/vampire-the-masquerade-milan-uprising/updates/59) shows the same board during game play. The district names, their approximate location and attribute icons were read from these sources. The [manual, page 13](https://teburu.com/downloads/VtM/VTM_MU_GameManual.pdf) explains the attribute icons. Only actual names/characteristics are included, with their own geometric presentation.

The city map in these photos has thirty districts, in addition to ten visible Haven spaces. The forty sensors should not be equated with forty city districts. Older marketing/prototypes are no guarantee for the final location distribution.

| Row in our schematic representation | Districts, from left to right |
| --- | --- |
| 1 | QT8, Sempione, Monumentale, Isola, Centrale, NoLo |
| 2 | San Siro, City Life, Chinatown, Garibaldi, Buenos Aires, Città Studi |
| 3 | Bande Nere, Washington, Cadorna, Duomo, Cinque Giornate, Corsica |
| 4 | Giambellino, Solari, Navigli, Bocconi, Porta Romana, Calvairate |
| 5 | Ronchetto, Barona, Sant'Ambrogio, Ripamonti, Vigentino, Corvetto |

To the left of each row are two Haven spaces. Labels `Haven 1L` to `Haven 5R` are custom placeholders, not official room names. Room effects, purchase/upgrade conditions and the interpretation of the Haven fields as playable spaces are not automated.

The rectangular boxes are a diagram. They do not reproduce exact map boundaries and do not yield an adjacency graph. Free manual placement does not mean a move is legal under Milan rules. The package explicitly marks `adjacencyVerified` and `sensorMappingVerified` as `false`. The physical BLE sensor sequence is not inferred from the photos. Comparison with a current retail board remains necessary.

## Enter campaign lineup

The new screen allows you to record a setup indicated by the official app:

1. Choose four different basic characters and specify their starting position, in a district or Haven space.
2. Complete the three faction influences, a control token and possibly a closed location token for each district.
3. Place existing NPCs, allies, ghouls and possibly the Masquerade token.
4. Apply the completed setup. All unallocated parts are returned to stock; Token sides are built from the entered values.

A setup is one atomic command, with undo/redo and JSON recovery. The builder checks the four different characters, valid locations, the physical supply and suitable sides of control tokens. Influence input is capped at three per faction per location, as described in the manual on page 6. Control follows input only; no automatic influence/control calculation is performed.

Control tokens are allocated via bipartite matching. This way, an available Anarch/Camarilla side is not unnecessarily consumed if another side enables a later requested district. An impossible division is rejected before the current table changes.

## No official starting position yet

The public sources consulted did not provide a verified full recipe for the Chronicle start: no complete list of starting positions, faction influence, control and active NPCs. The photos show production examples or game situations and have not been adopted as an official campaign setup. An arrangement with randomly distributed cubes would only hide this gap.

The package therefore contains `officialInitialPositionsVerified: false`. The zero/inventory input values ​​are empty form values, not a game preset. The automated tests use explicit synthetic input, no claimed official start. The form is a physical setup aid and does not start a campaign in the official app.

A fully verified campaign setup still lacks the actual setup prompts from the unmodified app or any other official, reproducible launch reference. The exact map connections, Haven behavior and app integration also remain open. This expansion completes the named board spaces and manual setup controls, not those as-yet unproven components.

The source photos and temporary browser controls are exclusively ignored under `work/`. No proprietary map artwork, app file, firmware, or hardware identifiers are included in the package. The local demo continues to work without external dependencies.