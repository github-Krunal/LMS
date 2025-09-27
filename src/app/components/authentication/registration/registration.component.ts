import { CommonModule } from '@angular/common';
import { RegistrationModel } from './../../../model/registration.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { RegistrationResponseModel } from '../../../model/registrationResponse.model';
import { AngularModule, APP_SCHEMAS } from '../../../modules/angular/angular.module';
import { strongPasswordValidator } from '../../../validators/password.validators';
import {currentDateTime} from '../../../utility/utility'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers:[ApiService],
  schemas:APP_SCHEMAS
})
export class RegistrationComponent implements OnInit {
  public registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private apiService:ApiService,private router: Router){}

  ngOnInit(): void {
    this.formInitialization();
  }

  private formInitialization(): void {
    this.registrationForm = this.formBuilder.group({
      username: ['',Validators.required],
      email: ['', [Validators.required,Validators.email]],
      password: ['',[Validators.required,strongPasswordValidator()]],
      role:['',Validators.required]
    });
  }

  protected submitForm(){
    let registration:RegistrationModel=this.registrationForm?.value;
    registration.created_at=currentDateTime();
    registration.updated_at=currentDateTime();
    this.apiService.apiRegistration(registration).subscribe((response:RegistrationResponseModel)=>{
      this.clearForm();
      this.router.navigate(['/auth/login']);
    })
  }

  private clearForm(){
    this.registrationForm.reset();
  }
}
