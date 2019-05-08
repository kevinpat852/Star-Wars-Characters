import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { FilmsViewComponent } from './films-view/films-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersViewComponent,
    FilmsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
