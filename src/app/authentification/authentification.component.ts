import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router"
@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})

export class AuthentificationComponent {
  constructor(protected router: Router) {
  }
}
