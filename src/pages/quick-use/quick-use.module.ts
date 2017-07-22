import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickUsePage } from './quick-use';

@NgModule({
  declarations: [
    QuickUsePage,
  ],
  imports: [
    IonicPageModule.forChild(QuickUsePage),
  ],
  exports: [
    QuickUsePage
  ]
})
export class QuickUsePageModule {}
