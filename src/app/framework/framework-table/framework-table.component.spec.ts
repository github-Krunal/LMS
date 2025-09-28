import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkTableComponent } from './framework-table.component';

describe('FrameworkTableComponent', () => {
  let component: FrameworkTableComponent;
  let fixture: ComponentFixture<FrameworkTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
