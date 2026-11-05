# Automatic PC preparation

This route requires the complete packaged Windows edition. For a source checkout, use the [manual installation instructions](INSTALLATION.md).

Open the Control Center through **Connect Android**, accept the setup and Android tools terms, and choose **Set up automatically**. TCE prepares WSL2/Debian, usbipd, one Bluetooth adapter and the Android/Linux helpers in sequence. Existing components are reused.

TCE automatically selects a single suitable radio. If several are available or the saved radio is missing, it asks you to choose. Preparation does not start Core or transfer the radio to WSL.

## Restarting and retrying

Approve Windows administrator prompts to continue. If Windows requests a restart, save your work, restart, reopen TCE and choose **Continue setup**. TCE never restarts Windows itself. A pending system update can pause preparation until after a restart.

Errors and cancellations appear in the same card. **Retry setup** repeats unfinished work. Checking status alone never restarts an installer.

Existing Linux distributions and accounts are preserved. The helper uses its own account. An existing Debian on WSL1 is not converted automatically; follow **Advanced setup and troubleshooting** for conversion instructions.

## Connecting the tablet

After **This PC is ready**:

1. Connect and unlock the Android tablet over USB.
2. Allow USB debugging and open the selected game's official app.
3. Wait for the automatic tablet check and follow the [game module's](README.md#game-modules) language, orientation and resolution requirements.
4. Choose **Start Core** and connect through the official app's normal flow.

Use **Stop Core** to return the radio. **Quit app and return Bluetooth to Windows** also closes the services. Closing only the browser does not stop TCE.

## Text recognition and troubleshooting

Text recognition is included in the packaged edition; no Windows language pack is required. Missing or damaged recognition files are reported separately. The connection can be ready while automatic board synchronization is unavailable; repair the TCE installation in that case.

Manual component controls are under **Advanced setup and troubleshooting**. If Windows App Installer is missing, setup provides a Store link. See [installation](INSTALLATION.md) for radio, USB and connection issues.

A complete first-time installation with physical hardware on a clean second PC remains unvalidated. Support for every radio, tablet or display layout has not been established.
