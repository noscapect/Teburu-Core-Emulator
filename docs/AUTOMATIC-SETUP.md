# Automatische pc-voorbereiding

Deze route vereist de complete Windows-pakketeditie. Gebruik voor een broncheckout de [handmatige installatie](INSTALLATION.md).

Open het Control Center via **Connect Android**, accepteer de voorwaarden voor setup en Android-tools en kies **Set up automatically**. TCE bereidt achtereenvolgens WSL2/Debian, usbipd, één Bluetooth-adapter en de Android-/Linux-helpers voor. Aanwezige onderdelen worden hergebruikt.

Bij één geschikte radio kiest TCE die automatisch. Bij meerdere radio's of een ontbrekende opgeslagen radio wordt om een keuze gevraagd. Setup start de Core niet en draagt de radio nog niet over aan WSL.

## Herstart en opnieuw proberen

Keur de Windows-beheerdersprompts goed om verder te gaan. Vraagt Windows om een herstart, sla dan werk op, herstart, open TCE en kies **Continue setup**. TCE herstart Windows niet zelf. Een wachtende systeemupdate kan voorbereiding pauzeren tot na een herstart.

Fouten en annuleringen verschijnen in dezelfde kaart. **Retry setup** herhaalt het onvoltooide werk. Alleen een statuscontrole start geen installer opnieuw.

Bestaande Linux-distributies en accounts blijven behouden. De helper gebruikt een eigen account. Een bestaande Debian op WSL1 wordt niet automatisch omgezet; volg daarvoor de instructies onder **Advanced setup and troubleshooting**.

## Tablet verbinden

Na **This PC is ready**:

1. Verbind en ontgrendel de Android-tablet via USB.
2. Sta USB-debugging toe en open de officiële app van het geselecteerde spel.
3. Laat de automatische tabletcontrole afronden en volg de taal-, oriëntatie- en resolutievereisten van de [spelmodule](README.md#spelmodules).
4. Kies **Start Core** en verbind via de normale flow in de officiële app.

Gebruik **Stop Core** om de radio terug te geven. **Quit app and return Bluetooth to Windows** sluit ook de services. Het sluiten van alleen de browser stopt TCE niet.

## Tekstherkenning en problemen

Tekstherkenning is inbegrepen in de pakketeditie; een Windows-taalpakket is niet nodig. Ontbrekende of beschadigde herkenningsbestanden worden apart gemeld. De verbinding kan gereed zijn terwijl automatische bordsynchronisatie niet beschikbaar is; herstel dan de TCE-installatie.

Handmatige componentbediening staat onder **Advanced setup and troubleshooting**. Als Windows App Installer ontbreekt, geeft de setup een Store-link. Raadpleeg bij radio-, USB- of verbindingsproblemen ook [installatie](INSTALLATION.md).

Volledige eerste installatie met fysieke hardware op een schone tweede pc is nog niet gevalideerd. Ondersteuning voor iedere radio, tablet of schermindeling is niet aangetoond.
