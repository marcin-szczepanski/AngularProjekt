import { Component, OnInit} from '@angular/core';
import { GamesService } from '../../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.css'],
  providers: [GamesService]
})
export class GamesDetailsComponent implements OnInit {

  public gameId: string;
  public whoSearches: boolean = false;

  public game: Array<{id: string, title: string, grade: string, description: string,
    dateAdd: string, whoAdd: any, whoHas: Array<{id: string, name: string}>, whoSearches: Array<{id: string, name: string}>,
    comments: Array<{idUser: string, user: string, date: string, content: string}>}>;

  constructor(private gamesService: GamesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id: number = +params['id'];
      this.gameId = id.toString();
      this.gamesService.getGame(this.gameId).subscribe((game: [any]) =>{
        this.game = game[0];
        if (game[0]['whoSearches'].length === 0) {
          this.whoSearches = false;
        } else {
          this.whoSearches = true;
        }
      });
    });

  }

}
