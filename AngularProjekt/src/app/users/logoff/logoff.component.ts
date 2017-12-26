import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    this.toMainPage();
  }

  deleteUser() {
    sessionStorage.removeItem('user');
  }

  toMainPage() {
    this.router.navigate(['/']);
  }
}
