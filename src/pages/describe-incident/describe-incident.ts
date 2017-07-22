import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
//import { DescribeIncidentPage } from '../describe-incident/describe-incident';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geocode } from '../../models/geocode';
import { DataProvider } from '../../providers/data';
import { FormControl } from '@angular/forms';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Platform } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { AuthService } from '../../providers/auth-service';

//import 'zone.js';
//import 'reflect-metadata';
declare var jic:any;
declare var Network:any
@Component({
  selector: 'page-describe-incident',
  templateUrl: 'describe-incident.html'
})
export class DescribeIncidentPage {
  searchControl: FormControl;
  public locCheck:Boolean=false;
  public long;
  public lat;
  public incidentDescription = "default";
  public incidentType = "default";
  public image;
  public send;
  public quality;
  public originalImage;
  public selectedItem;
  public isSelected = false;
  fdata:Geocode[];
  public manualLocation = false;
  public myInput;
  public settings = {
   upload: {
       // Where is located your `network.php` file.
       endpoint: 'http://14.139.219.221:8080/incident/server-speed.php',
       // The delay while you want to take measures.
       delay: 0,

       data: {
           // The amount of data to initially use.
           size: 35 * 1024 , // 2 MB

           // If the measure period can't reach the delay defined in the settings,
           // the data amount is multiplied by the following value.
           multiplier: 1
       }
   }
  };
  public net = new Network(this.settings);
  public data=this.dataProvider.getData();
  constructor(public auth: AuthService,public transfer:Transfer,public platform:Platform,public locationAccuracy: LocationAccuracy,public dataProvider:DataProvider,public navCtrl: NavController,private params: NavParams, public geo:Geolocation, public diagnostic:Diagnostic, public http:Http) {

  }
   ionViewWillEnter() {
     this.image=new Image();
     this.image.src=this.params.get('param1');
     //document.getElementById("Button").disabled = true;
     var options = {
         enableHighAccuracy: true,
         //timeout: 5000,
         maximumAge: 600000
       };
       this.originalImage=new Image();
     this.originalImage.src= this.params.get('param1');
     console.log(this.originalImage);
     console.log(this.originalImage.src);
    if(this.originalImage==="hi"){
      console.log("true that");
      this.originalImage=new Image();
      this.originalImage.src="assets/img/AhGeoG7DQhiehtpBtD3q_camera-logo_1032-109.jpg";
    }    console.log(this.originalImage);
    this.quality = 15;
    this.updateResults();

  // You are on a device, cordova plugins are accessible

    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => {console.log('Error requesting location permissions', error)
          this.diagnostic.isLocationAvailable().then((available) => {
            console.log("Went inside then, is location available");
            console.log(available);
           if(!available){
         this.diagnostic.switchToLocationSettings();
           }
       }, (err)=>{
           console.error("The following error occurred: "+err);
       });
        }
        );
      }

    });

    console.log(this.image);

       this.geo.getCurrentPosition(options).then((position) => {
         console.log("hi");
         this.locCheck = true;

         //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
     this.long = position.coords.longitude;
     this.lat = position.coords.latitude;
     console.log(this.lat);
     console.log(this.locCheck);
     this.manualLocation=false;
     //Images Objects
  //var  target_img;

//(NOTE: see the examples/js/demo.js file to understand how this object could be a local image
//from your filesystem using the File API)

//An Integer from 0 to 100
 this.quality =  15;
// output file format (jpg || png)
//This function returns an Image Object
console.log(this.lat);

   }, (err) => {
     console.log(err);
     this.manualLocation=true;
     console.log(this.manualLocation);
     this.locCheck==true;
   }
 );
 setTimeout(this.locationCheck(),7000);
 try{
 this.net.upload
     .on('end', function(averageSpeed, allInstantSpeeds) {
        console.log("A");
         console.log(averageSpeed);
     })
     .start();
}
catch(err){
  console.log(err);

}
    // this.diagnostic.getLocationAuthorizationStatus().then ((status) => {alert(status);}).catch((error)=> {alert(error);})
     // this.diagnostic.isLocationAvailable().then((authorized) => {
     // alert ('Is app authorized to use Location?' + authorized)
     // this.appAuthorized = authorized; }).catch((error) => {
     // alert(error);
     // })


   }
   select_item(i){
     this.selectedItem=this.fdata[i];
     this.isSelected=true;
     this.lat=this.selectedItem.lat;
     this.long=this.selectedItem.long;

   }

   filterItems(){

        this.fdata = this.data.filter((item:Geocode) => {
            return item.toSearch.toLowerCase().indexOf(this.myInput.toLowerCase()) > -1;
        });

    }
    reselect(){
      this.isSelected=false;
      this.lat=null;
      this.long=null;
    }
   locationCheck(){
     console.log(!this.lat);
     if(!this.lat){
       this.manualLocation=true;
       this.locCheck=true;
     }
   }
   updateResults(){
     //this.quality =  5;
    // output file format (jpg || png)
    //This function returns an Image Object
    //this.image=new Image();
   console.log(jic.compress(this.originalImage,this.quality,'jpg'));
    this.image= jic.compress(this.originalImage,this.quality,'jpg').src;
    this.send = jic.compress(this.originalImage,this.quality,'jpg');
  //  console.log(this.image);

   }
  /* this.diagnostic.isLocationEnabled().then((res)=>{
    if(res){
      this.geo.getCurrentPosition().then((position) => {
        console.log("hi");
        this.locCheck = true;

        //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.long = position.coords.longitude;
    this.lat = position.coords.latitude;
    console.log(this.lat);
    console.log(this.locCheck);
  });

})*/

  //platform.ready().then(() => {
//this.diagnostic.isLocationEnabled().then((res) => {
    /*  let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 */
    //  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);



call(){
  console.log(this.incidentType);
  const fileTransfer: TransferObject = this.transfer.create();

     let options1: FileUploadOptions = {
        fileKey: 'file',
        fileName: this.auth.currentUser.userid+'.jpg',
        headers: {}

     }
     console.log("send");

     console.log(this.send);
     //console.log(assets/img/AhGeoG7DQhiehtpBtD3q_camera-logo_1032-109.jpg);
//http://14.139.219.221:8080/incident/upload.php
  var a = fileTransfer.upload(this.image, 'http://14.139.219.221:8080/incident/upload.php', options1,true)
  .then((data) => {
    let x=data;
    // success
    console.log("this is data");
    let body     : string   = "key=create&user=" + this.auth.currentUser.userid + "&type=" + this.incidentType + "&details=" + this.incidentDescription + "&lat=" + this.lat+"&lon=" + this.long + "&image="+x.response ,
        type     : string   = "application/x-www-form-urlencoded; charset=UTF-8_bin", //verify
        headers  : any      = new Headers({ 'Content-Type': type}), //understand
        options  : any      = new RequestOptions({ headers: headers }),
        url      : any      = "http://14.139.219.221:8080/incident/"+ "incident-data.php";
        this.http.post(url, body, options)
        .subscribe((data) =>
        {
           // If the request was successful notify the user
           if(data.status === 200)
           {
             console.log(url + body + options);
             console.log("success");

              //console.log("again a" + a);
           }
           // Otherwise let 'em know
           else
           {
             console.log("again a" + a);
              console.log('Something went wrong!');

           }
           //console.log("again a" + a);

        });
    console.log(data);
    alert("success");
  }, (err) => {
    // error
    alert("error"+JSON.stringify(err));
  });
  console.log("this is a");
  console.log(a);




}
  goToCaptureIncident(params){
    if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }goToDescribeIncident(params){
    if (!params) params = {};
    this.navCtrl.push(DescribeIncidentPage);
  }
}
