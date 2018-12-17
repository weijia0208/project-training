import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import {TabsPage} from '../tabs/tabs';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  telNum;
  psw;
  constructor(public http:HttpClient,public App:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SignUpPage');
  // }

  signin(){
    this.App.getRootNavs()[0].setRoot(SignInPage);
  }
  Home(){
    this.http.post('/before/user/signup',{telNum:this.telNum}).subscribe((data)=>{
      if(JSON.stringify(data)=='[]'){
        document.getElementById('missAll').innerHTML = '请输入账号和密码！';
        document.getElementById('missAll').style.display = 'inline';
      }else if(this.psw!==data[0].password){
        document.getElementById('missAll').innerHTML = '密码错误！';
        document.getElementById('missAll').style.display = 'inline';
      }else{
        this.App.getRootNavs()[0].setRoot(TabsPage);
      }
    });
  }
 
}
