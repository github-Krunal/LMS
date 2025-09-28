import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { AngularModule } from '../../../modules/angular/angular.module';

@Component({
  selector: 'number-field',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class NumberFieldComponent {

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
