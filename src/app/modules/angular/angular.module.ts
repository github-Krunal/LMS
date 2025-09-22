import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatTableModule} from '@angular/material/table';
// import {MatIconModule} from '@angular/material/icon';
// import {MatDividerModule} from '@angular/material/divider';
// import {MatButtonModule} from '@angular/material/button';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatCardModule} from '@angular/material/card';
// import {MatSnackBarModule} from '@angular/material/snack-bar';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { MatChipsModule } from '@angular/material/chips';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

export const APP_SCHEMAS = [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA];

const ANGULAR_DEFAULT_MODULE=[
  CommonModule,
  ReactiveFormsModule,
  RouterModule
];

const ANGULAR_MATERIAL_MODULE=[
  RouterModule
  // MatSelectModule,
  // MatInputModule,
  // MatFormFieldModule,
  // MatTableModule,
  // MatIconModule,
  // MatDividerModule,
  // MatButtonModule,
  // MatSidenavModule,
  // MatMenuModule,
  // MatCardModule,
  // MatSnackBarModule,
  // MatToolbarModule,
  // DragDropModule,
  // MatAutocompleteModule,
  // MatChipsModule,
  // MatCheckboxModule,
  // MatDatepickerModule,
  // MatNativeDateModule
]

@NgModule({
  declarations: [],
  imports: [
    ANGULAR_DEFAULT_MODULE,
    ANGULAR_MATERIAL_MODULE
  ],
  exports:[
    ANGULAR_DEFAULT_MODULE,
    ANGULAR_MATERIAL_MODULE
  ]
})
export class AngularModule { }
