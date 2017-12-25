import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    let username = value.username.trim();
    let password = value.password;
  }

  // funkcja do sprawdzania czy użytkownik jest w bazie - SearchService

  // funkcja do zapisywania zalogowanego użytkownika do Session Storage

  // funkcja do routingu na szczegóły o użytkowniku

}
