import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import {SchoolsearchPage} from '../schoolsearch/schoolsearch';
import {SearchPage} from '../search/search';
import { GoodsPage } from '../goods/goods';
import {LostPage} from '../lost/lost';
import { GoodsdetailPage } from '../goodsdetail/goodsdetail';
import { MorePage } from '../more/more';
import { ParttimePage } from '../parttime/parttime';
import { FriendPage } from '../friend/friend';
import { ReplacePage } from '../replace/replace';
import { TodoPage } from '../todo/todo';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;
  icons:string="camera";
  items = [];

  constructor(private iab: InAppBrowser,public http:HttpClient,public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }
  GoSchool(){
    this.navCtrl.push(SchoolsearchPage);
  }
  GoSearch(){
    this.navCtrl.push(SearchPage);
  }
  GoGoods(){
    this.navCtrl.push(GoodsPage);
  }
  GoLost(){
    this.navCtrl.push(LostPage);
  }
  GoReplace(){
    this.navCtrl.push(ReplacePage);
  }
  Godetail(){
    this.navCtrl.push(GoodsdetailPage);
  }
  GoMore(){
    this.navCtrl.push(MorePage);
  }
  GoPart(){
    this.navCtrl.push(ParttimePage);
  }
  GoFriend(){
    this.navCtrl.push(FriendPage);
  }
  GoTodo(){
    this.navCtrl.push(TodoPage);
  }
  link(){
    const browser = this.iab.create('http://jwgl.hebtu.edu.cn/xtgl/login_slogin.html?language=zh_CN&_t=1544400833226');
    browser.close();
  }



  ionViewDidLoad(){
  }
  // 上拉加载
  doInfinite(infiniteScroll){
  }
  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
