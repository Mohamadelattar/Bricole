import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProjetTwoComponent } from './post-projet-two.component';

describe('PostProjetTwoComponent', () => {
  let component: PostProjetTwoComponent;
  let fixture: ComponentFixture<PostProjetTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProjetTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProjetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
