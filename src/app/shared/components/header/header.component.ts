import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'ngvs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faBars: IconDefinition = faBars;

  constructor(private authService: AuthService, private router: Router) { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onLoginClick(): void {
    this.router.navigateByUrl('/auth/login');
  }

  onLogoutClick(): void {
    this.authService.logout();
  }
}
