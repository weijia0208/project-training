import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { HttpClient }from '@angular/common/http';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  constructor(public http:HttpClient,public navCtrl: NavController, public navParams: NavParams) {
  }
  chats;
  ionViewDidLoad() {
    this.http.get('/before/chat').subscribe(data=>{
      this.chats = data;
    })
  }

  chat(){
    this.navCtrl.push(ChatPage);
  }
}
