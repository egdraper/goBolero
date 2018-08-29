import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CreateNewAccountComponent } from '../client/create-new-account/create-new-account.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CreateNewAccountComponent,
    AdminComponent,
  ],
  entryComponents: [
    CreateNewAccountComponent,
  ],
  imports: [
    AdminRoutingModule,
  ],
})
export class AdminModule { }
