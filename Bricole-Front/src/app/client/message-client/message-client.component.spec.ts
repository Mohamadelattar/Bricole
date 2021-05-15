import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MessageClientComponent } from './message-client.component';

describe('MessageClientComponent', () => {
  let component: MessageClientComponent;
  let fixture: ComponentFixture<MessageClientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
