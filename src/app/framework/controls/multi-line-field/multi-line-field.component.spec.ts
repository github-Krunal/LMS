import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineFieldComponent } from './multi-line-field.component';

describe('MultiLineFieldComponent', () => {
  let component: MultiLineFieldComponent;
  let fixture: ComponentFixture<MultiLineFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiLineFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiLineFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
