import { FormBusinessObjectComponent } from './../form-business-object/form-business-object.component';
import { FormRenderControlComponent } from './../form-render-control/form-render-control.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { FieldDefination } from '../../model/fieldDefination.interface';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { IBusinessObject } from '../../model/businessObject.interface';
import { UtilityService } from '../../utility/utility.service';
import { ApiService } from '../../services/api.service';
import { AngularModule } from '../../modules/angular/angular.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalModule } from '../../modules/angular/global.module';

@Component({
  selector: 'framework-form-create',
  standalone: true,
  imports: [AngularModule,GlobalModule,FormRenderControlComponent,FormBusinessObjectComponent ],
  templateUrl: './framework-form-create.component.html',
  styleUrl: './framework-form-create.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class FrameworkFormCreateComponent {
  public frameworkForm: FormGroup | undefined;
  private _snackBar = inject(MatSnackBar);

  public fieldName:string="";
  public fieldType!:FieldTypeEnum|null;
  public fieldDefinationList:FieldDefination[]=[]
  public fieldTypList: FieldTypeEnum[] = Object.values(FieldTypeEnum);
  public repositoryID:string|null="";
  public selectedFieldDefination!:FieldDefination;
  public fieldList:any[]=[
    {
      icon:"add",
      Name:"Text Field"
    },
    {
      icon:"add",
      Name:"Number Field"
    },
    {
      icon:"add",
      Name:"Multi-line Field"
    },
    {
      icon:"add",
      Name:"Lookup Field"
    },
    {
      icon:"add",
      Name:"Checkbox Field"
    },
    {
      icon:"add",
      Name:"Attachment Field"
    },
    {
      icon:"add",
      Name:"Dropdown Field"
    },
    {
      icon:"add",
      Name:"Date Field"
    }
  ]

  constructor(public apiService:ApiService,private route: ActivatedRoute,private formBuilder: FormBuilder,private utilityService:UtilityService){}

  ngOnInit() {
    this.repositoryID = this.route.snapshot.paramMap.get('id');
    this.initializeFrameworkForm();
    this.getBusinessObject()
  }
  private initializeFrameworkForm(): void {
    this.frameworkForm = this.formBuilder.group({});
  }

  private getBusinessObject() {
    this.apiService.getSingleRepository(this.repositoryID).subscribe((objectDefination: IBusinessObject) => {
      if(Array.isArray(objectDefination.fieldDefination)&&objectDefination.fieldDefination.length>0){
        this.fieldDefinationList = objectDefination.fieldDefination;
      }
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const draggedItem = event.previousContainer.data[event.previousIndex];
      // Map the dragged item to a FieldDefination
      const newField: FieldDefination = {
        fieldType: this.mapNameToFieldType(draggedItem.Name),
        formControlName: `field_${Date.now()}`,
        displayName: draggedItem.Name+`name_${this.fieldDefinationList.length}`
      };

      event.container.data.splice(event.currentIndex, 0, newField);
    }
  }

  private mapNameToFieldType(name: string): FieldTypeEnum {
    switch (name) {
      case 'Text Field':
        return FieldTypeEnum.SINGLE_LINE_FIELD;
      case 'Number Field':
        return FieldTypeEnum.NUMBER_FIELD;
      case 'Multi-line Field':
        return FieldTypeEnum.MULTI_LINE_FIELD;
      case 'Lookup Field':
        return FieldTypeEnum.LOOK_UP_FIELD;
      case 'Checkbox Field':
        return FieldTypeEnum.CHECKBOX_FIELD;
        case 'Attachment Field':
        return FieldTypeEnum.ATTACHMENT_FIELD;
        case 'Dropdown Field':
        return FieldTypeEnum.DROPDOWN_FIELD;
        case 'Date Field':
        return FieldTypeEnum.DATE_FIELD;
      default:
        return FieldTypeEnum.SINGLE_LINE_FIELD;
    }
  }
  public submitField(){
    this.apiService.updateFieldDefination(this.repositoryID,this.fieldDefinationList).subscribe(response=>{
      this._snackBar.open('Object updated Successfully')
    })
  }

  protected fieldEmitter(field:FieldDefination){
    this.selectedFieldDefination=field;
  }

}
