import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPendingLeaveComponent } from './manager-pending-leave.component';

describe('ManagerPendingLeaveComponent', () => {
  let component: ManagerPendingLeaveComponent;
  let fixture: ComponentFixture<ManagerPendingLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPendingLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPendingLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
