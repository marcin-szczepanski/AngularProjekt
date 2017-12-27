import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SessionService {

  public id: number = -1;

  constructor(private http: Http) {}
  
  // funkcja do pobrania listy userów

  public getUsers(): Observable<Array<any>> {
    return this.http.get('../../assets/users.json')
        .map((response: Response) => {
            return response.json();
        });
  }

  // funkcja pobierająca szczegóły o użytkowniku

  public getUser(id: number): Observable<Array<any>> {
    return this.http.get('../../assets/user' + id.toString() + '.json')
        .map((response: Response) => {
            return response.json();
        });
  }

}
