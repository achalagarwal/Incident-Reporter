import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geocode } from "../models/geocode";
/*
  Generated class for the DataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataProvider {
//public data[] = new Geocode[];
public d:Geocode[]=[{lat:25.070394584476858,long:92.394081913936134,toShow:"Umkiang Police Out Post",toSearch:"Sutnga-Saipung Jaintia Umkiang Police Out Post"},
{lat:25.070394584476858,long:92.394081913936134,toShow:"Umkiang Police Petrol Force",toSearch:"Sutnga-Saipung Jaintia Police Petrol Force"},
{lat:25.070394584476858,long:92.394081913936134,toShow:"Lumshnong",toSearch:"Lumshnong Sutnga-Saipung Jaintia Umkiang Police Out Post"},
{lat:25.070394584476858,long:92.394081913936134,toShow:"Dawki Police Check Post",toSearch:"Dawki Amlarem Jaintia Hills Police Station"}];
  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }
getData():Geocode[]{
  return this.d;
}
}
