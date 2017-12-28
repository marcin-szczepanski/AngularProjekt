import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [SessionService]
})
export class UsersListComponent implements OnInit {

  public users: Array<any> = [];
  public empty: boolean = false;

  constructor(private sessionService: SessionService,
              private router: Router) { this.users = []; }

  ngOnInit() {
    this.users = [];
    this.getUsers();
  }

  getUsers(): void {
    const logged = JSON.parse(sessionStorage.getItem('User'));
    if (logged) {
      this.users.push(logged);
    };
    this.sessionService.getUsers().subscribe((users: [any]) => {
      for (let user of users) {
        if(logged) {
          if (user['name'] != logged['name']) {
            this.users.push(user);
          }
        } else {
          this.users.push(user);
        }
      }
      if (this.users.length === 0) {
        this.empty = true;
      } else {
        this.empty = false;
      };
    });
  }

}
