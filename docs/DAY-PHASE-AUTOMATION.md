# Day phase: adopt board changes

Examined and first section tested on October 23, 2026. The official manual describes the day phase on page 5 as the phase in which the Hand of St. Ambrose acts. Page 6 limits influence to three cubes per faction per location. Page 8 links the amount of enemy influence to the Masquerade. Source: [Official Game Manual](https://teburu.com/downloads/VtM/VTM_MU_GameManual.pdf).

The publisher also describes that the expansion of enemy factions is campaign-dependent. The Camarilla acts during the City Phase, St. Ambrose during the Day Phase. Source: [Xplored, The Camarilla and Second Inquisition](https://gamefound.com/en/projects/xplored/vampire-the-masquerade-milan-uprising/updates/18). That older design update is background information; the current official app determines the actual outcome.

## Chosen route

Copy the final influence counts displayed by Milan. Do not calculate your own enemy actions. The sensor contact with which a miniature is moved does not in itself provide our table with any final influence counts; this requires a separate feedback adapter.

| Itinerary | Possibility and limitation |
| --- | --- |
| Read on-screen instruction cards | Explicit location, faction and absolute number; the current English day phase has been tested with this. Only visible, fully recognized cards are adopted |
| Read complete app map | Suitable for checking and recovering from missed instructions. There is a private trial with a controlled snapshot; robust automatic recognition for overlays and other screen formats is not yet ready |
| Calculate enemy influence yourself | General rules do not provide enough information to reproduce campaign-dependent app decisions. No own rule implementation has been added for this |

## Implemented cross section

The private adapter recognizes the day phase screen and reads the visible English instructions of the form “location now has number of faction influence”. Two matching observations are required. An unknown location, duplicate message, or invalid quantity blocks the takeover of that screen. Unknown control instructions are not converted to assumed cubes or control tokens.

This runs independently in a local background task, without Codex or an open board browser. See [start and standalone verification](STANDALONE-INTEGRATION.md).

The public, headless function `buildInfluenceArrangement(profile, state, updates)` only receives explicit final influence counts. It preserves other factions, characters, control tokens, and token sides, checks the available supply, and delivers one existing `table.arrange` command. Nothing is added to each reading: reapplying the same end positions changes nothing. Inventory decrease is processed before increase. Engine, session format and rules mode do not change.

In the real Android test, three visible St. Ambrose instructions were automatically adopted: Sant'Ambrogio 3, Solari 3 and Sempione 1. The browser check via the LAN board link confirms the numbers and repeated reading without duplicates. This happened without sensor input or pressing Confirm. The entire project suite passes with 42 tests.

## Boundaries and sequels

This cross-section is calibrated to the current English tablet screen. Non-visible or clicked-away log lines are not reconstructed afterwards. The status therefore reports the number of **visible final influence counts**, not that the entire day phase has been synchronized. Other languages, control takeovers, NPC moves, scrolling logs, and general phase transitions require additional examples and testing. A next step is a full map comparison before the phase is marked as complete. The player will continue to operate Confirm in the official app.

## Expansion Sunset on October 24, 2026

The captured Android notification during Sunset contains, in addition to final influence counts, an explicit command to remove control from QT8. The parser now recognizes this instruction. The public pure builder `buildBoardInstructions` combines final influence counts and explicit check removals into one atomic table command. Only control tokens in the named district go to the supply; influence, research, characters and other locations are retained. Repetition changes nothing.

The notification about a new Fixer is recognized as an announcement. Without a placement destination, no miniature will be moved. The Sunset parser and full background processing were tested with the captured OCR observation in a separate test session, without a browser, HTTP requests, or changes to the real campaign. After the break, the real app was back in the connection setup; this Sunset extension has therefore not yet been accepted again on a live Sunset screen.

## Haven feedback

The first Haven implementation recognized a next character, but not the transition from the last character to the day phase. That missing attachment route has been added and tested separately. A sent Haven destination is retained until recognizable confirmation; A stably recognized day phase screen can also provide this confirmation. Latebra's previously missing position has been restored to Haven 3L by user instruction; her original sensor destination was not logged and has not been independently proven.

## Recover after loading a campaign

On October 24, 2026, the saved digital table appeared to still contain the later day phase position while Milan loaded an older campaign. The private adapter now recognizes the English screen **Scenario setup → Components setup** on the verified tablet resolution. He reads all thirty districts and checks the influence and control totals separately against the three faction legends. Only two matching full readings may replace the table. Missing quantities, duplicate locations or different totals block the acquisition.

This has been done live: 22 control tokens and 11 influence tokens have been taken from the loaded setup screen, including the removal of outdated influence. The standalone background task did this without a board browser. A separate trial with the captured tablet screen checks OCR, two readings, repetition, invalid observations, and retention of other components. The real board page was checked in the browser.

This only proves synchronization of **influence and control** in this setup screen. Characters, location tiles, and story markers require separate observations. The board page shows this boundary explicitly; old positions in those categories should not be considered verified loaded modes. There is no full campaign export from the official app yet. The Android gameplay map now has a separately calibrated control for all visible influence counters; it does not blindly reuse the setup calibration. See [influence synchronization](INFLUENCE-SYNCHRONIZATION.md). Recognized day, sunset and movement instructions continue to be processed independently.

After Continue, the real loaded campaign **Scan your Character** appeared. The linked board page now offers seven named scan buttons for this purpose. The player chooses; a scan is not a placement and does not change board position. The private backend checks the current app screen and reader availability before input. The existing LAN board relay only shares the separate board scan route in addition to the previous board routes, behind the same access code and origin control. UI behavior and relay have been tested; the positive UI trial intercepted the scan, did not send any actual game input and did not confirm any actual scan acceptance by Milan.

Then the real app showed Simona with a placement order to Haven 2L. This setup step was initially not recognized, so the user did not see any actionable action. The private adapter now links the registered scan to the recognizable Haven marking. A separate placement button can also send the existing position to Milan: the same position still requires a sensor contact during setup. A different destination will be refused before import. Board positions are only confirmed after a recognizable app confirmation.

The destination marker flashes. Therefore, the adapter stores a twice-observed destination within the same character setup step; a different destination, different player or different screen invalidates that recognition. This behavior has been tested with varying observations. The button was checked on the real LAN board page; the positive button test used an intercepted input request. Acceptance of this new setup placement by the official app has yet to be tested by the player. Only the observed Haven setup screen is covered by this; other placement geometry requires additional verification.


## Start of the night: characters moved by Milan

On October 24, the visible summary **Night 1 has begun** was recorded with four separate notifications of Simona, Orlando, Latebra, and Dante being moved to QT8, plus removed control in QT8. This is a result notification from the official app, not a request for four new sensor contacts. The previous parser only recognized this screen as a city map, leaving the miniatures in their old Port positions and blocking dragging.

The adapter now reads the explicitly mentioned names and destinations. After two matching observations, it adopts the visible moves and control removal in one atomic board update. Names, destinations and duplicate entries are checked; misunderstood relevant instructions block the takeover. It is not assumed that every character will go to QT8 on every night. Influence, ghouls, allies, location tiles and other markers are retained unless there are separate valid instructions for them. Replay changes nothing and no sensor contacts or game choices are sent.

The captured real view trial checks all four destinations, two readings, idempotency, retention of remaining components, and rejection of unknown names/destinations. This isolated trial works without a board browser, game input, or readable save profile. The final positions also appear during the normal status refresh of the board browser. An already closed overview must become visible again to be able to check a new live takeover; the adapter does not play old screenshots on the active campaign.


The full influence check supplements these explicit phase instructions and also corrects old numbers in districts not mentioned on the visible phase maps. See [operation and verification](INFLUENCE-SYNCHRONIZATION.md).