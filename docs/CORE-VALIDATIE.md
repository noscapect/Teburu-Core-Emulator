# Validate virtual hardware separately

## Current addition — October 28, 2026

All 26 private Core regression scenarios pass, including the new LED ring test for firmware migration, atomic storage, error handling, restart, and stable simulated battery. The virtual Bluetooth test is also successful. After activation, the unmodified Teburu app 1.2.0 on the real tablet shows ring version 1.15.0, Firmware up to date and 46% / 3852 mV. This is proven by the version and battery display, not running official firmware or full hardware compatibility. See [firmware simulation](FIRMWARE-SIMULATIE.md) and [Prospero](games/milan-uprising/PROSPERO.md).

The older numbers and test results below belong to the indicated research phases.

Updated on October 23, 2026: The next step is to implement and test the behavior of the physical Core separately. Running through a new Milan campaign is not an appropriate regression test for every hardware change. The official app retains ownership of rules, rolls it performs, story, and campaign saves.

## Test layers

### First roll after discovery

Updated on October 25: The user confirmed that the previous timing fix by itself did not fix the double rolling. That trial covered new listeners, but not the full roll cycle and presence errors. The private adapter therefore now adds a separate transition **sufficiently rolled, still moving** before the final stalled result. Both messages contain the same once-determined values; no second throw is made. The presence notification uses a neutral diagnostic state that does not cause a game callback for insufficient rolls.

The extended independent decoder test now also checks sufficient rolls, accepted complete cycles and insufficient rolls. A negative trial reproduces the error callback from the old presence message. The virtual Bluetooth test checks the extra phase and the same value before and after stalling. The Core regression suite has 23 success scenarios, including cancellation and no redetermination of values ​​during this transition. After activation, the user confirmed on October 25 that Milan is processing the first roll. This is a user confirmation of that game trial; the decoder outcome alone was not proof of this and does not demonstrate full campaign acceptance.

The private Bluetooth adapter transmits the discovery of an unknown that before its first roll starts, with a short registration time in between. This order does not change anything for already known dice. No second roll, additional result, or UI chosen outcome is added. Disconnecting or disabling during registration cancels the ongoing entry.

An independent decoder test reproduces why the old direct combination was vulnerable: a listener that is registered upon discovery then misses the first roll start. He will receive it with a separate notification and roll start. The virtual Bluetooth trial also checks the actual time between discovery, movement and result. This substantiates the correction; acceptance of one click on a real Milan throw remains to be checked separately live. The public suite has 63 successful tests.

### Simulated battery and presence

The private Core gives each virtual die its own stable simulated battery level, well above a low charge warning. The level remains the same upon waking, rolling and reconnecting; it is not a measurement of a physical battery. The status explicitly states that the load is simulated.

During an active game connection, registered dice are periodically reported as present, even if the player is only using one. These notifications pause during a roll, do not invent a result, and do not change the chosen dice selection. Merely logging in again was insufficient to refresh previously known dice states.

The private regression suite has nineteen successful scenarios, including stable load, wake-up without throw, and status notifications without changing saved values. The independent decoder test confirms healthy battery levels and checks that additional status messages do not cause new start or result callbacks. Raw observations, decoder contents and virtual identities remain under private/.

1. **Offline Core Tests:** session status, all forty contacts, concurrent contacts, release, scan conditions, native synthetic identities, and disconnect recovery. No radio, tablet or campaign needed.
2. **Independent SDK Control:** The native SDK reads the generated input and provides the expected callbacks. This checks the interpretation outside of our own encoder.
3. **Virtual Bluetooth Test:** discovery, connection, subscriptions, commands, notifications and disconnects between individual software controllers.
4. **Physical Acceptance:** The unmodified Milan app on the real tablet uses the PC Core. Only this layer proves operation with the app; a successful SDK test does not replace this proof.

The private offline runner compiles the same Core source as the adapter, without Windows Bluetooth libraries or access to app data. Test source, fixtures and reports remain ignored under `private/`. The public demo will not have an SDK dependency.

## Current coverage

| Function | Stand-alone coverage | Milan on real Android tablet |
| --- | --- | --- |
| Open/close session and reset | Regression test, including one hundred recovery cycles | Connection and setup confirmed; recovery even more broadly tested |
| Forty temporary contacts | Release all separately, together and independently | Some destinations confirmed |
| Offer character | Scan conditions, cancel, seven synthetic selections | Four characters registered |
| Radio settings | Confirmation and internal condition | Connection proven; no proof of full hardware coverage |
| LED ring / light commands | Ring notification with its own identity, native SDK decoder, virtual Bluetooth transport and limited color projection | User confirms **Connected** with Prospero on October 25; full animations remain open. See [Prospero](games/milan-uprising/PROSPERO.md). |
| Five virtual physical d10s | Own fixed identities, group and selection rolls, native SDK callbacks and Bluetooth virtual transport | All five recognized on the setup screen; game checks still tests |
| Update firmware / write tags | Explicitly not supported | Normal app option to continue without update used |
| Influence and lasting pawn position | Separate feedback adapter | Android map transfer still incomplete |
| Save and load campaign | Responsibility official app | Not yet confirmed on Android |

The offline run passes sixteen scenarios, including ten existing comparison files. These comparison files are regression references; they do not in themselves constitute independent evidence. The report explicitly states that no radio or official app was used.

The additional independent SDK test checks all forty individual contacts and releases, forty simultaneous contacts, and each individual release without losing the other contacts. The virtual Bluetooth transport also passed on all forty contacts and releases. The motion adapter was monitored with simulated app observations for eleven miniatures × forty destinations. This is software coverage; physical acceptance at each destination remains necessary separately. See [drag control and evidence limits](games/milan-uprising/SLEPEN-EN-SENSOREN.md).

The original SDK recognizes five separate synthetic d10s and their independent values, even when delivered in split messages. The test involves all ten values ​​of the first d10 and then a group roll with all five. The private adapter provides a random physical value from one to ten per chosen die; the applicant cannot specify a desired outcome. Each die retains its own locally stored identity. This is input to the official app, not our own calculation of gaming success.

The private PC control offers five checkboxes, shows the last values ​​sent and can throw one to five selected dice. Empty or duplicate selections will be rejected. Unselected dice are not rerolled. The browser control tests a full roll, a selection of two and blocking an empty selection.

The Bluetooth virtual test found that longer messages were truncated at the default packet size. The adapter now splits notifications based on available packet size. The transport test checks complete reception, five different identities, full and partial throws, rejection of simultaneous throws, and cancel on disable or disconnect. This was tested with software controllers, without a physical radio.

The subsequent physical test with the unchanged Android app confirms recognition of the first virtual d10 on the setup screen and a visible change from one to five on the second roll. After loading the expansion, the same official setup screen shows all five dice, with the same five values ​​as the private PC Core. The app shows firmware and battery warnings because the virtual dice do not yet offer usable telemetry for this. This does not prove a successful play check, group check, or campaign save.

## Targeted acceptance after hardware testing

### Research token on the Android map — October 25

An actual visible Investigation token for Cinque Giornate was incorrectly linked to Buenos Aires: the app places the token above the regular location position, so the physical map polygons do not provide a reliable assignment. The private recognizer now uses separate, bounded marker anchors within the already checked Android map geometry for this purpose. The current Cinque Giornate recording and the earlier Washington recordings, including the setup variant, pass the regression test.

Stability of Investigation tokens is checked separately from portrait recognition, so that a moving or covered portrait does not block their acquisition. Only repeated positively observed tokens are added; an illegible or missing image does not delete existing tokens. The incorrect local placement was corrected with a pre-saved table copy, without changing other positions or the official campaign. The living PC table and browser now show one Investigation token on Cinque Giornate. Repeating does not add a duplicate; all 75 public tests pass. This is limited to the controlled Android map view.

### Setup for a new campaign

An empty table with only four characters is not a complete game setup. On October 23, the current Android map for all thirty districts was read and checked separately: 22 control tokens, twelve influence cubes, four characters and one Investigation token, together 39 placed parts. A second screenshot confirmed the same influence and control before the atomic takeover. Orlando is in Portello in this snapshot; the other three characters on QT8. This concerns the current campaign during Night 0, after the first actions, and is not an unchanged starting setup or general starting preset.

The private setup import retains the already confirmed Investigation token, checks inventory and unique locations/characters, and rejects an incomplete or invalid entry without partial changes. Repetition does not change the session. The browser check confirms all 39 placements. The image readout is calibrated only on the monitored tablet screen; general automatic card transfer has not yet been proven.

Open acceptance requirement for each **New Chronicle**: end the previous table session, assemble the complete setup requested by Milan and only show completion after all necessary components have been checked. Then copy the first movements and new markers. That automatic initialization workflow has not yet been implemented; a saved snapshot of our table also does not replace a save from the official app.

During the Android tutorial, actual board instructions are also visible: the observed map notification confirms one Anarch influence in Portello and the next encounter in Sempione. After checking the screen and user confirmation, the cube and the Investigation token were placed on the private digital table. The processing preserves other parts, atomically rejects invalid combinations, and does not add duplicates repeatedly. A browser check confirms the placements. This is explicit adoption of this instruction, not yet general automatic recognition of the Android card. A tutorial may require real board changes; The mere presence of tutorial explanations is not a reason to skip a requested board action.

On Android, test successively discovery and reconnection, character scan, repeated location contact, a normal throw and a group throw. Then check a real **Save & Quit** and **Load Game**, retaining position and action points. Keep this outcome separate from the previous Windows trial, which did show resume.

The last Android session resulted in game actions and two successful digital app throws via the tutorial. A group throw was then left to wait; Save & Quit was still disabled. The cause is unknown. The missing physical die entry is an implementation hole, not a proven explanation of this blockage. For now, the digital board shows an inherited starting position with four characters, not a fully updated Android game state.

## Waking five virtual dice separately — October 24, 2026

The linked board page now has **Wake 5 dice**, also via the protected LAN link. The action is only available during hardware setup, with a connected Core, a Milan-opened dice channel, and no roll in progress. Waking up reports the five existing, own virtual dice again. It doesn't start a roll or choose results. The board page shows how many dice are logged in; this local counter in itself is not an app confirmation.

The real Android trial was conducted from the shared board page. Milan then showed five dice spaces and offered **Continue without updating**. The Core reported five registered dice, no rolling roll and no new results. The screen also showed firmware, battery and **Throw again** indications. This proves discovery in this setup screen; valid game rolls and full dice compatibility do not follow from this. No firmware update has been performed or security controls have been changed.

The private codec regression succeeds with 17 scenarios, including separate wake-up, repeated login, rejection of throws during the setup channel, and no results upon wake-up. The virtual transport test confirms five discovery notifications without a throw, in addition to the previous sensor, throw and reconnection checks. The public suite passes 49 tests, including passcode and origin check for the new board route. Browser checks confirm actual wake button, auto screen fit and drag retention. Protocol code, own identifiers and images remain private.