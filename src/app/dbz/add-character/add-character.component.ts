import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';

import { DbzService } from './../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styles: [],
})
export class AddCharacterComponent {
  @Input()
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  // tslint:disable-next-line: no-output-on-prefix
  /*@Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();*/

  constructor(private dbzService: DbzService) {}

  /*changeName(event: any) {
    console.log(event.target.value);
  }*/

  addCharacter(): void {
    if (!this.newCharacter.name.trim().length) {
      return;
    }

    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
