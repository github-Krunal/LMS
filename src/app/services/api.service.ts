import { RegistrationModel } from './../model/registration.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constant/api.constant';
import { Observable } from 'rxjs';
import { RegistrationResponseModel } from '../model/registrationResponse.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public apiRegistration(registration:RegistrationModel): Observable<RegistrationResponseModel>{
    return this.http.post<RegistrationResponseModel>(API_ENDPOINTS.REGISTER,registration)
  }
}
