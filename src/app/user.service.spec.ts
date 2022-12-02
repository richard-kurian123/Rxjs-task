// import { TestBed } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController
// } from '@angular/common/http/testing';
// import { UserService } from './user.service';
// import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';

// describe('UserService', () => {
//   let service: UserService;

//   let httpClientSpy: jasmine.SpyObj<HttpClient>;
//   // let POSTS=[[1,234,4],[34.343,2,4,5]]

//   //   let POSTS=[[{name:"asdf",location:"India"}],[{place:"kerala",time:"12"}]]
//   let POSTS=[1,234,4]
//   beforeEach(() => {

//     httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);


//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [UserService]
//     });
//     service = TestBed.inject(UserService);

//     //additionaly added code
//     service =new UserService(httpClientSpy);

//   });

//   it('can load instance', () => {
//     expect(service).toBeTruthy();
//   });


//   it(' 2 http methords should be called',()=>{

//     expect(httpClientSpy.get).toHaveBeenCalledTimes(2);
//   })

//   // describe('testing all get http calls',()=>{
  
//   //   it('should return expected response',()=>{
//   //     httpClientSpy.get.and.returnValue(of(POSTS));
//   //     // console.log(POSTS)
//   //     service.apiCall().subscribe({
//   //       next:(posts)=>{
         
//   //         expect(posts).toEqual(POSTS);
         
//   //       }
//   //     });
//   //     expect(httpClientSpy.get).toHaveBeenCalledTimes(2);
//   //   })
//   //  })


// });



import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('UserService', () => {
  let service: UserService;

  let httpTestingController: HttpTestingController;

  let HttpClient:HttpClient;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  // let POSTS=[[1,234,4],[34.343,2,4,5]]

  //   let POSTS=[[{name:"asdf",location:"India"}],[{place:"kerala",time:"12"}]]
  let POSTS=[1,234,4]
  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);


    httpTestingController = TestBed.inject(HttpTestingController);

    //additionaly added code
    service =new UserService(httpClientSpy);

  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });


  it(' 2 http methords should be called',()=>{

    expect(httpClientSpy.get).toHaveBeenCalledTimes(2);
  })

  it("http client Get method",()=>{

    const testpost= [
      [{id:1,name:"ken"},{id:2,name:"kenny"}],

      [{id:4,userName:'tom'},{id:9,userNmae:"jerry"}]
                    ]
      service.apiCall().subscribe((posts:any)=>{
        expect(testpost).toBe(posts);
      })   
      const req1 =httpTestingController.expectOne('https://gorest.co.in/public/v2/users');
      const req2= httpTestingController.expectOne("https://gorest.co.in/public/v2/posts") 
        
  
      expect(req1.cancelled).toBeFalsy();
      expect(req2.cancelled).toBeFalsy();
      req1.flush([{id:1,name:"ken"},{id:2,name:"kenny"}]);
      req2.flush([{id:4,userName:'tom'},{id:9,userNmae:"jerry"}]);
         httpTestingController.verify();
    })


  // describe('testing all get http calls',()=>{
  
  //   it('should return expected response',()=>{
  //     httpClientSpy.get.and.returnValue(of(POSTS));
  //     // console.log(POSTS)
  //     service.apiCall().subscribe({
  //       next:(posts)=>{
         
  //         expect(posts).toEqual(POSTS);
         
  //       }
  //     });
  //     expect(httpClientSpy.get).toHaveBeenCalledTimes(2);
  //   })
  //  })


});


























