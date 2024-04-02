| <img width="16" alt="favicon-32x32" src="https://github.com/aymyo/tallerets/assets/40371955/9ac0d5f4-a04d-49b5-b01b-773bf6468a0d"> | [tallerets.com](https://www.tallerets.com/) |
| :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |

# 🍒 tallerets

tallerets.com és la pàgina web del projecte de tallers creatius de la Noor. Aquesta pàgina web proporciona informació sobre els diferents tallers que s'ofereixen, així com detalls sobre la ubicació, el preu i la disponibilitat de places.

## 📯 Actualitzar contingut

Les pàgines principials estàn situades a la carpeta `src/pages`. Per actualitzar el contingut d'una pàgina, només cal editar el fitxer corresponent.
Per afegir nous tallers o events cal editar el fitxer `src/content.ts`. Els dos tallers que tinguin places més propers es mostraràn a la pàgina principal.

### 1. Afegir un nou event al calendari

1. Anar al fitxer [src/content.ts](src/content.ts), editar el fitxer clicant ✎ i modificar `events`.
2. Un cop afegit el nou event (pots consultar l'estructura a la part superior del mateix fitxer), clicar <b style="color: green">Commit changes...</b>. Si cliques 'Commit directly to `main` branch' els canvis s'aplicarán directament. També pots 'create a new branch and start a pull requests', lo qual et permetrà veure una previsualització dels canvis abans de publicar. Un cop contenta amb els canvis, clica <b style="color: green">Merge Pull Request</b>.

 ### 2. Afegir un nou taller

1. Hauràs de tenir preparada la imatge i el text del taller, així com pensar en un identificador únic per després utilitzar-lo quan afageixis events.
2. Per la imatge, considera que les 'cartes' de tallers es mostren de manera diferent a mòvil i a l'ordinador. Et recomano una imatge de `360x480px`, en format `.webp`. Aquesta eina web va super bé per modificar les imatges ràpidament i canviar-les de format [https://ezgif.com/](https://ezgif.com/)
3. Anar a la carpeta [public/img](public/img) i clicar **`Add files`**. Puja la teva imatge.
4. Anar al fitxer [src/content.ts](src/content.ts), editar el fitxer clicant ✎ i modificar `tallers`. Veuràs que és una llista amb l'estrctura `{tallerID: {...dades del taller, tallerId2: {...dades del segon taller}}` és important que aquest `tallerId` sigui únic, i l'hauras d'utilitzar després quan afegeixis un event.
5. Un cop afegit el nou taller (pots consultar l'estructura a la part superior del mateix fitxer), clicar <b style="color: green">Commit changes...</b>. Si cliques 'Commit directly to `main` branch' els canvis s'aplicarán directament. També pots 'create a new branch and start a pull requests', lo qual et permetrà veure una previsualització dels canvis abans de publicar. Un cop contenta amb els canvis, clica <b style="color: green">Merge Pull Request</b>.

## ⚜️ Sistema de disseny

Tipografia — [Noto Serif](https://fonts.google.com/specimen/Noto+Serif?query=noto+serif)

Colors:

- Clar - #FFFBEC
- Fosc - #1a1a1a
- Vermell - #D60000

-----

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
