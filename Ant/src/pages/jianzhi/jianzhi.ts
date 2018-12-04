import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushsuccessPage } from '../pushsuccess/pushsuccess';

/**
 * Generated class for the JianzhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jianzhi',
  templateUrl: 'jianzhi.html',
})
export class JianzhiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JianzhiPage');
  }
  gosuccess(){
    this.navCtrl.push(PushsuccessPage);
  }
  goback(){
    this.navCtrl.pop();
  }
}
