import { CharacterService } from './../character.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient, public charServ: CharacterService) { }

  ngOnInit() {
  }

  // get characters from json data
  ngAfterViewInit(){
  }

  // clicked on Luke
  clickedLuke(){
    this.charServ.getLukeInfo();
  }

  // clicked on Vader
  clickedVader(){
    this.charServ.getVaderInfo();
  }

  // clicked on Kenobi
  clickedKenobi(){
    let response = this.charServ.getKenobiInfo();
  }

  // clicked on R2D2
  clickedR2D2(){
    this.charServ.getR2D2Info();
  }

}
