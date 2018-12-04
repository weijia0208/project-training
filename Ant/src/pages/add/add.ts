import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DaiquPage } from '../daiqu/daiqu';
import { JianzhiPage } from '../jianzhi/jianzhi';
import { ShiwuPage } from '../shiwu/shiwu';
import { WupinPage } from '../wupin/wupin';
import { YiwoPage } from '../yiwo/yiwo';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  close(){
    this.navCtrl.pop();
  }
  goPage1(){
    this.navCtrl.push(DaiquPage);
  }
  goPage2(){
    this.navCtrl.push(JianzhiPage);
  }
  goPage3(){
    this.navCtrl.push(ShiwuPage);
  }
  goPage4(){
    this.navCtrl.push(WupinPage);
  }
  goPage5(){
    this.navCtrl.push(YiwoPage);
  }
}
