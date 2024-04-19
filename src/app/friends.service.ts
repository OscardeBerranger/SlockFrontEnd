import {inject, Injectable} from '@angular/core';
import {GlobalVariables} from "./GlobalVariables";
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  private http = inject(HttpClient)
  private router = inject(Router)

  constructor() { }
  getMyFriends(){
    return this.http.get<any>(GlobalVariables.baseUrl+"/api/getmyfriends")
  }
  getPeople(){
    return this.http.get<any>(GlobalVariables.baseUrl+"/api/profile/getpeople")
  }
  getMyFriendsRequest(){
    return this.http.get<any>(GlobalVariables.baseUrl+"/api/getmyfriendrequest")
  }
  addAFriend(id: number){
    return this.http.get<any>(GlobalVariables.baseUrl+"/api/sendfriendrequest/"+id)
  }
  acceptRequest(id: number){
    return this.http.get<any>(GlobalVariables.baseUrl+"/api/acceptfriendrequest/"+id)
  }
}
