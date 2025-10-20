import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AngularModule, APP_SCHEMAS } from '../../../modules/angular/angular.module';

@Component({
  selector: 'inx-menu-layout',
  standalone: true,
  imports: [AngularModule,RouterModule],
  templateUrl: './inx-menu-layout.component.html',
  styleUrl: './inx-menu-layout.component.scss',
  schemas:APP_SCHEMAS
})
export class InxMenuLayoutComponent {
  protected inxMenu=[
    {
      DisplayName:'Dashboard',
      Route:'dashboard'
    },{
      DisplayName:'Course',
      Route:'course'
    }
  ]
}
