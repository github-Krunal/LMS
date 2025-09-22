import { CommonModule } from '@angular/common';
import { RegistrationModel } from './../../../model/registration.model';
import { RouterModule } from '@angular/router';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { RegistrationResponseModel } from '../../../model/registrationResponse.model';
import { AngularModule, APP_SCHEMAS } from '../../../modules/angular/angular.module';

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

  constructor(private formBuilder: FormBuilder,private apiService:ApiService){}

  ngOnInit(): void {
    this.formInitialization();
  }

  private formInitialization(): void {
    this.registrationForm = this.formBuilder.group({
      username: [''],
      email: ['', Validators.required],
      password: [''],
      role:['']
    });
  }

  protected submitForm(){
    debugger
    const registration:RegistrationModel=this.registrationForm?.value;
    this.apiService.apiRegistration(registration).subscribe((response:RegistrationResponseModel)=>{

    })
  }
}
