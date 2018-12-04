import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoodsdetailPage } from '../goodsdetail/goodsdetail';

/**
 * Generated class for the GoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})
export class GoodsPage {

  isActive=0;
  change(i){
    this.isActive=i;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  Godetail(){
    this.navCtrl.push(GoodsdetailPage);
  }

}
