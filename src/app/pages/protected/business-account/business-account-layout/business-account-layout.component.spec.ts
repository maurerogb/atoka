import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountLayoutComponent } from './business-account-layout.component';

describe('BusinessAccountLayoutComponent', () => {
  let component: BusinessAccountLayoutComponent;
  let fixture: ComponentFixture<BusinessAccountLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessAccountLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessAccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
