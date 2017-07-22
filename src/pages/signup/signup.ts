import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { SignupPage } from '../signup/signup';
// { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { AuthService } from '../../providers/auth-service';
import { User } from '../../models/user';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { SqLiteProvider } from '../../providers/sq-lite/sq-lite';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  check:any;
  retrieved;
  registerCredentials:User={userid:'',password:''};
  emailCheck=false;
  passwordCheck=false;
  mobileCheck=false;
  newname;
  newphone:number;
  newuserid;
  newpassword;
  newrepassword;
  newemail;
  newaddress;
  newpin:number;
  //private baseURI : string  = "http://www.remote-site-address-here.suffix/"; //add the remote-site-address-here
  constructor(public sqlProvider:SqLiteProvider,public navCtrl: NavController, private auth: AuthService, public alertCtrl: AlertController, public http:Http) {
  }

showError(message:string){
  let alert= this.alertCtrl.create({
    title: 'Fail',
    subTitle: message,
    buttons: ['Okay']
  });
  alert.present(prompt);
}
back(){
  this.navCtrl.setRoot(LoginPage);
}
showMessage(message:string){
  let alert= this.alertCtrl.create({
    title: 'Success',
    subTitle: message,
    buttons: ['Okay']
  });
  alert.present(prompt);
}
register(check:boolean){
  //console.log(this.createEntry(this.registerCredentials));
//this.check = this.auth.register(this.registerCredentials);
//this.check = this.createEntry(this.registerCredentials);
console.log(check);
if(check){
this.showMessage("Successful Registration");
this.navCtrl.setRoot(LoginPage, {new: this.registerCredentials});
}
else
this.showError("User already Exists");
}
 createEntry():any
 {
   let flag = true;
   if(this.newpassword!==this.newrepassword){
     alert("Password Mismatch");
     flag = false;
   }
    if (flag){
   let a:boolean;
   this.auth.register(this.registerCredentials);
    let body     : string   = "key=create&userid=" + this.newuserid + "&password=" + this.newpassword + "&name=" + this.newname + "&address=" + this.newaddress  + "&pin=" + this.newpin.toString()  + "&phone=" + this.newphone.toString() + "&email=" + this.newemail,
        type     : string   = "application/x-www-form-urlencoded; charset=UTF-8_bin", //verify
        headers  : any      = new Headers({ 'Content-Type': type}), //understand
        options  : any      = new RequestOptions({ headers: headers }),
        url      : any      = "http://14.139.219.221:8080/incident/"+ "manage-data.php"; //here's where the base url comes in play
        console.log(url);
        this.http.get('http://14.139.219.221:8080/incident/retrieve-data.php?userid='+this.newuserid +"&password="+a)
          .map(res => res)
          .subscribe(data =>
          {
            console.log("Hi, getting data");
            // this.load.dismiss();
            console.log("before convsersion");
            console.log(data);
            console.log("after conversion");
             this.retrieved = data.json();
             console.log(this.retrieved);
             //console.log(this.retrieved);
             if(!this.retrieved){
    this.http.post(url, body, options)
    .subscribe((data) =>
    {
      console.log(data);

       // If the request was successful notify the user
       if(data.status === 200)
       {
         console.log(url + body + options);
         console.log("success");
          this.register(true);
          //console.log("again a" + a);
       }
       // Otherwise let 'em know
       else
       {
         console.log("again a" + a);
          console.log('Something went wrong!');
          this.register(false);

       }
       //console.log("again a" + a);

    });}
    else{
        this.showError("Userid Already Exists");

    }
    //console.log("this is a just before its return" + a)
  })
  this.sqlProvider.isUser(this.registerCredentials.userid);
  if(!this.sqlProvider.userExists){
    this.sqlProvider.createUser(this.registerCredentials.userid,this.registerCredentials.password);
    console.log("USER ADDED in SQLite");
  }
  else
  console.log("User exists in SQLite");

  }

}
}/*goToCaptureIncident(params){
    if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }*/
