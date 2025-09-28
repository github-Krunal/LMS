import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldDefination } from '../../../model/fieldDefination.interface';

@Component({
  selector: 'dropdown-properties',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './dropdown-properties.component.html',
  styleUrl: './dropdown-properties.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class DropdownPropertiesComponent {
  @Input() field!:FieldDefination;
  protected dropdownOptions:string[]=[];

  ngOnInit(): void {
    this.getValueInFormControl();
  }

  protected addDropdownOptions(event: KeyboardEvent) {
    if (event.key.toLowerCase() === 'enter'.toLowerCase()) {
      const input = event.target as HTMLInputElement;  // cast target to input
      const value = input.value.trim();
      if (value) {
        this.dropdownOptions.push(value);
        input.value = ''; // clear input after adding
        this.setValueInFormControl();
      }
    }
  }

  protected removeOption(index:number){
    this.dropdownOptions.splice(index, 1);
  }

  protected setValueInFormControl(){
    this.field.options=this.dropdownOptions;
  }

  protected getValueInFormControl(){
    if(this.field.options&&this.field.options.length>0){
      this.dropdownOptions=this.field.options
    }
  }
}
