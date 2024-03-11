import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountVerificationDialogueComponent } from './account-verification-dialogue.component';

describe('AccountVerificationDialogueComponent', () => {
  let component: AccountVerificationDialogueComponent;
  let fixture: ComponentFixture<AccountVerificationDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountVerificationDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountVerificationDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
