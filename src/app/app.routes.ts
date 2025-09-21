import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';

export const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'auth'
  },
  {
    path:"auth",
    loadChildren:()=>import('../app/components/authentication/authentication.module').then(module=>module.AuthModule),
  }
];
