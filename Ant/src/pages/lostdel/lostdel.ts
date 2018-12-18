import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

/**
 * Generated class for the LostdelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostdel',
  templateUrl: 'lostdel.html',
})
export class LostdelPage {

  content;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.content = navParams.get('content');
  }

  founds=[];
  ionViewDidLoad() {
    this.http.get('/before/found').subscribe(data=>{
     this.founds[0] = this.content;
    })
  }

  delete(){
    
  }

}
