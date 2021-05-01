import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFreelancerComponent } from './top-freelancer.component';

describe('TopFreelancerComponent', () => {
  let component: TopFreelancerComponent;
  let fixture: ComponentFixture<TopFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
