import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


    usersRx=this.http.get('https://gorest.co.in/public/v2/users');
   postsRx=this.http.get('https://gorest.co.in/public/v2/posts');

   apiCall(){
   return forkJoin([this.usersRx,this.postsRx]);
   }
  
}
