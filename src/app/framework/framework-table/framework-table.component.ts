import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'framework-table',
  standalone: true,
  imports: [],
  templateUrl: './framework-table.component.html',
  styleUrl: './framework-table.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class FrameworkTableComponent {

  @Input() dataSourceList:any[]=[];
  @Input() displayedColumns:string[]=[]
}
