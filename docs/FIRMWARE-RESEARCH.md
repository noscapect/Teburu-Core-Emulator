# Firmware as an independent research source

Investigated on October 24, 2026, after the user opened the official Teburu app on the tablet and asked to intercept a firmware update to investigate Core behavior.

## Outcome

Interception is not necessary for this first step. The installed official Teburu Android app **1.2.0** already contains separate firmware update archives for Core, dice and LED ring. Only the bundled Core archive was copied to the ignored research folder via the existing authorized USB connection. The official app and firmware have not been changed; Update was not pressed and no firmware was sent or installed.

The board package filename refers to **2.31**. That does not prove that this is the latest online version, or that the Virtual Core is running this firmware. At the time of this research, the virtual Core reported version 0.0.0. By user request, a [separate simulated update with persistent compatibility versions](FIRMWARE-SIMULATION.md) now exists; it also does not run official firmware.

## Checked properties

| Property | Observation |
| --- | --- |
| Package | ZIP with application manifest, firmware image and initmetadata |
| Size ZIP | 145,117 bytes |
| Size image | 144,288 bytes; equal to the size in the initmetadata |
| Integrity | SHA-256 of the image corresponds to the hash in the initmetadata |
| Signature | Signed metadata envelope present; signature not cryptographically verified or modified |
| Debug indicator | File name contains debug; init metadata has its debug flag disabled |
| Supplied source/symbols | No C source files or ELF file in the update package |
| Technical instructions | Vector data and readable module references indicate Nordic nRF52/ARM microcontroller code; exact token not yet confirmed |

Recognizable module references include BLE, radio, LED control, USB, timers and the RFID driver. These are starting points for static analysis, not evidence that their full operation has yet been reconstructed. Exact bytes, module paths, archives, hashes, and analyzes remain private; protected firmware is not published.

The manifest and init metadata are in line with the DFU format documented by Nordic. The official [protobuf schema](https://github.com/NordicSemiconductor/pc-nrfutil/blob/master/nordicsemi/dfu/dfu-cc.proto) describes application size, hash, and signed command envelope, among other things. The [S113 documentation](https://docs.nordicsemi.com/r/bundle/sds_s113/page/sds/s1xx/s113.html) describes the respective BLE stack for nRF52 systems. Finding such references does not prove a complete token or version identification.

## Usefulness for the virtual Core

The firmware can serve as an additional, independent reference for command handling, state transitions, error responses and timing. First, concrete differences with the already observed app/SDK behavior are examined. Findings receive separate testing in our own implementation and then acceptance with the unmodified app.

A microcontroller image does not run directly as a Windows program. Execution in a full hardware emulator should also model missing memory layout, BLE stack, radio, RFID and other peripherals. The first line of research is therefore static analysis, without firmware patches, security bypass or a falsified version claim.

Furthermore, a future update-capture mechanism should model a separate update/bootloader route. Simply clicking Update does not guarantee a full transfer to the existing PC Core. The official [update description](https://teburu.zendesk.com/hc/en-us/articles/25458803972635-Teburu-system-Updates-Upgrades) describes an update process with reconnection; the current virtual Core does not support that process.