# Synchronization without Codex

## Current start and stop route — October 29, 2026

For the published runtime, use `Start-TCE.cmd`; the installed candidate creates a shortcut **Teburu Core Emulator (TCE)**. Follow the Windows/helper preparation and tablet checking in [INSTALLATION.md](INSTALLATION.md). The new **Stop Core** closes its own helper and returns the radio transfer recorded by our session to Windows. **Quit app and return Bluetooth to Windows** also closes both web services. After a crash, recovery is explicit; just closing the browser doesn't stop the services. LAN sharing is not automatically started by the new launcher; see [share board](BORD-DELEN.md).

The description below documents the older, separately provisioned private PC launchers and their trials from October 23–28. Their shortcuts and old stop behavior are not instructions for a fresh clone or the new candidate. The necessary runtime code is now in `integration/runtime/`, while machine data and observations remain local.

The link carries out the recognition and board commands itself in local program code. No model, chat, AI API, or manual Codex command is required to process a supported board instruction. The official Milan app will continue to determine the outcome.

The private PC adapter runs its own background task. It reads the authorized app screen, checks the instructions and saves confirmed changes. A browser displays the saved table; closing the browser does not stop synchronization. Each reading cycle is completed before the next one begins. A read error is logged and the job retries on the next cycle. An unknown screen remains an unknown screen: the task makes no changes.

## Historical: start on the configured private PC

Double-click **Milan Control Center** on the desktop. The launcher will start missing board services and open a local launch window at `http://127.0.0.1:5180/`. There you will find **Start Core**, **Stop Core**, **Open tabletop** and the current remote board address with access code and copy buttons. The connection status is updated automatically. The code is read from the running board server and is not permanently installed.

**Milan Gaming Table** continues to open the board directly. The local launchers are also listed under `private/integration/Start-Milan-Control.cmd` and `private/integration/Start-Speeltafel.cmd`. Services already running are reused.

The launcher compares process paths after normalizing Windows and Unix delimiters. A previously started own service is therefore also recognized upon repeated double-clicking. Startup errors are logged and displayed as a notification on normal startup, so a hidden PowerShell window no longer hides a silent error. This restart check was run twice using the same classic Windows PowerShell that uses the desktop shortcut; the three service processes remained the same.

**Start Core** starts the local Core service if necessary, starts the provisioned WSL environment and transfers the already shared, specifically controlled Bluetooth radio. Then the Core starts transmitting. Multiple start requests share the same ongoing preparation. An active Core is reused. The initial installation and one-off sharing of an unprepared radio require separate setup; the button does not perform installation, computer name change, or automatic administrator elevation.

Fixed October 26: After losing USB transfer, the HTTP service could remain reachable while the Bluetooth radio was once again controlled solely by Windows. The start function then incorrectly skipped all preparation. With a stopped Core, **Start Core** now checks WSL and radio transmission again, even if the service is already listening. The preparation script will only return to an existing service after this check. An already active Core is still reused without reconnection. The private start tests also check this combination of a reachable, stopped service and a reconnectable radio. The transfer has been restored on the configured PC and the Core has started advertising **Started** again.

Leave Milan open on the tablet and keep the authorized USB connection connected. For movements from the board, the virtual Bluetooth core must be connected. **Stop Core** stops the connection and broadcast, but does not close the board or automatically return the radio to Windows. Technical operation remains available via **Technical diagnostics**. The launch screen and access code are only available on the host PC; they are not shared via the remote board relay.

The link will continue to spin after the launcher and Codex are closed. The PC must remain on. After a PC restart, restart the launcher; this is not an auto-started Windows service. Technical status and logs remain ignored locally under `private/`.

## Verified on October 23, 2026

- A separate Node process with the real OCR reader and feedback adapter processed the recorded official Android day phase, without any browser or HTTP requests. An isolated test session automatically received the three expected final influence counts. The real campaign remained unchanged.
- The production adapter is started separately from the interactive tool terminal via the launcher. After terminating the launcher, the background task continued to run cycles. Restarting reuses the same process.
- Tests check that cycles do not overlap, that the job continues after an error, and that stopping waits for a running cycle. With the Sunset expansion on October 24, the entire project suite passes 46 tests. An additional standalone replay trial verifies QT8 control removal without a browser or changes to the real campaign.

The standalone implementation does not automatically increase recognition coverage. For current limits, including hidden instructions and control takeovers, see [day phase automation](DAGFASE-AUTOMATISERING.md).

## Checking the Control Center on October 24, 2026

The real local page shows the active Core and the current data from the remote board server. Browser control includes desktop, phone width, copy actions, connection status and simulated start/stop controls. An actual repeat start request reused the connected Core without interrupting the connection. Preparation after a missing service, concurrent requests and retries after an error have also been checked with separate tests of the start function. The cold radio transmission was not performed again in this GUI trial while Milan was connected. The public suite passes with 49 tests; it also checks that the remote relay does not provide access to the start window or the associated API.


After an app crash, the user can click on the board **App restarted? Select Recover input**, or in the Control Center **Reset registrations / recover input**. The Android adapter also recognizes a modified app process instance. Registration progress is advisory; the Core reader status determines whether a scan can be offered. See [scan recovery](games/milan-uprising/SAVEGAME-PERSONAGES.md).


## Faster feedback when scanning and placing

The background adapter independently records images one after the other. A board status request reads the last processed snapshot and does not wait for a new screenshot, OCR, or save profile readout. The browser checks the status every 250 ms; concurrent requests share one running read. Unmodified snapshots do not replace the draggable DOM elements. Confirmed board positions are displayed before the individual tile reading is completed.

On the current tablet, the original PNG capture took approximately 2.9–3.1 seconds, plus approximately 0.7 seconds of recognition per image. The private adapter can now retrieve lossless compressed raw pixels and recognize them directly, with PNG as a fallback for unsupported devices. Warm test measurements amounted to approximately 1.3 seconds for recording and 0.5 seconds for recognition; a cold first recognition may take longer. The current status endpoint responded locally in 4–30 ms. The latter only measures the retrieval of the processed state, not the time from a game action in Milan.

Two matching observations remain required where they were previously needed as confirmation. A quick temporary scan presentation is not a confirmed placement. After a scan, any previously initiated image processing is discarded, so that an old image is not assigned to the newly scanned character. The whole thing remains dependent on USB, app animations and recognisability; direct full synchronization is not claimed.

Verification includes equal OCR output for the same pixels via the old PNG route and the new route, serialized slow browser requests, keeping draggables unchanged, and displaying confirmed placements without waiting for slow tile data. The browser trial uses simulated app responses; the speed measurements use the connected tablet without sending game actions.