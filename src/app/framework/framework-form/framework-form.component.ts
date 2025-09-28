import { FormRenderControlComponent } from './../form-render-control/form-render-control.component';
import { ApiService } from './../../services/api.service';
import { IRepositoryDefination } from './../../model/repositoryDefination.interface';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ISaveFrameworkObject } from '../../model/saveFrameworkObject.interface';
import { AngularModule } from '../../modules/angular/angular.module';
import { currentDateTime } from '../../utility/utility';
import { GlobalModule } from '../../modules/angular/global.module';

@Component({
  selector: 'framework-form',
  standalone: true,
  imports: [AngularModule,GlobalModule,FormRenderControlComponent],
  templateUrl: './framework-form.component.html',
  styleUrl: './framework-form.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FrameworkFormComponent {

  @Input() businessObject:IRepositoryDefination | undefined;
  @Input() repositoryID:string|null="";
  @Input() recordID:string|null="";
  @Input() isViewRecord:boolean=false;
  @Output() closeFormEmitter = new EventEmitter<boolean>(false);
  @Output() frameworkFormValueEmitter = new EventEmitter<any>();
  public frameworkForm: FormGroup | undefined;
  protected fieldDefination:FieldDefination[]=[];
  protected fieldTypeEnum = FieldTypeEnum;

  constructor(private formBuilder: FormBuilder,public apiService:ApiService){}

  ngOnInit(): void {
    this.generateForm();
  }
  private generateForm(){
    this.formInitalization();
  }
  private formInitalization(){
    this.initializeFrameworkForm();
    this.getFieldDefination();
  }
  private getFieldDefination(): void {
    if (this.businessObject?.fieldDefination) {
      this.fieldDefination = this.businessObject?.fieldDefination
    }
  }

  private initializeFrameworkForm(): void {
    this.frameworkForm = this.formBuilder.group({});
    if (this.recordID) {
      this.getRecord();
    }
  }

  private getRecord(){
    this.apiService.getSignleRecord(this.repositoryID,this.recordID).subscribe(record=>{
      this.fieldDefination.forEach(field=>{
        const fieldValue=record[field.formControlName];
        this.frameworkForm?.get(field.formControlName)?.setValue(fieldValue);
      })
    })
  }

  public onSubmitFrameworkForm() {
    if (this.businessObject?.isCustomFormSave) {
      this.repositoryFormSave();
    } else {
      this.frameworkFormSave();
    }
  }

  private frameworkFormSave() {
    if (this.recordID) {
      this.updateForm();
    } else {
      this.saveForm();
    }
  }

  private repositoryFormSave(){
    let frameworkFormValue = this.frameworkForm?.value;
    this.frameworkFormValueEmitter.emit(frameworkFormValue);
  }

  private saveForm() {
    let saveFrameworkObject:ISaveFrameworkObject=this.getFormObject('createdBy','createdDate');
    this.apiService.saveRecordForm(saveFrameworkObject).subscribe(record=>{
      this.closeFrameworkForm();
    })
  }

  private updateForm() {
    let saveFrameworkObject:ISaveFrameworkObject=this.getFormObject('modifieddBy','modifiedDate');
    this.apiService.updateForm(saveFrameworkObject).subscribe(record=>{
      this.closeFrameworkForm();
    })
  }

  private getFormObject(user: string, date: string): ISaveFrameworkObject {
    let saveFrameworkObject: ISaveFrameworkObject = {
      repositoryID: this.repositoryID,
      record: this.frameworkForm?.value,
      recordID: this.recordID,
    };
    saveFrameworkObject.record[user] = currentDateTime();
    saveFrameworkObject.record[date] =  currentDateTime();
    return saveFrameworkObject;
  }

  public closeFrameworkForm() {
    this.closeFormEmitter.emit(false)
  }
}
