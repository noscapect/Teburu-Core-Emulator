# Restore from the regular city map

A full reset erases the physical components of the virtual table. The previous card adapter then only restored influence. As a result, control tokens, miniatures and Investigation tokens were missing, even when they were still visible in Milan. The reset function was therefore insufficient as a complete recovery tool.

The card adapter now restores **positively recognized control tokens** in addition to influence. Two matching observations are required. An unreadable or covered control icon is not interpreted as an empty location. The rules mapping preserves the individual influence cubes, characters, and other tokens so that the individual syncs don't keep overwriting each other.

An optional private image reader also recognizes visible Investigation icons and sufficiently recognizable character portraits. It checks the map alignment against the locally available original map image and translates only unambiguous image positions to districts. Two consecutive identical results are required. New scans, restores, and a changed app instance will invalidate older results. Only missing character positions are filled in; a confirmed move is not overwritten by an older image result. Positive research observations add a missing marker without duplicates or removing other markers.

This image reader runs in the background, separate from the fast sensor input and without Codex or an open browser. The research uses only private local image processing tools and images; the public demo continues to work without external dependencies. The additional image reading starts at most once every five seconds and may take some time after a reset for two matching images.

## Boundaries

Stacked miniatures can cover each other's portrait. Unrecognizable characters, Restricted tokens, special tiles, and other story markers are not being restored out of conjecture or from an old campaign. The message **Map · partial recovery** therefore continues to explicitly refer to partial recovery. A later recognized location instruction or placement confirmation can still capture a missing miniature position. This is not a full save import or proof of a complete emulated game.

## Verification

The recording showing this error contains 18 influence cubes, 21 recognizable control tokens, and a Washington Investigation token. The isolated recovery trial starts with an empty table and reconstructs the 21 control tokens, the Investigation token and the recognizable Orlando portrait at QT8. It controls repeat, clear and retention of tokens when an icon is temporarily unreadable. The public tests additionally check valid control changes, retention of other components, repeatability, and atomic rejection of invalid observations. The public suite has 69 successful tests.