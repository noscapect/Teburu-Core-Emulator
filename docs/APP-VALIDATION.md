# Official app — authentication protocol

Prepared on October 22, 2026. Status: normal Windows setup partially completed; linked play not yet proven. Purpose: To use the unmodified Windows app with a virtual table, without physical game components. This protocol describes research questions, not assumed app screens or supported interface.

## Public findings

- The [official system requirements](https://www.teburu.com/requirements/) mention Windows 10 or newer, at least 2 GB RAM and Bluetooth 4.1 or newer. These are general requirements, not a successful compatibility test of our computer.
- The [official FAQ](https://www.teburu.com/faq/) describes remote participation with one physical Teburu at the host. This does not document a completely boardless session.
- The same FAQ mentions local autosave in a `SaveGames` folder. The precise location and operation for this Windows build are yet to be observed. Don't make our own session export equivalent to an official app save.
- The [SDK request page](https://www.teburu.com/request-sdk/) focuses on homegrown amateur games. The page does not prove virtual entry for existing games.
- The [documentation index](https://www.teburu.com/documentation/) provides general product documents and an SDK agreement; no public integration manual for our application was found on the index page.
- The [Milan Version History](https://apps.apple.com/us/app/teburu-vampire-the-masquerade/id6739258011) describes digital rolls on the Main Device during an ability check. Use this as a Windows test hypothesis; platform equality has not been established.

Targeted public searches for SDK/simulator and Milan/digital rolls/remote on the official domains did not return any additional verified input API. This does not prove that such an interface does not exist. No SDK requested or agreement accepted.

## Execution and form of proof

Use only normal UI controls and a separate test session. Record date, Windows version, game version shown, download hash and hardware present. The download identity is in [INSTALLATION-RESEARCH.md](INSTALLATION-RESEARCH.md).

For each test, record the actual steps, screen text, result and next blocking point. Outcomes are `passed`, `blocked`, `failed` or `not run`. An unreachable screen means `blocked`, not that the feature is missing.

Any screenshots, logs, device names, identifiers and proprietary hardware observations remain solely under `private/app-validatie/`. Do not include app files or game content in public test fixtures. Publish at most a short anonymized conclusion.

| ID | Operation via normal UI | To be determined | Current status |
| --- | --- | --- | --- |
| A01 | Start via the existing shortcut | Accessible home screen and game version shown; any boot error | Passed: home screen accessible; UI shows V.1.0.9. |
| A02 | View the setup choices offered | Actual available roles, manual entry and hardware-free options | Passed menu choices: Single/Multiple Devices, Main/Controller. No boardless entry in the settings viewed. |
| A03 | Try a new test session without Core | Last reachable step and explicit hardware requirement | Blocked: Single Device and Main remain at Plug the board / Searching; no campaign started. |
| A04 | View remote participation if offered | Does it require an active host or physical table? Do not publish join code | Partially viewed: Controller requests QR or connection code from a Main. No host linked; remote session not tested. |
| A05 | Achieve an ability check via the normal route offered | Click on the dice area of ​​the Main Device; note whether the app itself determines results | Blocked by previous setup; Windows digital roll not tested. |
| A06 | Test registration, placement and repeat contact via a documented entry route, if one is available | What input does the app accept without physical components? Without such a route: blocked | Blocked; no working virtual input connection. |
| A07 | Observe an app-driven change | Which location/marker/component state can reach our table via a supported route? Visual seeing alone does not prove an adapter | Blocked; not receiving a real game state. |
| A08 | Exit normally and resume the test session | App saves and restores progress; then establish consistency with the virtual table | Campaign resumption not carried out; no campaign has started yet. |

Do not use a firmware change, app patch, hidden debug mode or assumed BLE message to pass a blocked test.

## Decision rules for follow-up implementation

- Only digital rolls work: the app can remain roll authority; identity and table interaction remain separate open problems.
- Only remote participation works: usable as a companion to a host, but the purpose without physical parts is not proven.
- No supported input route found: record the exact blockage and let Xplored clarify the options. Do not implement transport based on DLL names.
- An interface is documented and permitted: first specify identity, contact versus position, session start, capabilities, errors/reconnection and app-driven updates; only then implement an adapter.
- End goal only proven when campaign start, registration/interaction, app-controlled roll, table updates and resume work together reproducibly without physical game components.

## Concept questions for Xplored

The draft below has not been sent. It only asks for public information; it is not an SDK request or acceptance of terms.

Subject: Supported virtual tabletop for the unmodified Milan Uprising Windows app

We are investigating an independent virtual table that lets the official Milan Uprising app own the rules, story and campaign. We use the official Windows download with archive name 1.0.9. The aim is to play without physical Teburu, miniatures or dice, while retaining the unaltered official app.

1. Does this existing app support boardless mode, manual input, virtual core, or developer/test interface?
2. Is the offered Teburu SDK suitable for this, or only for developing new games on physical Teburu hardware?
3. If so, what public documentation describes session start, character identification, position/interaction, and app-driven updates to an external table?
4. Can digital rolls be used in the Windows app without a physical dice, and does that still require a Core or other hardware checks?
5. What can be shared in a public independent implementation without including confidential SDK content or protected game assets?
6. If this route is not supported: is there an official alternative that meets this goal?


## Performed normal Windows check

On October 22, 2026, the unmodified Windows app started normally and was operated via the visible menus. The first start notification was handled with explicit user confirmation. The version indication on the setup screen is V.1.0.9. Single Device and Multiple Devices → Main Device lead to the Core search step. Multiple Devices → Controller Device shows connection via a QR code or connection code of an existing Main. No working boardless session has been started.

In this Windows build, Hardware Test is visible in the settings menu; the viewed page also searches for a Core. This deviates from the previously accessed App Store release notes and confirms that platform parity should not be assumed. The settings viewed included language/audio/privacy and tutorials, with no manual boardless input option found. This does not prove that every possible app route has been ruled out.

Screenshots and runtime data are only in the ignored private working directory. Confidential SDK findings remain individually private. No firmware, app binary or hidden configuration changed. SDK sample testing is a separate step and is not considered official app compatibility.

## Separate SDK runtime control

After normal Unity login, the private SDK sample builds and a separate local runtime trial passed on October 22, 2026. A proprietary test setup was used; this result does not apply to Milan. All source, configuration, executables, screenshots and technical test data remain ignored under `private/sdk/`.

The own test setup was then stopped and Milan was set as Main via the normal UI. During the subsequent check, no connection for the test trial was presented or found; Milan remained in the Core search step. No campaign has been started. This is a limited observation of this setup and build, not proof that any integration route is impossible. The next integration step continues to demonstrate an accessible input route to the unmodified app; the SDK test by itself does not complete that step.

## Private connection trial with the official app

The follow-up test on October 22, 2026 demonstrated a connection to the unmodified Windows app 1.0.9. Normal campaign preparation and character selection are accessible. The app itself offers the options to continue without a firmware update and without connected dice; these visible options have been used. The official app and firmware have not been changed.

When choosing a character, the app asks for a scan. Clicking on a portrait opens character information and does not complete the selection. Character registration, placement, repeat contact, digital in-game rolls and resumes have not yet been validated. No playable campaign or automatic link to our table has yet been demonstrated.

This is the current limited conclusion; the previous tables and test reports above describe the preliminary checks. SDK source, helper, technical connection details, screenshots and observations remain ignored exclusively under `private/`. This private trial is not a publicly available integration adapter or evidence of manufacturer support.

## boardless game trial and resume

The private follow-up trial with the unchanged Windows app 1.0.9 has now demonstrated four character selections with placement, a campaign start, a game action, a digital roll and a move. The app determined the throw and the cost of the move itself. Repeated contact with the same location did not cost an additional action point in the observed situation. In the Save & Quit and Load game, the moved pawn and the remaining action points were retained. The own synthetic identities have been reused; no physical tag identities copied.

During a turn change, an error message appeared about an invalid collection index. The offered reload button did not visibly resolve the message; After closing the message, the next player was active and the move could be made. This is not evidence that the error occurs independently of the test setup. The cause and reliability over multiple rounds remain open.

The physical table view is initially opened with an inherited snapshot. The follow-up trial below replaces that limited integration status. Technical data and local setup files remain private.

## Live table service and influence

The private follow-up trial on October 22, 2026 links the existing table view to the input route and separate window recognition. An actual click on the digital board moved the active pawn from Portello to QT8 in the unmodified Windows app. The table retained its old position until the app confirmed the destination in two consecutive observations. A request for an inactive character was denied without sending sensor input.

Then, a normal influence action in Milan increased the Anarch influence in QT8 from one to two. The visible app map yielded thirty location observations, 22 control tokens and twelve influence cubes; previously there were eleven cubes. The extra cube automatically appeared on our table. A separate browser check confirmed that the same transition is showing without a reload. An incomplete map observation was rejected; repeated identical map observations did not change session revision.

Locally, the linked board can be reached via http://127.0.0.1:5180/board as long as the private services and the linked Android helper are running. The public demo on port 5178 remains usable independently. The shared UI now waits for the result of asynchronous commands before reporting success; the headless engine remains unchanged.

This trial validates the movement and influence action described, not a full campaign. Moving requires the normal location page; influence and control are read when the entire app map is visible. Window recognition has only been validated on the tested app size. Complete city rounds, all numbers/markers and other characters or screen sizes still need to be tested. The previously observed turn change fault remains open. SDK-derived code, helper, configurations, screenshots and test data remain ignored under `private/`; no public adapter has been added.
