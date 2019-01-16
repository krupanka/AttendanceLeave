import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClaimComponent } from './employee-claim.component';

describe('EmployeeClaimComponent', () => {
  let component: EmployeeClaimComponent;
  let fixture: ComponentFixture<EmployeeClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
