import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SessionService {

  public id: number = -1;

  constructor(private http: Http) {}

  public getUsers(): Observable<Array<any>> {
    return this.http.get('../../assets/users.json')
        .map((response: Response) => {
            if (response.status != 200) {
                return [];
            } else {
                return response.json();
            }
        });
  }

  public getUser(id: number): Observable<Array<any>> {
    return this.http.get('../../assets/user' + id.toString() + '.json')
        .map((response: Response) => {
            if (response.status != 200) {
                return [];
            } else {
                return response.json();
            }
        });
  }

}
