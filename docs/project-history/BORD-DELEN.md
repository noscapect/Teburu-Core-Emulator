# Open game board on another PC

## Fix shared artwork routes — October 30, 2026

The sharing proxy now also allows the public `/games/<game-id>/artwork/` routes to pass through. After the module migration, the artwork catalog was loaded there, while the proxy only knew the older artwork routes. This caused a 404 and prevented the shared board from starting. The management routes and other module paths remain blocked. The two proxy tests and a browser test via the LAN address check login, visible map, readable session, and denied Core operation. The local linked Core remained connected during recovery. On an existing installation, the firewall rule must match the actual Node program path used; a rule for a system installation does not apply to the supplied runtime.

## Autostart — October 30, 2026

The default launcher now automatically starts the sharing server once the associated game adapter is ready, both from source code and in the Windows package. The server runs within the launcher and stops when exiting or switching games. Reopen checks that the server is running. The current address and a new access code are stored in the private game workbook; the Control Center shows a concrete error if sharing cannot start. A missing network connection does not block the local table. The existing firewall must allow the Node program in use and port 5182 for the local subnet.

The last used LAN address is reused if it still exists on a physical interface. If there is one suitable connection, it will be selected automatically; If there are multiple connections without a valid previous choice, an error message will appear. The separate source CLI remains available for explicit address selection. Tests check start, double open, stop, restart, address selection and error messages.

## Historical source version — October 29, 2026

First start the linked table and from the source checkout run `node tools/share-board.mjs JOUW-PC-LAN-IP`. The tool stores the current address and temporary code in `private/linked/board-share-state.json`; the Control Center shows them as soon as the sharing server is reachable. The current release candidate does not automatically start this optional sharing server and does not include this resource CLI. Descriptions below of auto-sharing by private launchers are from the older development setup. See [installation](../INSTALLATION.md) for the current main route. The access limits below remain in effect.

The private linked table can be opened on a second screen via the local network. The official Milan app and the Core will continue to run on their existing devices; both browsers use the same table session.

The normal addresses on `127.0.0.1` only work on the PC running the servers. The separate board link uses that PC's LAN address and port **5182**, for example `http://192.168.2.23:5182/board`. On the second device, use this link and enter the six-digit passcode that the sharing PC shows. The code is not in the URL. The code changes when the sharing server is restarted; the browser session is retained for a maximum of twelve hours.

Both devices must be able to reach each other on the local network. A guest network, client isolation or VPN can prevent this. Windows must allow incoming TCP traffic on port 5182. The local trial uses its own firewall rule for Node, the specific WiFi address, and the local subnet only. No router port or internet access has been set up. The address may change if the PC gets a different network address.

## What is shared?

The board page, selected board assets, current session, and board status are passed from the local adapter. Move requests go to the same existing adapter, including active player check and app confirmation. The sharing server does not add any game rules or hardware protocol.

Miniatures can also be dragged to another box via this link while holding down the left mouse button. After an update, refresh the page with Ctrl+F5. During the app confirmation, the last confirmed position remains visible. See [drag control](../games/milan-uprising/SLEPEN-EN-SENSOREN.md).

The [location tiles](../games/milan-uprising/LOCATIETEGELS.md) can also be selected and turned over via this link. This shared table data remains on the host PC. Two simultaneous changes use a revision control, so that an outdated browser mode does not silently replace the last change.

Core start/stop, pairing, tech logs, manual sensor input, and setup import are not available through this board link. The technical PC control on port 5180 remains local. The board link uses its own login, checks Host and Origin, limits incorrect code attempts, and shares only the committed board routes.

## Implementation and validation

`server/board-share.mjs` provides `createBoardShare({address, port, upstream})` with only built-in Node.js modules. The upstream must run on loopback; the bind address must be a local IPv4 address. The private start runner chooses an actual network address of this PC and displays the temporary access code. The normal public sandbox continues to work without this sharing server.

Tests check login, session cookie, passed board routes, denied admin functions, Host/Origin check, and bounded code attempts. A browser test via the LAN address on the host PC confirms login and the same 39 items placed without JavaScript errors. The user must still confirm reachability from the other physical PC.