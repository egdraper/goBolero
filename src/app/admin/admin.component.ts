import { Component, ComponentFactoryResolver, ApplicationRef, Injector, AfterViewChecked } from '@angular/core';
import { CreateNewAccountComponent } from '../client/create-new-account/create-new-account.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements AfterViewChecked {
  title = 'app';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector) {
  }
  public ngAfterViewChecked(): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(CreateNewAccountComponent);
    const componentRef = componentFactory.create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
  }
}
