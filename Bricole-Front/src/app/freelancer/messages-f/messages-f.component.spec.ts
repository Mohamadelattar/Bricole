import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesFComponent } from './messages-f.component';

describe('MessagesFComponent', () => {
  let component: MessagesFComponent;
  let fixture: ComponentFixture<MessagesFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
