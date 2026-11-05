# Phased development plan

## TCE and game modules

The product is the Teburu Core Emulator. Work on shared Core behavior, transport, virtual devices, installation, recovery and module isolation is part of TCE. Board data, app screens and campaign synchronization belong to the respective game module. Your own rules implementation is not a prerequisite for emulation: the official app remains the rules authority.

Milan Uprising is the currently implemented module and provides concrete acceptance scenarios. Additional games require their own module, assets, adapter and real app validation according to [the module contract](GAME-MODULES.md). A successful Milan trial does not prove general Teburu app compatibility.

## Current priorities and reading guide — November 5, 2026

The working base consists of the sandbox, custom session import/replay and undo/redo, Milan inventories and the optional app adapter. Limited interaction with the unmodified official app has been demonstrated. The public software check counts 169 passed tests on Windows/Node 26.7.0; see [validation](VALIDATION.md).

The next adoption points are full playthroughs and resumes, full campaign setups and expansions, robust syncing, and installation on a clean second PC with real tablet/radio. The release remains subject to review and physical acceptance.

The dated lists below are development history. Older open boxes for currently existing import/replay, undo/redo, inventory or app contact do not constitute a current backlog. This does not complete general session migrations, automatic sandbox saves, full rules and 3D. Use README for current features and VALIDATION for dated evidence.

## Transferable distribution – October 29, 2026

- [x] Simplify Control Center to one automatic PC preparation after one-time permission, with progress, restart/retry follow-up, automatic adapter selection where clear, isolated Linux account and automatic tablet checking. Manual steps remain under Advanced. True clean machine adoption remains open.

- [x] Separate TCE infrastructure and game modules, register explicit module contracts, and store multiple independently enabled games. Keep existing Milan sessions compatible.
- [x] Add one-button installation with controlled automatic Windows client download and artwork extraction; include Python/UnityPy without installing or running the game.

- [x] Add guided WSL2/usbipd preparation with status checking, explicit installation buttons, UAC, progress/reboot notifications, and Bluetooth adapter selection without automatic transfer.
- [x] Locally build a Windows review package with runtimes, pre-built helpers, installer, Linux prep, tablet wizard, and managed Bluetooth rollback/recovery.
- [ ] Allow the owner to review the work before running the manual GitHub release workflow; test the real installation on a clean Windows machine with physical tablet/radio.

- [x] Include allowed artwork as one archive, install it via Game add-ons and publish the necessary native integration runtime without the SDK itself.
- [x] Separate runtime code from machine configuration, identifiers and campaigns; start a new installation with an empty table.
- [x] Check a clean copy without the original private working directory, complete image catalog and desktop/mobile view. See [installation](INSTALLATION.md) and [validation](VALIDATION.md).
- [ ] Repeat a physical app connection on a second computer with its own adapter and tablet configuration.

## Current progress — October 28, 2026

- [x] Recognize visible NPC portraits at the resume step NPC placement; Agnese confirmed live in Washington. No full save import: hidden parts and other NPC portraits can still be tested separately. See [placement synchronization](PLACEMENT-SYNCHRONIZATION.md).
- [x] Restore only the ten Haven bonus tags; district labels remain in the location panel. See [location tiles](games/milan-uprising/LOCATION-TILES.md).
- [x] Add the LED ring to the persistent firmware simulation and the same battery approach as dice. Teburu 1.2.0 shows live 1.15.0, Firmware up to date and 46%. See [firmware simulation](FIRMWARE-SIMULATION.md).
- [x] Correct the LED segment orientation in the presentation; four different colors checked in an isolated browser trial. See [Prospero](games/milan-uprising/PROSPERO.md).
- [ ] Validate a fully loaded campaign setup and full ring animations; the limited trials above do not prove this.

The dated priorities below describe earlier research phases. Current verification and quantities are in [VALIDATION.md](VALIDATION.md); new module and installation tests do not replace previous smaller suite numbers as hardware evidence.

## Main goal and upcoming integration milestones

- [x] Add the physical inventories of all six expansions, with separate profile, save/replay, additional miniature scans, and manual marker controls on the linked table; see [extensions and verification limits](games/milan-uprising/EXPANSIONS.md).
- [ ] Accept the four additional characters, new allies/ghouls and expansion campaigns through real Android gaming operations; only automate Sabbat/Nephilim feedback after controlled observations.

Additional research on October 24: The unmodified Core firmware package has already been found in the installed Teburu app and checked locally. There was no need for network interception or starting an update. Use this as an independent static reference for concrete emulator differences; full firmware execution remains a separate, unproven trail. See [firmware research](FIRMWARE-RESEARCH.md).

Current priority on October 23, 2026: build and test the Core behavior independently of the Milan campaign. The private offline regression suite has been added; independent decoder control, virtual Bluetooth testing and physical Android acceptance remain separate levels of evidence. See [hardware coverage and acceptance](CORE-VALIDATION.md). Full dice input, Android map feedback, and actual save/resume on Android remain open.

- [x] Acquire a controlled full snapshot of the current Android map: thirty districts and 39 components. This is the current game mode, not a general campaign start mode.
- [ ] Automatically initialize your own table session with each new campaign with all control tokens, influence, characters and other markers requested by Milan; check completeness before the table is shown as ready. The partial four-character setup does not meet this requirement.
- [x] Inherit the three visible English final influence counts of the current Android day phase automatically and idempotently; see [research and limitations](DAY-PHASE-AUTOMATION.md). Full phase control, control switches and hidden instructions remain open.

Adjustment on October 22, 2026: actively build on the virtual physical table; Manufacturer contact is not a prerequisite for this development. Research into a real emulator can continue independently based on available information, within the existing boundaries for security and assets. App compatibility remains to be proven separately.

- [x] Manual virtual table with individual pawns, influence cubes and tokens, shared zones, inventory controls and JSON recovery for the same profile; see CONTRACTS.md extension 0.4.
- [x] Undo and redo up to one hundred local actions, including clearing and saving roll outcomes; recovery history separated from domain events.
- [x] Add the source-controlled retail inventory with real character/NPC names, faction cubes, token combinations, and reversible tokens; keep separate demos. See MILAN-CONTENT.md.
- [x] Add the thirty district labels and ten Haven spaces in a separate schematic profile, with manual lineup entry and atomic inventory allocation. See BOARD-AND-SETUP.md.
- [x] Redesign the UI around the physical map with full screen width, compact stock/location/session, zoom and separate preparation window; associate repaint with session changes for future adapters. See TABLE-LAYOUT.md.
- [ ] Verify exact retail map connections, Haven behavior and official campaign start positions; the setup aid is not yet a verified start preset.
- [ ] Further substantiate Milan locations and physical inventory and replace neutral work inventory/mapping where verified data is available.
- [x] Compare native BLE, remote/controller, SDK, logs/saves and window recognition; add a read-only local boundary condition probe. See APP-INTEGRATION-RESEARCH.md. This does not prove a connection.
- [ ] Investigate independently which real app input and feedback are technically available; keep the functional table development going.

The official Milan app (later other releases) should eventually work with the virtual table without physical game components. The app manages rules and story. A native automated Milan deployment is optional and has lower priority than an allowed official app bridge. The earlier phases below describe the table architecture, not the completion of this bridge.

- [x] Dig into public system operations, app version history, SDK route and download sources; see TEBURU-DEEPSEARCH.md.
- [x] Separate temporary sensor contact, explicit demo identity and persistent zone placement in a local simulation; maintain reference profile.
- [x] Add d10 interaction profile and repeated generic interaction; not claiming true sensor/location mapping.
- [x] On user command, download and install the official Windows build; record static metadata and constraints in INSTALLATION-RESEARCH.md. No runtime validation.
- [x] Prepare normal app validation and targeted manufacturer queries; see APP-VALIDATION.md. Draft not sent; checks carried out are listed below and in the test report.
- [x] Inspect normal setup flow of the installed official Windows app: Single/Main waiting for a Core, Controller requests an existing Main. See APP-VALIDATION.md.
- [x] Test the digital dice in the Windows app during real gaming action; the app determines the role without physical dice in the private trial.
- [x] Ingest the user-provided SDK locally and evaluate it statically; all source and substantive findings remain under private/sdk/.
- [x] Build and validate the private SDK test sample, separately from the official app. The local test was successful; source, builds and technical findings remain private.
- [x] Demonstrate a connection to the unmodified official app in a private trial; campaign preparation and character selection are accessible. This does not prove a playable session.
- [x] Register four characters with their own synthetic identities and verify placement, movement and repeat contact in the official app. No physical tag identities copied; technical implementation remains private.
- [ ] Verify supported virtual input or SDK application for existing apps and conditions for public deployment. The agent did not make an application or accept an agreement.
- [ ] Only then specify a real bridge: identity, position/contact, session start, capabilities and app-driven visual updates; explicitly assign rule authority to the official app.
- [x] Demonstrate campaign launch, interaction, roll and resume using the unmodified official app without physical game components in a limited private test. No full game validation; one error message during turn change remains to be investigated.
- [x] Connect the controls of our physical table view to the private input route and adopt accepted app changes back. One move and a real influence change confirmed live; see APP-VALIDATION.md. Broad game validation remains open.
- [ ] Investigate the turn change error message and test further game rounds, city rounds and subsequent releases.
- [ ] According to user choice, connect the official Milan app on a physical Android tablet with a Core helper and the digital board on the PC. Connection and setup on the real tablet are confirmed; game input and map feedback on Android remain to be tested. The emulator route remains an alternative; see [TABLET-ALTERNATIVES.md](TABLET-ALTERNATIVES.md).
- [x] Prove discovery and connection to Milan on the real tablet via Bumble in WSL and temporarily transfer the existing PC radio, without renaming or additional radio. Connection, app commands and normal setup to campaign selection confirmed; game input and map feedback on Android remain open.

Current integration status: Limited boardless game entry, resume, direct table control with app confirmation and automatic influence transfer have been demonstrated. The app showed an error message during a turn change; after closing the next player was active. The cause, complete city rounds and reliability in other situations remain to be investigated. Window recognition has only been validated on the tested format. Technical content, screenshots and logs remain private; the public demo remains a sandbox.

The public SDK request has been found. That does not complete the investigation into a permitted bridge. Unproven protocol steps remain open; no fabricated BLE payloads or automatic SDK login.

Updated on October 21, 2026: generic tabletop platform with Milan as the first game module. The previous execution sequence below has been replaced by the following three phases. Existing results are retained. The first sandbox cross-section has been implemented; verified Milan reproduction remains open. See CONTRACTS.md.

## Phase 1 — Faithful 2D digital reproduction

### 1A — Up next: pre-implementation specification

- [ ] Inventory physical components, setup, actions and Milan locations with legal sources; mark verified, unknown and placeholder.
- [x] Define the existing demo reference session with pawns and rolls; see CONTRACTS.md.
- [ ] Expand the reference session with maps/fiches once inventory, schedules and usage rights have been established. Don't make up missing lines or scenario content.
- [x] Specify engine commands, state, events, game module contract and presentation projections according to ARCHITECTURE.md.
- [ ] Specify versioned schemas for boards, cards, tokens, characters, scenarios, and origin/rights releases.
- [x] Determine which state is managed manually, by the Milan module or possibly by the official app.

Acceptance: reviewable contracts and synthetic examples without Milan dependency at the core; verified reproduction scope and open gaps are traceable.

### 1B — Core, module and 2D cross-section

- [x] Migrate the existing prototype step by step to engine, application, Milan module, data, UI, presentation and adapters; preserving features and regression testing.
- [x] Make grid shape, components, occupancy and die types configurable. Treat 8×5 as a sensor profile, not as a universal game board.
- [x] Realize manual table commands and prepare explicit sandbox mode.
- [x] Key with a second synthetic profile with different geometry/occupancy, without core change.
- [x] Complete browser control and keyboard controls; the previous visual check has now been carried out, see VALIDATION.md.

Acceptance: engine and module work headless; UI and 2D use the same commands/projections. A neutral section does not count as a verified Milan reproduction.

### 1C — Verify reproduction

- [ ] Compare the reference session step by step with physical play and permitted official documentation.
- [ ] Substantiate location, component and action behavior; document differences and missing information/rights.
- [ ] Deliver a functional manual 2D reproduction of the verified scope, with visible limitations.

Acceptance: Supported physical actions have demonstrable digital equivalents. Do not claim full reproduction or official app compatibility with open gaps. Missing content blocks that content, not the generic engine.

## Phase 2 — Automation and sustainable sessions

- [ ] Implement Milan rules, turns, card actions, objectives and validation exclusively in the game module, with source references and tests per rule group.
- [ ] Make sandbox full-fledged with manual actions and structural checks without full rule automation.
- [ ] Add versionable storage, validated imports, migrations and restores; treat the current demo export as a separate legacy format.
- [ ] Save roll outcomes/events and test deterministic state transitions and replay.
- [ ] Consider AI after stable rules; AI uses the same command contract as players.

Acceptance: rules without graphical dependencies, errors without partial mutation, resumable sessions and persistently usable sandbox.

## Phase 3 — Optional visual extension

- [ ] Add 3D above the same projections; map logical zones to presentation positions.
- [ ] Add optional animations, effects and interactive environments without making control outcomes dependent on timing.
- [ ] Keep 2D and test performance/accessibility.

Acceptance: the same reference session and throws yield the same condition headless, with 2D and with 3D without rewriting the game rules.

## Standalone Research Track — Official App and Teburu

The previous compatibility and hardware tasks remain open and are listed below for preservation. They may run next to phase 1. App retention remains preferred; missing interoperability does not block the generic core or sandbox. A true adapter requires a permissioned interface and reproducible app validation. Contracts and mocks contain their own events, not an assumed Teburu protocol.

## Saved original work packages

The numbers below are historical work package numbers, not the new development phases. Storage/ease of use moves to phase 2; the previous exclusion of complete lines has been replaced by the above phasing.

## 0 — Foundation (finished)
- [x] Dutch documentation and Codex instructions.
- [x] Verify sensor layout via manufacturer; distinguish your own notation.
- [x] Local 8×5 board with pawns, demo dice and exports.
- [x] Isolate domain model and test boundaries/occupancy.

## Work package 1 — Investigate compatibility route
- [ ] Find official SDK/API, developer support, or documented alternative input. Also record a negative search result; no API presuppose.
- [ ] Inventory with app platform/version owner, available Core, board and dice when hardware testing is needed.
- [ ] Check if the official app has a usable manual input mode.
- [ ] Verify physical sensor orientation and mapping to Milan locations with native hardware and official diagnostics.

Acceptance: sources and reproducible findings per route. Decision point: supported integration, manual companion, or standalone sandbox only. Without a permitted route, no promise of sign replacement.

## 2 — Adapter contract and simulation
- [ ] Define transport-independent contract with availability, capabilities, errors and disconnects.
- [ ] Build mock adapter with fixture replay of custom events.
- [ ] Test place/move/delete, reconnection and duplicate/delay events.

Acceptance: Local mocks work without hardware; own schema remains explicitly distinguished from the actual protocol.

## 3 — Allowed hardware validation
- [ ] Only on documented/permitted interface: enumerate BLE services and requirements on own device without bypassing security.
- [ ] Prove correct sensor, identity and throw processing; test first keeping real Core and dice if that route is supported.
- [ ] Determine whether the official app actually accepts the chosen route.

Acceptance: Reproducible end-to-end session with real app, versions and limitations. Stop if permission or security boundary is missing. No firmware modification or tag cloning.

## 4 — Useful private tool
- [ ] Version control for save files, validated import, recovery and user testing.
- [ ] Only add your own location profile/map with permission, including origin.
- [ ] Simplify installation/start-up; accessibility and larger screen keys.

Acceptance: user can start, manage board and restore a session; compatibility status remains visible. Control automation will now follow in phase 2 of the revised planning.
