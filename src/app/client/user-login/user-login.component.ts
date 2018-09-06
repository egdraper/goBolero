import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  constructor(public router: Router) { }
  title = 'app';

  public onLoginClick(): void {
    this.router.navigate(['/user-dashboard']);
  }
}
