# Simulated firmware update

The private PC Core has a separate persistent compatibility state for the virtual Core, five virtual dice, and one virtual LED ring. In the local Control Center it says **Simulated firmware → Simulate update · Core + 5 dice + LED ring**. This is an update of our simulation; no official firmware is installed, run or modified. The official app update button and associated bootloader transfer remain separate and are not supported by this patch.

Since October 25, 2026, the target versions are Core **2.32.0** and dice **3.39.0**. These follow the versions actually expected by the unmodified Android Milan app, visible in its own version comparison log. The previous targets 2.31.0 and 3.36.0 followed the filenames of included firmware packages. They turned out to be behind the version check of the app and left both warnings. These are compatibility versions of our behavioral simulation; no official firmware is running and the version numbers do not prove full hardware compatibility.

The old versions remain valid during the simulation. Only after successful completion are the new versions stored atomically. An interrupted simulation or persistent write error does not report a successful update and can be retried. Updating again to the same target version will not change the status. The Control Center shows the reported and desired versions, the progress and the explicit simulation label. When a previously completed simulation has older targets, it now shows **New simulation available** and the update button remains available.

The Core version is included in the normal assignment answers; the five dice versions in their discovery and status messages. Reconnection, close session and Core restart do not erase these versions. Reconnect Milan to also refresh the Core version cached in the app. The update does not choose a roll outcome, move a miniature, or change the official save or virtual board setup.

## Verification

On October 25, all 24 private Core regression scenarios pass, including a new trial for upgrading from a previously completed simulation with old targets. The virtual Bluetooth regression with all forty contacts, five dice and group selections also succeeds. The previous independent SDK decoder trial read Core 2.31 and all five dice 3.36; that historical test is not a new decoder verification for current purposes.

The browser trial checks errors, retries, obsolete target notification, persistently shown versions, disabling a current completed update, and mobile layout. The public test suite has 69 passed tests.

The local simulation has been run and the helper has been reloaded. Afterwards, with the unchanged Android Milan app, 1.0.9 was confirmed via the real BLE route: Core 2.32.0 corresponds to the expected 2.32.0 and all five dice report 3.39.0. Both setup screens show **Continue**, with no firmware update warning or FW arrows at the dice. Only waking has been used; no roll sent and no campaign opened. This acceptance proves the disappearance of the version warnings, no full game compatibility or implementation of official firmware.

Implementation, raw device observations, identities and decoder contents remain ignored under `private/`. The public demo will not have any SDK or Bluetooth dependencies.


## LED ring — October 28, 2026

The LED ring is now part of the same persistent firmware simulation, with target version **1.15.0**. This version has been checked against the version checker of the unmodified Teburu app 1.2.0. Older local status files without a ring version remain readable and require a new simulation; the previously set Core and Dice versions are retained. Only successful completion will save the new ring version. Abort or a writing error reports no successful update.

The ring now also reports a stable simulated battery value via the same calculation as the dice. This is not a physical battery measurement. The hardware version remains unknown; no official ring firmware is installed or running.

The change is active. After reconnecting to the real Android tablet, the unmodified Teburu app showed **1.15.0**, **Firmware up to date**, **46%** and **3852 mV**, without the previous warning of available firmware or low battery. The official update button has not been used. The campaign and board positions have not changed.

Verification: All 26 private Core regression scenarios pass, including old state file migration, abort, write error, restart, and stable ring telemetry. The Bluetooth virtual test and the Control Center browser test also pass. This acceptance confirms version and battery display; complete ring animations can still be tested separately. Raw observations and implementation remain private.


## Timeout handling — October 30, 2026

The transport now keeps a codec command and its response serialized when the caller disconnects or its HTTP request times out. Previously, cancelling the five-second response read allowed a late response to be consumed by a subsequent command. The firmware HTTP request has a separate thirty-second deadline; the codec exchange continues safely after an HTTP timeout. Progress and errors now appear beside the simulation button, including the instruction to reconnect Milan after completion.

Validation: a headless regression cancels a waiting caller and verifies that the next command receives its own response; nine targeted tests passed. An isolated Edge check exercised the simulation button and inline reconnect feedback. No official firmware update was performed. These source fixes require updating the packaged runtime before taking effect there.
