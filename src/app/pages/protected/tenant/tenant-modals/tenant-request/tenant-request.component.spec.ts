import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantRequestComponent } from './tenant-request.component';

describe('TenantRequestComponent', () => {
  let component: TenantRequestComponent;
  let fixture: ComponentFixture<TenantRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenantRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenantRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
