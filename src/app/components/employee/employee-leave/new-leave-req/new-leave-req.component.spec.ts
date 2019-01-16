import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeaveReqComponent } from './new-leave-req.component';

describe('NewLeaveReqComponent', () => {
  let component: NewLeaveReqComponent;
  let fixture: ComponentFixture<NewLeaveReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLeaveReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLeaveReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
