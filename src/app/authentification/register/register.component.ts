import {Component, inject} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {RegisterService} from "../../register.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  truc: string = ""

  private service = inject(RegisterService)
  handleClick(form: any){
    this.service.register(form.value)
  }
}
