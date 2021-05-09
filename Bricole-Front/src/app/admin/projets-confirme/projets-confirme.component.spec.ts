import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsConfirmeComponent } from './projets-confirme.component';

describe('ProjetsConfirmeComponent', () => {
  let component: ProjetsConfirmeComponent;
  let fixture: ComponentFixture<ProjetsConfirmeComponent>;

  beforeEach(async(() => {
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
