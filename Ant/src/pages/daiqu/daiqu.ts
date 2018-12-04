import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushsuccessPage } from '../pushsuccess/pushsuccess';
/**
 * Generated class for the DaiquPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daiqu',
  templateUrl: 'daiqu.html',
})
export class DaiquPage {
  constructor(public navCtrl: NavController,public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaiquPage');
    
  }
  gosuccess(){
    this.navCtrl.push(PushsuccessPage);
  }
  goback(){
    this.navCtrl.pop();
  }
}
