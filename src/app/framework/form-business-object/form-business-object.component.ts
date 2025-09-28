import { CommonModule } from '@angular/common';
import { FieldDefination } from './../../model/fieldDefination.interface';
import { Component, Output, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { FieldTypeEnum } from '../../enum/fieldType.enum';
import { AngularModule } from '../../modules/angular/angular.module';

@Component({
  selector: 'form-business-object',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './form-business-object.component.html',
  styleUrl: './form-business-object.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]

})
export class FormBusinessObjectComponent {
  @Input() field!: FieldDefination;
  protected fieldTypeEnum = FieldTypeEnum;
}
