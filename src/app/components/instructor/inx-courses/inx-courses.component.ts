import { AngularModule } from './../../../modules/angular/angular.module';
import { Component } from '@angular/core';
import { GlobalModule } from '../../../modules/angular/global.module';
import { RepositoryModule } from '../../../modules/angular/reporsitory.module';
import { ApiService } from '../../../services/api.service';
import { Course } from '../../../model/course.interface';

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
  protected coursesList:Course[]=[]

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getAllCourses();
  }

  protected onCourseClick() {
    this.isOpenSideNav = true;
  }
  protected closeSidePanel() {
    this.isOpenSideNav = false;
  }

  private getAllCourses(){
    this.apiService.getAllRecords(this.repositoryID).subscribe((courses:Course[])=>{
      this.coursesList=courses;
    })
  }
}
