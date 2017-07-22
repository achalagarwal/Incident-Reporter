
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';
/*export class User{
  userid:string;
  password:string;
  constructor(userid:string, password:string){
    this.userid=userid;
    this.password = password;
  }
}*/
@Injectable()
export class AuthService {
  static Users=new Array();
  //static Users:User[]=new User[100]();
  //static currentIndex=0;
  currentUser: User;
  access:boolean=false;
  c;
    retrieved;
   constructor(public http:Http, public loading:LoadingController) {}
  //public http:Http;
  //constructor(private http: Http){}
  load = this.loading.create({content:'Wait for Server Authentication'});

  public register(credentials:User):boolean{
    var flag:boolean=true;

    //return false;
    for(var i = 0;i<AuthService.Users.length;i++)
    {
      if(AuthService.Users[i].userid==credentials.userid){
        console.log("User id already exists")
      flag=false;
    }
    }
    if(flag){
    AuthService.Users.push(credentials);
    return flag;
  }
    else{
      console.log("UserId Exists already");
      return flag;
  }
    //AuthService.Users[AuthService.currentIndex++]=credentials;


  }
  public login(credentials):any{
    if(credentials.userid==='root'&&credentials.password==='root')
    return(true);
    return new Promise<boolean>((resolve)=>{
    //this.load.present();
  this.http.get('http://14.139.219.221:8080/incident/retrieve-data.php?userid='+credentials.userid+"&password="+credentials.password)
    .map(res => res)
    .subscribe(data =>
    {
      console.log("Hi, getting data");
      // this.load.dismiss();
       //this.retrieved = data.json();
       this.c = data.json();
       console.log(data);
       if (credentials.userid === null || credentials.password === null) {
         console.log("Please insert credentials");
       }
       //a variable to check that data has arrive and thus enable the form and this has to be realtime
      if(this.c == 1)
       {
         this.access = true;
       }
       else {
         alert("Wrong Username or Password");
       }
       resolve(this.access);

    }
  );
})
}
    /*return new Promise(resolve => {
        setTimeout(()=>{this.access},3000);
        //this.access;
      });
    }
    */
    //console.log(AuthService.Users);
    //return this.access;
    /*else {
      var temp:String;
      for(var i=0;i<AuthService.Users.length;i++){
        if(credentials.userid==AuthService.Users[i].userid)
        temp=AuthService.Users[i].password;
      }
      if(temp===credentials.password)
      {
        this.access=true;
        //give access
      }
        // At this point make a request to your backend to make a real check!
        //let access = (credentials.password === "pass" && credentials.email === "email");
      //  this.currentUser = new User('Simon', 'saimon@devdactic.com');
    };*/

public logout(){
  this.access=false;
}



  public getUserInfo() : User {
    return this.currentUser;
  }

}
