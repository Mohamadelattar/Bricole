import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageFreelancerComponent } from './message-freelancer.component';

describe('MessageFreelancerComponent', () => {
  let component: MessageFreelancerComponent;
  let fixture: ComponentFixture<MessageFreelancerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
