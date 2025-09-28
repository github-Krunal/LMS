import { ApiService } from './../../services/api.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { IBusinessObject } from '../../model/businessObject.interface';
import { FrameworkFormComponent } from '../framework-form/framework-form.component';
import { FrameworkTableComponent } from '../framework-table/framework-table.component';
import { IRepositoryDefination } from '../../model/repositoryDefination.interface';
import { currentDateTime } from '../../utility/utility';
import { AngularModule } from '../../modules/angular/angular.module';
import { GlobalModule } from '../../modules/angular/global.module';

@Component({
  selector: 'app-repository-list',
  standalone: true,
  imports: [AngularModule,GlobalModule,FrameworkFormComponent],
  templateUrl: './repository-list.component.html',
  styleUrl: './repository-list.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class RepositoryListComponent implements OnInit {
  protected isOpenSideNav:boolean=false;
  public businessObject:IRepositoryDefination={
    isCustomFormSave:true,
    fieldDefination:[
      {
            formControlName:'repositoryName',
            displayName:'Repository Name',
            fieldType:FieldTypeEnum.SINGLE_LINE_FIELD
      },
      {
        formControlName:'description',
        displayName:'Description',
        fieldType:FieldTypeEnum.MULTI_LINE_FIELD
      },

    ]
  }
  public respositoryList:any[]=[];

  displayedColumns: string[] = ['Action','repositoryName', 'description'];
  dataSource:any =[];
  protected isloader:boolean=true;
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getAllRespositories();
  }

  protected openSidePanel(){
    this.isOpenSideNav=true
  }
  protected closeSidePanel(){
    this.isOpenSideNav=false;
  }
  protected getframeweFormValue(repositoryFrom:IRepositoryDefination){
    repositoryFrom.createdDate=currentDateTime();
    repositoryFrom.createdBy=currentDateTime();
    this.saveRepositoryForm(repositoryFrom)
  }
  private saveRepositoryForm(repositoryDefination: any){
    this.apiService.saveRepositoyFrom(repositoryDefination).subscribe(repositoryResponse=>{
      this.isOpenSideNav=false;
      this.getAllRespositories();
    })
  }

  private getAllRespositories(){
    this.apiService.getRepositoyList().subscribe(responsitories=>{
        this.respositoryList=responsitories;
        this.isloader=false;
    })
  }

  protected onDeleteRepository(repository:any){
    this.apiService.deleteRepository(repository._id).subscribe(a=>{
      this.getAllRespositories();
    })
  }

}
