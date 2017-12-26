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

  public searchUser(username: string): void {
    this.search(username);
  }

  public search(username: string) {
    this.getUsers().subscribe((users: [any]) => {
      for (let user of users) {
        if (user['name'] === username) {
          this.setId(user['id']);
          console.log("xxx")
          this.saveUser(user);
          break;
        }
      }
    });
  }

  saveUser(user: {id: string, name: string}): void {
    sessionStorage.setItem('User', JSON.stringify(user));
  }

  setId(id: number): void {
    this.id = id;
  }

  // funkcja do sprawdzania czy użytkownik jest w pobranym wyżej pliku JSON

  // funkcja pobierająca szczegóły o użytkowniku

}
