import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesDetailsComponent } from './games/games-details/games-details.component';
import { SearchedGamesListComponent } from './games/searched-games-list/searched-games-list.component';
import { SearchGamesComponent } from './games/search-games/search-games.component';
import { SearchResultsComponent } from './games/search-results/search-results.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LogonComponent } from './users/logon/logon.component';
import { LogoffComponent } from './users/logoff/logoff.component';

const routes: Array<Route> = [
  { path: '', component: MainPageComponent },
  { path: 'search', component: SearchGamesComponent, children: [
    { path: ':query', component: SearchResultsComponent, children: [
      { path: ':id', component: GamesDetailsComponent }
      ] }
    ] },
  { path: 'games', component: GamesListComponent, children: [
    { path: ':id', component: GamesDetailsComponent }
    ] },
  { path: 'searched-games', component: GamesListComponent, children: [
    { path: ':id', component: GamesDetailsComponent }
    ] },
  { path: 'users', component: UsersListComponent, children: [
    { path: ':id', component: UserDetailsComponent, children: [
      { path: 'games', component: GamesListComponent, children: [
        { path: ':id', component: GamesDetailsComponent }
      ] },
      { path: 'searched-games', component: SearchedGamesListComponent, children: [
        { path: ':id', component: GamesDetailsComponent }
      ] }
    ] }
  ] },
  { path: 'logon', component: LogonComponent },
  { path: 'logout', component: LogoffComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MainPageComponent,
    NavigationComponent,
    GamesListComponent,
    GamesDetailsComponent,
    SearchedGamesListComponent,
    SearchGamesComponent,
    SearchResultsComponent,
    UsersListComponent,
    UserDetailsComponent,
    LogonComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
