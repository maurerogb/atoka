import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportIncidentModalComponent } from './report-incident-modal.component';

describe('ReportIncidentModalComponent', () => {
  let component: ReportIncidentModalComponent;
  let fixture: ComponentFixture<ReportIncidentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportIncidentModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportIncidentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
