import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmploymentStatusComponent } from './change-employment-status.component';

describe('ChangeEmploymentStatusComponent', () => {
  let component: ChangeEmploymentStatusComponent;
  let fixture: ComponentFixture<ChangeEmploymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeEmploymentStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeEmploymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
