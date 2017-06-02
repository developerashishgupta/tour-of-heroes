import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {Router} from '@angular/router'

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }
  constructor(private heroService: HeroService,
              private router:Router
              ) {
  }

  selectedHero: Hero;
  //this data is binded to the view. 
  heroes: Hero[];

  getHeroes(): void {
    this.heroService.getHeroes().then((heroes)=>this.heroes=heroes).catch((err)=>{
      console.log("Error occured fetching data. Error Msg:"+err);
  });
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(hero:Hero){
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}

