import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { GamesDetailsComponent } from './games/games-details/games-details.component';
import { SearchedGamesListComponent } from './games/searched-games-list/searched-games-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { LogonComponent } from './users/logon/logon.component';
import { LogoffComponent } from './users/logoff/logoff.component';

const routes: Array<Route> = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'games', component: GamesListComponent, children: [
    { path: ':id', component: GamesDetailsComponent }
  ] },
  { path: 'searched-games', component: SearchedGamesListComponent, children: [
    { path: ':id', component: GamesDetailsComponent }
  ] },
  { path: 'users', component: UsersListComponent, children: [
    { path: ':id', component: UserDetailsComponent }
  ] },
  { path: 'logon', component: LogonComponent},
  { path: 'logoff', component: LogoffComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GamesListComponent,
    GamesDetailsComponent,
    SearchedGamesListComponent,
    UsersListComponent,
    UserDetailsComponent,
    LogonComponent,
    LogoffComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
