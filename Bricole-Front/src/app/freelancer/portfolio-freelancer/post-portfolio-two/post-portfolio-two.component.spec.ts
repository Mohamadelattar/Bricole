import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPortfolioTwoComponent } from './post-portfolio-two.component';

describe('PostPortfolioTwoComponent', () => {
  let component: PostPortfolioTwoComponent;
  let fixture: ComponentFixture<PostPortfolioTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPortfolioTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPortfolioTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
