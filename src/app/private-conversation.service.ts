import {inject, Injectable} from '@angular/core';
import {GlobalVariables} from "./GlobalVariables";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PrivateConversationService {
  private http = inject(HttpClient);
  private router = inject(Router)
  constructor() { }

  handlePrivateConversation(id: number){
    this.http.get<any>(GlobalVariables.baseUrl+"/api/private/conversation/getspecificconv/"+id).subscribe({
      next: (response: any)=>{
        if (response){
          localStorage.setItem("convId", response[0].id);
        }else {
          this.http.get<any>(GlobalVariables.baseUrl+"/api/private/conversation/create/"+id).subscribe({
            next: (response: any)=>{
              localStorage.setItem("convId", response.id);
            }
          })
        }
        this.router.navigate(['/messages'])
      }
    })
  }

  getConvMessages(id: number){
    return this.http.get<any>(GlobalVariables.baseUrl+"/api/private/conversation/get/"+id)
  }

  sendMessage(object: any, id: number){
    console.log(object)
    return this.http.post<any>(GlobalVariables.baseUrl+"/api/private/message/create/"+Number(localStorage.getItem("convId")), object).subscribe({
      next: (data)=>{
        window.location.reload()
      }
    })
  }
}
