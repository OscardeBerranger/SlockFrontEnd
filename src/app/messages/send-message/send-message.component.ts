import {Component, inject} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PrivateConversationService} from "../../private-conversation.service";
import {GlobalVariables} from "../../GlobalVariables";

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent {
  private service = inject(PrivateConversationService)
  protected handleClick(form :any){
   this.service.sendMessage(form.value, Number(localStorage.getItem("convId")))
  }
}
