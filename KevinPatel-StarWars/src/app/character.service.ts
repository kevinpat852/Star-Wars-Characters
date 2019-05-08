import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit, AfterViewInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {}
  ngAfterViewInit() {}

  getCharacters() {
    this.http.get('localhost:3000/characters/getCharacters').subscribe((data) => {
      console.log(data);
    })
  }
  getLukeInfo() {}
  getVaderInfo() {}
  getKenobiInfo() {}
  getR2D2Info() {}
}
