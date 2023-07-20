import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krilling',
    powder: 1000
  },{
    id: uuid(),
    name: 'Goku',
    powder: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    powder: 7000
  }];

  deleteCharacterById(id: string): void{
    console.log('En la main page');
    console.log(id);
    this.characters = this.characters.filter(character=> character.id != id);
  }

  addCharacter(character: Character): void{
    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }
}
