import {Injectable} from '@angular/core';
import {Hero} from './hero';

export const  Heroes:Hero[]=[
  { id:1,name:'Thor'},
  { id:2,name:'Batman'},
  { id:3,name:'Superman'},
  { id:4,name:'WonderWoman'},
  { id:5,name:'Flash'},
  { id:6,name:'Aquaman'},
  { id:7,name:'Spiderman'}
]

@Injectable()
export class HeroService{
getHeroes():Promise<Array<Hero>>{
    return Promise.resolve(Heroes);
}
// getHeroesSlowly():Promise<Hero[]>{
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve(this.getHeroes()),15000);
//     })
// }

getHero(id:number):Promise<Hero>{
    return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id=== id));
}
}   