import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductPage } from '../product/product';
import { PublicPage } from '../public/public';
import { HelpPage } from '../help/help';
import { AnliPage } from '../anli/anli';
import { SetPage } from '../set/set';
import {HttpClient} from '@angular/common/http';
import { MyReplacePage } from '../my-replace/my-replace';

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

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  n;
  ionViewDidLoad() {
    // this.http.get('/before/user').subscribe(data=>{
    //   console.log(data);
    // })
    this.n = document.getElementById('name').innerText;
  }

  seting(){
    this.navCtrl.push(SetPage,{
      name:this.n
    });
  }
  goto(){
    this.navCtrl.push(ProductPage,{
      name:this.n
    });
    //console.log(this.n);
  }
  go(){
    this.navCtrl.push(MyReplacePage,{
      name:this.n
    });
  }
  public(){
    this.navCtrl.push(PublicPage,{
      name:this.n
    });
  }
  help(){
    this.navCtrl.push(HelpPage);
  }
  anli(){
    this.navCtrl.push(AnliPage);
  }
}
