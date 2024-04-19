import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {GlobalVariables} from "./GlobalVariables";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private http = inject(HttpClient)
  private router = inject(Router)
  constructor() { }


  register(object: any){
    this.http.post<any>(GlobalVariables.baseUrl+"/register", object).subscribe({
      next: (response: any)=>{
        this.router.navigate(['/login']);
    }
    })
  }
}
