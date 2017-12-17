import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesDetailsComponent } from './games-details/games-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GamesListComponent, GamesDetailsComponent]
})
export class GamesModule { }
