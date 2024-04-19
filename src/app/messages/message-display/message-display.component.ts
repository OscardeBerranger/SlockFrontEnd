import {Component, Input} from '@angular/core';
import {Message} from "../../message";

@Component({
  selector: 'app-message-display',
  standalone: true,
  imports: [],
  templateUrl: './message-display.component.html',
  styleUrl: './message-display.component.css'
})
export class MessageDisplayComponent {
  @Input() message!: Message
}
