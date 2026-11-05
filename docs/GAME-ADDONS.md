# Add games to TCE

Open **Start-TCE.cmd** or the installed TCE shortcut. The game library lists supported modules. Click **Add game** for each game you want; multiple games can stay enabled independently. You do not have to disable one to add another.

If the module's artwork archive is already present, TCE installs and enables it immediately. A module with a registered acquisition recipe can download a verified source and extract its selected artwork in the background. Download size, disk requirements and available sources belong to the [module's guide](README.md#spelmodules). Progress and errors appear on its card; other games remain usable. Use **Retry adding game** after a failure. The current extraction provider never installs or starts the source game and removes temporary client files after success.

Once ready, **Open tabletop** opens the module's standalone table. For a module with a linked Android adapter, **Connect Android** opens its controls when TCE was started through its launcher. Install the module's official Android app separately. Use **Set up automatically** in the complete Windows package to prepare the shared PC prerequisites; tablet detection then runs automatically. App-specific requirements are listed with the module. See [automatic setup](AUTOMATIC-SETUP.md).

**Disable game** keeps its files and saved sessions, and does not disable other games. If it is the current linked game, TCE finishes its Bluetooth cleanup before disabling it. Games can all remain enabled, while the current launcher runs one Android/Core session at a time. Switching linked games closes the previous session safely.

## Archives supplied separately

Each module declares its own artwork archive. Place a matching archive in the running application's `resources` folder, then click **Check resource folder again** and **Add game**. TCE displays the actual folder path; the module guide gives its archive name.

| Edition | Resource folder |
| --- | --- |
| Source checkout | `<repository>\resources` |
| Portable release | `<extracted TCE>\resources` |
| Default per-user installation | `%LOCALAPPDATA%\MilanUprising\resources` |

The default installation folder retains its existing name for compatibility; it contains TCE and its modules.

Use the displayed folder when a custom installation directory was chosen. Copying an archive into the original download folder after installing TCE elsewhere does not update the installed copy. Keep the resulting archive: if it disappears, that game becomes unavailable even if its extracted images remain. Other games, settings and saves are preserved. Restoring the same archive restores its previous installation and enabled state.

## Source edition

The included archives keep the standalone source edition dependent only on Node. Automatic extraction additionally needs Python with `UnityPy==1.23.0`; the packaged Windows release includes the correct runtime and all extraction dependencies. No Python installation is needed for release users.

A missing artwork archive does not prevent installing TCE itself. The SDK and official Windows client ZIP are not bundled. Release builders can find packaging instructions in the [project release guide](RELEASE-REVIEW.md).
