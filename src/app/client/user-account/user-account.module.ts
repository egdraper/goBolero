import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';

import { UserAccountDashboardComponent } from './user-account-dashboard.component';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { BolMaterialModule } from '../../../common/bol-material/bol-material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserAccountDashboardComponent,
  ],
  exports: [
    UserAccountDashboardComponent,
  ],
  imports: [
    CommonModule,
    BolMaterialModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    UserAccountRoutingModule,
  ],
})
export class UserAccountModule { }
