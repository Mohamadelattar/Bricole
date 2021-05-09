import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFreelancerComponent } from './message-freelancer.component';

describe('MessageFreelancerComponent', () => {
  let component: MessageFreelancerComponent;
  let fixture: ComponentFixture<MessageFreelancerComponent>;

  beforeEach(async(() => {
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
