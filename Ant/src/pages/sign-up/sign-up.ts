import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(public App:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signin(){
    this.App.getRootNavs()[0].setRoot(SignInPage);
  }
  
  Home(){
    this.App.getRootNavs()[0].setRoot(TabsPage);
  }
}
