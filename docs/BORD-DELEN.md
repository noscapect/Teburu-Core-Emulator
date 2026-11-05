# Speelbord op een ander apparaat openen

Start TCE via de launcher en kies **Connect Android** voor de gewenste module met een gekoppelde adapter. De launcher start de LAN-deelserver zodra die adapter gereed is. Het Control Center toont de bordlink en een zescijferige toegangscode. Open die link op het tweede apparaat en voer de code in. Beide browsers gebruiken dezelfde tafel op de host-pc.

De link gebruikt het LAN-adres van de host en poort **5182**, bijvoorbeeld `http://192.168.2.23:5182/board`. Een adres op `127.0.0.1` werkt alleen op de host. De toegangscode verandert na herstart van de deelserver; een aangemelde browsersessie blijft maximaal twaalf uur geldig.

## Netwerk en problemen oplossen

Beide apparaten moeten elkaar op het lokale netwerk kunnen bereiken. Gastnetwerken, clientisolatie en VPN kunnen dit blokkeren. Sta het werkelijk gebruikte Node-programma en inkomend TCP-verkeer op poort 5182 toe voor het privénetwerk. De gebundelde Node-runtime heeft een ander programmapad dan een systeeminstallatie. Routerpoortdoorsturing is niet nodig.

TCE hergebruikt een geldig eerder gekozen LAN-adres of kiest de enige geschikte verbinding. Bij meerdere mogelijke verbindingen kan een expliciete keuze nodig zijn. Vanuit een broncheckout kan de deelserver met een gekozen adres worden gestart:

```powershell
node tools/share-board.mjs JOUW-PC-LAN-IP
```

Een fout bij delen blokkeert de lokale tafel niet. Afsluiten of wisselen van gekoppeld spel stopt de beheerde deelserver.

## Beschikbare bediening

De gedeelde pagina toont het bord en de bediening van de geselecteerde spelmodule. Beschikbare acties worden via dezelfde adapter verwerkt als op de host. Welke onderdelen, correcties en bevestigingen beschikbaar zijn, staat in de [modulehandleiding](README.md#spelmodules).

Core-start/stop, technische logs, koppelen, handmatige sensorinvoer en opstellingsimport blijven lokaal. De officiële app en de Core blijven op hun eigen apparaten draaien. Delen is bedoeld voor het lokale netwerk.
