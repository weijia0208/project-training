import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the MyReplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-replace',
  templateUrl: 'my-replace.html',
})
export class MyReplacePage {

  uname:string;
  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
    this.uname = navParams.get('name');
  }

  delivery;
  del=[];
  ionViewDidLoad() {
    this.http.get('/before/delivery').subscribe(data=>{
      //console.log(this.uname);
      this.delivery=data;
      var a=0;
      for(var i=0;i<this.delivery.length;i++){
        if(this.delivery[i].username==this.uname){
          this.del[a]=this.delivery[i];
          a++;
        }
      }
    })
  }

}
