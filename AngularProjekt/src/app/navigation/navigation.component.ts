import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public logged: boolean = false;
  public id: string;
  public name: string;

  @Output()
  private navigationChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.reload();
  }

  ngOnInit() {
    this.reload();
  }

  reload(): void {
    this.logged = JSON.parse(sessionStorage.getItem('isLogged'));
    if (!(sessionStorage.getItem('User'))) {
      sessionStorage.setItem('isLogged', 'false');
    } else {
      const x = this.me()
      this.id = x['id'];
      this.name = x['name'];
    }
  }

  myGames(): void {
    sessionStorage.setItem('myGames', 'true');
  }

  me(): string {
    const logged = JSON.parse(sessionStorage.getItem('User'));
    return logged;
  }

  goToGamesList(): void {
    this.navigationChange.emit('games');
  }

  goToSearchedGamesList(): void {
    this.navigationChange.emit('search-games');
  }

  goToUsersList(): void {
    this.navigationChange.emit('users');
  }

  goToLogon(): void {
    this.navigationChange.emit('logon');
  }

  goToLogoff(): void {
    this.navigationChange.emit('logoff');
  }

  goToSearch(): void {
    this.navigationChange.emit('search');
  }


}
