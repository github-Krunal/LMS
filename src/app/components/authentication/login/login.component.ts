import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LOCALSTORAGE_CONSTANT } from '../../../constant/localstorage.constant';
import { LoginModel } from '../../../model/login.interface';
import { LoginResponseModel } from '../../../model/loginResponse.interface';
import { AngularModule, APP_SCHEMAS } from '../../../modules/angular/angular.module';
import { ApiService } from '../../../services/api.service';
import { LocalStorageService } from '../../../utility/localstorage.service';

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
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private router: Router,private localStorageService:LocalStorageService){}

  ngOnInit(): void {
    this.isUserAlreadyLogin();
  }

  isUserAlreadyLogin(){
    const user = this.localStorageService.getLocalStorage(LOCALSTORAGE_CONSTANT.USER)
    if (user) {
    const lastUrl:string|null = this.localStorageService.getLocalStorage(LOCALSTORAGE_CONSTANT.LAST_VISITED_URL);
      if(lastUrl)
      this.router.navigateByUrl(lastUrl);
    }else{
      this.formInitialization();
    }
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
      // setLocalStorage(LOCALSTORAGE_CONSTANT.USER,response.user);
      this.router.navigate(['/instructor'])
      this.clearForm();
    })
  }

  private clearForm(){
    this.loginForm.reset();
  }
}
