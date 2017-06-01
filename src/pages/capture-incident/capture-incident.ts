import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DescribeIncidentPage } from '../describe-incident/describe-incident';
//import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { AuthService } from '../../providers/auth-service';
import { User } from '../../models/User';
@Component({
  selector: 'page-capture-incident',
  templateUrl: 'capture-incident.html'
})
export class CaptureIncidentPage {
  public base64Image: string;
  public user:User=this.auth.getUserInfo();

  constructor(public navCtrl: NavController, public camera:Camera, private auth:AuthService) {
  }
options: CameraOptions = {
quality: 100,
destinationType: this.camera.DestinationType.DATA_URL,
encodingType: this.camera.EncodingType.JPEG,
mediaType: this.camera.MediaType.PICTURE
}
  takePicture(){
    console.log(this.user);
this.camera.getPicture(this.options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
}
  goToDescribeIncident(params) {
    if (!params) params = {};
    this.navCtrl.push(DescribeIncidentPage);
  } goToCaptureIncident(params) {
    if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }
}
