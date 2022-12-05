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



import { fakeAsync, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { of, tap } from 'rxjs';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

describe('UserService', () => {
  let service: UserService;

  let httpTestingController: HttpTestingController;

  let HttpClient:HttpClient;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  // let POSTS=[[1,234,4],[34.343,2,4,5]]

  //   let POSTS=[[{name:"asdf",location:"India"}],[{place:"kerala",time:"12"}]]
  let USERS=[{"id":4504,"name":"Enakshi Varman","email":"varman_enakshi@effertz.biz","gender":"male","status":"active"},{"id":4502,"name":"Akshita Guneta","email":"akshita_guneta@rice-johnston.info","gender":"female","status":"inactive"},{"id":4499,"name":"Dharani Sharma DC","email":"dharani_sharma_dc@cronin.net","gender":"male","status":"active"},{"id":4498,"name":"Balgopal Verma","email":"verma_balgopal@heathcote.info","gender":"female","status":"inactive"},{"id":4497,"name":"Fr. Upendra Acharya","email":"acharya_fr_upendra@thiel.info","gender":"male","status":"inactive"},{"id":4494,"name":"Gatik Ahluwalia","email":"ahluwalia_gatik@stehr-wyman.com","gender":"male","status":"active"},{"id":4493,"name":"Malti Shukla","email":"shukla_malti@kutch.com","gender":"male","status":"inactive"},{"id":4492,"name":"Chaturaanan Tandon","email":"chaturaanan_tandon@mills.info","gender":"male","status":"active"},{"id":4491,"name":"Charuvrat Gupta","email":"charuvrat_gupta@senger.io","gender":"female","status":"active"},{"id":4490,"name":"Deeptiman Khatri","email":"khatri_deeptiman@mccullough.com","gender":"female","status":"active"}]
  let POSTS =[{"id":2170,"user_id":4497,"title":"Tot unde soleo vicissitudo reprehenderit et velut curto aedificium vado alias apto.","body":"Vitium velit sumo. Conforto avaritia tabula. Subseco tero utilis. Coerceo animi toties. Comprehendo minima cultellus. Anser excepturi cognatus. Utroque voluptas enim. Ubi tandem quasi. Patior valde fugit. Aestas alienus qui. In reprehenderit decor. Ater contego ulciscor. Suffoco ceno aestus. Anser nam vitiosus. Suggero excepturi deinde. Trans vel nemo. Viriliter fugiat cornu."},{"id":2169,"user_id":4490,"title":"Audacia cohors crudelis cicuta tergiversatio velit thalassinus aetas una aggero.","body":"Ars coniuratio adduco. Tamisium voco cur. Speciosus tutis ipsum. Dolorem creptio conculco. Valens somniculosus vomito. Acsi saepe terminatio. Auctus sollicito dedico. Aureus textilis clarus. Suffragium ut concido. Ver sto atqui. Ullam utor aut. Velociter utpote occaecati. Comes vix constans. Voluptatem delectus derelinquo. Adicio aveho vereor. Aro quis hic."}]
  beforeEach(async() => {

    const httpClientSpy = jasmine.createSpyObj('UserService', ['usersRx','postsRx']);


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{provide: UserService, userValue: httpClientSpy}]
    });

    //additionaly added code
    // service =new UserService(httpClientSpy);
  });

  beforeEach(()=>{
    service = TestBed.inject<UserService>(UserService);
    httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);

    service.usersRx = of(USERS)
    service.postsRx = of(POSTS)
  })

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(' api call should be defined ',()=>{

    const result =service.apiCall();

    expect(result).toBeDefined();
  })


  it(' 2 http methords should be called',fakeAsync(()=>{
    // expect(component.getOrderDetail).toHaveBeenCalled()
    service.usersRx.subscribe(
      res =>{
        console.log(res)
        expect(res).toBe(USERS);
      }
    )
    // console.log(spy_Detail);
    service.postsRx.subscribe(
      res=>{
        console.log(res)

        expect(res).toBe(POSTS);
      }
    )

  }))



  // it("http client Get method",()=>{

  //   const testpost= [
  //     [{id:1,name:"ken"},{id:2,name:"kenny"}],

  //     [{id:4,userName:'tom'},{id:9,userNmae:"jerry"}]
  //                   ]
  //     service.apiCall().subscribe((posts:any)=>{
  //       expect(testpost).toBe(posts);
  //     })   
  //     const req1 =httpTestingController.expectOne('https://gorest.co.in/public/v2/users');
  //     const req2= httpTestingController.expectOne("https://gorest.co.in/public/v2/posts") 
        
  
  //     expect(req1.cancelled).toBeFalsy();
  //     expect(req2.cancelled).toBeFalsy();
  //     req1.flush([{id:1,name:"ken"},{id:2,name:"kenny"}]);
  //     req2.flush([{id:4,userName:'tom'},{id:9,userNmae:"jerry"}]);
  //        httpTestingController.verify();
  //   })


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


























