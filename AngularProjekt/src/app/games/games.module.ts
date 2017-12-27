import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesDetailsComponent } from './games-details/games-details.component';
import { SearchedGamesListComponent } from './searched-games-list/searched-games-list.component';
import { SearchGamesComponent } from './search-games/search-games.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GamesListComponent, GamesDetailsComponent, SearchedGamesListComponent, SearchGamesComponent]
})
export class GamesModule { }
