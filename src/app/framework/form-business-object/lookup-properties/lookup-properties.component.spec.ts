import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupPropertiesComponent } from './lookup-properties.component';

describe('LookupPropertiesComponent', () => {
  let component: LookupPropertiesComponent;
  let fixture: ComponentFixture<LookupPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupPropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
