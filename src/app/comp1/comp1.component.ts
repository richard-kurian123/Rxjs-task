import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private http:HttpClient) { }

  public usersArray:any=[];

  public postArray:any=[];

  ngOnInit(): void {
    // this.getUsers();

    // this.getPosts();

    let usersRx=this.http.get('https://gorest.co.in/public/v2/users');
    let postsRx=this.http.get('https://gorest.co.in/public/v2/posts');


    forkJoin([usersRx,postsRx]).subscribe(results=>{
      this.usersArray=results[0];
      this.postArray=results[1];
      console.log('users',this.usersArray)
      console.log('posts',this.postArray)
    })
  }

  // getUsers():Observable<any>{
  //  this.http.get('https://gorest.co.in/public/v2/users').subscribe((users)=>{

  //  console.log(users);
  //  this.usersArray=users
  //  })

  // return this.usersArray;
  // }


  // getPosts():Observable<any>{
  //   this.http.get('https://gorest.co.in/public/v2/posts').subscribe((post)=>{

  //   console.log("posts",post);
  //   this.postArray=post
  //   })
 
  //  return this.postArray;
  //  }

}
