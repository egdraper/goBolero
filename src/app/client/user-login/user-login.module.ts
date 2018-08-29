import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';

import { UserLoginComponent } from './user-login.component';
import { UserLoginRoutingModule } from './user-login-routing.module';
import { BolMaterialModule } from '../../../common/bol-material/bol-material.module';

@NgModule({
  declarations: [
    UserLoginComponent,
  ],
  exports: [
    UserLoginComponent,
  ],
  imports: [
    BolMaterialModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    UserLoginRoutingModule,
  ],
})
export class UserLoginModule { }
