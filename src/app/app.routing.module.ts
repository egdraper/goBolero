import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewAccountComponent } from './client/create-new-account/create-new-account.component';
import { HomeComponent } from './client/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'user-login',
    loadChildren: './client/user-login/user-login.module#UserLoginModule'
  },
  {
    path: 'create-new-account',
    loadChildren: './client/create-new-account/new-account.module#NewAccountModule'
  },
  {
    path: 'user-dashboard',
    loadChildren: './client/user-account/user-account.module#UserAccountModule'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
