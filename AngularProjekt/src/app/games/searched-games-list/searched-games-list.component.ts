import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-games-list',
  templateUrl: './searched-games-list.component.html',
  styleUrls: ['./searched-games-list.component.css'],
  providers: [GamesService]
})
export class SearchedGamesListComponent implements OnInit {

  public userId: string;
  public games: Array<{id: string, title: string, grade: string}>;

  constructor(private gamesService: GamesService,
              private router: Router) { this.games = []; }

  ngOnInit() {
    this.games = [];
    this.userId = JSON.parse(sessionStorage.getItem('usrID'));
    this.gamesService.getSearchedGames(this.userId['id']).subscribe((games: [any]) =>{
      this.games = games;
    });
  }

  goToDetails(game: {id: string, title: string, grade: string}): void {
    this.router.navigate(['searched-games/' + game.id]);
  }

}
