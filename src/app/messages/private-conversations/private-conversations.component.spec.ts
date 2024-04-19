import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateConversationsComponent } from './private-conversations.component';

describe('PrivateConversationsComponent', () => {
  let component: PrivateConversationsComponent;
  let fixture: ComponentFixture<PrivateConversationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateConversationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivateConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
