# Official Windows installation — static check

Checked on October 22, 2026. The app was installed locally based on a specific user command, but not started. Only file names, default version metadata, PE architecture, and basic boot configuration were considered. No decompilation, protocol analysis, or game content extraction performed.

## Origin and reproducibility

- Official download route: https://xplo.red/VtM-Win-Download.
- This route referred to https://teburu.com/downloads/VtM/BuildWindows/VTMTEBURU_v1.0.9.zip. during the download
- Archive: `VTMTEBURU_v1.0.9.zip`, 1,014,542,313 bytes.
- SHA-256: `789E5C968445C18CDB8CD83EC7AE393FE6B3E58EB64ED4BA742C0ADE75E3EE56`.
- All 134 extracted files have been checked for presence and size correspondence with the ZIP contents. This is not a full integrity or runtime check. The hash identifies the local download; no independent manufacturer checksum was compared.
- Installed under `%LOCALAPPDATA%\Programs\Teburu\Milan Uprising\1.0.9\VTMTEBURU_v1.0.9`, with a Start menu shortcut under Teburu.
- The app and archive are outside the repository. No app files or protected assets were taken over.

## Findings and significance

| Observation | Significance for the project | Limit of the evidence |
| --- | --- | --- |
| `VTMTEBURU.exe` has PE machine code `0x8664` | This is a Windows x64 build; any native helper must take this into account. | No evidence of minimum Windows version or working run on this computer. |
| EXE product metadata names `6000.1.17f1`; `UnityPlayer.dll` and `GameAssembly.dll` are present | The app is a Unity build. Keep runtime version and game version separate in a test report. | Milan 1.0.9 follows here from the official archive name, not from an observed version screen. |
| `VTMTEBURU_Data/Plugins/x86_64/BleWinrtDll.dll`, file/product version `1.1.1` | The distribution includes a Bluetooth WinRT plugin. This is an indication of the Windows Bluetooth route. | No evidence of actual APIs used, GATT services, payloads, security, or virtual input support. |
| `webrtc.dll` is included | Note network/remote functionality as part of the normal app flow to investigate. | A library name does not prove a remote entry contract or access for our table. |
| No separate README, PDF or HTML manual found when checking for common documentation extensions | No included integration manual was found through this check. | No conclusion that a supported interface does not exist anywhere. |

The simple start-up configuration does not include a visible setting for boardless play or an external input adapter. This is only a finding about that configuration file, not evidence that such capabilities are missing from the app or SDK.

## What this doesn't deliver yet

No proven Core replacement, character registration, sensor/location mapping, session handshake, app-driven table updates, or usable digital roll. Internal game files are not a verified or freely reusable data package for our engine.

## Next verification

The concrete test protocol and the unsent manufacturer questions are in [APP-VALIDATION.md](APP-VALIDATION.md).

1. Once visible controls are possible: open the app normally and note the game version shown, start flow, device roles and the precise point at which a Core is needed.
2. Try digital rolls and any manual input via the normal UI only. If hardware blocks access, document that block; do not conclude that the function is missing.
3. Verify with Xplored that there is a supported virtual input/test interface for existing official apps and what is allowed to be deployed publicly. No request or message sent.

Only then can a real adapter be specified. The local `virtual-core` remains solely our behavioral simulation.


## Later static floor

The first check above is historical. On October 22, original textures were exported locally only by user command; see [ARTWORK.md](ARTWORK.md). The readable assembly manifest was then examined in more detail for BLE, network and WebRTC clues, 45 location presentation files were counted and a read-only boundary condition probe was performed. See [APP-INTEGRATION-RESEARCH.md](APP-INTEGRATION-RESEARCH.md). This is not runtime/protocol validation. Raw observations and fingerprints remain private.