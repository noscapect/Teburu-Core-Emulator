# Research register

Reading guide, November 5, 2026: the current functions are in [README](../README.md) and the proof in [VALIDATION](VALIDATION.md). The older research phases below also retain negative outcomes that were later overtaken by limited app interaction. They do not mean that app contact or board feedback has never been demonstrated. Full campaign compatibility and manufacturer support remain unproven.

## Current evidence status — October 29, 2026

The dated passages below preserve earlier phases of research. Limited interaction with the unmodified official app has now been demonstrated locally; its own derived runtime code and permitted artwork have been published. This does not prove full campaign compatibility or manufacturer support. The original SDK remains excluded. See [current validation](VALIDATION.md), [Teburu research](TEBURU-DEEPSEARCH.md) and [release review](RELEASE-REVIEW.md). The release workflow has not yet been executed and physical acceptance on a clean second machine remains open.

Verified: October 21, 2026. Public information does not prove interoperability.

Current runtime outcome on October 22, 2026: the normal Windows setup has now been partially executed. Single Device and Main Device wait for a Core; Controller requests connection to an existing Main. No campaign has been started. The individual private SDK builds and local runtime test passed; the normal Milan-Main setup did not produce a connection on this trial. See [APP-VALIDATION.md](APP-VALIDATION.md) for scope and results; previous passages about not starting describe the preliminary research phase.

Continued October 22, 2026: [static check of official Windows installation](INSTALLATION-RESEARCH.md) confirms Windows x64, Unity runtime, and the presence of a Bluetooth WinRT plugin. No app launched or official app compatibility proven. The normal setup flow and digital rolls remain to be tested.

## Deepening and corrections

Map research continued on October 22, 2026: Official board photos in Gamefound updates 42 and 59 show thirty city districts next to ten Haven spaces. The district names, global placement and attribute icons are incorporated into their own schematic profile; no photo/artwork reproduced. The exact border connections, sensor index and full official campaign start position remain unverified. [BOARD-AND-SETUP.md](BOARD-AND-SETUP.md) describes the source evidence and distinguishes the new manual setup aid from a real start preset.

On October 22, 2026, the public retail inventory was processed into a separate package with 132 separate parts. The current official game page substantiates the character names; the manual has been visually checked on pages 6, 12 and 13 for colors and part meaning. See [MILAN-CONTENT.md](MILAN-CONTENT.md) for sources and the explicit boundary between verified stock and as yet unknown location map/lineup.

On October 22, 2026, the public SDK page, documentation index, system requirements, FAQ, and Milan version history were rechecked. The FAQ describes remote participation using physical hardware at the host; this is not a boardless route. A public input interface for existing apps was not found within this check. [APP-VALIDATION.md](APP-VALIDATION.md) contains direct sources, an unexecuted test protocol, and unsent manufacturer questions.

See [TEBURU-DEEPSEARCH.md](TEBURU-DEEPSEARCH.md) for the source research performed and the changes applied. An official SDK request route exists; support for virtual input in existing apps has not been established. Sensor contact, identity and permanent playing position are separate matters. The one-pawn-per-sensor boundary is not a universal one-pawn-per-zone boundary. The official Milan version history mentions digital rolls and newer diagnostics via the separate Teburu app. Older general hardware claims must therefore be tested per app version.

End goal: Use unmodified official game app without physical game components. Sandbox is a research tool. True Core emulation and the feedback of app state to the virtual table remain unproven.

## Attached base

Primary source: [Xplored — Teburu Hardware](https://teburu.zendesk.com/hc/en-us/articles/25458765821979-Teburu-Hardware).

In summary, the board has forty sensors in an 8 × 5 grid, spaced 90 mm apart. The Core communicates with apps via BLE. Miniature identification via RFID is done at the Core; magnets serve for position recognition on the board. These are different functions. Dice determine their top side with accelerometers and transmit their outcome via the Core.

This confirms the hardware layer, not that Milan uses forty playable locations, nor that each location is one sensor. Our A1–H5 labels are not official identifiers.

The [official game page](https://games.teburu.com/vtm-milan-uprising) describes the role of the game app. The [app publisher listing](https://apps.apple.com/us/app/teburu-vampire-the-masquerade/id6739258011) specifies physical game and Teburu as requirements. No boardless mode verified.

## Open questions and secure verification

| Part | Still unknown | Next verification |
| --- | --- | --- |
| Core | supported SDK/API; session status; concurrent clients | find official developer documentation; if necessary, ask the manufacturer for permission later |
| BLE | GATT UUIDs, roles, messages, authentication, timing | only published interface or authorized observations of proprietary hardware; no inventing services/packages |
| Board | sensor index, orientation, lifting events, identification of newly placed pawn | systematically compare official diagnostics and own board |
| RFID | registration process, identity versus campaign data, permitted alternatives | observe documentation and normal scan flow; no copying or writing tags |
| Dice | pairing, dice ID, type, invalid roll, timing | test own d6/d10 via official diagnostics; demo RNG is not a replacement |
| App | manual mode, external input, reconnect, required hardware checks | Test official app on chosen platform with existing hardware |
| Milan | location profile, sensor/location relationship, stacking behavior | compare your own legal board/documentation; do not include scans in repository |

## Supporting primary sources

- [Official Manual](https://teburu.com/downloads/VtM/VTM_MU_GameManual.pdf): Reference for later game and location verification; only limited index text was readable via web extraction, no mapping derived from it.
- [Teburu diagnostics app, Xplored](https://play.google.com/store/apps/details?id=com.xplored.teburu.app): manufacturer offers checks of sensors and dice.

## Decision rule

A BLE radio or known raster is insufficient to emulate a Core. UUIDs, payloads, identity and possible security have not been determined here. The SDK exists, but has not been requested or reviewed as a solution for existing official apps. Without a permitted integration route, the end goal remains unfulfilled; only use sandbox as an explicit intermediate result. No app extraction, firmware patching or security circumvention.


## Continued: two-way link, October 22, 2026

[APP-INTEGRATION-RESEARCH.md](APP-INTEGRATION-RESEARCH.md) compares the connection routes and describes new static prompts: BLE/Network/WebRTC assemblies in the installation manifest and 45 location presentation files. No files or configurations inherited as protocol mapping. A read-only Windows probe stores its own preconditions and Bluetooth capabilities exclusively under `private/integration/`.

Preferred direction for research is an optional native helper with separate app input and state feedback. Test normal app flow first; remote participation and the SDK do not prove a boardless session. A BLE-Core route alone does not guarantee an influence condition. App not started, changed or connected; no service profiles or official messages have been implemented. The advice and the following experiments do not require prior contact with the manufacturer.