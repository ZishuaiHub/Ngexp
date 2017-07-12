
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from "../hero.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls :['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, public router:Router) { }
  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    console.log(this.heroes)
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
