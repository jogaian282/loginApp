import { Routes, RouterModule } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { SelectDropdownComponent } from './selectDropdown/selectDropdown.component';
import { LoginAppComponent } from './loginApp/loginApp.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginAppComponent},
  {path:'dashboard',canActivate:[AuthguardGuard],component:DashboardComponent},
  {path:'user/:name',component:UserComponent},
  {path:'dropdown',component:SelectDropdownComponent}
];

export const AppRoutes = RouterModule.forRoot(routes,{useHash:false});

export const routingComponents = [LoginAppComponent,SelectDropdownComponent,DashboardComponent,UserComponent];
