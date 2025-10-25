import { AngularModule } from './../../../modules/angular/angular.module';
import { Component } from '@angular/core';
import { GlobalModule } from '../../../modules/angular/global.module';
import { RepositoryModule } from '../../../modules/angular/reporsitory.module';

@Component({
  selector: 'app-inx-courses',
  standalone: true,
  imports: [AngularModule,GlobalModule,RepositoryModule],
  templateUrl: './inx-courses.component.html',
  styleUrl: './inx-courses.component.scss'
})
export class InxCoursesComponent {
  protected isOpenSideNav: boolean = false;
  protected repositoryID:string="TutorCourses";

  protected onCourseClick() {
    this.isOpenSideNav = true;
  }
  protected closeSidePanel() {
    this.isOpenSideNav = false;
  }
}
