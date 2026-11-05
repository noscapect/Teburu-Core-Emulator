# Open the board on another device

Start TCE through its launcher and choose **Connect Android** for a module with a linked adapter. The launcher starts the LAN sharing server when that adapter is ready. The Control Center displays the board link and a six-digit access code. Open the link on the second device and enter the code. Both browsers use the same table on the host PC.

The link uses the host's LAN address and port **5182**, for example `http://192.168.2.23:5182/board`. A `127.0.0.1` address works only on the host. The access code changes when the sharing server restarts; an authenticated browser session lasts up to twelve hours.

## Network and troubleshooting

Both devices must be able to reach each other on the local network. Guest networks, client isolation and VPNs may prevent this. Allow the actual Node executable and incoming TCP traffic on port 5182 for the private network. Bundled Node uses a different executable path from a system installation. Router port forwarding is unnecessary.

TCE reuses a valid previous LAN address or chooses the only suitable connection. Multiple connections may require an explicit address. From a source checkout:

```powershell
node tools/share-board.mjs YOUR-PC-LAN-IP
```

A sharing failure does not block the local table. Quitting or switching linked games stops the managed sharing server.

## Available controls

The shared page displays the selected module's board and controls. Actions use the same adapter as on the host. See the [module guide](README.md#game-modules) for available pieces, corrections and confirmations.

Core start/stop, technical logs, pairing, manual sensor input and setup import remain local. The official app and Core remain on their respective devices. Sharing is intended for the local network.
