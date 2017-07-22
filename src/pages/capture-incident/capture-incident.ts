import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { DescribeIncidentPage } from '../describe-incident/describe-incident';
//import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { AuthService } from '../../providers/auth-service';
import { User } from '../../models/User';
import { MyIncidentsPage} from '../my-incidents/my-incidents';

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
quality: 50,
targetWidth: 500,
targetHeight: 500,
destinationType: this.camera.DestinationType.DATA_URL,
encodingType: this.camera.EncodingType.JPEG,
mediaType: this.camera.MediaType.PICTURE
}
  takePicture(quality:number){
    console.log(this.user);
    if(quality == 1 )
    {
      this.options.quality = 90;
    }
    else if(quality ==2){
      this.options.quality= 50;
    }
    else if(quality == 3){
      this.options.quality = 20;
    }
this.camera.getPicture(this.options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64:
 this.base64Image = 'data:image/jpeg;base64,' + imageData;
 console.log(this.base64Image);
 this.goToDescribeIncident(this.base64Image);
}, (err) => {
  console.log("ihihihi");
  this.goToDescribeIncident("hi");
 // Handle error
});
}
  goToDescribeIncident(params) {
    console.log(params);
    if (!params) params = {};
    this.navCtrl.push(DescribeIncidentPage,{param1:params});

  }
  goToCaptureIncident(params) {
    if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }
  viewMyIncidents(){
    this.navCtrl.push(MyIncidentsPage);
  }
}
