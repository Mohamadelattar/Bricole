import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjetsConfirmeComponent } from './projets-confirme.component';

describe('ProjetsConfirmeComponent', () => {
  let component: ProjetsConfirmeComponent;
  let fixture: ComponentFixture<ProjetsConfirmeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetsConfirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetsConfirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
