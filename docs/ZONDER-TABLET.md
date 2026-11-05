# Replace tablet or use as Milan screen

Surveyed on October 22, 2026. This is a choice for the next integration trial, not a new compatibility claim. The existing limited live trial remains described in [APP-VALIDATIE.md](APP-VALIDATIE.md#live-table-service-and-influence).

## Outcome

**Chosed next direction:** After this research, the user opted for the official Milan app on a physical Android tablet, with the virtual table and Core helper on the PC. The emulator route remains an alternative. The Windows helper has now been built locally; the answers were compared with ten existing test fixtures from the private Android helper. The physical Windows radio accepts the necessary GATT service and both characteristics. This proves no connection to Milan on the tablet.

The official Android app 1.0.9 was found on the connected tablet and opened via the normal UI up to the Core search step. USB screen readout has been tested with user-confirmed debugging. The strange old helper has stopped. The new input route and screen source are individually selectable; there is no silent fall back on the old Windows app. Bluetooth discovery and real gaming action from the tablet have yet to be proven. Technical source, data and images remain private.

The physical tablet receives the connectable PC ad, but with the Windows computer name. The temporary change of the regular Bluetooth name and a restart of the radio do not correct that BLE name. A name correction within our helper process alone will also not reach the advertisement name. Both Milan and the official Teburu app remain disconnected during their search step; no app commands were received. The user rejected a Windows computer name change and an additional USB adapter. The additional scan app is for diagnostics only and is not part of the intended playing setup.

The sequel is therefore **Bumble in WSL with temporary transfer of the existing radio via USB/IP**. Debian and the separate private helper environment are prepared. Two proprietary virtual controllers have proven ad name, discovery, GATT entry, notifications, and sensor reset in both Windows and Linux, using the same decoder as the previous helper. The PC control reaches the new Linux helper via localhost. These virtual tests themselves prove the software chain. [Microsoft describes USB transfer to WSL](https://learn.microsoft.com/en-us/windows/wsl/connect-usb); the device is unavailable to Windows during that transfer. The subsequent physical test had a three-minute limit and automatic refund.

**Physical follow-up test passed:** After explicit permission, the built-in radio was temporarily transferred to WSL. The unmodified official Milan app on the real tablet showed 'Connected!'. The Core processed app commands and sent responses; campaign selection was achieved via the normal options without firmware update and without physical dice. The user confirmed that the app was working and reported quitting it themselves. After the trial, the radio was returned to Windows and the USB/IP sharing was removed; a residual partial registration required additional recovery. No additional radio was purchased, computer name changed or tablet helper used. Character registration, board control and a full game round via this Android setup remain to be tested. This is a successful connection and setup test, not full game validation.

The most promising route investigated to completely remove the physical tablet is the **unchanged Android version of Milan in Android Emulator, with a separate virtual Core via Netsim/Bumble**. The radio connection is then established via software between two virtual devices. This is a substantiated technical candidate; Milan has not yet started or connected to this. This is not the main route chosen by the user.

The official Milan app on a physical Android tablet is also an option. However, that moves the Core function to the PC or other device; Putting the current helper and Milan on the same tablet does not automatically result in a connection. In addition, the automatic state feedback must then be able to read the tablet screen.

| Setup | What changes | Main open point |
| --- | --- | --- |
| Current Windows Milan + Android Helper | Proven limited trial; tablet provides BLE | Tablet remains necessary |
| Android Milan in emulator + virtual Core on PC | Completely software-based on one PC; no physical Bluetooth radio for this pairing | Launch Android app, ABI/Play compatibility, test virtual GATT and Milan together |
| Windows Milan + helper on the same Windows radio | Tablet would disappear | Previous generic trial advertised, but connection to own radio did not yield a device |
| Windows Milan + separate USB radio for helper | Replace tablet with small USB transmitter | Own radio/stack required; don't assume two radios under the same Windows stack |
| Android Milan on tablet + Windows helper | Tablet becomes the official game screen; board remains on PC | Still testing discovery/naming, BLE input and feedback from tablet |
| Android Milan on tablet + Bumble in WSL + existing PC radio | Rename your own advertising name without a PC or extra radio | Temporary exclusive radio transfer interrupts Windows Bluetooth; still testing physical connection |

## Why the emulator route is serious now

The previous general comment that an Android emulator does not replace the Core remains correct, but is insufficient to reject this position. [Android documents Classic and BLE from API 31](https://developer.android.com/studio/run/emulator-networking). [Netsim](https://developer.android.com/studio/run/emulator-networking-advanced) provides a virtual radio environment without physical radios.

[Bumble explicitly describes a GATT server that communicates with Android apps in the emulator via `android-netsim`](https://google.github.io/bumble/platforms/android.html). The [transport documentation](https://google.github.io/bumble/transports/android_emulator.html) calls the older `android-emulator` route obsolete. So use Netsim for a new trial. This documentation proves generic transport capability, not Milan compatibility. A virtual Core remains required separately.

A read-only host check was performed locally with `tools/check-tablet-alternatives.ps1`. The machine result is only listed under `private/integration/`. An active hypervisor does not prove that the appropriate Windows acceleration layer for Android Emulator is usable; check that later with `emulator -accel-check`.

## Limits of Windows and a physical tablet

The existing private Windows trial was able to advertise a GATT service but failed to demonstrate a connection to its own radio. The current machine has one physical Bluetooth radio detected. This is not proof that any single PC setup is impossible; a simulated Android radio is another route.

[Microsoft limits name fields and reserved ad types in the publisher API](https://learn.microsoft.com/en-us/uwp/api/windows.devices.bluetooth.advertisement.bluetoothleadvertisementpublisher). The generic GATT test therefore does not prove that a Windows helper also works with the discovery required for Milan. [Windows supports one radio per native Bluetooth stack](https://learn.microsoft.com/en-us/windows-hardware/drivers/bluetooth/bluetooth-faq). [Bumble describes a separate USB radio via WinUSB](https://google.github.io/bumble/platforms/windows.html); this requires its own driver binding. The existing radio and its connected input devices have not been changed.

The official [Android app is on Google Play](https://play.google.com/store/apps/details?id=com.xplored.teburu.vtm). Availability for this specific tablet or emulator must be determined through the normal installation. The current helper is linked to an Activity and stops at `onDestroy`; it was not built as a persistent background service. So just switching between apps is not a tested solution. With Milan on tablet plus Core on PC, that helper is no longer there, but our current Windows window reader then no longer works: a separate, user-authorized screen source is needed. Transferring Windows saves to Android is not validated.

## Next trial for the chosen tablet setup

Follow-up on October 23: Four characters have been registered via the PC Core by the official tablet app and their placement on QT8 has been confirmed. The campaign was started via the normal setup. The four confirmed positions have been transferred to the digital board; the browser check passes without JavaScript errors. This is not proof of a game action, digital roll, resume or automatic card transfer on Android. The radio trial has ended and Windows has the radio back.

During a subsequent trial, the connection remained active and the character registration was repeated. At the end of the introduction, Milan reported a `COROUTINE` error: `Object reference not set to an instance of an object`. Normally closing the notification left the introduction without a follow button; saving remained disabled. The cause has not yet been determined and cannot be attributed solely to the app or its helper. This error blocks the first Android game action; connection and registration should not be presented as full playability.

1. Correct the actual broadcast PC name via a user-allowed route and recheck it on the physical tablet.
2. Prove a connection and real game input with the unmodified Milan app on the tablet, without using the old Android helper.
3. Calibrate the individual Android screen reader on a real map and repeat move, influence change and resume. The existing Windows trial does not prove this Android chain.

## Alternative emulator trial and acceptance

1. Prepare an isolated Android Emulator with appropriate image and check acceleration. Keep the current Windows campaign intact.
2. First prove generic discovery, GATT write and notification between emulator and a native virtual device via Netsim, without Milan identity or SDK content in public code.
3. Install Milan from an official source and check launch, graphics and availability for the chosen architecture. No APK patches, hidden mode or control bypassing.
4. Run the private Core implementation on the proven virtual transport. Repeat registration, location entry, official roll and resume with the unmodified app.
5. Adjust the individual screen reader to the Android display. Repeat a real influence change and control the board without reloading.

The physical tablet can only be considered unnecessary when this chain runs reproducibly without the tablet. Technical Core code, data, screenshots and observations remain ignored under `private/`. The public demo will not have an emulator or Python dependency.