import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [GamesService]
})
export class SearchResultsComponent implements OnInit {

  public query: string;
  public games: Array<{id: string, title: string}>;
  public empty: boolean = false;

  constructor(private gamesService: GamesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {this.games = [];}

  ngOnInit() {
    this.games = [];
    this.activatedRoute.params.subscribe(params => {
      const query: string = params['query'];
      this.query = query.replace('+', ' ');
      this.gamesService.search(this.query).subscribe((games: [any]) =>{
        this.games = games;
        if (games.length === 0) {
          this.empty = true;
        } else {
          this.empty = false;
        }
      });
    });
  }

  goToDetails(game: {id: string, title: string}): void {
    this.router.navigate(['search/' + this.query.replace(' ', '+') + '/' + game.id]);
  }

}
