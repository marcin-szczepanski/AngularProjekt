import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LogonComponent } from './logon/logon.component';
import { LogoffComponent } from './logoff/logoff.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersListComponent, UserDetailsComponent, LogonComponent, LogoffComponent]
})
export class UsersModule { }
