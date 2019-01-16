import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNewClaimComponent } from './employee-new-claim.component';

describe('EmployeeNewClaimComponent', () => {
  let component: EmployeeNewClaimComponent;
  let fixture: ComponentFixture<EmployeeNewClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNewClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNewClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
