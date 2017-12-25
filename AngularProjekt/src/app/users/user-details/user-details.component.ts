import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  //@Input()
  public userId: string = "0";

  constructor(private sessionService: SessionService,
              private router: Router) { }

  ngOnInit() {
    // funkcja do pobierania szczegółów o użytkowniku - Session Service
  }

}
