import {Component,OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';
@Component({
    selector:'dashboard',
    templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit{
 constructor(private heroService:HeroService){}

topHeroes:Array<Hero>;

ngOnInit(){
 this.heroService.getHeroes().then((result)=>{
     this.topHeroes= result.slice(1,4);
 });
}
}