import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationEnd) {
      //   window.scrollTo({ top: 0 });
      // }
    });
  }

}
