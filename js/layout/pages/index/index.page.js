import * as LAZR from '../../../lazR/lazR.js';
import * as POKEMONS_SERVICE from '../../../services/pokemons.service.js'
import { CombatPokemon } from '../../../types/CombatPokemon.type.js';
import { renderTypeImage } from '../../../components/typeImage/typeImage.component.js';

let pokemon1 = new CombatPokemon(POKEMONS_SERVICE.getRandomPokemon());
pokemon1.logToConsole();
let pokemon2 = new CombatPokemon(POKEMONS_SERVICE.getRandomPokemon());
pokemon2.logToConsole();

const radomizeFilter = LAZR.CSS.getFilterStringForHexValue(LAZR.CSS.getCssRootVariableValue('--gray-30'));

const renderPokemonsArea = (pokemon1, pokemon2) => {
    return `
        <div class="index-sub-part index-top-part">
                <div class="index-top-part-sub index-rival-area">
                    <div class="index-pokemon-infos-area rival-pokemon-infos">
                        <span>#${pokemon2.id}</span>
                        <span>${pokemon2.name.toUpperCase()}</span>
                        <div class="pokemon-tile-types-area" >${renderTypeImage(pokemon2.type1)}${renderTypeImage(pokemon2.type2)}</div>
                    </div>
                    <div class="index-sprite-area rival-sprite-area">
                        <img class="index-sprite" src="./medias/images/sprites/front/${pokemon2.id}.png"/>
                    </div>
                </div>

                <div class="index-top-part-sub index-versus-area">
                    <img src="./medias/images/font-awsome/arrows-rotate-solid.svg" style="height:100%; filter: ${radomizeFilter}; animation: rotateForever 10s linear infinite" onclick="changePokemons()"/>
                </div>

                <div class="index-top-part-sub index-player-area">
                    <div class="index-sprite-area player-sprite-area">
                        <img class="index-sprite" src="./medias/images/sprites/front/${pokemon1.id}.png"/>
                    </div>
                    <div class="index-pokemon-infos-area  player-pokemon-infos">
                        <span>#${pokemon1.id}</span>
                        <span>${pokemon1.name.toUpperCase()}</span>
                        <div class="pokemon-tile-types-area" >${renderTypeImage(pokemon1.type1)}${renderTypeImage(pokemon1.type2)}</div>
                    </div>
                </div>

                <div class="index-top-part-sub index-player-combat-set-area">
                    <div class="index-combat-set-row">
                        <div class="index-attack-area">${pokemon1.combatAttackSet[0].name != '' ? `<span>${pokemon1.combatAttackSet[0].name.toUpperCase()}</span>${renderTypeImage(pokemon1.combatAttackSet[0].type)}` : '-'}</div>
                        <div class="index-attack-area">${pokemon1.combatAttackSet[1].name != '' ? `<span>${pokemon1.combatAttackSet[1].name.toUpperCase()}</span>${renderTypeImage(pokemon1.combatAttackSet[1].type)}` : '-'}</div>
                    </div>
                    <div class="index-combat-set-row">
                        <div class="index-attack-area">${pokemon1.combatAttackSet[2].name != '' ? `<span>${pokemon1.combatAttackSet[2].name.toUpperCase()}</span>${renderTypeImage(pokemon1.combatAttackSet[2].type)}` : '-'}</div>
                        <div class="index-attack-area">${pokemon1.combatAttackSet[3].name != '' ? `<span>${pokemon1.combatAttackSet[3].name.toUpperCase()}</span>${renderTypeImage(pokemon1.combatAttackSet[3].type)}` : '-'}</div>
                    </div>
                </div>
        </div>
        <div class="index-sub-part index-bottom-part">
            <button>FIGHT</button>
        </div>`;
}

const changePokemons = () => {
    pokemon1 = new CombatPokemon(POKEMONS_SERVICE.getRandomPokemon());
    pokemon1.logToConsole();
    pokemon2 = new CombatPokemon(POKEMONS_SERVICE.getRandomPokemon());
    pokemon2.logToConsole();
    document.getElementById('indexPage').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('indexPage').innerHTML = renderPokemonsArea(pokemon1, pokemon2);
        setTimeout(() => {
            document.getElementById('indexPage').style.opacity = 100;
        }, 200);
    }, 200);
    
}
window.changePokemons = changePokemons;

export const renderPage = () => {


    if (LAZR.STORAGE.getUserSetting('enableMusic').isActive) {
        const mainTheme = new Audio('./medias/music/main-theme.ogg');
        mainTheme.play();
        mainTheme.loop = true;
    }

    /* --------------------------------------------------------------------- */
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);

    const page = LAZR.DOM.createElement('div', 'indexPage', 'page index-page', `
        ${renderPokemonsArea(pokemon1, pokemon2)}
    `);

    /* --------------------------------------------------------------------- */

    document.getElementById('body').style.backgroundImage = 'url("./medias/images/background.png")';
    document.getElementById('body').style.animation = 'bgScroll 30s linear infinite';
    document.getElementById('body').style.backgroundSize = '20%';
    
    return page;
}
