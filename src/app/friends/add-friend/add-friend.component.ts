import {Component, inject} from '@angular/core';
import {NgForOf} from "@angular/common";
import {UserDisplayerComponent} from "../user-displayer/user-displayer.component";
import {FriendsService} from "../../friends.service";

@Component({
  selector: 'app-add-friend',
  standalone: true,
  imports: [
    NgForOf,
    UserDisplayerComponent
  ],
  templateUrl: './add-friend.component.html',
  styleUrl: './add-friend.component.css'
})
export class AddFriendComponent {
  private service = inject(FriendsService);
  protected peoples: []=[]
  constructor() {
    this.service.getPeople().subscribe({
      next: peoples => {
        this.peoples = peoples
      }
    })
  }
}
