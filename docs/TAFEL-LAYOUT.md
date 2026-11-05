# The virtual physical table

## Linked gaming table: board central

The linked `/board` page now opens in a compact play view. Only a header of 44–48 pixels, the current game action, **Pieces**, **Table menu**, the card and the Core reader remain permanently visible. The sidebar, scan lists, instruction blocks, and technical sync notifications no longer take up board space by default. The description of the fixed toolbar and sidebar below still applies to the standalone sandbox.

**Pieces** opens a floating parts panel that closes with Close or Escape. Clicking on a district opens the same panel directly on the location content, including the existing tile controls. Scan buttons are under **Pieces → Scan a miniature**; miniatures can also be dragged directly from the Core queue. **Table menu** contains zoom, Auto fit and table information. Technical status, dice operation and **Recover input** are listed under **Connection & recovery**. The **Dice** button opens a separate dice pool overlay with five d10s, also during dice setup.

The entire remaining width and height are available for the table. The board retains its physical proportion; on narrow portrait screens this means free space above and below the map. Notifications after an action appear briefly as an overlay and do not shift the map. Open panels float above the table; they don't shrink the map. Engine, sensor mapping, scan/place commands and saves remain the same.

Browser checking on six screen sizes confirms that the board space extends from the compact header to the bottom of the window, without horizontal page bleed. The trials also check dragging to the reader and to a district, waiting for app confirmation, location inspection, menu, recovery controls, and Escape. Screenshots and app fixtures remain local under private/.


The user experience starts with the board on the table. On a wide screen, the board gets all the space it needs next to a compact sidebar. On tablets and phones, the sidebar slides underneath. The main view uses the original map from the local artwork pack. Figures use the full character image, cubes and tokens their own icon. No external graphics library or network service required.

## Operation

- **View**: Click a district for full location content. Click a placed item to select it. This does not change the game state.
- **Place**: choose a part from the stock, or press Place / move. Click the destination; Even a district where parts are already located remains a valid click destination. Escape or View stops posting.
- **Location**: every component is individually selectable in the location list. Since October 26, 2026, the map displays every miniature and token without a `+n` overflow button. Influence uses one cube per faction and district, numbered **2** or **3** when needed; a single cube is unnumbered. Underlying cube identities and counts are preserved. Displayed components are packed within the region's approximate polygon, with smaller footprints when crowded. This presentation works on both the physical map and schematic grid.
- **Session**: Save/open JSON, activities and optional local demo dice. Emptying is behind a drop-down field. Undo and redo are directly below the board.
- **Fit / Zoom**: Enlarge the entire board within the available width and height, or up to 300% with scrolling/swiping. On desktop, Board Focus hides the sidebar. The schematic view remains available.
- **Campaign setup**: a separate window for copying the app instructions. No built-in official starting position. **Table Settings** contains profiles, resource information, and restrictions.

The click areas are their own approximations of the visible printed districts and Haven spaces. They are not rule boundaries, proven adjacencies, or sensor coordinates. Logical placement remains a zone identifier. In the event of absent artwork or a failed map download, the display falls back to the schematic view. Old sessions use their original profile and versions.

## Miniatures next to Core

Scan-ready miniatures are in a separate strip **to the left of the Core**, with a larger image, full name, and clan or component group. The Core itself only contains the scanning location and the currently offered miniature. The strip uses the available space next to the map; the map remains leading for fitting.

The cards retain their readable size when more miniatures are available. The strip scrolls vertically and shows a search field for name or clan/group from nine available miniatures. There is no fixed number of slots in this UI. Larger screens fit multiple columns. Scroll position, search input, and existing miniature buttons are retained with unchanged updates. An empty strip remains reserved as an invisible space, so that the board does not jump aside during the last scan.

The Core is a proprietary CSS display with a compact angular body, recessed scan tray and understated printing, based on the [hardware image by Teburu/Xplored](https://gamefound.com/en/projects/xplored/teburu-presents-the-bad-karmas/updates/10). No protected product photo is included as an asset. The little light shows our scan availability; this is not a readout of the physical Core LED.

The UI was tested with forty synthetic additional miniatures, including search, scrolling, DOM/scroll position retention, and display cleanup. That proves room for future expansions, no already implemented game data or app/protocol support for those expansions. The existing scan and placement route has been checked separately in the browser.

## Auto fit

The physical map starts with **Auto fit**. The display measures the actual remaining window height after the header, toolbar, app notifications, scan controls, and status line. The card retains its proportions and fits within both width and height. On desktop, the height of the sidebar matches; on smaller screens the sidebar remains below the board.

Window changes, screen switching and changed notification heights automatically lead to a new calculation. Manual zoom remains available; **Auto fit** restores the entire map. This calculation only changes presentation and does not affect board positions, sensor inputs and saves. The linked board page has been checked at 2560×1440, 1920×1080, 1366×768, 1280×720, 768×1024, and 390×844, including additional instructions above the board, zooming, and board focus.

## Room for digital benefits

The official app must ultimately continue to manage rules and campaign, while the virtual table represents the physical components. A future instruction such as “place influence during the city round” no longer needs to be taken over by a player.

The application now reports each successful state change via `subscribe`, after which the UI renders a new projection. This also works if placement comes from other code, without a click or explicit refresh. The observer contract has been tested headless; in the browser a command was executed outside the UI and became immediately visible. The renderer and engine contain no official app or network dependencies.

Still to be implemented for real automation: a reproducibly working communication adapter, interpretation of real app instructions, authority/permission per message, partial placement updates while retaining other pieces, atomic groups and duplicate/outdated messages. Only the observation/presentation route has now been completed; no city round instructions are received or simulated as real app data. The screen therefore says Manual · app not connected.

## Control

`node --test` includes regressions plus checking for forty complete click areas, anchors within the appropriate area, no geometry in exports and observation of external commands, undo/redo and import. Browser control includes actual clicks on all forty map anchors, selection, movement, a full district, token side, campaign setup, JSON recovery, keyboard, zoom/board focus, and fallback without artwork. Screens checked at 2560×1440, 1600×1000, 1366×768, 768×1024 and 390×844. Screenshots and temporary browser tools are only ignored under `work/`.


The linked table has a Core reader and miniature queue in addition to the card. Drag a miniature to the reader and then to the location Milan requests. The first contact does not change any permanent board position. The recovery button under Table menu → Connection & recovery makes temporary entries available again after a crash without erasing the confirmed table setup.


## Dice box as overlay

The Milan view uses four symbol types on ten physical planes: skull (1), empty (2–5), ankh (6–9), and ankh with teeth (10). The Core continues to send values ​​1–10; the UI does not make these four equally likely outcomes and does not calculate game results. See the [official manual, p. 10–11](https://teburu.com/downloads/VtM/VTM_MU_GameManual.pdf) and the [publisher's explanation of the shared Vampire dice](https://gamefound.com/en/projects/xplored/vampire-the-masquerade---palermo-conspiracies/updates/13).

The tank starts without selection. **Dice to roll** explicitly chooses 1–5 dice; individual clicking remains available. **Wake 5 dice** logs all five without sending a throw or changing the selection. The browser test checks each number from one to five separately. The four original black area symbols come from the local artwork package; without that package, a custom symbol fallback remains available. The app determines the digital Hunger color and assesses the throw.

**Dice** opens a dice box above the table. Click on the five d10s to select them; **Roll...dice** sends only that selection to the existing private Core roll route. **Wake 5 dice** registers the dice without sending results or a roll. The sign does not shrink and is retained under the overlay. Closing with Close or Escape does not cancel an already sent throw and does not replay it when reopened.

The d10s animate during an ongoing roll and end with the values ​​from the Core state. The view does not generate random results or change board or campaign rules. The player chooses the number of dice requested by Milan and the moment of rolling, as with a physical dice tray. If there is a missing connection or a closed dice channel, the corresponding actions are disabled. A channel that only allows discovery can wake up, but not send a throw. Reduced movement in the browser disables the rotation animation.

Browser trials with simulated Core responses check selection, wake without roll, exactly one roll request, temporary animation, unchanged Core results, close/reopen, connection loss, and desktop/phone display. The real page is only opened and read during the live check; no game throw is sent on behalf of the player. The LAN board route uses the same passcode and origin control as other board actions.