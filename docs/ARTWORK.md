# Local artwork (0.7)

## Distribution update – October 29, 2026

The selected 156 Milan images may be included in `resources/milan-artwork.json.gz` with permission of the project owner. **Add game** installs and enables Milan. If the archive is missing, the Windows release can download the official client ZIP, verify it, and extract the required Texture2D/Sprite images. The Windows game does not install or launch; temporary client files are cleaned up. Android remains the companion gaming app. See [game add-ons](GAME-ADDONS.md) and [module contract](GAME-MODULES.md). Below, earlier extraction and research phases are historically preserved.

The installed official Windows app 1.0.9 contains readable Unity textures. The local table uses 79 original PNG exports of these: 30 location images, 19 people with icon and full portrait, three cube icons, five token symbols, a Masquerade token, logo and city map. No new artwork generated. The app has not been launched, modified or patched; no encryption or protections have been bypassed. Story, audio, scripts and screenplays were not exported.

## Files and start

On October 25, the original icons and full portraits were also added for the four characters from Playable Characters: Jamilah Ianni, Domenica Amato, Aristide Demiana and Romeo De Carlo. The eight images remain under `private/artwork/`; the existing card, base character, dice and Prospero images have been retained. The preparation tool will also include these four characters from now on. Reload the board page after updating and restarting the local artwork server.

Afterwards, all other expansion components are also linked: the eleven new allies/ghouls have an icon and full portrait, and the NPCs, faction control miniatures, Sabbat/Nephilim cubes, four amulet markers and two special location tokens have their available original icons. All 101 expansion parts now have an image link. The local catalog contains a total of 136 images, including the previously added dice and Prospero accessories. Not every NPC has a separate large portrait in this selection; where this is missing, the detailed view uses the icon.

The numbering of amulet markers, special location tokens, and the four Cult Fanatic variants is our stock numbering, not a verified official physical numbering or automatic location assignment. The images do not determine rules or placement. For updating while retaining previously added accessories, the preparation tool supports `--merge`.

The images and source manifest are only in `private/artwork/`, which is ignored by Git. They are already present on this computer. Start `node server.mjs` and open http://127.0.0.1:5178. Restart the server after a new export. Without this package, the demo works with the existing symbols, without Python or other external runtime dependencies.

For your own local installation there is the optional preparation tool:

```powershell
python -m pip install UnityPy==1.23.0
python tools/milan-extract-artwork.py --app-data 'C:\path\to\VTMTEBURU_Data'
```

The tool only selects textures with exactly matching names and sizes from `resources.assets` and `sharedassets0.assets`. Multiple matches are skipped. The manifest stores texture name, file, object index, dimensions, and SHA-256 for traceability. The source is only read; output goes to `private/artwork/`. Python/UnityPy are only needed for this preparation, not for the table.

## Presentation and boundaries

Portraits appear in the inventory, at the selected item, and on the board. Location images are shown on the new city map. Token icons follow the chosen side. The original map is now the main interactive view, with its own approximate click areas and features on top of the image. A schematic view and expandable map reference remain available; see [TAFEL-LAYOUT.md](TAFEL-LAYOUT.md). Images do not change lines, positions, exports or undo/redo.

The server only publishes a filtered catalog and selected PNG routes under `/local-artwork/`. No general access to `private/`, source manifest, or installation files. File names, PNG header, size and resolved paths are checked. Missing images fall back on text and symbols.

The sharp app map corrects previous photo interpretations: at the top is Portello; the zone previously referred to as Chinatown is Sempione; Corsica is Argonne. The new standard profile `city.json` has release `milan-city-artwork`, version 0.7.0. `campaign.json` 0.6 remains available unchanged for existing sessions. The own Haven labels and attribute data have not been re-verified as official sensor or rules mapping.

## Sources and distribution

- [Official App Downloads](https://www.teburu.com/game-apps/): Locally installed Windows app 1.0.9, textures visually checked.
- [UnityPy](https://github.com/K0lb3/UnityPy): open source reader, used on version 1.23.0. The tool license does not grant any rights to game artwork.
- Public SDK/repo search results did not return a verified reusable Milan art package. An official press kit was found, but with no established redistribution license.

No redistribution license for the artwork established. The images, local manifest, and screenshots are not sent to GitHub. The repository only contains loader, presentation, extraction tool and documentation. This is not proof of app compatibility or working Teburu emulation.

The dice tray additionally uses four original face symbols from the locally installed app: empty, skull, ankh and ankh with teeth. The extraction tool optionally includes them in the local catalog. The public UI contains only the link and its own symbol fallback; the images remain under private/artwork/.
