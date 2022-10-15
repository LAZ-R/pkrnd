import { POKEMONS_LIST } from "../data/pokemons.data.js";

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