import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { CaptureIncidentPage } from '../pages/capture-incident/capture-incident';
import { DescribeIncidentPage } from '../pages/describe-incident/describe-incident';
import { FormsModule }   from '@angular/forms';
import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@NgModule({

  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CaptureIncidentPage,
    DescribeIncidentPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Http,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CaptureIncidentPage,
    DescribeIncidentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
