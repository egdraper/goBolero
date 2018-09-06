import { Component } from '@angular/core';


@Component({
  selector: 'app-user-account-dashboard',
  templateUrl: './user-account-dashboard.component.html',
  styleUrls: [ './user-account-dashboard.component.scss' ]
})
export class UserAccountDashboardComponent {
  public changeFlavor = false;
  public onSwitchFlavorClick(): void {
    this.changeFlavor = !this.changeFlavor;
  }
}
