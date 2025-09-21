import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication.component';
import { RouterModule, Routes } from '@angular/router';

const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(AUTH_ROUTES),
    CommonModule,
    AuthenticationComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class AuthModule {}
