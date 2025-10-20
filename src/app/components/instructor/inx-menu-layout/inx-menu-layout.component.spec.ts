import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InxMenuLayoutComponent } from './inx-menu-layout.component';

describe('InxMenuLayoutComponent', () => {
  let component: InxMenuLayoutComponent;
  let fixture: ComponentFixture<InxMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InxMenuLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InxMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
