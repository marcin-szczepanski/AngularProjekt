import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public logged: boolean = false;

  @Output()
  private navigationChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.reload();
  }

  ngOnInit() {
    this.reload();
  }

  /*ngOnChanges(changes: SimpleChanges) {
    this.logged = JSON.parse(sessionStorage.getItem('isLogged'));
    const c = changes['logged'];
    if (c) {
      this.reload();
    }
  }*/

  reload() {
    this.logged = JSON.parse(sessionStorage.getItem('isLogged'));
    if (!(sessionStorage.getItem('User'))) {
      sessionStorage.setItem('isLogged', 'false');
    }
  }

  goToGamesList() {
    this.navigationChange.emit('games');
  }

  goToUsersList() {
    this.navigationChange.emit('users');
  }

  goToLogon() {
    this.navigationChange.emit('logon');
  }

  goToLogoff() {
    this.navigationChange.emit('logoff');
  }

}
