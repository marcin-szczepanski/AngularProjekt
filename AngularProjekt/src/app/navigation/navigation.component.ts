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

  reload():void {
    this.logged = JSON.parse(sessionStorage.getItem('isLogged'));
    if (!(sessionStorage.getItem('User'))) {
      sessionStorage.setItem('isLogged', 'false');
    }
  }

  goToGamesList():void {
    this.navigationChange.emit('games');
  }

  goToUsersList():void {
    this.navigationChange.emit('users');
  }

  goToLogon():void {
    this.navigationChange.emit('logon');
  }

  goToLogoff():void {
    this.navigationChange.emit('logoff');
  }

  goToSearch():void {
    this.navigationChange.emit('search');
  }

}
