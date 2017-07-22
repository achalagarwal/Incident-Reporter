import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Leaflet from 'leaflet';
import { Http} from '@angular/http';
import { AuthService } from '../../providers/auth-service';
/**
 * Generated class for the MyIncidentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-incidents',
  templateUrl: 'my-incidents.html',
})
export class MyIncidentsPage {

incidents;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, public Auth:AuthService) {
  }
  ionViewDidEnter(): void {
     this.drawMap();
   }
   drawMap(){
     let map = Leaflet.map('map').setView([25.467, 91.366], 5);
    var OpenStreetMap_Mapnik = Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
     this.http.get('http://14.139.219.221:8080/incident/map-data.php?userid='+ this.Auth.currentUser.userid)
     .map(res=> res)
     .subscribe(data => {
       console.log(" Map data Success");
       console.log(data);
       this.incidents  = data.json();
       console.log("this is incidents");
       console.log(this.incidents);
       console.log(this.incidents[1].Latitude);
       for(i = 0; i<this.incidents.length;i++){
         var marker = Leaflet.marker([this.incidents[i].Latitude, this.incidents[i].Longitude]).addTo(map);
         if(this.incidents[i].Status==0)
         marker.bindPopup("<b> Pending Approval </b><br>");
         else if(this.incidents[i].Status==1)
         marker.bindPopup("<b>  Approved </b><br>");
         else if(this.incidents[i].Status==1)
         marker.bindPopup("<b>  Denied </b><br>");

       }
     });

     let lat:number[]=[23,58,12];
     let long:number[]=[93,48,12];
     let meanLat=0;
     let meanLong=0;
     let i;
     for(i=0;i<lat.length;i++){
       meanLat+=lat[i];
     }
     meanLat/=(i+1);
     for(i=0;i<long.length;i++){
       meanLong+=long[i];
     }
     meanLong/=(i+1);
     //get your data (just lat longs) and save them in an array
     //use a promise to call leaflet after obtaining date, or use default values now for testing purposes

    //web location



    //when we have a location draw a marker and accuracy circle
    // function onLocationFound(e) {
    //   var radius = e.accuracy / 2;
    //
    //   Leaflet.marker(e.latlng).addTo(map)
    //       .bindPopup("You are within " + radius + " meters from this point").openPopup();
    //
    //   Leaflet.circle(e.latlng, radius).addTo(map);
    // }
  //   map.on('locationfound', onLocationFound);
  //   //alert on location error
  //   function onLocationError(e) {
  //     alert(e.message);
  //   }
   //
  //   map.on('locationerror', onLocationError);
  //  }
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyIncidentsPage');
  }

}
