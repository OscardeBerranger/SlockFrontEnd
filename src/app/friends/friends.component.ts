import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {FriendsService} from "../friends.service";
import {NgForOf} from "@angular/common";
import {UserDisplayerComponent} from "./user-displayer/user-displayer.component";
import {MessageDisplayComponent} from "../messages/message-display/message-display.component";
import {FriendRequestComponent} from "./friend-request/friend-request.component";
import {PrivateConversationService} from "../private-conversation.service";
import {User} from "../user";

@Component({
  selector: 'app-friends',
  standalone: true,
  imports: [
    NgForOf,
    UserDisplayerComponent,
    MessageDisplayComponent
  ],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {
  protected router = inject(Router)
  private service = inject(FriendsService);
  private conversationService = inject(PrivateConversationService);
  protected friends: User[]=[]
  protected peoples: []=[]
  protected friendsRequest: [] = []
  constructor() {
    if (localStorage.getItem('token')=="" || localStorage.getItem('token') == null){
      this.router.navigate(['/login']);
    }
    this.service.getMyFriends().subscribe({
      next: result => {
        this.friends = result
      }
    })
    this.service.getPeople().subscribe({
      next: peoples => {
        this.peoples = peoples
      }
    })

  }

  privateConverationHandler(id: number){
    this.conversationService.handlePrivateConversation(id)
    localStorage.setItem("convId", id.toString())
  }
}
