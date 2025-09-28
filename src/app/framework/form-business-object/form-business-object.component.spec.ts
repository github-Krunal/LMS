import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBusinessObjectComponent } from './form-business-object.component';

describe('FormBusinessObjectComponent', () => {
  let component: FormBusinessObjectComponent;
  let fixture: ComponentFixture<FormBusinessObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBusinessObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBusinessObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
