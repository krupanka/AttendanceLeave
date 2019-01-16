import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeehistoryComponent } from './employeehistory.component';

describe('EmployeehistoryComponent', () => {
  let component: EmployeehistoryComponent;
  let fixture: ComponentFixture<EmployeehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
