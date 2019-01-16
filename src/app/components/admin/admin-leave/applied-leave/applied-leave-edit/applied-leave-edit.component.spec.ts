import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedLeaveEditComponent } from './applied-leave-edit.component';

describe('AppliedLeaveEditComponent', () => {
  let component: AppliedLeaveEditComponent;
  let fixture: ComponentFixture<AppliedLeaveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedLeaveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedLeaveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
