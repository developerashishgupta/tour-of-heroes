import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Http,Headers} from '@angular/http';

//toPromise operator coverts an Observable to a Promise
import 'rxjs/add/operator/toPromise';

// export const  Heroes:Hero[]=[
//   { id:1,name:'Thor'},
//   { id:2,name:'Batman'},
//   { id:3,name:'Superman'},
//   { id:4,name:'WonderWoman'},
//   { id:5,name:'Flash'},
//   { id:6,name:'Aquaman'},
//   { id:7,name:'Spiderman'}
// ]




@Injectable()
export class HeroService{

//constructor
constructor(private http:Http){}


//property
private heroesUrl = 'api/heroes';

//Methods

// getHeroes():Promise<Array<Hero>>{
//     return Promise.resolve(Heroes);
// }

// getHeroesSlowly():Promise<Hero[]>{
//     return new Promise(resolve=>{
//         setTimeout(()=>resolve(this.getHeroes()),15000);
//     })
// }


//uses in memory web api
// the signature is still the same[http get method returns an observale but our old method
//signature returns a promise we use toPromise to convert the oberservale to promise]
getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

//uses static data array
// getHero(id:number):Promise<Hero>{
//     return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id=== id));
// }

//uses in memory web api
getHero(id: number): Promise<Hero> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
}

 private headers = new Headers({'Content-Type': 'application/json'});  

update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
 
  return this.http
    .put(url, JSON.stringify(hero), {
        headers:this.headers
    })
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}


}   