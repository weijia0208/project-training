import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PartDetailPage } from '../part-detail/part-detail';

/**
 * Generated class for the ParttimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parttime',
  templateUrl: 'parttime.html',
})
export class ParttimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParttimePage');
  }
  GoDetail(){
    this.navCtrl.push(PartDetailPage);
  }

}
