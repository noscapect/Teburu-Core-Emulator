# Dragging and confirming miniatures

Hold the left mouse button on a miniature, drag it to a location and release. This works from stock, the board and the location list. Selecting a component and clicking a destination also works. Escape, losing window focus or dropping outside the board cancels dragging. Dropping on the same location sends no new move.

## Standalone sandbox

Placements are manual. The table checks command structure but does not execute Milan rules. Use Session to export and later restore the table. Undo/redo retains up to one hundred local operations.

## Linked table

Follow Milan's request. Only the requested miniature and supported destinations are available. During recognized Sunrise placement, only Haven rooms are allowed.

After release, the requested destination appears with a dashed amber outline and waiting badge. This is provisional: the saved position remains the last confirmed position until Milan confirms the move. Temporary sensor contact is released after input; this does not remove a miniature from the board.

A pending move blocks duplicate input. Later recognizable confirmation can complete it without sending another contact. After an error or long wait, check the tablet first: Milan may already have processed the input. A timeout does not prove rejection.

Supported confirmation comes from location instructions, completed-movement messages and two matching fresh map observations. Covered or missing portraits do not prove removal. Unknown screens and lost connections can prevent automatic confirmation.

After Milan restarts, use [input recovery](SAVEGAME-PERSONAGES.md) if needed. [Separate placement instructions](ALLIES-EN-GHOULS.md) apply to allies and ghouls. Not every app phase or expansion has been validated.
