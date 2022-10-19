import * as POKEMONS_SERVICE from '../services/pokemons.service.js';
export class CombatPokemon {
    constructor (
        JSONPokemon
    ) {
        this.id = JSONPokemon.id;
        this.name = JSONPokemon.name;
        this.type1 = JSONPokemon.type1;
        this.type2 = JSONPokemon.type2;
        this.description = JSONPokemon.description;
        this.pv_total = JSONPokemon.pv_total;
        this.attack = JSONPokemon.attack; 
        this.defense  = JSONPokemon.defense;
        this.speed = JSONPokemon.speed;  
        this.special = JSONPokemon.special;
        this.combatAttackSet = POKEMONS_SERVICE.getCombatAttacksSetForPokemon(this.id);
    }

    logToConsole = () => {
        console.log(`
            id:       #${this.id}
            name:     ${this.name}
            type1:    ${this.type1}
            type2:    ${this.type2}
            pv total: ${this.pv_total}
            attack:   ${this.attack}
            defense:  ${this.defense}
            speed:    ${this.speed}
            special:  ${this.special}\n
            Combat attacks set:
            - ${this.combatAttackSet[0].name} | ${this.combatAttackSet[0].type} (${this.combatAttackSet[0].class})
            - ${this.combatAttackSet[1].name} | ${this.combatAttackSet[1].type} (${this.combatAttackSet[1].class})
            - ${this.combatAttackSet[2].name} | ${this.combatAttackSet[2].type} (${this.combatAttackSet[2].class})
            - ${this.combatAttackSet[3].name} | ${this.combatAttackSet[3].type} (${this.combatAttackSet[3].class})`);
    }
}