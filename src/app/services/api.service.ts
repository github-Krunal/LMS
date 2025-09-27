import { RegistrationModel } from './../model/registration.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constant/api.constant';
import { Observable } from 'rxjs';
import { RegistrationResponseModel } from '../model/registrationResponse.model';
import { LoginModel } from '../model/login.interface';
import { LoginResponseModel } from '../model/loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public apiRegistration(registration:RegistrationModel): Observable<RegistrationResponseModel>{
    return this.http.post<RegistrationResponseModel>(API_ENDPOINTS.REGISTER,registration,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

  public apiLogin(login:LoginModel): Observable<LoginResponseModel>{
    return this.http.post<LoginResponseModel>(API_ENDPOINTS.LOGIN,login,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
  }

}
