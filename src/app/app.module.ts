import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {FormsModule} from "@angular/forms";
import { HeroesComponent } from './heroes/heroes.component';
import {HeroService} from "./hero.service";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from "./app-routing";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
