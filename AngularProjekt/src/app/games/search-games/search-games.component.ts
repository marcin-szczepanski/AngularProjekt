import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-games',
  templateUrl: './search-games.component.html',
  styleUrls: ['./search-games.component.css']
})
export class SearchGamesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    let query: string = value.search.trim();
    query = query.replace(' ', '+');
    this.goToDetails(query);
  }

  goToDetails(query: string): void {
    this.router.navigate(['search/' + query]);
  }

}
