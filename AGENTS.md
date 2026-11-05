# Working on this project

Read README.md, docs/PLAN.md, docs/ARCHITECTUUR.md, docs/BESLUITEN.md and docs/ONDERZOEK.md before expanding.
Communicate in Dutch. Maintain documentation in English. Keep the local demo working without external dependencies.
The end goal is to use the unmodified official game app without any physical game components. Sandbox is an intermediate step, not a replacement for that goal. Read docs/TEBURU-DEEPSEARCH.md for current source findings.
Run `node --test` on board logic changes; check the UI for visible changes.
Read docs/CONTRACTEN.md for the implemented first cross-section. Physical component inventory and Milan rules remain open. Keep legacy/ as reference.
Separate engine, rules, game data, UI and presentation. Milan is a game module; the engine must not depend on it.
Engine and rules work headless; 2D and later 3D use the same commands and state. No graphical objects in domain logic.
Sandbox is the current only mode; automated rules are not yet available. App/hardware integration remains an optional adapter and standalone research track.
Distinguish temporary sensor contacts from permanent playing position. The local virtual core is an explicit behavioral simulation, not an RFID/BLE emulator. The official SDK route exists, but support/permission for existing apps is unproven; do not publish confidential SDK content.
All events in src/model.js are project-defined domain events, not Teburu protocol.
Never present app compatibility or emulation as proven without reproducible hardware testing.
No security bypass, cloned RFID identities, firmware patches or protected assets.
Distribution exception confirmed by the project owner on October 29, 2026: selected artwork in resources/milan-artwork.json.gz and our derived integration runtime may be published on GitHub. The SDK itself, SDK libraries, documentation and examples remain excluded. Machine data, saved game states and identifiers remain under private/. See docs/INSTALLATION.md.
Store any observations of your own hardware and identifiers exclusively under private/ (ignored).
Do not modify or install anything on the official app or hardware without specific instructions.
