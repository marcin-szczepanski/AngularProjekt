import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  //@Input()
  public userId: string = "0";

  public games: Array<{id: string, title: string, grade: string}>;

  constructor(private gamesService: GamesService,
              private router: Router) { }

  ngOnInit() {
    this.gamesService.getGames(this.userId).subscribe((games: [any]) =>{
      this.games = games;
    });
  }

  goToDetails(game: {id: string, title: string, grade: string}) {
    this.router.navigate(['games/' + game.id]);
  }

}
