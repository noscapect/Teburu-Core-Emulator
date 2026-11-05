# Teburu and Milan Uprising — technical research

Reading Guide, November 5, 2026: The public source study and early negative runtime outcomes below are historic. Subsequent limited interaction with the unmodified official app and supported board updates are in [VALIDATION](VALIDATIE.md). General statements such as “no working official app bridge” describe the research phase at that time. Full campaign compatibility and manufacturer support remain unproven; current functions are in [README](../README.md).

## Distribution status — October 29, 2026

The required own derived runtime code and the allowed artwork selection are now in the repository. The original SDK, machine configuration and individual identifiers remain excluded. A Windows review package is built locally; the release workflow was not executed. This does not change the app compatibility proof boundaries below. Follow [installation](INSTALLATION.md), [release-review](RELEASE-REVIEW.md) and [validation](VALIDATIE.md) for the current distribution and open acceptance tests; the dated source and runtime records are historically preserved.

## Current local evidence status — October 28, 2026

The public source study and dated runtime reports below are historical. A limited private link with the unchanged official app has now been demonstrated; this does not make the public sandbox a full emulator. The resumed NPC setup screen was checked live with Agnese in Washington. In the unchanged Teburu app 1.2.0, LED ring version 1.15.0 and the simulated battery display 46% / 3852 mV have also been confirmed. The ring orientation on the board was corrected with a separate browser trial. See [placement synchronization](PLAATSINGSSYNC.md), [firmware simulation](FIRMWARE-SIMULATIE.md) and [validation](VALIDATIE.md).

These are local observations, not new public source claims, full campaign validation, or evidence of manufacturer support. Private source code, identifiers and raw observations remain under ignored private/.

Current runtime outcome as of October 22, 2026: The unmodified Windows app started normally and the offered setup choices were viewed. Single/Main waiting for a Core; Controller requests connection to an existing Main. The individual private SDK builds and local runtime test passed; the normal Milan-Main setup did not produce a connection on this trial. No campaign or virtual input connection with Milan proven. See [APP-VALIDATIE.md](APP-VALIDATIE.md). The historical research stages below are not a current statement that the app has never been started.

Researched October 21, 2026. Public sources only; no app unpacked, hardware read, SDK requested or agreement accepted. This report replaces previous assumptions where explicitly stated below.

Follow-up on October 22, 2026: the official Windows build has now been downloaded and unpacked for local installation by user command. Static installation findings are in [INSTALLATIE-ONDERZOEK.md](INSTALLATIE-ONDERZOEK.md). The historical download findings below remain dated October 21; the app did not start for this sequel either. No SDK requested or agreement accepted.

## Final goal and conclusion

The end goal is to use the official Milan app, and later other official releases, with a virtual table without physical game components. The official app remains the owner of the story, rules and campaign. Our table ultimately needs to provide a permissioned input/display bridge. Your own game implementation or separate sandbox does not fulfill this end goal.

The public sources explain system-level operation, but do not provide a proven route to get the official app to accept a virtual Core. BLE UUIDs, payloads, authentication, session handshake, RFID data format and real sensor numbering have not been established. No working board emulation claimed.

## 1. Core, sensors and game position

[S1 — Xplored Hardware](https://teburu.zendesk.com/hc/en-us/articles/25458765821979-Teburu-Hardware) describes 40 magnet-sensitive sensor locations in an 8 × 5 grid. The Core provides RFID identification and BLE to the app. One sensor detects one miniature at a time; that is not a maximum of one character per game zone. After registration, a cone within the zone can be moved aside, after which another uses the same sensor. The system remembers the logical playing position. Not every physical miniature has to be smart; app-controlled pieces can be placed and attached according to the app. The hardware page describes general Teburu operation, not all Milan details.

**Applied:** temporary sensor contacts and permanent zone placement are modeled separately in a local input simulator. Releasing Sensor does not remove a character. The interaction study has four demo pawns sharing one zone. Four is our demo capacity, not a proven Milan rule. The original one-pawn-per-cell demo remains available separately.

## 2. Identification and context

[S2 — Xplored Core/Board troubleshooting](https://teburu.zendesk.com/hc/en-us/articles/25458704157595-Troubleshooting-your-Teburu-Core-and-Board) distinguishes the RFID scan on the Core from position detection on the board. An incorrect active character can cause incorrect assignment. Board orientation counts; some sensors are not active in a game context.

**Consequence:** a contact does not automatically contain a reliable RFID identity. Our simulator uses explicit selection of a synthetic demo miniature, without tags or real identifiers. The real identity assignment and event timing remain unknown. A1–H5 remains a self-selected demonstration mapping, not an official sensor or Milan location mapping. Repeated contact in the same zone only produces its own interaction intention; no fabricated Milan move.

## 3. Dice Radio vs. BLE

[S3 — Nordic Semiconductor, August 1, 2022](https://www.nordicsemi.com/Nordic-news/2022/08/Xploreds-Teburu-employs-nRF52833-and-nRF52805-SoCs) describes nRF52833 in the board and nRF52805 with IMU in dice. Dice and LED Ring use Nordic ESB at 2.4 GHz according to that historical hardware description; the Core/board side uses BLE towards the app. This is manufacturer information about the design at the time, no guarantee that every later model or firmware is identical. So a Bluetooth adapter alone does not mean that original dice communicate directly with our browser.

**Applied:** local RNG only, no fake connection to dice. The Milan interaction profile offers d10. The neutral reference demo retains d6/d10.

## 4. What the official Milan app can already do

[S4 — Xplored version history in the App Store](https://apps.apple.com/us/app/teburu-vampire-the-masquerade/id6739258011) has recorded digital rolls via the Main Device's dice area during checks since version 1.0.4. Version 1.0.6 fixes digital rolls; later entries describe Main/Controller and Remote situations. The 1.0.9 notes move hardware diagnostics to the separate Teburu app. This corrects the overly general previous assumption that physical dice are always needed. It does not prove that the Core or setup requirements are eliminated, or that every platform build works equally. The store description continues to require physical game and Teburu.

**Applied:** official digital rolls are first route to be tested; own throws are simulator input only. In a true app bridge, our RNG and rules should not be a secondary authority. Historical Hardware Test instructions within the game may be out of date.

## 5. SDK exists, direction and permission not yet proven

[S5 — official SDK application](https://www.teburu.com/request-sdk/) can be accessed from the current site. [S6 – linked agreement](https://www.teburu.com/uploads/media/documents/policy/en_teburu_sdk_agreement.pdf) mentions confidentiality, restrictions on disclosure and amateur use. Nothing has been requested or accepted. The SDK is offered for game development on Teburu; that proves no possibility or permission to replace the Core for an existing official app. Confidential SDK content does not belong in this public repository.

**Next Verification:** Request through a user-approved route whether a supported virtual input mode, developer bridge, or boardless test mode exists for existing games. This report is not a legal opinion on rights or interoperability.

## 6. Why a browser button 'Connect Bluetooth' doesn't solve this

[S7 — Chrome Web Bluetooth Documentation](https://developer.chrome.com/docs/capabilities/bluetooth) describes the browser as Central that connects to GATT servers. That is the direction to read hardware. It doesn't prove browser support to advertise us as a Core to an official game app. Such a route may require a native/helper or external peripheral layer; that is an architectural hypothesis, only to be chosen if protocol information and host support are permitted. No fabricated UUIDs or BLE writes are implemented.

## 7. Milan Components and App Responsibility

[S8 — official physical inventory](https://teburu.zendesk.com/hc/en-us/articles/25458904976667-Physical-components-VTM) lists for retail one d10, seven character miniatures, two allies, two ghouls, influence cubes, and various tokens. [S9 – Official Introduction](https://teburu.zendesk.com/hc/en-us/articles/25458903969819-Introduction-to-VTM-Milan-Uprising) lists four characters for one to four players and Chronicle as the campaign. Four demo pawns therefore have a substantiated group size, but do not replace the real character identities or inventory. Not all parts are sensor-tracked pawns. Extensions change the component set; therefore, releases remain separately configurable.

The [public game manual](https://teburu.com/downloads/VtM/VTM_MU_GameManual.pdf) was consulted locally, including visual inspection of pages 9 and 12: moving uses adjacent locations; markers/cubes represent additional state. No card images, scans or game texts are included in the public source code. The adjacency and orientation of the map are not guessed from images.

## 8. Official Downloads

[S10 – current download page](https://www.teburu.com/game-apps/) provides Milan links. Windows link https://xplo.red/VtM-Win-Download led to https://teburu.com/downloads/VtM/BuildWindows/VTMTEBURU_v1.0.9.zip with HTTP 200 during a HEAD check. Only reachability and file name checked; not installed, implemented, substantively validated or redistributed. For Android: https://play.google.com/store/apps/details?id=com.xplored.teburu.vtm. Use the official page for current downloads; not our public repository as app distribution.

## 9. In-depth and limitations of the source research

- Targeted searches for Teburu + GitHub/BLE/GATT/UUID/emulator/reverse engineering did not return a verified public deployment of a Milan-compatible virtual Core. That is not proof that such a project does not exist anywhere. Many results concern Japanese word lists or another Teburu app.
- Community/Reddit SDK references were used as a search trail; technical implementation choices above rely on primary sources.
- [S11 — Xplored patent publication WO2021019587A1](https://patents.google.com/patent/WO2021019587A1/en) describes the concept of identification plus magnetic position context. A patent is not a shipping protocol specification or permission. No patent conclusions regarding legal status have been drawn.
- [S12 — Historical Hardware Testing](https://teburu.zendesk.com/hc/en-us/articles/26772665489179-Hardware-Testing) describes sensor, dice and LED testing and noting app/firmware versions. Use the newer S4 diagnostics route first; existing instructions are version dependent.
- Do not use confidential Discord content, account information, secret SDK documents, or app binary as a source.

## 10. Decision points and acceptance for the real end goal

1. Check the official Windows app through the normal UI: Home Screen, Core Requirement, Main/Controller/Remote, Digital Dice and any allowed manual input. Record version and result. No installation/app change in this research step.
2. Verify with Xplored whether SDK/other interface correctly supports existing official apps and what can be shared publicly. An SDK for new games is not automatically our bridge.
3. Match an allowed route: specify real messages, identities, session start and response; choose native or other transport layer on evidence. Keep confidential data out of the public repo.
4. Proof with the unmodified official app: start campaign, allowed character registration, move/interaction, digital roll, app-controlled markers on our table and resume session, all without physical game components.
5. Repeat for another release using only a new profile/adapter configuration where possible. Only then can we speak of a working digital board replacement.

Until that test, the status remains: local behavioral study, no working official app bridge. A lack of supported integration becomes an explicit feasibility problem, not a tacit shift to a proprietary game clone.

## Addition 0.7

The installed Windows app 1.0.9 is now examined as a readable local artwork source only. 79 selected texture exports are outside of Git, including the sharp map that confirms Portello, Sempione and Argonne. Previous research notes on uninspected app files describe the phase at that time. Still no official app launched or protocol/hardware compatibility tested. See [ARTWORK.md](ARTWORK.md).


## Continued: two-way link, October 22, 2026

[APP-KOPPELING-VOORONDERZOEK.md](APP-KOPPELING-VOORONDERZOEK.md) compares the connection routes and describes new static prompts: BLE/Network/WebRTC assemblies in the installation manifest and 45 location presentation files. No files or configurations inherited as protocol mapping. A read-only Windows probe stores its own preconditions and Bluetooth capabilities exclusively under `private/integration/`.

Preferred direction for research is an optional native helper with separate app input and state feedback. Test normal app flow first; remote participation and the SDK do not prove a boardless session. A BLE-Core route alone does not guarantee an influence condition. App not started, changed or connected; no service profiles or official messages have been implemented. The advice and the following experiments do not require prior contact with the manufacturer.


## Status update: SDK available locally

On October 22, 2026, the user made an SDK archive available locally. Intake and initial static assessment were performed under ignored `private/sdk/`. The additional technical findings and test prioritization remain there; no confidential SDK content is published. Previous passages on missing SDK access describe the preliminary research phase. No SDK code, messages, or configurations added to the public deployment. Official app compatibility remains unproven.