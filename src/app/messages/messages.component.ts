import {Component, inject, Input} from '@angular/core';
import {Router} from "@angular/router";
import {MessageDisplayComponent} from "./message-display/message-display.component";
import {NgForOf} from "@angular/common";
import {SendMessageComponent} from "./send-message/send-message.component";
import { ActivatedRoute } from '@angular/router';
import {GlobalVariables} from "../GlobalVariables";
import {PrivateConversationService} from "../private-conversation.service";

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [
    MessageDisplayComponent,
    NgForOf,
    SendMessageComponent
  ],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})

export class MessagesComponent{
  @Input() messages: any


  private router = inject(Router)
  private service = inject(PrivateConversationService)
  constructor(){
    this.messages = localStorage.getItem("messages");
    this.service.getConvMessages(Number(localStorage.getItem("convId"))).subscribe({
      next: messages => {
        this.messages = messages
      }
    })
  }

}
