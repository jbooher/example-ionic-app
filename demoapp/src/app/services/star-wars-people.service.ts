import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Person<T> {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class StarWarsPeopleService {
  people: Person<any>[];

  constructor(
    private http: HttpClient,
  ) { }

  public getPeople(): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people`);
  }

  public getPersonById(url: string): Observable<any> {
    return this.http.get(url);
  }
}
