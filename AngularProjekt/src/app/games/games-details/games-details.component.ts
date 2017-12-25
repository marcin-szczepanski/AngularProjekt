import { Component, OnInit, Input } from '@angular/core';
import { GamesService } from '../../games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.css']
})
export class GamesDetailsComponent implements OnInit {

  //@Input()
  public gameId: string = "0";

  public game: Array<{id: string, title: string, grade: string, description: string,
    dateAdd: string, whoAdd: any, whoHas: Array<{id: string, name: string}>, whoSearches: Array<{id: string, name: string}>,
    comments: Array<{idUser: string, user: string, date: string, content: string}>}>;

  constructor(private gamesService: GamesService,
              private router: Router) { }

  ngOnInit() {
    this.gamesService.getGame(this.gameId).subscribe((game: [any]) =>{
      this.game = game;
    });
  }

}
