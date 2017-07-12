import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero;
  constructor(  private heroService: HeroService,
                private aroute: ActivatedRoute,
                private location: Location) { }

  ngOnInit() {
    // this.aroute.params
    //   .subscribe(res=>this.heroService.getHero(+res['id']).then(res=>this.hero=res));

    this.aroute.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(){
      this.location.back();
    }
  save(hero){
    this.heroService.update(hero).then(()=>this.goBack());
  }

}
