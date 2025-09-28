
import { Component, Input, input, ViewChild, viewChild,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA,  } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AngularModule } from '../../modules/angular/angular.module';

@Component({
  selector: 'gb-right-panel',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA]
})
export class RightPanelComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  @Input() isOpenSideNav:boolean=false;
  openPanel(){
    this.drawer.open()
  }
}
