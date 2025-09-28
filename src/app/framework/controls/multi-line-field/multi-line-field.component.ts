import { CommonModule } from '@angular/common';

import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import e from 'express';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { AngularModule } from '../../../modules/angular/angular.module';

@Component({
  selector: 'multi-line-field',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './multi-line-field.component.html',
  styleUrl: './multi-line-field.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class MultiLineFieldComponent implements OnInit{
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean=false;
  protected fieldValue:string="";

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(){
     this.addControlInForm();
  }

  private getFormValue(){
    this.frameworkForm.get(this.field.formControlName)?.valueChanges.subscribe(value => {
      this.fieldValue=value;
    });
  }

  private addControlInForm(): void {
    this.frameworkForm?.addControl(this.field.formControlName, new FormControl(''));
    this.getFormValue();
  }
}
