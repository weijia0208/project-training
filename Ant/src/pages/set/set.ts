import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ZiliaoPage } from '../ziliao/ziliao';
import { SignUpPage } from '../sign-up/sign-up';


@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ziliao(){
    this.navCtrl.push(ZiliaoPage);
  }
  signup(){
    this.navCtrl.push(SignUpPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

}
