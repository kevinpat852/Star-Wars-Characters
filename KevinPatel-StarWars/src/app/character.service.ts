import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersViewComponent } from './characters-view/characters-view.component';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit, AfterViewInit {

  public characters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCharacters();
  }
  ngAfterViewInit(){
  }

  getCharacters() {
    fetch('../assets/characters.json').then((response) => {
      if(response.status !== 200) {
        console.log('Error: Not Found');
      }
      response.json().then((data) => {
        console.log(data);
        this.characters = data;
      })
    })
    return this.characters;
  }
  getLukeInfo() {return this.characters;}
  getVaderInfo() {}
  getKenobiInfo() {}
  getR2D2Info() {}
}
