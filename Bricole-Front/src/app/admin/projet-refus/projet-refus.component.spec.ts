import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetRefusComponent } from './projet-refus.component';

describe('ProjetRefusComponent', () => {
  let component: ProjetRefusComponent;
  let fixture: ComponentFixture<ProjetRefusComponent>;

  beforeEach(async(() => {
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
