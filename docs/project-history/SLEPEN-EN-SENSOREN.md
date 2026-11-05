# Dragging miniatures and sensor input

Press and hold the left mouse button on a miniature, drag to a highlighted location box and release. The same controls work from the stock and the location list. Clicking without dragging continues to select. Escape, losing window focus, or releasing outside the board cancels the drag action. Releasing at the original location does not send a new move.

The physical map and grid use the same command. Even with zoom, all miniatures remain accessible. The retail inventory includes seven player characters, two allies and two ghouls; all eleven can be dragged into the standalone sandbox. This does not enforce any Milan game rules.

## Linked table

The private adapter checks which character the official app is requesting before sensor input. A running move blocks a second entry. During the sunrise phase, only Haven spaces are allowed. Unknown screens, a lost connection or busy temporary contacts provide a notification instead of a new move.

Once released, the adapter sends and releases one temporary contact at the destination. The screen shows the confirmed board position as long as the app processes the input. The new position is only recorded after a recognizable app confirmation. An error or missing confirmation leaves the saved position intact; in that case, also check the tablet screen before trying again. The app may have already processed input while feedback is still missing.

A sent move is therefore saved locally as long as confirmation is missing, even after an adapter restart. A later recognizable app confirmation updates the table without resending the sensor contact. Until then, the next move is blocked. For the first user trial, the user reported that Milan recorded Simona's placement in Haven 2L, leaving the table behind; that position has been restored based on this confirmation. The adaptive processing of late confirmations was tested separately with simulated observations.

The transition from the last Haven character to the day phase has also been added as a confirmation route. This transition was originally missed, leaving Latebra on the board. See [research and automatic influence transfer](../DAGFASE-AUTOMATISERING.md).

## Verified on October 23, 2026

Correction on October 24: An old, incomplete scan registration should not hide a placed miniature on the map during the day phase. Only the character scan and associated setup steps use that temporary presentation. During **Place your miniature in a Haven room**, the pawn remains visible at its confirmed city position and can be dragged directly to a Haven space. It will then not be in the miniature shelf at the same time. The browser regression checks this with stale scan metadata, one drag request from QT8 to Haven 1L, and a mock app confirmation; no actual game action has been performed.

| Control | Result and limit |
| --- | --- |
| Forty sensor destinations | Complete, unique mapping checked; no missing or duplicate contacts |
| Independent SDK Decoding | All forty individually on/off, all forty together and every single release successful; without physical radio or official app |
| Virtual Bluetooth Transport | All forty contacts and releases received via two software controllers; no physical tablet |
| Motion adapter | 440 combinations of eleven miniatures and forty destinations checked with simulated app observations; including denials, errors and release |
| Browser controls | Real mouse interaction: stock, board, grid, physical map, zoom, all eleven miniatures, cancel and right mouse button |
| Linked browser | One request per drag, wait for confirmation, reject inactive character, and maintain position on error; API mocked |
| Official Milan app on Android | Previously selected city destinations and a Haven contact confirmed; user confirms that the new tow control registers a Haven contact in Milan. The first trial showed missing board feedback, after which the position was restored |

These checks do not prove a full campaign, all forty destinations on the real tablet, or moving allies and ghouls in each app phase. The private recognition of their placement instructions still needs to be tested against real app screens. The public demo continues to work without an adapter and external packages.