import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
//import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { DescribeIncidentPage } from '../describe-incident/describe-incident';
//import { User } from '../../app/app.component'
//import { CaptureIncidentPage } from '../capture-incident/capture-incident';

//currentUser.password="sample";
//currentUser.userid="sample";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
// currentUser:User;
registerCredentials = {userid:'',password:''};
//var currentUser:User = {userid:'sample',password:'sample'};

  constructor(public navCtrl: NavController, private auth: AuthService, public alertCtrl: AlertController) {
  }

  login(){
    this.auth.login(this.registerCredentials);
    if(this.auth.access){
          this.auth.currentUser=this.registerCredentials;
          this.navCtrl.push(CaptureIncidentPage);
      }
      else{
          this.showError("Sorry Login Failed");
          console.log("Sorry login failed");
      }

    }

      createAccount(){
        this.navCtrl.push(SignupPage);
      }
    showError(message:string){
      let alert= this.alertCtrl.create({
        title: 'Fail',
        subTitle: message,
        buttons: ['Okay']
      });
      alert.present(prompt);
    }
    //this.navCtrl.push(LoginPage);
  //}goToCaptureIncident(User){
    //if (!params) params = {};
  //var x = document.getElementById("input1").getElementByTagName("UserId_Input");
//console.log("user id is ->" + userid);
 //console.log("user is ->" + User);
  //if condition for authenticatinsg user with supplied password
//  this.navCtrl.push(CaptureIncidentPage);

//}
  /*goToDescribeIncident(params){
    if (!params) params = {};
    this.navCtrl.push(DescribeIncidentPage);
  }*/
  /*  if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }*/
}
