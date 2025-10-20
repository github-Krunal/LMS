import { AngularModule } from './../../../modules/angular/angular.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inx-courses',
  standalone: true,
  imports: [AngularModule],
  templateUrl: './inx-courses.component.html',
  styleUrl: './inx-courses.component.scss'
})
export class InxCoursesComponent {

}
