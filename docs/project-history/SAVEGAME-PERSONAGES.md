# Scan and restore characters

The linked table shows the last read saved group as a resource. Registration ticks, board positions and OCR recognition should not block a new RFID scan. The Core must be connected and the official app must have the RFID reader enabled. All known playable miniatures can then be offered again; the official app rates the scan.

For a new game or an unconfirmed save group, all seven basic characters will be in the miniatures lane. A remaining group of four from a previous session does not limit that choice. With a confirmed loaded save, the strip shows the members of that group that still need to be scanned. The choice comes from the component data and has no fixed limit of four.

A placement confirmed by Milan removes the miniature from the available lane, even without a confirmed save group. This registration is retained after refreshing and server restart. A new setup or input recovery makes the miniatures available again; You can also scan again via **Pieces → Scan a miniature**. Scanning alone does not constitute a confirmed placement.

## Physical action on the virtual board

Since October 25, the miniature strip on the left is only visible with a current scan request: characters with character selection, allies/ghouls with a corresponding request. Once the choice is completed or the game starts, the unused stock disappears from this lane, even if the save group is not yet readable. During placement, only the miniature you just read remains visible on the Core. An empty strip does not take up any space next to the board. The entire stock remains accessible via Pieces/Stock. This display choice does not change registration or board position.

Drag a miniature from the queue next to the board into the Core reader. This is a temporary reader contact, not a permanent gaming position. Then drag the character you read to the location Milan points to. The adapter only saves that position after a recognized app confirmation. A character may be given the same destination again: an old board position does not replace a new sensor contact. Clicking on a scan button remains an accessible alternative.

The saved group comes from profile metadata that the private Android adapter reads via the authorized USB connection. The official app and save files will not be changed. If the metadata is unreadable, the last known group remains visible in an advisory manner; an enabled Core reader remains usable. Unknown file formats are not interpreted based on assumptions.

## After a crash or restart

The background adapter compares the Android app process instance with the previous observation. In another instance, temporal registration progress, scanning context, and an as yet unconfirmed movement are forgotten. The movement is saved as aborted for examination and never automatically resent. A restart of just our server will preserve the known app instance.

The sign says **App restarted? Recover input**. The Control Center offers **Reset registrations / recover input**. This control is also available if screen recognition or save profile reading fails. She temporarily clears progress and releases active sensor contacts without confirming moves or choosing new game actions. Confirmed board positions, tokens and official campaign files are retained. So this is not a command to delete the entire campaign. After recovery, follow the current screen in Milan and scan again when the reader is active.

If Android is not reachable via USB, the adapter cannot detect a process restart. Then use the recovery button as soon as the Core connection is available again. Short simultaneous sensor actions remain serialized to avoid overlapping contacts.

## Authentication and boundaries

The isolated recovery trial checks a modified process instance, aborted wait movement, retained session, repeat scanning, and releasing active contacts only. Browser proofs check dragging to the reader, temporary presentation, placement confirmation, error handling and screen sizes. These are simulation tests; they do not replace real acceptance by Milan. Previously, placements in Haven 2L and QT8 were confirmed by the real app. A full campaign import is left out of this limited readout.

The public demo continues to work without external dependencies; protocol data and raw device observations remain under private/.


## Scan allies and ghouls

In addition to the seven characters, the connected PC Core also supports the four miniatures from our retail stock: **Carabinieri Officer**, **Reporter**, **Con Artist** and **Fixer**. They have separate scan buttons labeled Ally or Ghoul. When Milan asks for an Ally/Ghoul, these four miniatures are next to the board ready to drag to the Core reader. Scanning does not change their permanent board position. The official app determines which miniature is valid in the current situation; select the right part yourself.

The private adapter recognizes the visible request to scan an Ally/Ghoul and assigns a subsequent placement input to the miniature presented, not to the player name at the bottom of that screen. All forty sensor destinations use the existing placement route with app confirmation. An unrecognized confirmation remains unacknowledged; the adapter does not invent placement.

The eleven scan selections were tested individually for their semantic data from local app metadata. Only self-generated virtual identities are used for this. The browser trial checks the four buttons, queuing, dragging to the reader, and board position retention. The updated Core is reconnected to the tablet and the reader is active. Acceptance of a concrete ally/ghoul and subsequent placement must still be confirmed during actual play; the tests do not choose an element on behalf of the player.