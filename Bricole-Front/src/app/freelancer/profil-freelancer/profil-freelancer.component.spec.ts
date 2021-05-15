import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfilFreelancerComponent } from './profil-freelancer.component';

describe('ProfilFreelancerComponent', () => {
  let component: ProfilFreelancerComponent;
  let fixture: ComponentFixture<ProfilFreelancerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
