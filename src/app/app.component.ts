import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public navbarTriggered: boolean;

  constructor() { }

  triggerNavbar(): void {
    this.navbarTriggered = !this.navbarTriggered
  }

}
