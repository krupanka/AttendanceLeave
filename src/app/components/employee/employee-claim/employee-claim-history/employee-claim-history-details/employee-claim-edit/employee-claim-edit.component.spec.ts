import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeClaimEditComponent } from './employee-claim-edit.component';

describe('EmployeeClaimEditComponent', () => {
  let component: EmployeeClaimEditComponent;
  let fixture: ComponentFixture<EmployeeClaimEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeClaimEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeClaimEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
