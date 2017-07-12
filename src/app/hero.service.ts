import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Hero} from "./Hero";

@Injectable()
export class HeroService {
  constructor(private http:Http){}
  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }
  // getHeroes():Promise<Hero[]>{
  //  return this.http.get('https://www.easy-mock.com/mock/595609d49adc231f356ea13c/example_1498810836655/user').toPromise()
  //     .then(res=>res.json().data);
  // getHero(r):Promise<Hero> {
  //   return this.getHeroes().then(res=>res.find(res=>res.id===r))
  // }
  // getHeroes():Observable<Hero[]>{
  //  return this.http.get('https://www.easy-mock.com/mock/595609d49adc231f356ea13c/example_1498810836655/user').map(res=>res.json().data)
  // }
  HeroesUrl=`https://www.easy-mock.com/mock/595606fb9adc231f356e9e14/overwatch/heroes/heroes/`;
  private headers = new Headers({'Content-Type': 'application/json'});
  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.HeroesUrl)
      .map(res=>res.json().data)
  }
  // getHero(r): Observable<Hero>{
  //   return this.getHeroes().map(res=>res.find(res=>res.id===r))
  // }

  getHero(id:number): Observable<Hero> {
    let url=`${this.HeroesUrl}${id}`;
    return this.http.get(url).map(res=>res.json().data)
  }

  update(hero): Promise<Hero>{
    let urlid=`${this.HeroesUrl}${hero.id}`;
   return this.http.put(urlid,JSON.stringify(hero),{headers: this.headers}).toPromise().then(()=>hero)
  }

}
