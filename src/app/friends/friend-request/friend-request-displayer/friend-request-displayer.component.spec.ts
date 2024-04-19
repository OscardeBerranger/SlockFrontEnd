import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRequestDisplayerComponent } from './friend-request-displayer.component';

describe('FriendRequestDisplayerComponent', () => {
  let component: FriendRequestDisplayerComponent;
  let fixture: ComponentFixture<FriendRequestDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendRequestDisplayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendRequestDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
