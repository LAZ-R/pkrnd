import { renderTypeImage } from '../../../components/typeImage/typeImage.component.js';
import * as LAZR from '../../../lazR/lazR.js';
import * as POKEMONS_SERVICE from '../../../services/pokemons.service.js'

export const renderPage = () => {

    const pokemons = POKEMONS_SERVICE.getPokemonsList();

    if (LAZR.STORAGE.getUserSetting('enableMusic').isActive) {
        const oakLabTheme = new Audio('./medias/music/oak-lab-theme.ogg');
        oakLabTheme.play();
        oakLabTheme.volume = .5;
        oakLabTheme.loop = true;
    }

    /* --------------------------------------------------------------------- */
    const pageTitle = 'Pokédex';
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement('div', 'pokedexPage', 'page', `
        <h1 style="margin-left: var(--horizontal-padding)">${pageTitle}</h1>`);

        pokemons.forEach(pokemon => {
            page.appendChild(LAZR.DOM.createElement('div', 'pokemon', 'pokemon-tile', `
                <div class="pokemon-tile-id-area">#${pokemon.id}</div>
                <div class="pokemon-tile-sprite-area"><img src="./medias/images/sprites/front/${pokemon.id}.png" class="pokemon-tile-sprite"/></div>
                <div class="pokemon-tile-name-area">${pokemon.name}</div>
                <div class="pokemon-tile-types-area">${renderTypeImage(pokemon.type1)}${renderTypeImage(pokemon.type2)}</div>`))
        });

    /* --------------------------------------------------------------------- */
    
    return page;
}
