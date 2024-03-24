import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteRegitrationyComponent } from './complete-regitrationy.component';

describe('CompleteRegitrationyComponent', () => {
  let component: CompleteRegitrationyComponent;
  let fixture: ComponentFixture<CompleteRegitrationyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteRegitrationyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompleteRegitrationyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
