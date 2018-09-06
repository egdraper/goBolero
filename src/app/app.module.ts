import '../polyfills';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app.routing.module';
import { UserLoginModule } from './client/user-login/user-login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CreateNewAccountComponent } from './client/create-new-account/create-new-account.component';
import { HomeComponent } from './client/home/home.component';
import { UserLoginRoutingModule } from './client/user-login/user-login-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
