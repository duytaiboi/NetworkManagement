import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDataShowingComponent } from './report-data-showing.component';

describe('ReportDataShowingComponent', () => {
  let component: ReportDataShowingComponent;
  let fixture: ComponentFixture<ReportDataShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDataShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDataShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
