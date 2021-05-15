import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HowWorkComponent } from './how-work.component';

describe('HowWorkComponent', () => {
  let component: HowWorkComponent;
  let fixture: ComponentFixture<HowWorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
