import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedLeaveComponent } from './applied-leave.component';

describe('AppliedLeaveComponent', () => {
  let component: AppliedLeaveComponent;
  let fixture: ComponentFixture<AppliedLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
