import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Leave Management App</h1>
    <nav>
      <a routerLink="/request">Request Leave</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
