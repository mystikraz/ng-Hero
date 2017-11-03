import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './Hero.Service';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  
// heroes=HEROES;
heroes:Hero[];

selectedHero:Hero;

constructor(private heroService:HeroService){
  
}
ngOnInit(): void {
  this.getHeroes();
}


  onSelect(hero:Hero):void{
  this.selectedHero=hero;
  }

  // calling synchronously
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();

  // }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);

  }
  
 }
