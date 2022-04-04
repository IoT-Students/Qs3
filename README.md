# Qs3 💻
- Dette er et repo som representerer et Qs3 grensesnitt 
- Bruker Vue.js som rammmeverk 

## Løsning

### Funksjonalitet

**Login side:** 

Bruker kan logge inn på applikasjonen med hashet og kryptert passord. Autentiserer bruker ved å bruke jwt tokens. Sjekker om bruker finnes i databasen før tokens blir utlevert.

**Hjemmeside:**

Brukeren blir routet til hjemmesiden etter en suksessfull innlogging. Her finner man en oversikt over hvilke fag man er registrert i representert ved bruk av et kort format. Det er verdt å merke seg at det er en forskjell på hvilke funksjonalitet som er tilgjengelig avhengig av hvilken autorisasjonsrolle du har. 

   - **Student:**
   En student får opp tre valgmuligheter: Å stille seg i kø i det faget han/hun skal ha godkjent/hjelp i, se en oversikt over hvilke øvinger i det spesifikke faget som er underkjent og godkjent, og se køen direkte uten å stille seg i kø først.
   
   - **StudAss:**
   En studAss har bare muligheten til å se køen i det faget han/hun er studAss i. 
   
   - **Admin/Lærer:**
   En admin/lærer har mulighet til å legge til studenter og studasser til de fagene han/hun underviser i. 
   



## Instruksjoner

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




