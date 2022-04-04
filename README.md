# Qs3 💻
- Dette er et repo som representerer et Qs3 grensesnitt 
- Bruker Vue.js som rammmeverk 

## Løsning 📜

### Funksjonalitet

**Login side:** 

Bruker kan logge inn på applikasjonen med hashet og kryptert passord. Autentiserer bruker ved å bruke jwt tokens. Sjekker om bruker finnes i databasen før tokens blir utlevert.

**Hjemmeside:**

Brukeren blir routet til hjemmesiden etter en suksessfull innlogging. Her finner man en oversikt over hvilke fag man er registrert i representert ved bruk av et kort format. Det er verdt å merke seg at det er en forskjell på hvilke funksjonalitet som er tilgjengelig avhengig av hvilken autorisasjonsrolle du har. 

   * **Student:**
   En student får opp tre valgmuligheter: 
      * **Å stille seg i kø i det faget han/hun skal ha godkjent/hjelp i:** Brukeren blir da omdirigert til et skjema for å fylle inn detaljert informasjon om hvor man befinner seg, samt om man trenger godkjenning eller hjelp. Etter korrekt utfylt skjema blir bruker omdirigert til en køoversikt.
      * **Se en oversikt over hvilke øvinger i det spesifikke faget som er underkjent og godkjent:** Bruker blir omdirigert til en oversikt...
      * **Se køen direkte uten å stille seg i kø først:** Bruker blir omdirigert til en køside hvor han/hun kan se andre studenter i køen, samt detaljert informasjon om deg i køen. 
   
   * **StudAss:**
      * **Å se køen i det faget han/hun er studAss i**
      * **Se detaljert informasjon om bruker ved å trykke på personen i listen:** Her har studAss muligheten til å godkjenne, underkjenne eller sette studenten på vent avhengig av kvaliteten på øvingen.
   
   * **Admin/Lærer:**
      * **Opprette fag**: Admin/Lærer blir omdirigert til et skjema for å fylle inn informasjon om faget 
      *  **Legge til studenter i de fagene han/hun underviser i:** Registerer studenter på faget som allerede er registrert som student i systemet. kan også legge til studenter som ikke finnes. Må legges inn på format: **Etternavn, Fornavn, email**
      *  **Legge til studasser i de fagene han/hun underviser i:**  Registerer en allerede registrert studass på det faget som de skal være studass i. Det betyr at en studass har en egen profil som er registrert av selve universitetet.  
  
  
   
 
## Databaseløsning


 
   
## Videre utvikling 🏗️



## Instruksjoner 🗺️

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

## Tester

### Run your unit tests
```
npm run test:unit
```

### Nettside 
See [Qs3](http://qs3.no) to see our web page!




