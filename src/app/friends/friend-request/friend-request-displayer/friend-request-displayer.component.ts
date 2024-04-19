import {Component, inject, Input} from '@angular/core';
import {FriendsService} from "../../../friends.service";

@Component({
  selector: 'app-friend-request-displayer',
  standalone: true,
  imports: [],
  templateUrl: './friend-request-displayer.component.html',
  styleUrl: './friend-request-displayer.component.css'
})
export class FriendRequestDisplayerComponent {
  @Input() request: any
  private service = inject(FriendsService);
  constructor(){}

  protected acceptFriendRequest(id :number){
    this.service.acceptRequest(id).subscribe()
  }
}
