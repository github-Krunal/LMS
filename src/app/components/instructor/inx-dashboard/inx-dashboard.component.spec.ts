import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InxDashboardComponent } from './inx-dashboard.component';

describe('InxDashboardComponent', () => {
  let component: InxDashboardComponent;
  let fixture: ComponentFixture<InxDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InxDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
