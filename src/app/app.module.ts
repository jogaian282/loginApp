import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RedColorDirective } from './directives/redColor.directive';

import { UserService } from './services/user.service';
import { AuthguardGuard } from './authguard.guard';

import { AppComponent } from './app.component';
import { NgIFDemoComponent } from './ngIFDemo/ngIFDemo.component';
import { AppRoutes } from './app.routing';
import { routingComponents } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    RedColorDirective,
    NgIFDemoComponent,
    routingComponents
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutes
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
