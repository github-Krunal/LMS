import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map, of, startWith, Observable } from 'rxjs';
import { FieldDefination } from '../../../model/fieldDefination.interface';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { AngularModule } from '../../../modules/angular/angular.module';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'look-up',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './look-up.component.html',
  styleUrl: './look-up.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LookUpComponent {
  @Input() field!: FieldDefination;
  @Input() frameworkForm!: FormGroup;
  @Input() isViewRecord: boolean = false;

  @ViewChild('chipInput') chipInput!: ElementRef<HTMLInputElement>;

  options: string[] = [];
  filteredOptions: Observable<string[]> = of([]);

  separatorKeysCodes: number[] = [ENTER, COMMA];
  selectedValues: string[] = [];
  protected currentInput: string = '';
  protected fieldValue: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.addControlInForm();
  }

  private addControlInForm(): void {
    if (!this.frameworkForm.get(this.field.formControlName)) {
      this.frameworkForm.addControl(this.field.formControlName, new FormControl([]));
    }
    this.getLookupFieldRecord();
  }

  private setControlValue() {
    const formValue = this.frameworkForm.get(this.field.formControlName)?.value || [];
    this.selectedValues = Array.isArray(formValue) ? formValue : [];
    if (this.selectedValues.length > 0) {
      this.fieldValue = this.selectedValues.join(', ');
    }
  }

  private getLookupFieldRecord() {
    this.apiService.getAllRecords(this.field.lookupRepositoryName).subscribe((lookupResponse: any[]) => {
      this.options = this.convertLookupOption(lookupResponse);
      this.initializeLookupFilter();
      this.setControlValue();
    });
  }

  private convertLookupOption(lookupResponse: any[]): string[] {
    if (!lookupResponse || lookupResponse.length === 0) return [];

    return lookupResponse.map(value => {
      const field1 = this.field.lookupField1 ? value[this.field.lookupField1] : '';
      const field2 = this.field.lookupField2 ? value[this.field.lookupField2] : '';
      return `${field1} ${field2}`.trim();
    });
  }

  private initializeLookupFilter() {
    const lookUpControl = this.frameworkForm.get(this.field.formControlName);

    this.filteredOptions = lookUpControl!.valueChanges.pipe(
      startWith(''),
      map(value => {
        const searchValue = typeof value === 'string' ? value : '';
        return this._filter(searchValue);
      })
    );
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  displayFn(option: string): string {
    return option ? option : '';
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const value = event.option.value;
    if (value && !this.selectedValues.includes(value)) {
      this.selectedValues.push(value);
    }
    this.frameworkForm.get(this.field.formControlName)?.setValue(this.selectedValues);
    this.chipInput.nativeElement.value = '';
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value && !this.selectedValues.includes(value)) {
      this.selectedValues.push(value);
      this.frameworkForm.get(this.field.formControlName)?.setValue(this.selectedValues);
    }

    if (event.input) {
      event.input.value = '';
    }
    this.chipInput.nativeElement.value = '';
  }

  remove(option: string): void {
    const index = this.selectedValues.indexOf(option);
    if (index >= 0) {
      this.selectedValues.splice(index, 1);
    }
    this.frameworkForm.get(this.field.formControlName)?.setValue(this.selectedValues);
  }
}
