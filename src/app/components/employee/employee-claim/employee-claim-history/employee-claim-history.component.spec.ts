import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClaimHistoryComponent } from './employee-claim-history.component';

describe('EmployeeClaimHistoryComponent', () => {
  let component: EmployeeClaimHistoryComponent;
  let fixture: ComponentFixture<EmployeeClaimHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeClaimHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeClaimHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
