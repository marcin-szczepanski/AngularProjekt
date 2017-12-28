import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../session.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [SessionService]
})
export class UserDetailsComponent implements OnInit {

  public user: any;
  public isLogged: boolean = false;
  public empty: boolean = false;

  constructor(private sessionService: SessionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id: number = +params['id'];
      this.getUser(id);
      this.me(id);
    })
  }

  me(id: number): void {
    const logged = JSON.parse(sessionStorage.getItem('User'));
    if (logged) {
      if (logged['id'] == id) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      };
    } else {
      this.isLogged = false;
    };
  }

  getUser(id: number): void {
    this.sessionService.getUser(id).subscribe((user: [any]) => {
      if (user.length !== 0) {
        this.user = user[0];
        const u = {
          id: user[0].id,
          name: user[0].name
        }
        sessionStorage.setItem('usrID', JSON.stringify(u));
      };
      if (this.user.length === 0) {
        this.empty = true;
      } else {
        this.empty = false;
      };
    });
  }


}
