import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let characters = require('../../assets/characters.json');
characters = characters.characters;

@Component({
  selector: 'app-characters-view',
  templateUrl: './characters-view.component.html',
  styleUrls: ['./characters-view.component.css']
})
export class CharactersViewComponent implements OnInit, AfterViewInit {
  public characters = [];
  public lukeFilmsArr = [];
  public vaderFilmsArr = [];
  public kenobiFilmsArr = [];
  public R2D2FilmsArr = [];
  public lukeFilms = [];
  public vaderFilms = [];
  public kenobiFilms = [];
  public R2D2Films = [];
  public luke: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // get characters from json data
  ngAfterViewInit(){
    console.log(characters);
  }

  // clicked on Luke
  clickedLuke(){
    for(let i=0; i<characters.length; i++) {
      if(characters[i].name === 'Luke Skywalker') {
        this.http.get(characters[i].url)
        .subscribe((data) =>{
          console.log(data);
        })
      }
    }
  }

  // clicked on Vader
  clickedVader(){
  }

  // clicked on Kenobi
  clickedKenobi(){
  }

  // clicked on R2D2
  clickedR2D2(){
  }

}
