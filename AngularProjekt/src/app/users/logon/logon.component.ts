import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css'],
  providers: [SessionService]
})
export class LogonComponent implements OnInit {

  public user: Array<any>;
  public id: number;

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {}

  onSubmit(value: any): void {
    let username = value.username;
    this.searchUser(username);
  }

  saveUser(user: {id: string, name: string}): void {
    sessionStorage.setItem('User', JSON.stringify(user));
    this.goToDetails(user);
  }

  searchUser(username: string): void {
    this.sessionService.searchUser(username);
    console.log("xD")
    console.log(this.id)
    if (this.id !== -1) {
      const user = {
        id: this.id.toString(),
        name: username
      };
      this.saveUser(user);
    }
  }

  goToDetails(user: {id: string, name: string}): void {
    this.router.navigate(['users/' + user.id]);
  }

  // funkcja do sprawdzania czy użytkownik jest w bazie - SearchService

  // funkcja do zapisywania zalogowanego użytkownika do Session Storage

  // funkcja do routingu na szczegóły o użytkowniku

}
