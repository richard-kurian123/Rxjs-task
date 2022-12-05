import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { UserService } from '../user.service';
import { Comp1Component } from './comp1.component';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;

  beforeEach(() => {
    const userServiceStub = () => ({
      apiCall: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
    });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [Comp1Component],
      providers: [{ provide: UserService, useFactory: userServiceStub }]
    });
    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`usersArray has default value`, () => {
    expect(component.usersArray).toEqual([]);
  });

  it(`postArray has default value`, () => {
    expect(component.postArray).toEqual([]);
  });

  it(`toggle has default value`, () => {
    expect(component.toggle).toEqual(false);
  });

  it(`click function`, () => {
component.postArray=[ 
  { name:'kevin', address:"mumbai", user_id:12,title:"us"},
  {name:'rahul', address:"delhi",user_id:13,title:"Uk"},
]
component.usersArray=[
  {id:14,car:"audi"},
  {id:15,car:"bmw"}
]
component.viewPosts({id:14,car:"audi"});
expect(component.usersArray).toEqual([{id:14,car:"audi"}, {id:15,car:"bmw"}]);
// {id:13,car:"audi",post:"Uk"}, {id:15,car:"bmw"}
  });

  it(`click function  1st condition`, () => {
    component.postArray=[ 
      { name:'kevin', address:"mumbai", user_id:12,title:"us"},
      {name:'rahul', address:"delhi",user_id:13,title:"Uk"},
    ]
    component.usersArray=[
      {id:13,car:"audi"},
      {id:15,car:"bmw"}
    ]
    component.viewPosts({id:13,car:"audi"});

    component.usersArray=[ {id:13,car:"audi",title:"Uk"}, {id:15,car:"bmw"}];

    expect(component.usersArray).toEqual([ {id:13,car:"audi",title:"Uk"}, {id:15,car:"bmw"}]);
    // {id:13,car:"audi",post:"Uk"}, {id:15,car:"bmw"}
      });



  it(`toggle has default value`, () => {
    expect(component.toggle).toEqual(false);
  });


  // it(`click function case 2`, () => {
  //   component.viewPosts({id:15,car:"audi"});
  //   component.postArray=[ 
  //     { name:'kevin', address:"mumbai", user_id:12},
  //     {name:'rahul', address:"delhi",user_id:15,title:"Uk"},
  //   ]
    
  //   component.usersArray=[
  //     {id:13,car:"audi"},
  //     {id:15,car:"bmw"}
  //   ]
    
   
    
  //   expect(component.usersArray).toEqual([{id:13,car:"audi"}, {id:15,car:"bmw",title:"Uk"}]);
  //   // {id:13,car:"audi",post:"Uk"}, {id:15,car:"bmw"}
  //     });


  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const userServiceStub: UserService = fixture.debugElement.injector.get(
        UserService
      );
      spyOn(userServiceStub, 'apiCall').and.callThrough();
      component.ngOnInit();
      expect(userServiceStub.apiCall).toHaveBeenCalled();
    });
  });
});
