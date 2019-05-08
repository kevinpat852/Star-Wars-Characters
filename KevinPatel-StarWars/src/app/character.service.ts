import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public character: any;

  constructor(private http: HttpClient) { }

  getLuke() {}
  getVader() {}
  getKenobi() {}
  getR2D2() {}
}
