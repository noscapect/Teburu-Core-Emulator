# Documentatie

## TCE gebruiken

TCE is de emulator en gedeelde infrastructuur. De officiële app van het gekozen spel blijft verantwoordelijk voor spelregels en campagne. Algemene handleidingen:

- [Overzicht en starten](../README.md)
- [Installatie en bijwerken](INSTALLATION.md)
- [Automatische pc-voorbereiding](AUTOMATIC-SETUP.md)
- [Spelmodules toevoegen en artwork beheren](GAME-ADDONS.md)
- [Een gekoppeld bord delen via LAN](BORD-DELEN.md)
- [Firmware-simulatie](FIRMWARE-SIMULATIE.md)

## Spelmodules

Elke module beschrijft haar eigen appvereisten, bordbediening, componenten en beperkingen. De huidige meegeleverde module is:

- [Vampire: The Masquerade – Milan Uprising](games/milan-uprising/README.md)

De mogelijkheid om modules toe te voegen is geen bewijs dat alle Teburu-games al worden ondersteund. Compatibiliteit wordt per module en officiële app vastgesteld.

## Voor ontwikkelaars en projectreview

- [Ontwikkelplan](PLAN.md), [architectuur](ARCHITECTUUR.md), [contracten](CONTRACTEN.md) en [besluiten](BESLUITEN.md).
- [Spelmodulecontract](GAME-MODULES.md) en [Milan-artworkbronnen en extractie](ARTWORK.md).
- [Validatieverslagen](VALIDATIE.md), [appvalidatie](APP-VALIDATIE.md) en [Core-validatie](CORE-VALIDATIE.md).
- [Onderzoeksregister](ONDERZOEK.md) en [Teburu-/Milan-bronnenonderzoek](TEBURU-DEEPSEARCH.md).
- [Release-review en acceptatie](RELEASE-REVIEW.md).
- [Ontwikkelverslagen bij gebruikersfuncties](project-history/README.md).

Projectdocumentatie bevat gedateerde experimenten, technische afwegingen en bewijsgrenzen. Maak bij bevindingen onderscheid tussen gedeeld Core-gedrag en de geteste spelmodule. Testaantallen en correctiegeschiedenis horen in deze documentatie. Voer de publieke softwaretests uit met `npm test` of `node --test test/*.test.mjs tests/*.test.js`.
