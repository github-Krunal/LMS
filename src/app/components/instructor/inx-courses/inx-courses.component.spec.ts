import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InxCoursesComponent } from './inx-courses.component';

describe('InxCoursesComponent', () => {
  let component: InxCoursesComponent;
  let fixture: ComponentFixture<InxCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InxCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InxCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
