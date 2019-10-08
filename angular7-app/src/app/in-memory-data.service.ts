import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Krau', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0},
      { id: 12, name: 'Lilias', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 13, name: 'Angelic Montmorancy', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 14, name: 'Angelica', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 15, name: 'Ruelle of light', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 16, name: 'Charles', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 17, name: 'Assassin Cartuja', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 18, name: 'Assasin Coli', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 19, name: 'Yufine', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 },
      { id: 20, name: 'Corvus', hitPoints: 500, defense: 500, speed : 0, critRate : 0, critDamage : 0 , effectiveness: 0 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}