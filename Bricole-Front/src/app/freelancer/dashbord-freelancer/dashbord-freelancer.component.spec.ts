import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashbordFreelancerComponent } from './dashbord-freelancer.component';

describe('DashbordFreelancerComponent', () => {
  let component: DashbordFreelancerComponent;
  let fixture: ComponentFixture<DashbordFreelancerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashbordFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashbordFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
