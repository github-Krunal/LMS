import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginModel } from '../../../model/login.interface';
import { LoginResponseModel } from '../../../model/loginResponse.interface';
import { AngularModule, APP_SCHEMAS } from '../../../modules/angular/angular.module';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AngularModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers:[ApiService],
  schemas:APP_SCHEMAS
})
export class LoginComponent {
  public loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private router: Router){}

  ngOnInit(): void {
    this.formInitialization();
  }

  private formInitialization(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }


  protected submitForm(){
    const login:LoginModel=this.loginForm?.value;
    this.apiService.apiLogin(login).subscribe((response:LoginResponseModel)=>{

      this.clearForm();
    })
  }

  private clearForm(){
    this.loginForm.reset();
  }
}
