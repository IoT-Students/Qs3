# Qs3 💻
- Dette er et repo som representerer et Qs3 grensesnitt 
- Bruker Vue.js som rammmeverk 

## Løsning 📜

### Funksjonalitet

Applikasjonen er delt opp i tre autoriasjonsroller. Dette legger føringer for hvilke rettigheter brukerne har når de tar de tar i bruk applikasjonen:

   * **Student:**
      * **Å stille seg i kø i det faget han/hun skal ha godkjent/hjelp i:** Brukeren blir da omdirigert til et skjema for å fylle inn detaljert informasjon om hvor man befinner seg, samt om man trenger godkjenning eller hjelp. Etter korrekt utfylt skjema blir bruker omdirigert til en køoversikt.
      * **Se en oversikt over hvilke øvinger i det spesifikke faget som er underkjent og godkjent:** Bruker blir omdirigert til en oversikt...
      * **Se køen direkte uten å stille seg i kø først:** Bruker blir omdirigert til en køside hvor han/hun kan se andre studenter i køen, samt detaljert informasjon om deg i køen. 
   
   * **StudAss:** 
      * **Å se køen i det faget han/hun er studAss i**
      * **Se detaljert informasjon om bruker ved å trykke på personen i listen:** Her har studAss muligheten til å godkjenne, underkjenne eller sette studenten på vent avhengig av kvaliteten på øvingen.
   
   * **Admin/Lærer:**
      * **Opprette fag**: Admin/Lærer blir omdirigert til et skjema for å fylle inn informasjon om faget på format: **fagkode, fagnavn, øvingsmengde, øvingskriterier** 
      *  **Legge til studenter i de fagene han/hun underviser i:** Registerer studenter på faget som allerede er registrert som student i systemet. kan også legge til studenter som ikke finnes. Må legges inn på format: **Etternavn, Fornavn, email**
      *  **Legge til studasser i de fagene han/hun underviser i:**  Registerer en allerede registrert studass på det faget som de skal være studass i. Det betyr at en studass har en egen profil som er registrert av selve universitetet.  

* **Generelt:**
Fuksjonaliteter som alle rollene har tilgang på er:
  * Bruker kan logge inn på applikasjonen med hashet og kryptert passord. Autentiserer bruker ved å bruke jwt tokens. Sjekker om bruker finnes i databasen før tokens blir utlevert. 
  * Logge ut. 

   
 ### Database

Vi har laget en databaseløsning som tar hensyn til databasearkitekturprinsipper. Alle databasene oppfyller 3NF, slik at det er enkelt å gjøre endringer i databasene uten at for store komplikasjoner oppstår. Under er bilde av ER-diagram for databaseløsningen vår:

LEGG INN BILDE HER


 
   
## Videre utvikling 🏗️

Videre utvikling vil bestå av:
* At man kan registere flere lærere for et fag
* Hashe og salte passord for å øke sikkerhet 
* At en lærer kan registrere en studAss til et fag
* Få applikasjonen til å virke på mobil
* Kunne arkivere fag
* Legge til at studenten vises på et kart hos studass
* legge til studenter i en batch, for eksempel ved bruk av csv fil.
* Mailvarsel ved registrering av en student som ikke allerede finnes i databasen 
* Legge til valgmulighet "sitte hjemme" i skjemaet for å stille seg i kø

## Eksterne avhengigheter 
### Maven
- Maven er brukt som rammeverk i både klient og server side av dette prosjektet.

### Spring-Boot
- I Qs3-server er Spring-Boot blitt benyttet. Dette er en server med endepunkter for å motta og sende informasjon fra og til klient.

### JUnit
- JUnit er blitt brukt for å teste kritisk funksjonalitet i backend 

### JEST
- JEST har blitt brukt for å teste kritisk funksjonalitet i frontend


## Instruksjoner 🗺️
Under viser stegene som er nyttige for å kjøre klientløsningen vår. 
NB: Husk at server må kjøres først!

### Steg 1 -  Project setup
```
npm install
```

### Steg 2 - Compile for development
```
npm run serve
```

### Steg 3 - Compiles and minifies for production
```
npm run build
```

## Testing


### Run your unit tests
```
npm run test:unit
```

### Nettside 
See [Qs3](http://qs3.no) to see our web page!




