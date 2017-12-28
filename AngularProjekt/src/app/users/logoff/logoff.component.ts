import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { window } from 'rxjs/operator/window';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.component.html',
  styleUrls: ['./logoff.component.css']
})
export class LogoffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.deleteUser();
  }

  ngOnDestroy() {
    alert('Wylogowano!');
  }

  deleteUser(): void {
    sessionStorage.removeItem('User');
    sessionStorage.setItem('isLogged', 'false');
    this.toMainPage();
  }

  toMainPage(): void {
    location.replace('../');
  }
}
