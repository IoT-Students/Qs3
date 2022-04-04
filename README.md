# Qs3 💻
- Dette er et repo som representerer et Qs3 grensesnitt 
- Bruker Vue.js som rammmeverk 


## Løsning 📜

### Funksjonalitet

Applikasjonen er delt opp i tre autoriasjonsroller. Dette legger føringer for hvilke rettigheter brukerne har når de tar i bruk applikasjonen. Under er det beskrevet funksjonaliteten til de ulike rollene:

   * **Student:**
      * **Å stille seg i kø i det faget han/hun skal ha godkjent/hjelp i:** Brukeren blir da omdirigert til et skjema for å fylle inn detaljert informasjon om hvor man befinner seg, samt om man trenger godkjenning eller hjelp. Etter korrekt utfylt skjema blir bruker omdirigert til en køoversikt.
      * **Se en oversikt over hvilke øvinger i det spesifikke faget som er underkjent og godkjent** 
      * **Se køen direkte uten å stille seg i kø først:** Bruker blir omdirigert til en køside hvor han/hun kan se andre studenter i køen, samt detaljert informasjon om deg i køen. 
   
   * **StudAss:** 
      * **Å se hvem som er i køen i det faget han/hun er studAss i**
      * **Se detaljert informasjon om studenter i kø ved å trykke på personen i listen:** Her har studAss muligheten til å godkjenne, underkjenne eller sette studenten på vent avhengig av kvaliteten på øvingen.
   
   * **Admin/Lærer:**
      * **Opprette fag**: Admin/Lærer blir omdirigert til et skjema for å fylle inn informasjon om faget på format: **fagkode, fagnavn, øvingsmengde, øvingskriterier** 
      *  **Legge til studenter i de fagene han/hun underviser i:** Registerer studenter på faget som allerede er registrert som student i systemet. kan også legge til studenter som ikke finnes. Må legges inn på format: **Etternavn, Fornavn, email**
      *  **Legge til studasser i de fagene han/hun underviser i:**  Legger en allerede registrert studass på det faget som de skal være studass i. Det betyr at en studass har en egen profil som allerede er registrert i systemet. 

* **Generelt:**
 Alle rollene har tilgang på:
  * **Å logge inn på applikasjonen:** Autentiserer bruker ved å bruke jwt tokens. Sjekker om bruker finnes i databasen før tokens blir utlevert. 
  * **Logge ut**. 

   
 ### Database

Vi har laget en databaseløsning som tar hensyn til databasearkitekturprinsipper. Alle databasene oppfyller 3NF, slik at det er enkelt å gjøre endringer i databasene uten at for store komplikasjoner oppstår. Under er bildet av databasens ER-diagram:

![Bilde 04 04 2022 klokken 23 06](https://user-images.githubusercontent.com/91839835/161632312-7047729b-bed8-4495-bd67-c724fe20ae90.jpg)


## Videre utvikling 🏗️

Videre utvikling vil bestå av:
* At man kan registere flere lærere for et fag
* Hashe og salte passord for å øke brukerens sikkerhet 
* Kunne arkivere fag
* Legge til at studenten vises på et kart hos studAss
* legge til studenter i en batch, for eksempel ved bruk av csv fil.
* Mailvarsel ved registrering av en student som ikke allerede finnes i databasen 
* Legge til valgmulighet "sitte hjemme" i skjemaet for å stille seg i kø

## Eksterne avhengigheter 

### JEST
- JEST har blitt brukt for å teste kritisk funksjonalitet


## Instruksjoner 🗺️
Under viser stegene som er nyttige for å kjøre klientløsningen vår. 

(NB: Husk at server må kjøres først! Se ReadMe fil for Qs3-RestServer...)

### Steg 1 -  Installer alle avhengigheter 
```
npm install
```

### Steg 2 - kompiler programmet
```
npm run serve
```

### Steg 3 - Kompilerer og minifiserer for produksjon
```
npm run build
```

## Testing
For å kjøre tester kan denne kommandoen brukes:
```
npm run test:unit
```





