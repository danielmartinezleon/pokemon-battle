import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent {
  pokemon1 = { name: 'Pikachu', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', health: 100 };
  pokemon2 = { name: 'Charmander', imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', health: 100 };

  attackPokemon1() {
    this.pokemon1.health -= 10;
    this.checkWinner();
  }

  attackPokemon2() {
    this.pokemon2.health -= 10;
    this.checkWinner();
  }

  checkWinner() {
    if (this.pokemon1.health <= 0) {
      alert(`${this.pokemon2.name} ha ganado la batalla!`);
      this.resetBattle();
    } else if (this.pokemon2.health <= 0) {
      alert(`${this.pokemon1.name} ha ganado la batalla!`);
      this.resetBattle();
    }
  }

  resetBattle() {
    this.pokemon1.health = 100;
    this.pokemon2.health = 100;
  }
}
