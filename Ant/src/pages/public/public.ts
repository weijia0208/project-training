import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GoodsdetailPage} from '../goodsdetail/goodsdetail';

/**
 * Generated class for the PublicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public',
  templateUrl: 'public.html',
})
export class PublicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicPage');
  }

  godetail(){
    this.navCtrl.push(GoodsdetailPage);
  }
}
