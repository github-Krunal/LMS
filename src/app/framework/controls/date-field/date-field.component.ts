import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input, NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { MatDatepickerIntl } from '@angular/material/datepicker';
import { AngularModule } from '../../../modules/angular/angular.module';

@Component({
  selector: 'date-field',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './date-field.component.html',
  styleUrl: './date-field.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [provideNativeDateAdapter()],
})
export class DateFieldComponent {

  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean=false;
  protected fieldValue:string="";
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _intl = inject(MatDatepickerIntl);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  ngOnInit(): void {
    this.initializeForm();
    this.setDateType();
  }
  private setDateType(){
    this._locale.set('fr');
    this._adapter.setLocale(this._locale());
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
