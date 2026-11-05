# Install TCE on another computer

## Windows pre-release

Download `TCE-0.1.0-windows-x64.zip` from the [GitHub release](https://github.com/noscapect/Teburu-Core-Emulator/releases/tag/v0.1.0). The package excludes game artwork and includes Node, Python/NumPy/OpenCV, UnityPy and its pinned extraction dependencies, and self-contained .NET helpers. Extract its ZIP and run **Install-TCE.cmd**, then use the desktop shortcut. This installs for your Windows account and preserves private settings on upgrade. **Start-TCE.cmd** also runs directly from the extracted folder. No system Node, Python, .NET SDK or extraction-tool installation is needed for this packaged edition.

In a linked module's Control Center, accept the setup/Android tools terms once and choose **Set up automatically**. TCE prepares missing Windows components, Linux, Bluetooth sharing and app helpers in sequence. Text recognition is included and needs no Windows language installation. Already installed components are reused. Approve Windows permission prompts; if a restart is needed, reopen TCE and choose **Continue setup**. Connect and unlock the Android tablet by USB, allow debugging and open the selected game's official app. Follow the module's display requirements and choose **Start Core**. See [automatic setup](AUTOMATIC-SETUP.md) for recovery and exceptional manual steps.

This is an early pre-release. Complete installation with physical hardware on a clean second PC remains unvalidated. The source edition below requires development tools for linked play.

First open the TCE game library and choose **Add game** for an available module. This downloads/extracts its artwork through the module's supported acquisition route, or uses a matching archive you supply separately. For Milan, allow about 1.01 GB of downloads and roughly 3 GB free disk space. The source game is not installed or started. Choose **Connect Android** for a module with a linked adapter, then follow the PC/tablet steps above. Multiple modules can remain enabled; the launcher runs one linked session at a time. See [adding games](GAME-ADDONS.md) and the [module guides](README.md#game-modules).

## Table with the included artwork

Install Node.js 22 or later, then clone or download this repository:

```powershell
git clone https://github.com/noscapect/Teburu-Core-Emulator.git
cd Teburu-Core-Emulator
npm start
```

Open http://127.0.0.1:5178 for **Your games** and choose **Add game**, then **Open tabletop**. With the selected module's artwork archive supplied, no npm packages, Python, SDK or developer-private files are required for the standalone table. Keep that archive. The current Unity artwork acquisition provider additionally requires Python with `UnityPy==1.23.0` in the source edition; the Windows package includes it. Archive names and extraction sizes are specified per module. No Git LFS is needed.

The table starts with its own empty sandbox session. Export/import your tabletop JSON if you want to transfer a position. Another person's campaign, device identities and pairing secrets are never included.

## Connect the unmodified official app

### Advanced manual Windows preparation

On Windows, double-click `Start-TCE.cmd` to open the game library, add a supported module and choose **Connect Android** when it offers a linked adapter. Its Control Center opens only when requested. A source checkout requires Node.js 22 or later; the packaged candidate uses its included runtime.

Normally use **Set up automatically**. The controls below are retained under **Advanced setup and troubleshooting**. The **Prepare this PC** panel checks WSL, Debian's WSL version, usbipd and available USB Bluetooth adapters. Checking does not install software, share a USB device or start Core. You can then choose:

- **Install WSL**: opens Microsoft's installer with a Windows administrator prompt. It installs WSL without installing or deleting a distribution. If Windows requests a reboot, save your work, restart and reopen the app. The app never reboots Windows itself.
- **Install Debian**: installs the supported Linux distribution for the current user, keeping existing distributions. **Finish Linux setup** opens Debian for any account setup prompts. An existing WSL1 Debian is not automatically converted; the panel links to Microsoft's conversion instructions so users can back up their data first.
- **Install usbipd**: opens the Windows Package Manager installer for the exact `dorssel.usbipd-win` package. Its prompts and agreements remain visible. This installer adds its normal USB-sharing service and local-subnet firewall rule. If Package Manager is missing, the panel links to Microsoft's App Installer.
- Select a detected **Bluetooth adapter** and choose **Prepare selected adapter**. After a separate confirmation, Windows asks for administrator permission to share only that adapter. An already shared radio can be saved with **Use selected adapter**. Neither button attaches it to WSL or starts Bluetooth. TCE records the selected USB bus in its private configuration, so two identical adapter models are not silently interchanged.

Progress, cancellation, installation failures and restart notices appear in the panel. Reopening the app after an interrupted operation never automatically repeats an installer: use **Check again** and retry the required step. Existing distributions are never removed, the default distribution is not changed, and no automatic firmware, official-app or radio-driver modifications are performed by our setup helper. usbipd itself is installed through its normal Windows installer.

For the source edition, the .NET/Python/ADB prerequisites and app-helper build below are still needed. Once the panel has saved an adapter, `npm run setup:linked` can reuse the saved adapter and distribution without typing their identifiers. Prepare the Windows components before running that command; restart `npm run linked` after the helper build. In the packaged candidate, use **Prepare app helpers** instead.

Implementation references: [Microsoft WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install), [WSL commands](https://learn.microsoft.com/en-us/windows/wsl/basic-commands), [USB setup](https://learn.microsoft.com/en-us/windows/wsl/connect-usb), and [usbipd-win](https://github.com/dorssel/usbipd-win).

### App helpers and tablet connection

The optional linked table includes its own integration source and helpers. The original Teburu SDK is neither included nor required to build this runtime.

The current linked runtime targets Windows 10/11 and official Android apps with an implemented TCE adapter. Install the official app normally. Compatibility and screenshot language, orientation and resolution must be checked in the [selected module's guide](README.md#game-modules); Core emulation does not imply universal app support. The source edition requires an authorized USB debugging connection, Android Platform Tools (`adb` on PATH), .NET 8 SDK, Python 3 with the `py` launcher, WSL2 with a Linux distribution and Python 3/venv, and usbipd-win. Source setup downloads the pinned English OCR model and prepares the local reader; the packaged edition includes it. Windows English OCR is optional. These tools are prerequisites for linked play, not for the standalone table.

1. Connect your own tablet over USB and approve USB debugging. `adb devices` must list exactly one authorized device. Open the selected module's official app; capture is restricted to that module's registered app.
2. Use `usbipd list` to identify the Bluetooth adapter you intend to use. Record its VID:PID and bus ID. Do not copy the original developer's adapter settings. Sharing this radio with WSL temporarily disconnects its Windows Bluetooth devices; choose an appropriate adapter for your machine.
3. Prefer **Prepare this PC** to select and share the adapter with a Windows confirmation. For manual preparation, use an administrator terminal to share only that adapter with `usbipd bind --busid YOUR-BUS-ID`. Neither path starts the radio. No PC rename, firmware installation or official-app modification is performed.
4. Run the build/setup below, substituting your adapter and installed WSL distribution. This builds the two local .NET executables and installs the Python dependencies in dedicated environments. For an ADB outside PATH add `--adb=C:\path\to\adb.exe` (quote the complete option if it contains spaces).

```powershell
node tools/setup-linked.mjs --usb=YOUR-VID:YOUR-PID --distro=YOUR-DISTRIBUTION
npm run linked
```

5. Open http://127.0.0.1:5178, choose the game and **Connect Android**. In its Control Center press **Start Core on PC**. Only this explicit action attaches the configured shared adapter to WSL. Use the official app's normal Core connection flow, then open the linked tabletop.
6. Use **Stop Core** when finished: the app stops its helper and returns the radio transfer it recorded. Use **Quit app and return Bluetooth to Windows** to also close both web services. For a radio you manually attached outside this app, detach that device yourself with `usbipd detach --busid YOUR-BUS-ID`; the app does not automatically detach someone else's transfer.

`npm run linked` starts the TCE library. **Connect Android** prepares shared infrastructure plus the selected module's adapter in its isolated ignored workspace. New machines generate their own synthetic identities and transport secrets. Shared PC configuration is in `private/tce-machine.json`; game sessions, captures and diagnostics remain in their module workspace. The developer workspace under `private/integration/` is neither read nor copied.

If prerequisites are missing, the standalone artwork table remains available. A real app connection still requires the above hardware transport setup; cloning cannot configure or authorize another computer's Bluetooth adapter or tablet.

From a source checkout, share the linked board on your LAN with `node tools/share-board.mjs YOUR-PC-LAN-IP` in another terminal. The Control Center displays the generated URL and access code. The linked launcher starts LAN sharing automatically; the source CLI remains available for selecting an address manually. Allow the Node service through your firewall for your private network if Windows asks. Technical Core controls remain local; this command does not change firewall rules automatically.

## Updating

Pull changes and restart. The linked launcher refreshes only the distributed runtime source and preserves its private settings and sessions. Re-run setup after changing build dependencies or C# code. Do not run files under `integration/runtime/` directly: they are templates for the private runtime.

For source changes, test commands and acceptance evidence, see the [project documentation](README.md#development-and-project-review).
