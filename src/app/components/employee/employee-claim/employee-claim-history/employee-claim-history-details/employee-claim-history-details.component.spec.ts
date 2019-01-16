import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClaimHistoryDetailsComponent } from './employee-claim-history-details.component';

describe('EmployeeClaimHistoryDetailsComponent', () => {
  let component: EmployeeClaimHistoryDetailsComponent;
  let fixture: ComponentFixture<EmployeeClaimHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeClaimHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeClaimHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
