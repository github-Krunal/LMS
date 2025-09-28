import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkFormCreateComponent } from './framework-form-create.component';

describe('FrameworkFormCreateComponent', () => {
  let component: FrameworkFormCreateComponent;
  let fixture: ComponentFixture<FrameworkFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworkFormCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworkFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
