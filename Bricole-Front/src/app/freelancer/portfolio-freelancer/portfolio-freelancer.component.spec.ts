import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PortfolioFreelancerComponent } from './portfolio-freelancer.component';

describe('PortfolioFreelancerComponent', () => {
  let component: PortfolioFreelancerComponent;
  let fixture: ComponentFixture<PortfolioFreelancerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
