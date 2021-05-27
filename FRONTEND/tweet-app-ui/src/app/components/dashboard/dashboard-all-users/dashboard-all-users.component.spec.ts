import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllUsersComponent } from './dashboard-all-users.component';

describe('DashboardAllUsersComponent', () => {
  let component: DashboardAllUsersComponent;
  let fixture: ComponentFixture<DashboardAllUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAllUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
