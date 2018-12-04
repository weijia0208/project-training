import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { PublicPage } from '../public/public';
import { HelpPage } from '../help/help';
import { AnliPage } from '../anli/anli';
import { SetPage } from '../set/set';
import {MyPartPage} from '../my-part/my-part';

/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  seting(){
    this.navCtrl.push(SetPage);
  }
  go(){
    this.navCtrl.push(MyPartPage);
  }
  goto(){
    this.navCtrl.push(ProductPage);
  }
  help(){
    this.navCtrl.push(HelpPage);
  }
  anli(){
    this.navCtrl.push(AnliPage);
  }
  public(){
    this.navCtrl.push(PublicPage);
  }

}
