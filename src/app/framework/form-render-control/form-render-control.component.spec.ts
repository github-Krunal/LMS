import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRenderControlComponent } from './form-render-control.component';

describe('FormRenderControlComponent', () => {
  let component: FormRenderControlComponent;
  let fixture: ComponentFixture<FormRenderControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRenderControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRenderControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
