import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAllTweetsComponent } from './dashboard-all-tweets.component';

describe('DashboardAllTweetsComponent', () => {
  let component: DashboardAllTweetsComponent;
  let fixture: ComponentFixture<DashboardAllTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAllTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAllTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
