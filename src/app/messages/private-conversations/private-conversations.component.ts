import {Component, inject} from '@angular/core';
import {PrivateConversationService} from "../../private-conversation.service";
import {GlobalVariables} from "../../GlobalVariables";

@Component({
  selector: 'app-private-conversations',
  standalone: true,
  imports: [],
  templateUrl: './private-conversations.component.html',
  styleUrl: './private-conversations.component.css'
})
export class PrivateConversationsComponent {
  service = inject(PrivateConversationService);
  convs = []
  constructor() {
  }
}
