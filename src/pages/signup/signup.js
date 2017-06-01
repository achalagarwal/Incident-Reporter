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
import { LoginPage } from '../login/login';
//import { SignupPage } from '../signup/signup';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
import { DescribeIncidentPage } from '../describe-incident/describe-incident';
// { CaptureIncidentPage } from '../capture-incident/capture-incident';
var SignupPage = SignupPage_1 = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage);
    };
    SignupPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SignupPage_1);
    };
    SignupPage.prototype.goToCaptureIncident = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(CaptureIncidentPage);
    };
    SignupPage.prototype.goToDescribeIncident = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(DescribeIncidentPage);
    }; /*goToCaptureIncident(params){
      if (!params) params = {};
      this.navCtrl.push(CaptureIncidentPage);
    }*/
    return SignupPage;
}());
SignupPage = SignupPage_1 = __decorate([
    Component({
        selector: 'page-signup',
        templateUrl: 'signup.html'
    }),
    __metadata("design:paramtypes", [NavController])
], SignupPage);
export { SignupPage };
var SignupPage_1;
//# sourceMappingURL=signup.js.map