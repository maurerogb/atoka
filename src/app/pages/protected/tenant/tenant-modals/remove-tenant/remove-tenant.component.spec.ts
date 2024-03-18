import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTenantComponent } from './remove-tenant.component';

describe('RemoveTenantComponent', () => {
  let component: RemoveTenantComponent;
  let fixture: ComponentFixture<RemoveTenantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveTenantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
