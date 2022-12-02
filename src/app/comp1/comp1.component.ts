import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
// import { ToastService } from '../toast.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private http:HttpClient, private userService:UserService) { }

  public usersArray:any=[];

  public postArray:any=[];

  public post!: string;

  public toggle=false;

  
  public userId:any;

  ngOnInit(): void {
 

    // let usersRx=this.http.get('https://gorest.co.in/public/v2/users');
    // let postsRx=this.http.get('https://gorest.co.in/public/v2/posts');
    // forkJoin([usersRx,postsRx]).subscribe(results=>{
    //   this.usersArray=results[0];
    //   this.postArray=results[1];
    //   console.log('users',this.usersArray)
    //   console.log('posts',this.postArray)
    // })
    
    this.userService.apiCall().subscribe(results=>{
        this.usersArray=results[0];
        this.postArray=results[1];
        console.log(results);
        // console.log('users',this.usersArray)
        // console.log('posts',this.postArray)
      })

  }

  //working methord

   viewPosts(data:any){

console.log("array with audi", data);

    // console.log(data.id,"Final Dataaaaaaaaaaaaaaaaaa");
    var dataVal = this.postArray.find((item:any) => item.user_id === data.id);
    // console.log(dataVal,"Final Dataaaaaaaaaaaaaaaaaa");

   
    if(dataVal){
      data.toggle=!data.toggle;
      data.post= dataVal.title;

      console.log(data);

    }else{
      alert('data does not exist');
      console.log("data does not exist");
    }
  }

  // viewPosts(data:any){
  //   // const reqPost = this.postArray.find((a:any)=>{

  //   //   if(id === a.user_id){
  //   //     this.post =a.title;
  //   //     // this.userId=id;
  //   //     console.log(a.title)
  //   //     this.toggle=!this.toggle
  //   //   }else{
  //   //     console.log("data not found");
  //   //   }
  //   // })
  //   console.log(data,'post data');
  // }



  // viewPosts(id:any){
  //   const reqPost = this.postArray.find((a:any)=>{
  //     if(id.id === a.user_id){
  //        this.post= a.title;
  //       //  id.post= a.title;
  //        console.log(a.title);
  //       // id.toggle=!id.toggle;
  //     }else{
  //       console.log("data does not exist");
  //       // id.post= "data not found";
  //     }   
  //   })

  // }


}
