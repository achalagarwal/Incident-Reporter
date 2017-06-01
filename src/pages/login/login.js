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
import { SignupPage } from '../signup/signup';
//import { LoginPage } from '../login/login';
import { CaptureIncidentPage } from '../capture-incident/capture-incident';
//import { CaptureIncidentPage } from '../capture-incident/capture-incident';
var LoginPage = LoginPage_1 = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goToSignup = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.goToLogin = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(LoginPage_1);
    };
    LoginPage.prototype.goToCaptureIncident = function (userid, password) {
        //if (!params) params = {};
        //var x = document.getElementById("input1").getElementByTagName("UserId_Input");
        //var y = <HTMLInputElement>document.getElementById("input2");
        console.log("user id is ->" + userid);
        console.log("user password is ->" + password);
        //if condition for authenticatinsg user with supplied password
        this.navCtrl.push(CaptureIncidentPage);
    };
    return LoginPage;
}());
LoginPage = LoginPage_1 = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController])
], LoginPage);
export { LoginPage };
var LoginPage_1;
//# sourceMappingURL=login.js.map