import { Component, AfterViewChecked, ComponentFactoryResolver, Injector, ApplicationRef } from '@angular/core';
import { CreateNewAccountComponent } from './client/create-new-account/create-new-account.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
