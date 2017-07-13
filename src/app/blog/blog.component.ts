import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles:[any];
  constructor(private heroservice: HeroService) { }

  ngOnInit() {
    this.heroservice.getblog().then(res=>{this.articles=res;console.log(res)});
  }

}
