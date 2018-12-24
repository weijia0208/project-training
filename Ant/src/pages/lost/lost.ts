import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostDetailPage } from '../lost-detail/lost-detail';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the LostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lost',
  templateUrl: 'lost.html',
})
export class LostPage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  all;
  founds=[];
  ionViewDidLoad() {
    var userschool=localStorage.getItem("school");
    this.http.get('/before/found').subscribe(data=>{
      this.all=data;
      var m=0;
      for(var n=0;n<this.all.length;n++){
        if(this.all[n].goods_addr==userschool){
          this.founds[m]=this.all[n];
          m++;
        }
      }
    })
  }

  GoDetail(i){
    this.navCtrl.push(LostDetailPage,{
      content:this.founds[i]
    });
  }
}
