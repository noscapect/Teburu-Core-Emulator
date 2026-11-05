# Milan Uprising-module

Deze module voegt **Vampire: The Masquerade – Milan Uprising** toe aan [TCE](../../../README.md): bord, componenten, artwork, tafelbediening en een adapter voor de officiële app. Core-emulatie, transport, installatie en sessie-infrastructuur worden door TCE geleverd.

## Beschikbaarheid en appvereisten

Milan is momenteel de enige geregistreerde spelmodule. De module biedt een zelfstandige handmatige sandbox en een optionele gekoppelde tafel. Registratie, beweging, dobbelsteeninteractie, hervatten en bepaalde bordupdates zijn beperkt met de ongewijzigde officiële app aangetoond. Volledige campagnes en alle uitbreidingen zijn nog niet gevalideerd.

Voor gekoppeld spelen is de officiële Android-app nodig. Schermherkenning is afgestemd op **English, landscape, 2560 × 1600**. Gebruik de [algemene installatie](../../INSTALLATION.md) om TCE en de pc voor te bereiden; open daarna Milan en verbind via **Connect Android → Start Core**. Het Android-pakket is `com.xplored.teburu.vtm`.

## Installeren en artwork

Kies **Add game** bij Milan. De module gebruikt `resources/milan-artwork.json.gz` met 156 geselecteerde afbeeldingen. Ontbreekt het archief, dan kan de pakketeditie de geverifieerde officiële Windows 1.0.9-client downloaden (ongeveer 1,01 GB) en de beelden extraheren. Houd ongeveer 3 GB schijfruimte vrij. De Windows-game wordt niet geïnstalleerd of gestart. De broneditie vereist voor extractie ook Python/UnityPy.

Het archief moet aanwezig blijven. Milan gebruikt `private/bundled-artwork/` voor de beeldcache en `private/linked/` voor de adapterwerkmap. De gedeelde TCE-pc-configuratie staat in `private/tce-machine.json`.

## Bord en sessie

Het bord bevat dertig stadsdistricten en tien Havenkamers. Klikgebieden benaderen de gedrukte kaart; ze vormen geen geverifieerd aangrenzendheidsmodel of complete campagnebeginstand. De voorraad bevat 132 basiscomponenten en 101 onderdelen uit zes uitbreidingen.

De sandbox voert geen automatische Milan-regels uit. Plaatsingen zijn handmatig. Bewaar een JSON-export vóór sluiten of herladen. Import controleert profiel, events en eindtoestand; undo/redo bewaart maximaal honderd lokale handelingen. Een profielwissel migreert geen sessie stilzwijgend.

Bij gekoppeld spelen bepaalt Milan de invoer. Een aangevraagde plaatsing is voorlopig gemarkeerd totdat herkenbare appbevestiging volgt. Verborgen of onleesbare onderdelen kunnen ontbreken; een onzichtbaar icoon is geen verwijderinstructie. Spelkeuzes, kosten en campagnevoortgang blijven in Milan.

## Handleidingen

- [Miniaturen slepen en bevestigen](SLEPEN-EN-SENSOREN.md)
- [Scannen, geladen groep en invoerherstel](SAVEGAME-PERSONAGES.md)
- [Bondgenoten en ghouls](ALLIES-EN-GHOULS.md)
- [Locatietegels en Havenkamers](LOCATIETEGELS.md)
- [Tafel legen en gedeeltelijk herstellen](TAFEL-LEGEN.md)
- [Herstel vanaf de stadskaart](KAARTHERSTEL.md)
- [Onderzoeksmarkers synchroniseren](ONDERZOEKFICHES-SYNC.md)
- [Uitbreidingen](UITBREIDINGEN.md)
- [Prospero en de LED-ring](PROSPERO.md)

[LAN-delen](../../BORD-DELEN.md) en [firmware-simulatie](../../FIRMWARE-SIMULATIE.md) zijn algemene TCE-functies. Prospero's weergave en de betekenis van ontvangen appuitvoer horen bij deze module.

Technische bevindingen en acceptatiebewijzen staan in de [projectvalidatie](../../VALIDATIE.md); zij bewijzen geen ondersteuning voor andere spelapps.
