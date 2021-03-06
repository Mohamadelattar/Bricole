import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SidebarFreelancerComponent } from './sidebar-freelancer.component';

describe('SidebarFreelancerComponent', () => {
  let component: SidebarFreelancerComponent;
  let fixture: ComponentFixture<SidebarFreelancerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
