import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { MyIncidentsPage } from '../pages/my-incidents/my-incidents';
import { SignupPage } from '../pages/signup/signup';
import { CaptureIncidentPage } from '../pages/capture-incident/capture-incident';
import { DescribeIncidentPage } from '../pages/describe-incident/describe-incident';
import { FormsModule }   from '@angular/forms';
import { AuthService } from '../providers/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { DataProvider } from '../providers/data';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { SqLiteProvider } from '../providers/sq-lite/sq-lite';
import { Network } from '@ionic-native/network';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';

//import { Diagnostic } from '@ionic-native/diagnostic';

@NgModule({

  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    CaptureIncidentPage,
    DescribeIncidentPage,
    MyIncidentsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    CaptureIncidentPage,
    DescribeIncidentPage,
    MyIncidentsPage
  ],
  providers: [
    Transfer,
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    Geolocation,
    Diagnostic,
    LocationAccuracy,
    DataProvider,
    Network,
    SqLiteProvider
  ]
})
export class AppModule {}
