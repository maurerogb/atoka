import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicServiceLayoutComponent } from './public-service-layout.component';

describe('PublicServiceLayoutComponent', () => {
  let component: PublicServiceLayoutComponent;
  let fixture: ComponentFixture<PublicServiceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicServiceLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicServiceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
