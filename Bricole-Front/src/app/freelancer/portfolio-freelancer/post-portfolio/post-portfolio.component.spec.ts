import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostPortfolioComponent } from './post-portfolio.component';

describe('PostPortfolioComponent', () => {
  let component: PostPortfolioComponent;
  let fixture: ComponentFixture<PostPortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
