import { renderTypeImage } from '../../../components/typeImage/typeImage.component.js';
import * as LAZR from '../../../lazR/lazR.js';
import * as POKEMONS_SERVICE from '../../../services/pokemons.service.js'

export const renderPage = () => {

    const pokemonId = LAZR.URL.getURLParameter('id');
    const pokemon = POKEMONS_SERVICE.getPokemonById(pokemonId);
    const pokemonSound = new Audio(`./medias/sounds/${pokemon.id}.ogg`);
    pokemonSound.volume = .5;
    
    const onLeftSwipe= ()  =>{
        const newIntegerId = parseInt(pokemon.id) + 1;
        let newStringId = '';
        if (newIntegerId <= 151) {
            newStringId = newIntegerId.toString();
            if (newStringId.length == 1) {
                newStringId = '00' + newStringId;
            } else if (newStringId.length == 2) {
                newStringId = '0' + newStringId;
            }
            window.location = `./?page=pokemon&id=${newStringId}`;
        }
    }
    
    const onRightSwipe = () => {
        const newIntegerId = parseInt(pokemon.id) - 1;
        let newStringId = '';
        if (newIntegerId >= 1) {
            newStringId = newIntegerId.toString();
            if (newStringId.length == 1) {
                newStringId = '00' + newStringId;
            } else if (newStringId.length == 2) {
                newStringId = '0' + newStringId;
            }
            window.location = `./?page=pokemon&id=${newStringId}`;
        }
    }

    const playPokemonSound = () => {
        pokemonSound.play();
    }
    window.playPokemonSound = playPokemonSound;

    /* --------------------------------------------------------------------- */
    const pageTitle = `#${pokemon.id} - ${pokemon.name}`;
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement('div', 'pokemonPage', 'page', `
        <div class="pokemon-page-id-and-name-area">
            <div class="pokemon-page-id-area">#${pokemon.id}</div>
            <div class="pokemon-page-name-area">${pokemon.name.toUpperCase()}</div>
        </div>
        <div class="pokemon-page-sprite-area" onclick="playPokemonSound()"><img src="./medias/images/sprites/front/${pokemon.id}.png" class="pokemon-page-sprite"/></div>
        <div class="pokemon-page-types-area">
            <div class="pokemon-page-type-pack">${renderTypeImage(pokemon.type1)}<span>${pokemon.type1}</span></div>
            ${pokemon.type2 != ''
            ? `<div class="pokemon-page-type-pack">${renderTypeImage(pokemon.type2)}<span>${pokemon.type2}</span></div>`
            : ''}
        </div>
        <div class="pokemon-page-description-area">\"${pokemon.description}\"</div>
        <div class="pokemon-page-stats-area">
            <div class="pokemon-page-stat-pack"><span>PV</span><span>${pokemon.pv_total}</span></div>
            <div class="pokemon-page-stat-pack"><span>ATK</span><span>${pokemon.attack}</span></div>
            <div class="pokemon-page-stat-pack"><span>DEF</span><span>${pokemon.defense}</span></div>
            <div class="pokemon-page-stat-pack"><span>VIT</span><span>${pokemon.speed}</span></div>
            <div class="pokemon-page-stat-pack"><span>SPE</span><span>${pokemon.special}</span></div>
        </div>`);
   
        LAZR.DOM.handleSwipe(page, 50, onLeftSwipe, onRightSwipe);

    /* --------------------------------------------------------------------- */

    if (LAZR.STORAGE.getUserSetting('enableMenuSound').isActive) {
        playPokemonSound();
    }
    
    return page;
}
