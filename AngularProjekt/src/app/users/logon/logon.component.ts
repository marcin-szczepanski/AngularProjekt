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
    sessionStorage.setItem('isLogged', 'true');
    this.goToDetails(user);
  }

  searchUser(username: string): void {
    let logged = false;
    this.sessionService.getUsers().subscribe((users: [any]) => {
      for (let user of users) {
        if (user['name'] === username) {
          this.id = user['id'];
          logged = true;
          this.saveUser(user);
          break;
        }
      }
      if (logged === false) {
        alert('Nie znaleziono użytkownika!');
      }
    });
  }

  goToDetails(user: {id: string, name: string}): void {
    this.router.navigate(['/']);
  }

}
