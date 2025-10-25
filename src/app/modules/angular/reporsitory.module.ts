import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBusinessObjectComponent } from '../../framework/form-business-object/form-business-object.component';
import { FormRenderControlComponent } from '../../framework/form-render-control/form-render-control.component';
import { FrameworkFormComponent } from '../../framework/framework-form/framework-form.component';

const REPOSITORY_MODULE = [
  FrameworkFormComponent,
  FormRenderControlComponent,
  FormBusinessObjectComponent
];

@NgModule({
  imports: [
    ...REPOSITORY_MODULE
  ],
  exports: [
    ...REPOSITORY_MODULE
  ],
})
export class RepositoryModule {}
