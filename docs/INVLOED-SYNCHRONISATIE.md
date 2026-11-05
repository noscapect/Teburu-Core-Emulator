# Sync effect on the Android map

On October 24, 2026, Milan showed two St. Ambrose influences in Sant'Ambrogio, while the virtual table retained three cubes. The phase parser copied the three visible day phase instructions correctly, but did not check any other Android districts. This allowed numbers from an older game state to remain.

## Operation

The private Android adapter now checks all thirty visible influence counters on the calibrated city map. After two corresponding full reads, he makes one absolute influence update for the three factions per district. Decreases and lost influence are also processed in this way. Control tokens, characters, ghouls, allies, research, and location tiles are not changed by this map reading. This continues to require their separate sources.

A valid reading requires the known screen layout, map header, map border, and sufficiently recognizable, distributed map anchors. All thirty districts must be unique and each counter must be unambiguously readable. A colored or numbered box that cannot be reliably classified is considered unknown, not zero. The visible phase instructions are also compared with the map. If there is a difference, the full map update waits for a clear, no longer changing image. An incomplete or unknown reading does not clear the previous board position.

The existing explicit phase instructions continue to work independently when the entire map is not readable. Verification means visible map influence, not full campaign or board verification. Different screen layouts, poorly recognizable anchors, covered maps and missing USB access can temporarily prevent full map verification. Once the supported card is readable again, the background task checks again without Codex or an open board browser.

## Control

A separate issue with loading a component setup was a Investigation token left behind in Sempione. Influence and control were already correct, so the previous map comparison saw no change. The setup initialization now also clears old Investigation tokens, regardless of differences in influence or control. This is a one-time preparation of a re-offered lineup, not an inference that every empty map location during play must lack an Investigation token. This will not delete Restricted tokens, characters, and other categories. A new app instruction can then place another Investigation token.

The current cleanup has been checked live: the old token has disappeared and all thirty influence/control locations remain matched. A separate lifecycle test checks that a freshly attached token is retained during the same setup and that a subsequent setup clears old Investigation tokens again.

The test with the captured real Android screen recognizes all thirty districts, the decrease from three to two in Sant'Ambrogio and the three visible day phase instructions. An isolated session checks correction of old influence at an empty location, retention of all other components, two matching images, and idempotence. Unknown numbers, incorrect classification, missing or duplicate districts, and a contradiction to phase instructions will be rejected. The scenario loading regression and the night phase test continue to pass separately. Imagery, calibration and raw observations remain private/.


After activation, the correction was also performed live on the connected tablet: Sant'Ambrogio was updated from three to two St. Ambrose cubes. The accepted map reading included all thirty districts. On the shared board page, all ninety faction numbers were then compared with that snapshot and the placed influence cubes were checked in the renderer. No game actions or sensor contacts have been sent. All 54 public tests pass.