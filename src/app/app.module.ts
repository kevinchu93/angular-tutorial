import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';  //  <-- NgModel lives here
import { HttpModule }       from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,     // <-- import the FormsModule before binding with [(ngModel}]
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent
    ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
