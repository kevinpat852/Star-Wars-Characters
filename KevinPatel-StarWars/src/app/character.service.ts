import { Injectable, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements OnInit, AfterViewInit {

  public characters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }

  getLukeInfo() {}
  getVaderInfo() {}
  getKenobiInfo() {}
  getR2D2Info() {}
}
