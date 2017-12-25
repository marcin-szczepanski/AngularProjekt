import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
  }

  // funkcja do pobierania listy użytkowników - Session Service

}
