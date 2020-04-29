import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-guard.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const appRoutes: Routes = [
  { path: 'login', 
    component: LoginComponent 
  }
,
{
    path:'home',
    component: HomeComponent,
    canActivate:[AuthGaurdService]
},
{ path: 'logout', component: LogoutComponent ,canActivate:[AuthGaurdService]},
{
    path:'add-employee',
    component: AddEmployeeComponent,
    canActivate:[AuthGaurdService]
},
{
    path:'',redirectTo:'/home',pathMatch:'full',canActivate:[AuthGaurdService]
  }
  
];
export default appRoutes;