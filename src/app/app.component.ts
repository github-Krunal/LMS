import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LOCALSTORAGE_CONSTANT } from './constant/localstorage.constant';
import { AngularModule } from './modules/angular/angular.module';
import { LocalStorageService } from './utility/localstorage.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,AngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  constructor(private router: Router, private localStorageService:LocalStorageService) {
    this.trackRoutes();
  }

  private trackRoutes() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!event.urlAfterRedirects.includes('/login')) {
          this.localStorageService.setLocalStorage(LOCALSTORAGE_CONSTANT.LAST_VISITED_URL, event.urlAfterRedirects);
        }
      }
    });
  }

}
