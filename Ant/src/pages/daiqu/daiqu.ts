import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushsuccessPage } from '../pushsuccess/pushsuccess';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the DaiquPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-daiqu',
  templateUrl: 'daiqu.html',
})
export class DaiquPage {
  username:string=localStorage.getItem(name);
  take_time;
  take_name;
  take_place;
  take_text;
  take_id;
  constructor(public http:HttpClient,public navCtrl: NavController,public navParams: NavParams) { 
  } 
  ionViewDidLoad() {  
  }
  //跳转到新的页面successPage：this.navCtrl.push(PushsuccessPage);
  gosuccess(){
    this.navCtrl.push(PushsuccessPage);
    // console.log(this.take_time,this.take_name,this.take_place,this.take_text);
    this.take_time=JSON.stringify(new Date());
    //this.take_id +=
    this.http.post('/before/twodelivery/daiqu',{username:this.username,take_time:this.take_time,take_name:this.take_name,
      take_place:this.take_place,take_text:this.take_text}).subscribe(data => {
      console.log(data);
    })
  }
  //相当于一个返回操作：this.navCtrl.pop();
  goback(){
    this.navCtrl.pop();
  }
}
