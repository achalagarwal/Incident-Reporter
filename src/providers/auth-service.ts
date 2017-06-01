
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
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
  public http:Http;
  public register(credentials:User):boolean{
    var flag:boolean=true;
    let body     : string   = "key=create&userid=" + credentials.userid + "&password=" + credentials.password,
        type     : string   = "application/x-www-form-urlencoded; charset=UTF-8", //verify
        headers  : any      = new Headers({ 'Content-Type': type}), //understand
        options  : any      = new RequestOptions({ headers: headers }),
        url      : any      = "../../"+ "manage-data.php"; //here's where the base url comes in play

    this.http.post(url, body, options)
    .subscribe((data) =>
    {
       // If the request was successful notify the user
       if(data.status === 200)
       {
         console.log("success");
       }
       // Otherwise let 'em know
       else
       {
          console.log('Something went wrong!');
          flag = false;
       }
    });
    //return false;
    for(var i = 0;i<AuthService.Users.length;i++)
    {
      if(AuthService.Users[i].userid==credentials.userid){
        console.log("User id already exists");
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
  public login(credentials) {
    console.log(AuthService.Users);
    if (credentials.userid === null || credentials.password === null) {
      console.log("Please insert credentials");
    } else {
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
    };
    }
public logout(){
  this.access=false;
}



  public getUserInfo() : User {
    return this.currentUser;
  }

}
