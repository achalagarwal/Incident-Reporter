import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { User } from '../../models/user';
import { AuthService } from '../../providers/auth-service';
/**
 * Generated class for the QuickSignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-quick-signup',
  templateUrl: 'quick-signup.html',
})
export class QuickSignupPage {

  firstName;
  lastName;
  phone;
  constructor(public auth: AuthService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuickSignupPage');
  }
  quickEntry(){
    console.log(this.firstName+this.lastName);
    this.auth.currentUser=new User;
    this.auth.currentUser.userid="000000_"+this.firstName+" " + this.lastName+"_"+ this.phone;
    this.auth.currentUser.password=this.phone;
    this.navCtrl.push(CaptureIncidentPage);
  }
}
