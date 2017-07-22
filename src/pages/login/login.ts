import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
//import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
//import { User } from '../../app/app.component'
//import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { Http} from '@angular/http';
import 'rxjs/Rx';
import { SqLiteProvider } from '../../providers/sq-lite/sq-lite';
import { Network } from '@ionic-native/network';
//currentUser.password="sample";
//currentUser.userid="sample";



/*
load()
   {
      this.http.get('http://www.your-remote-url.suffix/retrieve-data.php')
      .map(res => res.json())
      .subscribe(data =>
      {
         this.items = data;
      });
   }
*/


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //providers: [AuthService]
})

export class LoginPage {
// currentUser:User;
registerCredentials = {userid:'',password:''};
isOnline : boolean;
localAccess;
connectSubscription;
//public a;//private observer:Observer;
//var currentUser:User = {userid:'sample',password:'sample'};
public a=true;
  constructor(public network:Network,public sqlProvider:SqLiteProvider, public navCtrl: NavController, private auth: AuthService, public alertCtrl: AlertController, public http:Http, private params:NavParams) {
  }

  ionViewDidLoad(){
    console.log("on init");
    console.log(this.params.get("new"));
    if(this.params.get("new")){
      this.registerCredentials=this.params.get("new");
        }

  if(navigator.onLine){
    this.isOnline=true;
    console.log("there is internet");
}
this.network.onchange().subscribe(() => {
  if(navigator.onLine)
this.isOnline= true
else
this.isOnline = false;
});

}

  login(){

  /*  console.log("start login function");
    console.log(this.auth.login(this.registerCredentials));
    this.auth.login(this.registerCredentials).then(
      result => {
        console.log("the data is " + result);
        this.a = result;
      }
    )
    .catch(
      error => {
        console.log('this is error ' + error);
      }
    )
    console.log(this.a);*/
    //let a = this.auth.login(this.registerCredentials);
    if(this.registerCredentials.userid==='root'&&this.registerCredentials.password==='root'){
      this.auth.currentUser=this.registerCredentials;
      this.navCtrl.push(CaptureIncidentPage);
      this.a=true;
    }
    if(!this.isOnline){
        this.sqlProvider.verifyUser(this.registerCredentials.userid,this.registerCredentials.password).then((a)=>{
          console.log(a);
         if(a){
           console.log("Local Access" + this.localAccess);
            this.auth.currentUser=this.registerCredentials;
            this.navCtrl.push(CaptureIncidentPage);
            this.a=true;
          }
          else
          {
            this.showError("Wrong Credentials");
          }
        });
       


    }
    else{
    this.auth.login(this.registerCredentials).then((a)=>{
      if(a){
            this.auth.currentUser=this.registerCredentials;
            this.navCtrl.push(CaptureIncidentPage);
            //this.a = false;
        }
    })
    .catch((error)=>{
      console.log(error);
    })


  }}
quickEntry(){
  this.navCtrl.push("QuickSignupPage");
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
