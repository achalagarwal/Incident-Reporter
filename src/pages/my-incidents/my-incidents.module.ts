import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyIncidentsPage } from './my-incidents';

@NgModule({
  declarations: [
    MyIncidentsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyIncidentsPage),
  ],
  exports: [
    MyIncidentsPage
  ]
})
export class MyIncidentsPageModule {}
