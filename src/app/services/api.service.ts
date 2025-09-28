import { RegistrationModel } from './../model/registration.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constant/api.constant';
import { Observable } from 'rxjs';
import { RegistrationResponseModel } from '../model/registrationResponse.model';
import { LoginModel } from '../model/login.interface';
import { LoginResponseModel } from '../model/loginResponse.interface';
import { FieldDefination } from '../model/fieldDefination.interface';
import { IRepositoryDefination } from '../model/repositoryDefination.interface';
import { ISaveFrameworkObject } from '../model/saveFrameworkObject.interface';
import { IAttachmentResponse } from '../model/uploadImage.interface';

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

  public saveRepositoyFrom(repositoryDefination:any): Observable<any[]> {
    return this.http.post<any>(API_ENDPOINTS.REPOSITORY_SAVE,repositoryDefination)
  }
  public getRepositoyList(): Observable<any[]> {
    return this.http.get<any>(API_ENDPOINTS.REPOSITORY_LIST)
  }
  public deleteRepository(id:string): Observable<any[]> {
    return this.http.delete<any>(API_ENDPOINTS.REPOSITORY_DELETE+`/${id}`)
  }
  public updateFieldDefination(repositoryID:string|null,fieldDefinationList:FieldDefination[]): Observable<string> {
    return this.http.post<string>(API_ENDPOINTS.FIELD_DEFINATION_UPDATE+`/${repositoryID}`,fieldDefinationList)
  }
  public getSingleRepository(id:string|null): Observable<IRepositoryDefination> {
    return this.http.get<IRepositoryDefination>(API_ENDPOINTS.SINGLE_REPOSITORY+`/${id}`)
  }
  public saveRecordForm(saveFrameworkObject:ISaveFrameworkObject): Observable<any[]> {
    return this.http.post<any>(API_ENDPOINTS.RECORD_SAVE,saveFrameworkObject)
  }
  public getAllRecords(repositoryID?:string): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.RECORD_GET+`/${repositoryID}`)
  }
  public deleteRecord(repositoryID:string|null,recordID:string): Observable<any> {
    return this.http.delete<any>(API_ENDPOINTS.RECORD_Delete+`/${repositoryID}/${recordID}`)
  }
  public getSignleRecord(repositoryID:string|null,recordID:string|null): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.SIGNLE_RECORD+`/${repositoryID}/${recordID}`)
  }
  public updateForm(saveFrameworkObject:ISaveFrameworkObject): Observable<any[]> {
    return this.http.post<any>(API_ENDPOINTS.UPDATE_RECORD,saveFrameworkObject)
  }

  public uploadAttachment(file: File | null): Observable<IAttachmentResponse> {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    return this.http.post<IAttachmentResponse>(API_ENDPOINTS.ATTACHMENT_UPLOAD, formData)
  }
  public deleteAttachment(URL:string): Observable<IAttachmentResponse> {
    return this.http.delete<IAttachmentResponse>(API_ENDPOINTS.ATTACHMENT_DELETE+'/'+URL)
  }

  public downloadAttachment(filename: string) {
    return this.http.get(`${API_ENDPOINTS.ATTACHMENT_DOWNLOAD}/${encodeURIComponent(filename)}`, {
      responseType: 'blob'  // 👈 Important for file download
    });
  }
}
