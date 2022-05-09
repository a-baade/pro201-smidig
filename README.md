# PRO-smidig
Veldedighetsplatform for Meliora Impact

Link til prototype: https://www.figma.com/file/ton1erJaL488rYxoApisfM/prototype-pt-2?node-id=0%3A1

Link til heroku: xxx

## TODO

* [ ] Lage alle build scripter
* [ ] Deploye prosjektet på Heroku

## Front-end

* [x] Lage React prosjekt
* [ ] Lage navbar
* [ ] Lage footer
* [ ] Legge til logo som tab icon
* [ ] Implementere design og farger

### Forside

* [ ] Vise en liten oppsummering av About us
* [ ] Vise informasjon om fokuserte temaer
* [ ] Vise utvalgte nyheter

### Veldedigheter

* [ ] Hente liste over veldedigheter gjennom API
* [ ] Lage gjenbrukbar card komponent for å vise fram alle veldedighetene
* [ ] Filtrere etter kategori
* [ ] Lage gjenbrukbar side med all informasjon om en valgt veldedighet 

### Logg inn

Logg inn:
* [x] Logg inn form
* [x] Logg inn med Google
* [ ] Logg inn med Active Directory (Microsoft) ?

Registrer ny bruker:
* [ ] Registrer ny bruker form
* [ ] Registrer gjennom Google
* [ ] Registrer gjennim Active Directory ?

### Dashboard

* [ ] Lage sidebar
* [ ] Vise statistikk for donasjoner
* [ ] Bruker kan endre informasjonen på på profilen sin
* [ ] Bruker kan slette profilen sin

### Donasjonsside

* [ ] Bruker kan velge hvor mye og hvor ofte de vil donere
* [ ] Koble til betalingstjenester

### About us

* [ ] Fyll siden med informasjon om Meliora Impact

### Contact us

* [ ] Lage kontaktskjema

### Tester for front-end

Legg til punkter her

## Back-end

* [x] Sette opp Express

### Databaser

* [ ] Sette opp Mongodb
* [ ] Lage database for veldedigheter
* [ ] Lage database for brukere
* [ ] Lage database for donasjoner ?

### Logg inn API

* [ ] `POST` registrere ny bruker
* [x] `POST` logge inn en bruker

### Bruker API

* [x] `GET` hente informasjon om bruker
* [ ] Redigere informasjon om bruker
* [ ] Slette bruker

### Veldedigheter API

* [ ] `GET` hente ut liste over veldedigheter
* [ ] `GET` hente ut all informasjon om en spesifikk veldedighet

### Tester for back-end

Legg til punkter her
