import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProccessComletedprivatedialogComponent } from './proccess-comletedprivatedialog.component';

describe('ProccessComletedprivatedialogComponent', () => {
  let component: ProccessComletedprivatedialogComponent;
  let fixture: ComponentFixture<ProccessComletedprivatedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProccessComletedprivatedialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProccessComletedprivatedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
