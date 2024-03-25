import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanPlanningComponent } from './urban-planning.component';

describe('UrbanPlanningComponent', () => {
  let component: UrbanPlanningComponent;
  let fixture: ComponentFixture<UrbanPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrbanPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrbanPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
