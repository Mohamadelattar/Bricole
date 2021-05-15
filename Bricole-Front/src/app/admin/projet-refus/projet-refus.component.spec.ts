import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProjetRefusComponent } from './projet-refus.component';

describe('ProjetRefusComponent', () => {
  let component: ProjetRefusComponent;
  let fixture: ComponentFixture<ProjetRefusComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetRefusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetRefusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
