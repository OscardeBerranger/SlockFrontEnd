import {Component, inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FriendsService} from "../../friends.service";
import {FriendRequestDisplayerComponent} from "./friend-request-displayer/friend-request-displayer.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-friend-request',
  standalone: true,
  imports: [
    FriendRequestDisplayerComponent,
    NgForOf
  ],
  templateUrl: './friend-request.component.html',
  styleUrl: './friend-request.component.css'
})
export class FriendRequestComponent {
  protected requests: [] = []
  private service = inject(FriendsService);
  constructor() {
    this.service.getMyFriendsRequest().subscribe({
      next: (data: [])=>{
        this.requests = data
      }})
  }
}
