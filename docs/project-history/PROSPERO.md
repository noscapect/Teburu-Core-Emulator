# Prospero next to the table

The linked table shows **Prospero, Prince of Milan** on his throne to the right of the physical map, with a clearly visible LED base and four separate light segments. This is the miniature accessory. This does not add or unlock the standalone story campaign **Prospero's Legacy** and its additional game features.

The [miniature publisher's page](https://pegasus.de/Teburu-Vampire-The-Masquerade-Milan-Uprising-Prospero-Prince-of-Milan-Miniature/34037G) confirms compatibility with the LED ring. [Xplored describes four LED lights](https://teburu.zendesk.com/hc/en-us/articles/25458659932827-Troubleshooting-your-Teburu-LED-Ring). Prospero is a separate miniature next to the map, not an eighth playable base character. Its view does not add RFID identity or campaign input or modify existing sessions.

The local image comes from the already installed official app. The original instruction image contains multiple views; CSS only shows the right view of the mounted miniature. The source document is not modified. The images and extraction script remain ignored under `private/`. Without local artwork, the name, base and four light segments remain visible.

## Light mode

Without a light command received, the table shows a neutral base with **LED ring · awaiting Milan**. No health, power, threat or color meanings are invented. The optional private adapter can pass supported broadcast commands for four RGB colors, one RGB/palette light, and power off. Orders to foreign addresses, invalid and unsupported orders will not be attributed to Prospero. Only the last static colors received are displayed; requested hardware animations are not yet simulated. Disconnecting the core connection makes the current light state unknown again.

Since October 25, 2026, the private PC Core has also reported one virtual LED ring to Milan. The previous implementation only handled light output; as a result, the app remained set to **Not connected**, even though Prospero was already visible on our table. The missing device notification has now been added. The ring has its own persistent, locally generated simulation identity; no official hardware identity is copied and Prospero is not given a playable character or RFID profile.

The notification is sent when the app opens the ring channel for play or search. As long as that channel is active, periodic presence notifications will follow; closing or disconnecting stops that route. The ring notification does not change any sensor contact, board position, character or dice roll. Missing hardware telemetry remains unknown; no official ring firmware is installed or running.

In addition to broadcasts, supported RGB/single LED commands targeting our own ring identity are attributed to this accessory. Commands to other addresses remain ignored. The stand is also visible via the existing shared board link. A previously received elimination order from Milan put all four colors on black. Full hardware animations are left out of the current output projection.

After loading the new PC Core, the user saw **Connected** on the Prospero screen on October 25 on the real Android tablet. This is user confirmation of recognition with the unchanged app. It doesn't prove a full color/animation sequence during a campaign.

## Verification

The public tests check the accessory without a playable identity and only accept four full perceived RGB values. The existing browser trial checks original artwork, the four segments, color updates, neutral status, keeping the largest screen portion for the map, three smaller screen sizes, and the fallback without artwork.

The private Core regression suite now has 25 successful scenarios. The new ring test checks session/radio conditions, close/reset and maintenance of the remaining hardware condition. A separate trial with the original SDK decoder recognizes one ring and two status messages without duplicate discovery. The virtual Bluetooth test verifies actual delivery of the ring message via the same characteristic as the dice. The parser test also checks output directed to its own identity and ignoring foreign addresses. These software trials remain distinct from the individual user confirmation on Android. Technical messages, decoder source and synthetic identities remain ignored exclusively under `private/`.


## Firmware and battery - October 28, 2026

The virtual ring now reports persistently stored compatibility version 1.15.0 and a stable simulated battery value in the same way as the dice. Checked live in the unmodified Teburu app 1.2.0: Firmware up to date, 46%, 3852 mV. The previous zero values ​​and both warnings have been resolved. This replaces the previously unknown battery telemetry for our simulation; it is not a measurement of physical hardware. See [firmware simulation](../FIRMWARE-SIMULATION.md).

## LED segment orientation — October 28, 2026

The board view now follows the same orientation as the top view view in Teburu: top left light 3, top right light 4, bottom right light 1 and bottom left light 2. The previous view was rotated 180 degrees. Only the presentation has been adjusted; received colors and light identities are retained. An isolated browser control with four different colors confirms this placement. The more extensive existing Prospero browser trial has not been completed; he kept waiting. The correction requires refreshing the board page.