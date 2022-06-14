import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuresStaticDataSectionComponent } from './measures-static-data-section.component';

describe('MeasuresStaticDataSectionComponent', () => {
  let component: MeasuresStaticDataSectionComponent;
  let fixture: ComponentFixture<MeasuresStaticDataSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasuresStaticDataSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuresStaticDataSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
