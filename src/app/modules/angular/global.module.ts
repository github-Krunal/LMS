import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightPanelComponent } from '../../common-component/right-panel/right-panel.component';
import { FrameworkFormComponent } from '../../framework/framework-form/framework-form.component';
import { FrameworkTableComponent } from '../../framework/framework-table/framework-table.component';
// Standalone Components
import { FormRenderControlComponent } from '../../framework/form-render-control/form-render-control.component';
import { FormBusinessObjectComponent } from '../../framework/form-business-object/form-business-object.component';
import { LookupPropertiesComponent } from '../../framework/form-business-object/lookup-properties/lookup-properties.component';
import { DropdownPropertiesComponent } from '../../framework/form-business-object/dropdown-properties/dropdown-properties.component';
import { SingleLineFieldComponent } from '../../framework/controls/single-line-field/single-line-field.component';
import { MultiLineFieldComponent } from '../../framework/controls/multi-line-field/multi-line-field.component';
import { CheckBoxComponent } from '../../framework/controls/check-box/check-box.component';
import { DropdownFieldComponent } from '../../framework/controls/dropdown-field/dropdown-field.component';
import { DateFieldComponent } from '../../framework/controls/date-field/date-field.component';
import { LookUpComponent } from '../../framework/controls/look-up/look-up.component';
import { AttachmentComponent } from '../../framework/controls/attachment/attachment.component';
const COMMON_COMPONENT=[
  RightPanelComponent,
  FrameworkTableComponent,

  SingleLineFieldComponent,
  MultiLineFieldComponent,
  LookUpComponent,
  CheckBoxComponent,
  AttachmentComponent,
  DropdownFieldComponent,
  DateFieldComponent,
]

@NgModule({
  declarations: [],
  imports: [
    COMMON_COMPONENT
  ],
  exports:[
    COMMON_COMPONENT
  ]
})
export class GlobalModule { }
