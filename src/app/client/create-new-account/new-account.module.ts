import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';

import { CreateNewAccountComponent } from './create-new-account.component';
import { NewAccountRoutingModule } from './new-account-routing.module';
import { BolMaterialModule } from '../../../common/bol-material/bol-material.module';

@NgModule({
  declarations: [
    CreateNewAccountComponent,
  ],
  exports: [
    CreateNewAccountComponent,
  ],
  imports: [
    BolMaterialModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    NewAccountRoutingModule,
  ],
})
export class NewAccountModule { }
