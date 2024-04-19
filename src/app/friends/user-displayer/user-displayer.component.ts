import {Component, inject, Inject, Input} from '@angular/core';
import {User} from "../../user";
import {FriendsService} from "../../friends.service";
import {LoginService} from "../../login.service";

@Component({
  selector: 'app-user-displayer',
  standalone: true,
  imports: [],
  templateUrl: './user-displayer.component.html',
  styleUrl: './user-displayer.component.css'
})
export class UserDisplayerComponent {
  @Input() user!: User
  private service = inject(FriendsService);
  constructor() {
  }

  protected sendFriendRequest(id :number){
    this.service.addAFriend(id).subscribe()
  }
}
