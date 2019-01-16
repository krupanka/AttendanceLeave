import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPendingDetailsComponent } from './manager-pending-details.component';

describe('ManagerPendingDetailsComponent', () => {
  let component: ManagerPendingDetailsComponent;
  let fixture: ComponentFixture<ManagerPendingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerPendingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerPendingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
