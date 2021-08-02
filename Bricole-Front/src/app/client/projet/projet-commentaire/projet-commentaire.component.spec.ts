import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetCommentaireComponent } from './projet-commentaire.component';

describe('ProjetCommentaireComponent', () => {
  let component: ProjetCommentaireComponent;
  let fixture: ComponentFixture<ProjetCommentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetCommentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetCommentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
