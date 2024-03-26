import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPropertyComponent } from './claim-property.component';

describe('ClaimPropertyComponent', () => {
  let component: ClaimPropertyComponent;
  let fixture: ComponentFixture<ClaimPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimPropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaimPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
