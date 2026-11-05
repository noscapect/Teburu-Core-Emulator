# Firmware simulation

In the local Control Center, open **Simulated firmware → Simulate update · Core + 5 dice + LED ring** to update the virtual devices' compatibility status.

| Virtual device | Target version |
| --- | --- |
| Core | 2.32.0 |
| Five dice | 3.39.0 |
| LED ring | 1.15.0 |

TCE updates only its own simulation state. No official firmware is installed or executed. The official app's firmware update button and bootloader transfer are unsupported.

Progress and errors appear beside the button. Versions are saved only after successful completion. Retry after interruption or a write failure. **New simulation available** means the saved state does not contain the current targets.

Reconnect the official app after completion to refresh its version information. A Core restart preserves saved versions. Simulation does not move pieces, choose a roll result or change the official campaign.

Ring and dice battery values are simulated, not physical measurements. The versions above are the shared runtime's current targets. Acceptance has been demonstrated only for tested app versions, not every Teburu game. See the [module guides](README.md#game-modules) for support. After a connection or timeout message, check the displayed status before retrying.
