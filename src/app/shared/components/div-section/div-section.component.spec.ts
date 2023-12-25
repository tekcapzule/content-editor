import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivSectionComponent } from './div-section.component';

describe('DivSectionComponent', () => {
  let component: DivSectionComponent;
  let fixture: ComponentFixture<DivSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
