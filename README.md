| <img width="16" alt="favicon-32x32" src="https://github.com/aymyo/tallerets/assets/40371955/9ac0d5f4-a04d-49b5-b01b-773bf6468a0d"> | # tallerets.com |
| :--------------------------------------------------------------------------------------------------------------------------------- | :-------------- |

[tallerets.com](https://www.tallerets.com/) és la pàgina web del projecte de tallers creatius de la Noor. Aquesta pàgina web proporciona informació sobre els diferents tallers que s'ofereixen, així com detalls sobre la ubicació, el preu i la disponibilitat de places.

## 🆕 Actualitzar contingut

Les pàgines principials estàn situades a la carpeta `src/pages`. Per actualitzar el contingut d'una pàgina, només cal editar el fitxer corresponent.
Per afegir nous tallers o events cal editar el fitxer `src/content.ts`. Els dos tallers que tinguin places més propers es mostraràn a la pàgina principal.

Per desplegar els canvis:

1. Modificar el fitxer o fitxers que es vulgui.
2. Obrir un nou PR amb els canvis.
3. Comprova que funciona tot correctament a la preview
4. Fer merge dels canvis

En uns segons, s'haurien de veure els canvis a la pàgina web. Si hi haguès cap problema, fes un rollback a Vercel.

## 🧞 Project Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
