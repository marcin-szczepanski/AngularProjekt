import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css'],
  providers: [GamesService]
})
export class GamesListComponent implements OnInit {

  public userId: string;
  public games: Array<{id: string, title: string, grade: string}>;

  constructor(private gamesService: GamesService,
              private router: Router) { this.games = []; }

  ngOnInit() {
    this.games = [];
    let myGames = sessionStorage.getItem('myGames');

    if (myGames) {
      this.userId = JSON.parse(sessionStorage.getItem('User'));
      sessionStorage.removeItem('myGames');
    } else {
      this.userId = JSON.parse(sessionStorage.getItem('usrID'));
    }

    this.gamesService.getGames(this.userId['id']).subscribe((games: [any]) =>{
      this.games = games;
    });
  }

  goToDetails(game: {id: string, title: string, grade: string}): void {
    this.router.navigate(['games/' + game.id]);
  }

}
