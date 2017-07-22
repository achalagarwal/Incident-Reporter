import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickSignupPage } from './quick-signup';

@NgModule({
  declarations: [
    QuickSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(QuickSignupPage),
  ],
  exports: [
    QuickSignupPage
  ]
})
export class QuickSignupPageModule {}
