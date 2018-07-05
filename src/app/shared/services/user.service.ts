import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {

  private loginUrl = '/api/admin/login.do';  // URL to web api

  constructor(
    // private http: HttpClient,
    ) { }

//   login (): Observable<T> {
//     return this.http.get<Hero[]>(this.heroesUrl)
//       .pipe(
//         tap(heroes => this.log(`fetched heroes`)),
//         catchError(this.handleError('getHeroes', []))
//       );
//   }

  /** GET hero by id. Return `undefined` when id not found */
//   getHeroNo404<Data>(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/?id=${id}`;
//     return this.http.get<Hero[]>(url)
//       .pipe(
//         map(heroes => heroes[0]), // returns a {0|1} element array
//         tap(h => {
//           const outcome = h ? `fetched` : `did not find`;
//           this.log(`${outcome} hero id=${id}`);
//         }),
//         catchError(this.handleError<Hero>(`getHero id=${id}`))
//       );
//   }

}