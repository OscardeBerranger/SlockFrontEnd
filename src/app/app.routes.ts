import { Routes } from '@angular/router';
import {AuthentificationComponent} from "./authentification/authentification.component";
import {LoginComponent} from "./authentification/login/login.component";
import {RegisterComponent} from "./authentification/register/register.component";
import {MessagesComponent} from "./messages/messages.component";
import {HomeComponent} from "./home/home.component";
import {FriendsComponent} from "./friends/friends.component";
import {FriendRequestComponent} from "./friends/friend-request/friend-request.component";
import {AddFriendComponent} from "./friends/add-friend/add-friend.component";

export const routes: Routes = [
  {
    path:'', redirectTo:'/authentication',pathMatch:'full'
  },
  {
    path:'authentication',
    component: AuthentificationComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'messages',
    component: MessagesComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'friends',
    component: FriendsComponent
  },
  {
    path:'friendsrequest',
    component: FriendRequestComponent
  },
  {
    path:'addfriend',
    component: AddFriendComponent
  }

];
