import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNewAccountComponent } from './create-new-account.component';


const routes: Routes = [
  {
    path: '',
    component: CreateNewAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAccountRoutingModule { }
