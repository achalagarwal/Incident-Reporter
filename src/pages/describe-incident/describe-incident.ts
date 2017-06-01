import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
//import { DescribeIncidentPage } from '../describe-incident/describe-incident';

@Component({
  selector: 'page-describe-incident',
  templateUrl: 'describe-incident.html'
})
export class DescribeIncidentPage {

  constructor(public navCtrl: NavController) {
  }
  goToCaptureIncident(params){
    if (!params) params = {};
    this.navCtrl.push(CaptureIncidentPage);
  }goToDescribeIncident(params){
    if (!params) params = {};
    this.navCtrl.push(DescribeIncidentPage);
  }
}
