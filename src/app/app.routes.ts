import { InstructorComponent } from './components/instructor/instructor.component';
import { Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegistrationComponent } from './components/authentication/registration/registration.component';
import { authGuard } from './guard/auth.guard';
import { InxDashboardComponent } from './components/instructor/inx-dashboard/inx-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent,
    },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  {
    path: 'instructor',
    component: InstructorComponent,
    children:[
      {
        path:'',
        component:InxDashboardComponent
      },
      {
        path:'dashboard',
        component:InxDashboardComponent
      }
    ]
  },
  {
    path:"repository",
    loadChildren:()=>import('../app/framework/framework.module').then(framework=>framework.FrameworkModule)
  },
];
