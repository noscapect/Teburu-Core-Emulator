# Validation

## Artwork-free release packaging — November 5, 2026

Release staging now excludes game artwork by default. The release builder rejects `includeArtwork:true`, records `artworkIncluded:false` in release metadata and rejects game artwork archives in the final file tree. The Actions workflow no longer offers artwork inclusion. Regression coverage checks default staging without an explicit flag and refusal to bundle artwork. The full public suite passes **172 tests** on Windows with Node 26.7.0 and bundled Node 22.23.4.

The original artwork-containing Windows ZIP and checksum were removed from the now-public `v0.1.0` release for replacement. Module definitions, acquisition recipes and extraction tools remain available so Add game can obtain artwork separately. Earlier private-release and bundled-artwork observations below describe the original candidate.

## First pre-release checks — November 5, 2026

All **171 public tests** pass on Windows with Node 26.7.0 and the packaged Node 22.23.4. The additional regression verifies that final release cleanup removes nested `bin`, `obj` and `__pycache__` directories created after source staging, preserves published helpers and leaves adjacent directories outside the package untouched.

The initial ZIP inspection found generated .NET restore caches containing local paths. That candidate was rejected before upload. The builder removes such caches immediately before generating the file manifest and rejects excluded paths encountered during hashing. Inspection also showed that external build tooling could recreate caches during compression. ZIP creation now includes only manifest-listed files plus the manifest itself; a second regression creates unlisted files after hashing and verifies they cannot enter the ZIP. Software checks do not establish clean-machine physical acceptance or full-campaign support; `v0.1.0` is a private pre-release.

## Current public software audit — November 5, 2026

On Windows with Node 26.7.0, all **169 public tests** pass, with no errors, skipped, or canceled tests. Command: `node --test test/*.test.mjs tests/*.test.js`. `npm test` uses the same selection; both CI workflows now use `npm test`. Only these two public suites count. A bare `node --test` can also discover temporary copies under ignored workspaces.

This check does not repeat browser, package, Node 22, or physical app/hardware acceptance. Limited interaction with the unmodified official app has been previously demonstrated; full campaign compatibility and installation on a clean second physical machine remain open. The dated records below retain their original numbers and limits of evidence.

## Independent review and clean feed text — October 30, 2026

All 150 public tests pass with Node 26 and bundled Node 22. The regression runs through the real adapter with a valid control change next to an unreadable influence text in the same district: only the control is asserted; only two later readable images provide the influence and bonus. Both OCR engines recognize the included CityLife notifications after excluding colored icons from the feed text. The current thirty readable influence positions and all positively recognized control colors correspond to the board; there are no current synchronization issues. The local and LAN browser control confirms Anarch control and Media Office. Milan stayed connected. See [the scope and cause](PHASE-SYNC.md#citylife-isolate-control-and-exclude-colored-ocr-icons--30-october-2026).

## NPC move with explicit origin - October 30, 2026

All 147 public tests pass with Node 26 and the bundled Node 22. The recorded message for Agnese Washington → Duomo was processed by the real adapter in an isolated replay after two observations, retaining other miniatures and a Restricted token. Two new live images confirmed the same move; the browser shows Agnese in Duomo. Milan remained connected and no app or sensor input was sent. The parser tests both completed travel forms, aborted/unknown routes and the suppression of older notifications. See [placement synchronization](PLACEMENT-SYNCHRONIZATION.md#agnese-moved-from-washington-to-duomo--october-30-2026).

## Tile retention during follow-up setup — October 30, 2026

All 144 public tests pass with Node 26 and the bundled Node 22. The new regression goes through the real adapter from Board tiles to Components setup: tile position and room upgrades remain identical even after repeated component observation; explicit clearing continues to clear everything. The live missing tiles were recovered from the exact auto-reset backup without changing the 63 placed items. Local and LAN browser check confirms both symbols after Milan has already gone to companion placement. See [the transition correction](project-history/LOCATION-TILES.md#preserve-tiles-through-the-next-setup-step).

## Location tiles after resume - October 30, 2026

- All 143 public tests pass with Node 26 and the bundled Node 22. New tests check the entire thirty-district bonus inventory, two independent observations, generation boundaries, rejecting regular cards/wrong geometry/duplicate tiles, no back on just a missing icon, room upgrade retention, and idempotency.
- The real adapter chain is isolated with a recorded setup image repeated: the first image does not apply tiling; the second confirms 29 locations. Washington automatically remains unconfirmed and has been visually checked and copied separately for the current setup. Special illustrations other than Haven are not yet automatically recognized.
- Browser check on localhost and the LAN board link confirms Haven on QT8, Underground on Portello, explanation under Location and only symbols on the city board. The connection with Milan remained active; no app, scan or sensor input was sent. See [location tiles](games/milan-uprising/LOCATION-TILES.md).

## Included text recognition and actual setup fix - October 30, 2026

- Start Core follow-up check: A stopped WSL distribution is now kept running with its own temporary process before USB mounting. The targeted eight startup/lifecycle/installer tests pass. The corrected local start reached `running:true` and then `connected:true`; the official app has not been modified. This proves the current connection, not full campaign support.

- All 139 public tests pass with Node 26 and the bundled Node 22. The setup no longer installs a Windows OCR language pack. Missing text recognition does not block basic connection preparation and is shown separately as missing automatic synchronization. Model download errors and incorrect SHA-256 are rejected at build time.
- The included recognizer has been force tested as `bundled-tesseract` with real recognition of `NIGHT 2 DAY`, plus an included 2560×1600 Milan map with `android-city-v1` geometry recognized. This does not prove full campaign recognition or equivalent accuracy for every screen.
- The Windows test suite is built without artwork and starts with limited PATH and no development runtimes; the OCR smoke test now requires truly successful portable recognition. The new recognizer is also loaded into the existing local installation without available Windows English OCR. Google's stable Android tools download and explicit `/usr/sbin/useradd` path were checked during actual helper preparation; this preparation is completed with the non-root helper account. No Bluetooth transfer initiated and no official app changed.
- The real local setup API reports `completed`, `ready:true` and `textRecognitionReady:true`. A browser check confirms the completion message, hidden progress indicator and a separate explanation for simulated missing OCR, without page errors. Full physical acceptance on another clean PC remains open.

## Automatic PC Preparation — October 29, 2026

- The public suite passes with Node 26 and the bundled Node 22: **135 tests**, zero errors. Nine new orchestration tests check one start for the entire sequence, skipping existing parts, explicit permission, restart/Continue, adapter selection, no automatic replacement of a stored radio, UAC cancellation, helper errors/retry, and no installation by health check only. Two additional helper tests check Android tool reuse after a Linux error, saving the non-root helper account, and stopping before downloads when OCR or the review package is missing.
- A browser trial uses the real setup orchestration with fake Windows installers. One primary installation action executes the sequence; one-time conditions are saved for Continue/retry. Tablet control is done automatically. Reboot, two adapters, network failure/retry and desktop/390-pixel mobile were checked without page errors or horizontal overflow. Technical controls are closed by default under Advanced/More options.
- The modified PowerShell scripts have been syntactically checked. **No actual Windows/Linux installations, account changes, USB transfers, or tablet actions** were performed on the development machine during this verification. Initial installation on a clean Windows machine with real UAC, Debian initialization and reboot remains a separate acceptance trial. See [automatic setup](AUTOMATIC-SETUP.md).

## TCE modules and automatic artwork installation — October 29, 2026

- The entire public suite passes with Node 26 and the bundled Node 22: **124 tests**, zero errors. New module trials check two simultaneously enabled games, separate caches/archives, disabling and archive loss without affecting the other module, rejecting artwork for the wrong game, and migrating from the previous installation save. Background acquisition, double-click, error/retry, download integrity and switching only after successful old cleanup have been tested in isolation.
- The shared engine, server and Core/WSL transport do not have imports of Milan code or Milan profiles. The shared .NET codec builds with its own namespace and reads miniature semantics from the selected module catalog. The original SDK remains excluded.
- The official Windows 1.0.9 ZIP has actually been downloaded again; size and the captured SHA-256 match. The real extraction route exports **all 156 images**, including the two Prospero-Sprites and Haven images. The resulting catalog and all 156 PNG routes return HTTP 200. The Windows game is not installed or started. The temporarily unzipped client files and the downloaded ZIP are cleaned up after success; if extraction failed, the verified ZIP could be reused for retry.
- The actual extracted artwork opens the forty-zone Milan table on desktop and 390-pixel mobile without page errors or horizontal overflow. A separate browser trial with a synthetic second module confirms multiple enabled maps, individual disabling, and archive loss, while the other module remains available. The synthetic profile is test material and will not be published as a supported game.
- An isolated source copy starts the TCE library without a game adapter. Only **Connect Android** prepares the shared infrastructure and Milan adapter and starts the game service; opening the same adapter reuses this instance. The linked HTML points to the correct board client and the moved screens/styles load. No tablet or radio controlled.
- A local Windows review pack without artwork includes Python/UnityPy with eleven pinned compatible wheels, Node and rebuilt native .NET helpers. The runtimes start in the smoke test without development runtime paths. A clean Windows install with physical tablet/radio and full campaign adoption remain separate open points. No GitHub release workflow performed.
- The per-user installer has also been run on the modular review package to an isolated working directory without shortcuts. The installed bundled Node starts the library and Milan adapter without development runtime paths; the compiled Core reads the module miniatures. The Android controls remain usable for stop/exit when artwork disappears, even after reloading. Desktop/mobile have no page errors or overflow. PC/tablet status is simulated; no real radio or tablet controlled.

## Optional Game Artwork Archives - October 29, 2026

- The public Windows suite includes 115 passed tests using both Node 26 and the included Node 22. The six new tests check booting without artwork, separated installation/activation, restart with saved installation state, blocking after archive deletion despite existing cache, replaced/corrupt artwork, catalog validation, local API origin, and release staging without artwork. The Windows installer test also checks a missing optional archive that is still in the original integrity manifest.
- A browser trial with the real add-on API and a small test archive confirms installation/activation, the forty board zones, return to the add-on screen after archive deletion and blocking of Start Core without an active game. Desktop and 390-pixel mobile have no page errors or horizontal overflow; Windows/tablet status is simulated.
- A separate source copy with no artwork and no existing private workbook starts both linked web services. The Control Center proxy blocks activation without archive and rejects missing Origin; Core start, scan, sensor, dice and movement routes are blocked before hardware input. No tablet, radio or installer controlled.
- Did not build a new full Windows release package or run a GitHub workflow for this change. The existing physical acceptance points remain open. See [game add-ons](GAME-ADDONS.md) and [release-review](RELEASE-REVIEW.md).

## Windows release candidate, local - October 29, 2026

- The local builder created a Windows x64 review package with Node 22, Python 3.13.17, pinned Windows NumPy/OpenCV wheels and self-contained .NET helpers. Official Node/Python and PyPI hashes have been checked. The Teburu SDK, private configuration, campaigns and identifiers are not included. The GitHub release workflow has not started.
- The included Node, Python/vision and Core start in the smoke trial with development runtime paths removed. The browser trial uses the included Node and loads all 156 images; helper permission, tablet steps, explicit language/orientation confirmation, and restore button work on desktop and mobile without page errors or horizontal overflow. Installation and hardware responses are simulated.
- The installer was copied to an isolated working directory without any desktop/Start menu changes. Separate Windows tests confirm retention of private saves, rejection of corrupted files, and rejection of paths outside the package. The shutdown button gracefully closes both real web services; the second start reuses the existing instance. In these trials, no radio was transmitted by the app.
- The public suite now includes 109 tests, including source file staging without SDK binaries, USB permission/multi-device, screen/app control, helper permission/progress, the stop-before-detach sequence, rollback of failed Core start, and installer checks. An additional Python test uses mock sysfs files and callbacks to confirm that only one uniquely selected USB radio is allowed access, and that ambiguity does not change permissions. See [review checklist](RELEASE-REVIEW.md) for the required clean Windows/Linux installation and physical radio/tablet tests. A local smoke test does not replace this.

## Guided Windows Preparation - October 29, 2026

- Public suite explicitly from `test/` and `tests/`: 102 tests passed, zero errors. A full `node --test` run also succeeded, but also discovered copies of older suites in ignored temporary workbooks; these are not counted as additional coverage.

- Seven new isolated tests check read-only health check, shared/cached reads, explicit confirmation, bounded actions, selection of a detected adapter, blocking concurrent installations, UAC cancellation, installation errors, and restart notifications. Already shared adapters are selected without an installer or transfer; interrupted installations do not restart automatically.
- Browser check on desktop and mobile passed: no installation request for confirmation, cancel does nothing, progress blocks new actions, restart message visible, adapter selection correct and no page errors or horizontal overflow. The installation responses are simulated; no real installer started.
- The PowerShell health check has been run on the development machine and recognizes WSL, Debian on WSL2, usbipd and the shared Bluetooth adapter. The new Action API rejects requests without local Origin and unknown actions. No radio transfer, software installation, firmware or official app change performed.
- A complete installation with real UAC, downloads and Windows restart on a clean second machine remains to be tested. The bundled release with runtimes and pre-built helpers remains a next step.

## Transferable installation — October 29, 2026

- `node --test`: 95 tests passed, zero errors, including archive restore, reject path escape and integrity check.
- A clean file copy without the original `private/` folder starts both web services and the linked table. All 156 images return HTTP 200. The new table session has revision zero and no deployed components; no campaign or device setting was adopted.
- Browser check on desktop (1440×1000) and mobile (390×844): physical map loaded, ten Haven labels present, no page errors and no horizontal overflow. The linked board page also starts without the original development files.
- Both .NET programs built with `dotnet publish` from only the supplied proprietary source code, without SDK libraries. The Bluetooth radio was not started during these checks and the official app was not changed. A fresh physical connection on a second computer has not yet been performed.

The older statements below about excluded artwork and fully private adapter code describe the previous distribution situation. Publishing permission and installation are in [INSTALLATION.md](INSTALLATION.md).

## Current check — October 28, 2026

- Audience: `node --test` passed, 94 tests, zero errors; executed before commit `fe0a5fa`. Private adapter code, identifiers, and artwork are not included in Git.
- Loaded game: The real Milan screen showed Agnese in Washington. After two similar observations our table corrected the old position Cadorna to Washington. Live browser control without page errors; isolated NPC and companion trials confirm retention of other components and idempotency. Did not test full save import.
- Haven labels: ten current registered bonuses visible in the browser, including the saved +2 Willpower for Haven 1L; no bonus tags in city districts and no duplicates after refreshing.
- Virtual Core: 26 private regression scenarios passed, including migration of old firmware state, failed commit, abort, restart and stable ring battery. Virtual Bluetooth and Control Center browser tests passed.
- Real Android tablet, unmodified Teburu app 1.2.0: LED ring 1.15.0, Firmware up to date, 46%, 3852 mV. These are simulated versions and battery data; no official firmware installed.
- LED Orientation: Isolated browser trial with four different colors confirms light 3 top left, 4 top right, 1 bottom right and 2 bottom left. The more extensive existing Prospero browser trial crashed when the accessory became visible and was not marked as successful for this change. Full hardware animations remain outside this control.

Older, dated checks below are retained as historical evidence.

## Location map and setup help 0.6 — October 22, 2026

- `node --test`: 32 tests passed. Added: thirty district IDs plus ten Haven spaces, atomic application/undo/redo/replay, unproven source status, four different characters, finite supplies and component sides. A tricky control distribution of 21 Anarchs and eight Camarilla is matched correctly; impossible distributions are rejected. Zone capacity and damaged setups do not change anything.
- Browser: city profile default; forty boxes, ten of which are Haven spaces, district labels and attribute text. Four manually chosen test characters with test locations, influence/control, locked location, NPC and Masquerade applied via the form as one event. Undo undid all placements; redo and JSON import also fixed the sides. Duplicate character chosen denied with alignment retained.
- Checked accessible labels of the setup choices. Desktop 1440 px and mobile 390 px views; no page overflow, even with the district table open. Source images and screenshots remain in ignored `work/`.
- Retail and neutral browser regressions, sensor study, reference occupancy, JSON recovery, recovery history and shielded files continue to pass. No browser errors.
- The form input in these tests is synthetic. No claim that this represents the real Chronicle start; no official app/hardware launched or modified. Exact map boundaries, Haven behavior and app-controlled campaign start status remain open.

## Milan content 0.5 — October 22, 2026

- `node --test`: 26 tests passed. Retail quantities and three control token combinations checked, plus source/group/side validation. Mixed retail components installed; token reversed, moved, reverted, undone/redoed, and restored via replay after JSON export. Incorrect end side rejected without loss of state. No colors in the domain state.
- Browser: retail standard, 132 items in the drop-down list, seven characters in the first category, three source links. Characters, influence and control together in A1; invert changed the faction color and accessible side name; undo/redo fixed both. Research token placed with Enter and vice versa. NPC at H5; invert for one-sided parts disabled.
- Categories, name search and empty search results checked. Retail JSON actually downloaded, board emptied and restored with token sides preserved. Retail file in neutral profile rejected. No browser errors. Desktop 1440 px and mobile 390 px controlled, without page overflow.
- Existing browser checks for neutral table, JSON, restore history, sensor study, reference occupancy, and protected files continue to pass. Screenshots and temporary scripts are ignored under `work/`.
- The local server has been restarted to register the new JSON package. No external runtime dependencies, protected images or app files added. No real location mapping, scenario setup or official app connection claimed.

## Recovery history – October 22, 2026

- `node --test`: 21 tests passed. Added: undo/redo places, deletes and clears; same roll without new RNG; branch after going back; retention of redo after a refused assignment; limit of one hundred steps; import/export of the active event series.
- Browser: buttons initially disabled; throw undone and redone with identical outcome; clear undone with parts recovery and throw. Both buttons disabled after import. In sensor study both remain disabled.
- Re-passed existing browser checks for inventory, mixed occupancy, move/delete, keyboard focus, JSON recovery, invalid import, mobile, and protected files.

## Virtual table 0.4 — October 22, 2026

- `node --test`: 18 tests passed. Added: mixed parts in shared zones, separate move/delete, atomic capacity check, full work queue and deterministic replay, resume without re-random and reject damaged/wrong exports without losing state.
- Headless Chromium, own local web app: 24 selectable items; pawns, cube and token together on A1; cube separately to H5; token back to stock; keyboard placement while maintaining cell focus; d10 roll.
- Actually downloaded JSON, cleared table and restored same session via file input. Invalid JSON session format rejected while preserving the table.
- Sensor study: keep two registered cones in the same zone after release. Reference profile: occupied zone remains rejected. No browser errors. `.git/config` and a private path give 404.
- Desktop 1440 px and mobile 390 px visually viewed. Fixed found page overflow on mobile; only the board scrolls horizontally. Temporary checks and screenshots are under ignored `work/`; the demo itself has no external dependencies.
- No official app started, hardware connected or emulator connection proven. Work inventory numbers and capacity are explicit placeholders.

## Interaction study 0.3

- Thirteen tests passed: previous nine plus separated identity/contact/position, shared zones, repeated interaction, error handling, and explicit deletion.
- Browser: contact without registration rejected; p1 and p2 placed in the same zone after separate registration via the same A1 sensor; release retained both positions. Repeated contact via Enter created an interaction event without moving. D10 and JSON download worked.
- Profile selection with explicit start button tested: reference profile shows d6/d10 and normal pawn placement; simulator controls disappear. Profilestart deliberately deletes the session, visibly indicated in advance.
- Official Windows download via HEAD checked: HTTP 200, target VTMTEBURU_v1.0.9.zip. No app download/installation/runtime or compatibility testing performed.
- The input trace is native demo input, not hardware capture. True sensor mapping, protocol and official app connection remain unknown.

## Modular cross-section 0.2

- `node --test`: passed nine tests, including original regressions, headless reference session, second profile with different geometry/capacitance, invalid data/commands, revision/actor control, protected snapshots, and deterministic replay with captured throws.
- Browser: forty cells; place A1, move H5, second pawn on occupied H5 denied without new event; Enter on A1, remove, d6/d10, empty checked.
- JSON download actually received and checked: tabletop-session v1, sandbox, six events/revision 6. No import function claimed.
- Visual desktop check performed; board, pawn color, controls and activities visible.
- All active modules, JSON profile and legacy demo reachable with HTTP 200; .git/config gives 404.
- No 3D renderer, full Milan rules or hardware link tested/implemented. The physical reference comparison is still open.

## Original demo 0.1 (historical)

- `node --test`: 3 tests passed (move/delete, boundaries/IDs, occupancy without state loss).
- `node --check src/app.js` and `node --check server.mjs`: passed.
- Local server: HTTP 200 for the homepage.
- Visual browser check: not completed; the browser automation crashed when opening. Manual checking: forty cells, place/move/delete, occupied cell, d6/d10, JSON export, clear and keyboard controls. These actions have not yet been tested end-to-end.
- No hardware or official app connected or modified. App compatibility and emulation not tested.

Environment contains Node.js 24, but no npm on PATH. Therefore, use the direct Node commands from README.md.

## Table layout - October 22, 2026

- Passed 37 Node tests, including headless observation of external commands, undo/redo/reset/import, and checking all forty visual click areas. No new domain/save version.
- Browser: actual click on the forty physical map anchors always selects the expected district/Haven space. Figures and tokens render above the original map; checked selection, move, invert, inventory, full location with +n, undo/redo and JSON recovery.
- Campaign form via separate window: incomplete input rejected, four chosen characters placed in one atomic action. Tab navigation, keyboard tabs and Escape, zoom, fit and board focus checked.
- Display at 2560×1440, 1600×1000, 1366×768, tablet 768×1024 and mobile 390×844; no horizontal page bleed. Desktop table fits within the screen height. Tablet/mobile have the sidebar below the map. Desktop and mobile screenshots viewed visually.
- A placement and movement directly via the application, outside the UI, become visible without an explicit refresh. An empty artwork catalog keeps all actions available via the schematic. No browser exceptions during these checks.
- Legacy profiles (retail, neutral table, sensor study and reference) controlled via the settings window, including search, keyboard placement with focus keeping and sensor contact release. A missing map file also falls back on the schema; 320px has no horizontal page bleed.
- No official app launched or modified. No real city round, protocol or hardware test. App compatibility and automatic influence transfer remain open.


## Core startup feedback — October 30, 2026

Control Center now reports actual Core startup stages from the PowerShell helper: service check, connection environment, Bluetooth preparation, service startup and activation. It displays elapsed time, identifies a slower step, and distinguishes PC startup complete / waiting for Milan from a connected game. Startup errors remain available after polling or reloading the Control Center; no estimated percentage is shown.

Validation: all 151 public tests passed (`node --test test/*.test.mjs tests/*.test.js`), including startup serialization, stage updates and retained errors. An isolated Edge browser check exercised changing stages, elapsed/slow-step feedback, ready and connected states; screenshots were inspected under ignored `private/startup-ui/`. No physical restart or active-session interruption was performed. The running copy under `C:\Temp\TCE` was not updated.


## Core readiness performance — October 30, 2026

Replaced repeated `Get-NetTCPConnection`/CIM calls during startup with .NET listener inspection. Local read-only measurements: old checks 2863/2343/2025 ms; new checks 22/3/2 ms. Readiness now has a 25-second elapsed-time deadline rather than 100 iterations whose duration depended on a slow probe. Timestamped startup stages are written to the private runtime's `core-startup-timing.jsonl`; no adapter or tablet identifiers are recorded there.

Eleven focused tests passed, including real ephemeral TCP listener detection, child exit, timeout and WSL session cleanup. The active portable copy received the two PowerShell startup helpers with verified copies and private backups, without restarting Core or transferring a radio. Its already-running-service preparation path completed in 316 ms. This does not establish cold-start or physical Bluetooth connection latency, and the full reported multi-minute regression is not yet reproduced.
