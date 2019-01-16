import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHistoryDetailsComponent } from './admin-history-details.component';

describe('AdminHistoryDetailsComponent', () => {
  let component: AdminHistoryDetailsComponent;
  let fixture: ComponentFixture<AdminHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
