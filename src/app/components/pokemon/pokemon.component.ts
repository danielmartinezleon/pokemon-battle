import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  @Input() name: string = '';
  @Input() imageUrl: string = '';
  @Output() attack = new EventEmitter<void>();

  onAttack() {
    this.attack.emit();
  }
}
