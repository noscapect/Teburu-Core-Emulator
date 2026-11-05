# Placement synchronization and manual corrections

The linked table copies observed official-app outcomes. It does not have a complete campaign-state interface. Hidden pieces and unrecognized app wording cannot be guaranteed to synchronize automatically.

## Named placements

### Sunset NPC batch and Il Dottore OCR — October 31, 2026

The reported Sunset batch showed Salvador Espartelo in Garibaldi, Il Dottore in Centrale and Hasanah in Città Studi. At inspection the first and third were already recorded, while OCR consistently read Il Dottore as `II Dottore`, leaving his placement unsupported. The outcome reader now accepts that single observed spelling for `npc-il-dottore`; it does not broadly replace letters or fuzzy-match other names. The character reader uses the same identity check to avoid reporting known NPC movement as an unknown player character.

The regression also exposed that `removed from map` contained the substring `moved from`, causing a false completed-movement parse. The shared movement parser now excludes explicit removal outcomes so the component-removal reader handles them. Tests cover canonical and observed spellings, placement, movement, removal, unknown extended names and ambiguous identities. A real-adapter replay verifies all three Sunset placements after two observations, unrelated-state preservation and idempotence.

The current recovery reader was extended to confirm named NPC outcomes across independent captures and submit revision-checked table-only instructions, including on recognized Sunset feeds. Il Dottore was placed automatically in Centrale; the shared browser verified all three NPCs at the stated locations without JavaScript errors. No gameplay input, app modification or Core restart occurred. The integrated sources are staged for subsequent adapter starts; private screenshots, observations and recovery logs remain under `private/npc-sunset-recovery/`.

The reader handles complete, known-component feed cards of the forms **[name] placed in [district]**, **placed at**, **moved to**, and **moved from [origin] to [destination]**. Completed player-character movement retains its separate reader and portrait-precedence rules. Explicit **Remove [name] from map** and **[name] removed from map** cards are supported. Cards are read in displayed order, the newest recognized instruction for each component wins, and an unreadable newest destination blocks an older placement. Two matching observations and calibrated map geometry are required. No missing-portrait inference is used.

### Agnese moved from Washington to Duomo — October 30, 2026

The observed four-line card `Agnese Della Luna / moved from / Washington to / Duomo` was previously ignored: only the shorter `moved to` form was recognized. A shared headless parser now matches complete known origin/destination names; splitting at the first `to` would incorrectly split Washington itself. Unknown newer routes suppress older placements. Known NPC movement is handled by the component reader without an erroneous unknown-character warning from the separate player reader.

Two fresh live observations confirmed the correction, and Agnese was copied to Duomo without sensor or official-app input. The temporary recovery worker handles named NPC outcomes while the existing adapter remains running; subsequent normal launches use the integrated parser. An isolated replay through the full adapter verified the two-read guard, preservation of an unrelated miniature and a Restricted token, and idempotence. The browser confirms Agnese in Duomo and absent from Washington. All 147 public tests passed with Node 26 and the bundled Node 22. General NPC portrait tracking on the ordinary city map remains unsupported; this fix relies on explicit feed outcomes.

Agnese Della Luna is a named story miniature in the inventory, not one of the scannable ally-role miniatures. Her recorded Sunset card, **Agnese Della Luna placed in Cadorna**, exposed the previous omission. The new reader and isolated adapter replay place her at Cadorna without scanning or sending movement to Milan.

## Any inventory component

Open **Pieces → Stock → Copy a placement or removal from Milan** when a placement is not recognized automatically. Search any of the 233 components, choose its confirmed district or Haven room and optional side, then use **Copy placement**, **Copy removal**, or **Copy side**. Verify the official app before copying. These controls change only our table; they do not deploy a miniature, spend Hunger, execute a game action, or send sensor input. Multiple identical markers have individual inventory identities; select the intended available token rather than inventing an extra copy.

Copies require the current table revision. Invalid identities, destinations, sides, duplicate components, and invalid companion occupancy are rejected before any state change. Other placements and sides are preserved. A deliberate manual correction for a miniature also clears its obsolete pending request without replaying input.

## Coverage and limits

### Cadorna Influence, Control and bonus — October 31, 2026

The official app showed Anarch Control, zero Anarch Influence and a Media Office reveal in Cadorna. The table retained old Anarch/Camarilla cubes and the other Control side. The observer supplied readable explicit outcome cards but no accepted full-map geometry, so the city-summary and bonus readers ignored them. These readers now share the established calibrated Masquerade-feed eligibility used by named miniature outcomes. This permits explicit known outcomes without treating unclear or covered map counters as a complete Influence map. Unknown layouts and network-error screens remain rejected; two independent observations are still required by the adapter.

Two recorded observations and two inspected images confirmed the Cadorna outcomes and absence of other Influence cubes there. The existing revision-checked component API removed the two obsolete cubes and recorded Anarch Control; the tile API recorded the visible Media Office bonus. The browser confirmed Cadorna's Control and absence of Influence cubes without JavaScript errors. No sensor or official-app input was sent. The corrected readers are staged for the next adapter start; the current session was corrected through the table-only APIs without restarting the Core. Private evidence is under `private/cadorna-recovery/`.

`node --test` passed all 544 discovered tests, including temporary copies. The focused parser test covers the observed OCR `O` for zero and rejection of unsupported displays/errors. The isolated real-adapter regression verifies first-read preservation, second-read Influence/Control/bonus updates, idempotence and preservation of another miniature and a Restricted token.

| Category | Current route |
| --- | --- |
| Player characters | App-led sensor input, completed-move cards, positively recognized portraits and supported Haven transitions |
| Named NPCs / story miniatures | Explicit named placement/removal cards; manual copy for other wording |
| Allies and ghouls | Confirmed deployment, supported setup portraits, Fixer map portrait, explicit named cards, Day cleanup; manual copy for other cases |
| Influence and Control | Calibrated visual readings, recognized absolute outcomes, and existing validation |
| Investigation markers | Positive visual markers and ordered encounter cards; other token sides are never inferred from absence |
| Other tokens and expansion pieces | Exact named cards when unambiguous, otherwise the all-component copy controls |

Unknown placement/removal cards and adapter validation errors are exposed as synchronization issues. The visible connection message directs the user to check an unsynchronized instruction. This is partial synchronization, not a claim that every current or future campaign screen is understood. Occluded portraits, pooled-token wording without an identity, arbitrary story instructions and unseen removals still require checking against Milan.

## Verification

On 26 October 2026 all 90 public tests passed. The new tests place and remove every component, validate sides and session replay, and check atomic rejection and preservation of unrelated pieces. Private recorded-image tests cover Agnese, two observations, explicit removal, unknown instructions and stale revisions. Browser fixture checks cover NPC placement, token placement and side, removal, and the visible warning. Existing character movement, influence retention, companion setup/cleanup, encounter-marker and map-recovery checks also pass. These isolated checks do not establish live acceptance of every official-app phase.

Activation and live verification are recorded separately after restarting the local adapter; source and tests alone do not establish that the running adapter has loaded this change.

## Live activation

After the user's manual adapter restart on 26 October 2026, the background reader recognized Agnese's card across matching observations and placed `npc-agnese-della-luna` at Cadorna automatically. Live status reported the outcome applied, no synchronization issues and no pending move. Browser verification confirmed the miniature on Cadorna, all 233 correction choices, filtering and a fitting mobile layout, without page errors or gameplay requests. Automatic coverage remains limited to recognized explicit outcomes and the existing supported visual readers; the all-component correction controls cover user-verified exceptions.

## NPC lineup on resume - October 28, 2026

The private adapter now also recognizes **Scenario setup → NPC placement**. The existing geometrically controlled portrait reader searches for NPC icons on the map. Two equal observations place the recognized part on our table; missing portraits don't delete anything. This reads the visible resume setup, not a full campaign save.

Checked live on the loaded game: Agnese Della Luna was in Milan in Washington, while our table still kept Cadorna. Once activated, the background adapter automatically corrected this to Washington. The browser check confirmed the miniature on Washington with no page errors. The isolated NPC and companion tests and all 94 public tests pass. Other NPC portraits and hidden parts of the loaded mode were not validated with this one live trial.

### Missing setup placements - October 31, 2026

The full screen readout was missing the gold title **NPC PLACEMENT** and therefore did not launch the setup portrait reader. The observer now also reads the fixed title box with a gold color mask and only accepts the explicitly recognized titles NPC/Allies/Ghouls Placement under Scenario setup. The portrait reader uses more image features: the detailed map previously displaced Helena's small portrait from the features budget. Geometry, scale, and district controls are retained.

The fix was activated in the running local adapter without any app input or restart of the Core. Two corresponding live sightings placed Agnese in Duomo, Helena in Isola, Leandro in Calvairate and Ruslana in Corvetto. The shared board page showed all four in their confirmed locations, with no JavaScript errors. The captured image was also checked with both OCR backends. An isolated adapter test checks the two-observation rule, idempotency, missing portrait retention, and sequential NPC, ally, and ghoul setup. Live ally/ghoul setup remains unproven with this NPC trial. Images, observations and runtime backup remain under `private/`.

Validation: `node --test` passed with 542 discovered tests, including temporary copies. The public suites individually passed 162 tests and `--test-concurrency=1`; a previous concurrent run had one transient `copyfile` error in an existing adapter test.


## Unconfirmed character movement recovery — October 30, 2026

### Orlando location-heading recognition — October 31, 2026

Whole-frame OCR read the active **Cinque Giornate** heading as `Cinque-Giorfiate`, while correctly recognizing Orlando Bianchi. With no exact known district, the adapter classified the screen as other and disallowed movement. The observer now independently reads neutral light lettering in the bounded location-title area on recognized Main/Sheet/End Turn screens. Both full and focused observation paths receive the observed title; district matching remains exact and does not guess from a character's previous position.

The recorded image produced the correct heading with Windows and portable OCR, and the focused reader preserved it. The observer update was activated in the running portable session without restarting the Core. Live status subsequently allowed Orlando's movement from Cinque Giornate; the user moved him to Porta Romana and the adapter recorded that destination with no pending request. The board browser confirmed Orlando at Porta Romana. No destination or movement input was chosen by the recovery check. Private captures and logs remain under `private/orlando-recovery/`.

The real-adapter replay verifies rejection of the misspelled heading, acceptance only after stable exact-title observations, and focused-screen movement eligibility. `node --test` passed all 546 discovered tests, including temporary copies.

An unconfirmed character move no longer blocks subsequent characters indefinitely. Fresh, stable active-character feedback for another character abandons the old attempt without confirming its destination or replaying sensor input. When Milan remains on the original location screen for the same character, fresh stable origin feedback after eight seconds also releases the attempt. Missing observations, an error screen, an unchanged timestamp or an unstable character observation do not release it. These checks do not establish district adjacency or implement Milan movement rules.

The linked board now offers a visible **Milan did not accept this move · clear pending attempt** button. Rejection matches the exact miniature, destination and request timestamp, preserves confirmed positions, and does not allow manual acceptance of character moves. Companion acceptance remains separately validated.

Validation: all 159 public tests passed. An isolated Edge check verified the visible rejection button, exact rejection request and cleared pending preview without sending real game input. The current portable session received a temporary recovery guard using the same policies and existing revision-checked table-only API; subsequent launches load the integrated adapter. Private observations and recovery logs stay under `private/`.


## Masquerade character relocations — October 30, 2026

Completed player-character movement cards are now also read on the calibrated 2560 × 1600 Masquerade screen. Previously the reader required ordinary city-map geometry, so explicit movement outcomes on this event screen were ignored. Recognition requires the Masquerade heading and complete known-character/known-destination outcomes in the established right-hand feed. It retains two distinct matching observations; prompts to choose a destination, unsupported displays and error screens are not treated as completed movement. The Confirm button is not required because its OCR can disappear between captures.

The four visible Corvetto outcomes were copied using the revision-checked table-only API after two distinct app observations. No sensor, scan or dice input was sent. Private evidence remains under `private/masquerade-recovery/`. A temporary reader supports the running portable session; subsequent launches load the corrected integrated reader. The public suite passed all 160 tests before the final removal of the unreliable Confirm-button gate; the four focused reader tests also passed after that adjustment.


## Helena Varga placement and map-counter noise — October 30, 2026

A standalone map counter to the left of the indented miniature-card text was merged into Helena's placement, making the destination unreadable. The shared completed-outcome feed reader now excludes standalone numeric map counters outside that text lane. It preserves numbers within destination text or the card lane: unknown destinations still fail recognition. The same feed boundaries and Masquerade support are used for named component outcomes and player-character relocations.

Two distinct matching observations confirmed Helena at Isola and the existing revision-checked table-only API recorded that placement. No sensor input was sent. A temporary targeted reader supports this running session; the corrected integrated reader is staged in the portable installation for subsequent launches. The parser regression covers the observed counter, inline/within-lane unknown destinations and the event-screen layout. Private observations remain under `private/helena-recovery/`.

## Masquerade Encounter Token – November 1, 2026

The explicit feed message **Masquerade Encounter added in Città Studi** was not processed by the component reader. The reader now accepts this completed placement notification for the unique Masquerade token. Only well-known city districts are taken over; a newer unknown destination blocks the older placement. The existing screen controls and two-observation rule are retained.

Two different current app observations confirmed Città Studi. The revision-checked table-only API recovered the token; the shared browser page showed it there with no JavaScript errors. No game entry was sent. The integrated correction is also stored in the portable installation for subsequent starts; the current session got the confirmed placement without a Core restart. Images and observations remain under `private/masquerade-token-recovery/`.
Validation: `node --test` passed all 548 discovered tests, including temporary copies. The directed parser regression also passed separately (7 tests).

### Masquerade Encounter removal – November 1, 2026

The follow-up message **Masquerade Encounter removed from Città Studi** is now also recognized. A known city destination is required; the latest visible addition or deletion determines the outcome. Deletion is handled before the motion parser so that `removed from` is not read as `moved from` with an incorrect character. A missing icon alone doesn't remove anything.

Two separate current observations confirmed the removal; the revision-checked table-only API brought the token back to stock. The browser check confirmed that it is no longer at Città Studi, with no JavaScript errors. No app entry or Core restart performed. The portable source files have been updated for subsequent starts. Evidence remains under `private/masquerade-token-recovery/`.
Validation: All 549 tests discovered by `node --test` pass, including temporary copies; the eight targeted parser tests also pass individually.

### Repeated message: correction on disk versus loaded code - November 1, 2026

The new message **Masquerade Encounter added in Isola** was handled correctly by the current source, but the running adapter did not report any component outcome. That process was started before both parser corrections and retained the old ES module in memory. The previous one-time API fixes had not activated the corrected recognition in the running process. Copying files alone does not activate an already imported Node module.

This existing session now runs a temporary background reader that only processes explicit Masquerade placements and removals through the same corrected parser. Two different recent observations, generation check, revision check and idempotency remain required. This reader only sends table-only corrections, stops at the end of the original adapter process or upon detection of the integrated current reader, and does not require an open browser or chat. Isola was automatically repaired and checked in the browser without any JavaScript errors. No game entry or Core restart performed. Private code, observations and logs are under `private/masquerade-token-recovery/`.

The portable source and generated runtime both contain the integrated reader for subsequent starts. From now on, `board-status.synchronization.readers.componentOutcomes` reports the actually loaded recognition version (`masquerade-lifecycle-v1`), even if no component message is visible. This makes the difference between stored and active code verifiable.

The real adapter replay goes through add in Città Studi, delete, add in Isola, delete and add in Duomo in one process. Older cards remain visible. Each transition requires two observations, remains idempotent on repeat, saves to the session, and retains the character and Restricted token. The recognized reporting cycle proves this; hidden or unreadable app results are not covered by this.
Validation: `node --test` passed all 549 tests discovered; the extended real-adapter replay also succeeded separately. Browser and later status check confirmed the token in Isola.

### Positive portraits separate from full influence map — November 1, 2026

The adapter blocked confirmed card portraits until the entire influence card was also stable. An unreadable or animated influence counter could therefore block a separately confirmed character position. The application now only uses the `confirmedCharacterMoves`, which has already been confirmed by two image observations, regardless of the influence map. Protection of input generation, error screen, busy state and pending character movement is retained. A single unconfirmed portrait will not be accepted.

The real adapter replay checks application with an unavailable influence card and retention with only an unconfirmed portrait. The running old adapter session receives the same limited correction via the temporary background reader; the portable source and runtime have been updated for subsequent starts. The loaded integrated version is reported as `synchronization.readers.mapPortraits: independent-confirmed-v1`.
Validation: All 549 tests discovered by `node --test` pass. The browser confirmed Helena, Aristide and Orlando in Cinque Giornate without any JavaScript errors; the user then confirmed that the visible board position matched.