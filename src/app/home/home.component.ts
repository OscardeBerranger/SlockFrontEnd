import {Component, inject} from '@angular/core';
import {FriendsService} from "../friends.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private service = inject(FriendsService);
  protected router = inject(Router);

  constructor() {
  }

  protected fetchMyStuff() {
    if (localStorage.getItem('token') == "" || localStorage.getItem('token') == null){
      this.router.navigate(['/login'])
    }
    this.service.getMyFriends()
  }
}
