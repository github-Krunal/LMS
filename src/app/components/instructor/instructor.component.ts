import { AngularModule } from './../../modules/angular/angular.module';
import { Component } from '@angular/core';
import { InxMenuLayoutComponent } from './inx-menu-layout/inx-menu-layout.component';

@Component({
  selector: 'app-instructor',
  standalone: true,
  imports: [AngularModule,InxMenuLayoutComponent],
  templateUrl: './instructor.component.html',
  styleUrl: './instructor.component.scss'
})
export class InstructorComponent {

}
