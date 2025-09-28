import { FieldDefination } from './../../../model/fieldDefination.interface';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { IRepositoryDefination } from '../../../model/repositoryDefination.interface';
import { AngularModule } from '../../../modules/angular/angular.module';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'lookup-properties',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './lookup-properties.component.html',
  styleUrl: './lookup-properties.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class LookupPropertiesComponent {
  @Input() field!:FieldDefination;
  protected repositoryList:IRepositoryDefination[] = [];
  protected lookupFieldList:FieldDefination[]=[];
  protected lookupField1:string|undefined="";
  protected lookupRepositoryId:string|undefined="";
  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getAllRepositories();
  }

  private getAllRepositories(){
    this.apiService.getRepositoyList().subscribe((repositories:IRepositoryDefination[])=>{
      this.repositoryList=repositories;
      this.setFieldValues();
    })
  }

  protected onRepositorySelect(){
    const selectedRepostory:IRepositoryDefination|undefined =this.repositoryList.find(repository=>repository._id===this.lookupRepositoryId);
    if(selectedRepostory?._id){
      this.lookupFieldList=selectedRepostory.fieldDefination;
      this.field.lookupRepositoryName=selectedRepostory.repositoryName;
    }
  }

  protected onLookupfieldSelect(event: Event){
    const lookupFieldName = (event.target as HTMLSelectElement).value;
    if(lookupFieldName){
      this.field.lookupField1=lookupFieldName;
    }
  }

  private setFieldValues(){
    this.lookupField1=this.field.lookupField1;
    this.showSelectedRepositoryField();
  }
  private showSelectedRepositoryField() {
    if (this.field.lookupRepositoryName) {
      const selectedRepostory: IRepositoryDefination | undefined = this.repositoryList.find(repository => repository.repositoryName === this.field.lookupRepositoryName);
      if (selectedRepostory?._id) {
        this.lookupRepositoryId = selectedRepostory._id;
        this.onRepositorySelect();
      }
    }
  }

}
