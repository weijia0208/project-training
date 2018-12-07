import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { ZiliaoPage } from '../ziliao/ziliao';
import { SignUpPage } from '../sign-up/sign-up';


@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public App:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetPage');
  }

  ziliao(){
    this.navCtrl.push(ZiliaoPage);
  }
  signup(){
    this.App.getRootNavs()[0].setRoot(SignUpPage);
  }

}
