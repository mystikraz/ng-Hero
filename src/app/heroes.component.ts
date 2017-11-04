import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './Hero.Service';
import { Router } from '@angular/router';




@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    [x: string]: any;
  
// heroes=HEROES;
heroes:Hero[];

selectedHero:Hero;

constructor(
  private heroService:HeroService,
  private router: Router){
  
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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
  
 }
