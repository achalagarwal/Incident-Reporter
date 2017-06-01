import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { SignupPage } from '../signup/signup';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { DescribeIncidentPage } from '../describe-incident/describe-incident';
// { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { AuthService } from '../../providers/auth-service';
import { User } from '../../models/user';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
check:boolean;
  registerCredentials:User={userid:'',password:''};
  private baseURI               : string  = "http://www.remote-site-address-here.suffix/"; //add the remote-site-address-here
  constructor(public navCtrl: NavController, private auth: AuthService, public alertCtrl: AlertController, public http:Http) {
  }
  register(){
  this.check = this.auth.register(this.registerCredentials);
  if(this.check){
  this.showMessage("Successful Registration");
  this.navCtrl.setRoot(LoginPage);
}
  else
  this.showError("User already Exists");
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
 /*createEntry(userid, password):boolean
 {
    let body     : string   = "key=create&userid=" + userid + "&password=" + password,
        type     : string   = "application/x-www-form-urlencoded; charset=UTF-8", //verify
        headers  : any      = new Headers({ 'Content-Type': type}), //understand
        options  : any      = new RequestOptions({ headers: headers }),
        url      : any      = this.baseURI + "manage-data.php"; //here's where the base url comes in play

    this.http.post(url, body, options)
    .subscribe((data) =>
    {
       // If the request was successful notify the user
       if(data.status === 200)
       {
         console.log("success");
          return true;
       }
       // Otherwise let 'em know
       else
       {
          console.log('Something went wrong!');
          return false;
       }
    });
    return false;
  }*/
  }/*goToCaptureIncident(params){
    if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }*/
