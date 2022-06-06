# PRO-smidig
Veldedighetsplatform for Meliora Impact

[Prototype.](https://www.figma.com/file/ton1erJaL488rYxoApisfM/prototype-pt-2?node-id=0%3A1) 

[Heroku.](https://pro201-smidig.herokuapp.com/)

## TODO

* [x] Lage alle build scripter
* [x] Deploye prosjektet på Heroku

## Front-end

* [x] Lage React prosjekt
* [x] Lage navbar
* [x] Lage footer
* [x] Legge til logo som tab icon
* [x] Implementere design og farger

### Forside

* [x] Vise en liten oppsummering av About us
* [x] Vise informasjon om fokuserte temaer
* [x] Vise utvalgte nyheter

### Veldedigheter

* [x] Hente liste over veldedigheter gjennom API
* [x] Lage gjenbrukbar card komponent for å vise fram alle veldedighetene
* [ ] Filtrere etter kategori
* [x] Lage gjenbrukbar side med all informasjon om en valgt veldedighet 

### Logg inn

Logg inn:
* [x] Logg inn form
* [x] Logg inn med Google
* [ ] Logg inn med Active Directory (Microsoft) ?

Registrer ny bruker:
* [x] Registrer ny bruker form
* [x] Registrer gjennom Google

### Dashboard

* [x] Lage sidebar
* [x] Vise statistikk for donasjoner
* [ ] Bruker kan endre informasjonen på på profilen sin
* [ ] Bruker kan slette profilen sin

### Donasjonsside

* [x] Bruker kan velge hvor mye og hvor ofte de vil donere

### About us

* [x] Fyll siden med informasjon om Meliora Impact

### Contact us

* [x] Lage kontaktskjema

### Tester for front-end

* [x] charity component test
* [x] about us component test
* [x] application component test
* [x] front page test
* [x] login page component test
* [ ] login another components
* [x] navigation og footer test
* [x] profile test
* [x] register new user   
* [ ] dashbord test
* [ ] sign up test

### Selenium tester

* [x] frontPage - aboutUs page
* [x] localLogin test
* [x] google login test
* [x] sign up test

### Tester for back-end

* [x] charitiesApi test
* [x] organizationsApi test
* [ ] localLoginApi test

## Back-end

* [x] Sette opp Express

### Databaser

* [x] Sette opp Mongodb
* [x] Lage database for veldedigheter
* [ ] Lage database for brukere
* [ ] Lage database for donasjoner ?

### Logg inn API

* [x] `POST` registrere ny bruker
* [x] `POST` logge inn en bruker

### Bruker API

* [x] `GET` hente informasjon om bruker
* [ ] Redigere informasjon om bruker
* [ ] Slette bruker

### Veldedigheter API

* [x] `GET` hente ut liste over veldedigheter
* [x] `GET` hente ut all informasjon om en spesifikk veldedighet

### Tester for back-end

Legg til punkter her
