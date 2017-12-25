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
  }

  // funkcja do usuwania użytkownika z Session Storage

  // funkcja routingu na stronę główną

  // funkcja przeciwna do ngOnInit() - alert - zostałeś wylogowany...

}
