var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DescribeIncidentPage } from '../describe-incident/describe-incident';
//import { CaptureIncidentPage } from '../capture-incident/capture-incident';
var CaptureIncidentPage = CaptureIncidentPage_1 = (function () {
    function CaptureIncidentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CaptureIncidentPage.prototype.goToDescribeIncident = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(DescribeIncidentPage);
    };
    CaptureIncidentPage.prototype.goToCaptureIncident = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CaptureIncidentPage_1);
    };
    return CaptureIncidentPage;
}());
CaptureIncidentPage = CaptureIncidentPage_1 = __decorate([
    Component({
        selector: 'page-capture-incident',
        templateUrl: 'capture-incident.html'
    }),
    __metadata("design:paramtypes", [NavController])
], CaptureIncidentPage);
export { CaptureIncidentPage };
var CaptureIncidentPage_1;
//# sourceMappingURL=capture-incident.js.map