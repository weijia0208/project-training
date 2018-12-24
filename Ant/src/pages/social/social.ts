import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialdetailPage} from '../socialdetail/socialdetail';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  constructor(public http: HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }

  all;
  issues=[];
  ionViewDidLoad() {
    var userschool=localStorage.getItem("school");
    this.http.get('/before/issue').subscribe(data=>{
      this.all=data;
      var m=0;
      for(var n=0;n<this.all.length;n++){
        if(this.all[n].goods_addr==userschool){
          this.issues[m]=this.all[n];
          m++;
        }
      }
    })
  }

  GoDetail(i){
    this.navCtrl.push(SocialdetailPage,{
      content:this.issues[i]
    });
  }

}
