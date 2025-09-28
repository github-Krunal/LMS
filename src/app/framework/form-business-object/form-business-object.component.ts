import { CommonModule } from '@angular/common';
import { FieldDefination } from './../../model/fieldDefination.interface';
import { Component, Output, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { AngularModule } from '../../modules/angular/angular.module';
import { DropdownPropertiesComponent } from './dropdown-properties/dropdown-properties.component';
import { LookupPropertiesComponent } from './lookup-properties/lookup-properties.component';

@Component({
  selector: 'form-business-object',
  standalone: true,
  imports: [AngularModule, LookupPropertiesComponent,
    DropdownPropertiesComponent,],
  templateUrl: './form-business-object.component.html',
  styleUrl: './form-business-object.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FormBusinessObjectComponent {
  @Input() field!: FieldDefination;
  protected fieldTypeEnum = FieldTypeEnum;
}
