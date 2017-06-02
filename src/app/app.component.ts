import {Component} from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from './hero.service'

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent{
title='My Heroes';
}