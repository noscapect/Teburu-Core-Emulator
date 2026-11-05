# Location tiles and Haven rooms

## Haven rooms

The ten Haven rooms have fixed types and effects. These are immediately available without screen recognition or manual bonus entry.

| Row from top | Left | Right |
| --- | --- | --- |
| 1 | Personal room 1 | Personal room 2 |
| 2 | Personal room 3 | Personal room 4 |
| 3 | Living Room | Meditation Room |
| 4 | Office | Gym |
| 5 | Library | Gallery |

Each room shows the registered bonus on the board. Select the room to view both sides. Use **Record upgraded side**, **Record standard side** or **Save room side** to record the purchased/upgraded side. Without registration the default side is shown. Available upgraded artwork follows the chosen side.

| Room | Standard side | Upgraded/purchased |
| --- | --- | --- |
| Personal room | +1 Willpower | +2 Willpower |
| Meditation Room | Spend 2 Willpower: +2 XP or -3 Hunger | Spend 1 Willpower: +2 XP or -3 Hunger |
| Living Room | Spend 3 Resources: +1 AP next turn | Spend 3 Resources: all characters +1 AP next turn |
| Office | Not purchased | Spend 2 Resources: -2 Suspicion |
| Gym | Not purchased | Spend 1 Willpower: +1 Physical next night |
| Library | Not purchased | Spend 1 Willpower: +1 Mental next night |
| Gallery | Not purchased | Spend 1 Willpower: +1 Social next night |

These controls record the table state. Purchases, payments, room actions, recipients and effect duration are handled in Milan. A Haven room is separate from the house-shaped Haven tile in a city district.

## City tiles

Select a district and open **Location → Board tiles** for the symbol, explanation and registered side. **Flip tile** switches between back and symbol side. Use **Copy or correct a tile** to copy the visible position in Milan. This also works on the shared board.

The fixed bonus type of all thirty districts is known. Visibility depends on the campaign and must be observed or recorded. Special location tiles are not yet fully cataloged or automatically recognized. Unknown states remain unconfirmed. The city board displays symbols; explanations are in the location panel.

A location tile is a reversible insert. Attribute icons and faction control are separate board data. Flipping a tile in TCE does not perform a corresponding action in Milan.

## Automatic synchronization during linked play

**Scenario setup → Board tiles** can adopt supported visible symbols and backs after two matching observations. Missing or covered icons do not automatically count as the back. Not every tile or location is reliably recognized; compare the table with Milan and correct where necessary.

Supported **[bonus] Location Bonus revealed in [district]** notifications can capture a revealed bonus. Unknown types or districts are not guessed. A bonus reveal does not move a Haven or buy a room.

The next step **Components setup** preserves tiles and registered room sides. The explicit command **Clear board & resync** clears that.

## Save

Sandbox exports contain the tile and room side data. Import checks this before replacing the table. Tiles do not have their own undo/redo; rotate or correct the side again to reset a change.

During linked play, data is stored on the host PC and all board pages share the same state. A stale concurrent change is rejected and refreshed. Confirm game progress with **Continue** in Milan; a tile correction in TCE sends no sensor contact.
