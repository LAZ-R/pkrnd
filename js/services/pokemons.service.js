import { POKEMONS_LIST } from "../data/pokemons.data.js";
import { ATTACKS_LIST } from "../data/attacks.data.js";

export const getPokemonsList = () => {
    return POKEMONS_LIST;
}

export const getPokemonById = (id) => {
    let pokemonToReturn = {
        'id'          : `000`,
        'name'        : `Blank Pokémon`,
        'type1'       : `Normal`,
        'type2'       : ``,
        'description' : `You should not see this.`,
        'pv_total'    : 0,
        'attack'      : 0,
        'defense'     : 0,
        'speed'       : 0,
        'special'     : 0,
    };
    POKEMONS_LIST.forEach(pokemon => {
        if (pokemon.id == id) {
            pokemonToReturn = pokemon;
        }
    });
    return pokemonToReturn;
}

const getAvailableAttacksForPokemon = (pokemonId) => {
    let availableAttacks = [];
    ATTACKS_LIST.forEach(attack => {
        attack.pokemon_list.forEach(pokemonFromAttackList => {
            if (pokemonFromAttackList === pokemonId) {
                availableAttacks.push(attack);
            }; 
        });
    });
    return availableAttacks;
}

export const getCombatAttacksSetForPokemon = (pokemonId) => {
    let combatAttacksSet = [
        {
            name: '',
            type: '',
            class: '',
            power: 0,
            accuracy: 0,
            pp_total: 0
        },
        {
            name: '',
            type: '',
            class: '',
            power: 0,
            accuracy: 0,
            pp_total: 0
        },
        {
            name: '',
            type: '',
            class: '',
            power: 0,
            accuracy: 0,
            pp_total: 0
        },
        {
            name: '',
            type: '',
            class: '',
            power: 0,
            accuracy: 0,
            pp_total: 0
        },
    ]
    let availableAttacks = getAvailableAttacksForPokemon(pokemonId);
    combatAttacksSet.forEach(combatAttack => {
        if (availableAttacks.length != 0) {
            let rndIndex = Math.floor(Math.random() * availableAttacks.length);
            const randomAttack = availableAttacks[rndIndex];
            availableAttacks.splice(rndIndex, 1);
            combatAttack.name = randomAttack.name;
            combatAttack.type = randomAttack.type;
            combatAttack.class = randomAttack.class;
            combatAttack.power = randomAttack.power;
            combatAttack.accuracy = randomAttack.accuracy;
            combatAttack.pp_total = randomAttack.pp_total;
        }
    });
    
    return combatAttacksSet;
}

export const getRandomPokemon = () => {
    let pokemon;
    let rndIndex = Math.floor(Math.random() * POKEMONS_LIST.length);
    while (POKEMONS_LIST[rndIndex].description == '') {
        rndIndex = Math.floor(Math.random() * POKEMONS_LIST.length);
    }
    pokemon = POKEMONS_LIST[rndIndex];
    return pokemon;
}