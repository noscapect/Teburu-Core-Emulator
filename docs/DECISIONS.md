# ArchitectureDecisions — October 21, 2026

## Product scope — November 5, 2026

TCE is the emulator product; supported games are treated as modules. General documentation describes the shared Core, devices, transport, installation and lifecycle. Game manuals are under `docs/games/<id>/`. Milan is the current module and test case, not a product-wide dependency or model for the rules of other games. Compatibility claims are assessed per game and official app. This delimitation does not change runtime behavior or actual supported games.

## Current reading guide — November 5, 2026

The dated decisions below retain the scope at the time. The current version has a modular sandbox, validated import/replay of custom table sessions, undo/redo, and an optional published app adapter. Limited interaction with the unmodified official app has been demonstrated; full campaign compatibility and manufacturer support have not been proven. Selected artwork may be included under the distribution exception. The SDK and machine data remain excluded. See [README](../README.md), [validation](VALIDATION.md) and [module contract](GAME-MODULES.md).

The passages from **In-depth after source research** describe historical decisions from October 21. Statements such as “app integration remains open,” “local artwork only,” and future imports describe that phase, not current capabilities.

## One automatic PC preparation - October 29, 2026

The separate primary installation buttons have been replaced by **Set up automatically**, after one-time explicit conditions/permission. The backend cycles through the existing bounded actions without a confirmation per component. Windows UAC and any restart remain OS actions; a restart is never performed automatically. A choice will only be requested if there are multiple/missing adapters. Linux gets its own non-root helper account, so users normally don't need to prepare a terminal/account. Tablet status is checked automatically. Manual controls remain under Advanced. See [automatic setup](AUTOMATIC-SETUP.md).

## Optional artwork archives — October 29, 2026

Artwork can be supplied bundled or separately. The previous proposal without automatic client extraction has been replaced: **Add game** uses an existing archive or downloads a controlled Windows client ZIP and extracts only the necessary images. No installation or running of the Windows game; Android remains required for linked play. Multiple modules can remain enabled. See [module contract](GAME-MODULES.md).

## Project name — October 29, 2026

The project is now called **Teburu Core Emulator (TCE)**; the GitHub repository is called `Teburu-Core-Emulator`. This only concerns the name, visible project branding and package/launcher names. Milan Uprising remains the existing game module. The next refactoring for more game modules is separate work. Session/profile IDs, internal format names, and existing storage are preserved; this name change is not a new proof of compatibility.

## Windows release candidate - October 29, 2026

The release builder uses only public source directories, packages Node/Python and self-contained .NET helpers, stores third-party notices, and adds a file manifest. The per-user installer keeps private settings when updated. Android tools are only downloaded directly from Google after separate permission; Linux packages and the own isolated helper environment are prepared via fixed commands. Tablet permission, foreground app and screen resolution are checked; language and orientation remain an explicit user confirmation. Normal stopping returns only the radio transfer recorded by our session; after force shutdown, recovery is explicit. The release workflow is manual only and should not be run before the review. No physical second machine acceptance or full campaign validation claimed.

## Windows Prep - October 29, 2026

Bluetooth over WSL2 is the solid transport choice for the Windows/Android route. The Control Center monitors Windows components and provides explicit installation actions for WSL, Debian, and usbipd, plus selection and sharing of one detected Bluetooth adapter. All installation and UAC windows remain visible. There is no automatic restart, removal/conversion of existing distributions, or adapter transfer on a health check. Actions are fixed and only available via the local same-origin control. Machine configuration and progress remain in private/. A source checkout is therefore not a complete bundled release. See [installation](INSTALLATION.md).

## Transferable distribution – October 29, 2026

The project owner has explicitly allowed publication of the selected artwork and its own derived integration code. The artwork is supplied as one archive by default and extracted locally via Game add-ons; a distribution may omit the archive. The required custom runtime code is managed under `integration/runtime/`; the launcher creates a separate ignored workspace `private/linked/` from it. Machine configuration, saved game states, observations and randomly generated identities remain local. The original SDK, libraries, examples and documentation remain excluded. The existing private development setup will not be copied or changed. The linked route still requires explicit configuration of the own radio and tablet; an entire campaign or every machine is not proven. See [installation](INSTALLATION.md).

## History — in-depth after source research, October 21, 2026

- Using the official app without physical game components is the end goal; sandbox and custom rules are supportive, not a tacit replacement of that goal.
- Sensor contact is not the same as game zone occupancy. The new study separates those, keeping the original demo and allowing multiple demo pawns to share one zone.
- SDK request route found, but not proven suitable for existing apps and not requested. Any confidential content will remain outside the public repo.
- Official Milan digital dice are the first route to be tested; emulating hardware dice is not automatically prioritized.
- A browser-Central API does not prove a virtual Core/peripheral. Transport choice awaits evidence and permitted interfaces.

Substantiation: TEBURU-DEEPSEARCH.md. True app compatibility remains unproven.

Status: First modular sandbox cross-section implemented. Rules, physical content, 3D and app integration remain open.

| Subject | Previous direction | New decision |
| --- | --- | --- |
| Product boundary | Milan board replacement with adapter | Generic tabletop platform with Milan as the first game module. |
| Board model | Four fixed pawns and 8 × 5, one pawn per cell | Entities and zones in core; geometry, numbers and occupancy in profile/module. |
| Rules | Complete rules outside first scope | Faithful manual 2D reproduction in phase 1; automation explicitly in phase 2. |
| Data | Demo values ​​directly in code | Versionable declarative packages for components, characters, scenarios and releases, with permissions/origin. |
| Presentation | Browser around simple model | Strict separation of engine, rules, data, UI and presentation. Optional 3D in phase 3 without line rewriting. |
| App integration | Compatibility as the first main route | Standalone research track and optional adapter; app retention remains preferred, compatibility unproven. |
| Sandbox | Possible alternative route | Full-fledged future mode, with structural controls and manual actions. |
| Storage | JSON demo export | Versionable saves and validated imports in phase 2; demo format remains separate. |
| Expansion | Other games not specified | Module contracts and packages; generic design keys with second synthetic profile. |

All existing code, tests, neutral design, prototype features and research findings are retained. The active demo now uses the separated layers; legacy/ keeps the original demo. CONTRACTS.md describes the deployed contract and open physical inventory. Sensor verification does not prove Milan location mapping or app compatibility. Rights and security limits continue to apply.

Trade-off: establish small explicit contracts and migrate step by step. Don't build generic rule scripting, plugin marketplace, or 3D toolchain before concrete game actions make it necessary.

## 0.7 — local app artwork

Original, readable textures from the locally installed app are stored exclusively under ignored `private/artwork/`. The server has a limited PNG allowlist and a filtered catalogue; domain state and session export do not contain images or local paths. No external demo dependencies. The optional UnityPy extractor is separate from the runtime. Details: [ARTWORK.md](ARTWORK.md).

Map names Portello, Sempione and Argonne have been corrected based on the sharp app map. New standard package `city.json` 0.7.0 with its own release ID; `campaign.json` 0.6 remains intact for existing sessions. No silent session migration.


## Table First, October 22, 2026

The original map becomes the main interactive view with local artwork. Full screen width, a compact sidebar, scalable map and separate preparation windows replace the long information page. Visual click areas are proprietary approaches, outside of the engine. Viewing is the default; inventory selection switches to places. The entire location content remains accessible when the board summarizes more than four items.

The official app remains the end goal and intended regulatory authority. Automation can control the same application: observation of state changes also refreshes the UI without user action. There is no working official app adapter or automatically adopted city tour built in. Original artwork remains exclusively local.