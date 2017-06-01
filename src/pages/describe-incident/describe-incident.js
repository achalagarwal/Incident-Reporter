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
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
//import { DescribeIncidentPage } from '../describe-incident/describe-incident';
var DescribeIncidentPage = DescribeIncidentPage_1 = (function () {
    function DescribeIncidentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DescribeIncidentPage.prototype.goToCaptureIncident = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CaptureIncidentPage);
    };
    DescribeIncidentPage.prototype.goToDescribeIncident = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(DescribeIncidentPage_1);
    };
    return DescribeIncidentPage;
}());
DescribeIncidentPage = DescribeIncidentPage_1 = __decorate([
    Component({
        selector: 'page-describe-incident',
        templateUrl: 'describe-incident.html'
    }),
    __metadata("design:paramtypes", [NavController])
], DescribeIncidentPage);
export { DescribeIncidentPage };
var DescribeIncidentPage_1;
//# sourceMappingURL=describe-incident.js.map