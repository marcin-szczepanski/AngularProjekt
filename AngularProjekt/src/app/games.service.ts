import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class GamesService {

  constructor(private http: Http) {}
  
 /* public getGames(userId: string): Observable<Array<{id: string, title: string, grade: string}>> {
    return this.http.get('../../assets/gamesUser' + userId + '.json')
        .map((response: Response) => {
            return response.json();
        });
  }

  public getGame(id: string): Observable<Array<{id: string, title: string, grade: string, description: string,
    dateAdd: string, whoAdd: any, whoHas: Array<{id: string, name: string}>, whoSearches: Array<{id: string, name: string}>,
    comments: Array<{idUser: string, user: string, date: string, content: string}>}>> {
    return this.http.get('../../assets/game' + id + '.json')
        .map((response: Response) => {
            return response.json();
        });*/

        public getGames(userId: string): Observable<Array<any>> {
            return this.http.get('../../assets/gamesUser' + userId + '.json')
                .map((response: Response) => {
                    return response.json();
                });
          }
        
          public getGame(id: string): Observable<Array<any>> {
            return this.http.get('../../assets/game' + id + '.json')
                .map((response: Response) => {
                    return response.json();
                });
  }

}
