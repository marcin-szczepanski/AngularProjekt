import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navigation: string = '/';
  
  public changeNavigationHandler(newNavigationValue: string): void {
    this.navigation = newNavigationValue;
  }
}
