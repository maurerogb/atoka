import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBusinessComponent } from './account-business.component';

describe('AccountBusinessComponent', () => {
  let component: AccountBusinessComponent;
  let fixture: ComponentFixture<AccountBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountBusinessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
