import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App} from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';


/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public App:App,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signup(){
    this.App.getRootNavs()[0].setRoot(SignUpPage);
    //this.navCtrl.push(SignUpPage);
  }

  id:string='';
  show(){
    var txt = this.id;
    console.log(txt);
    if(txt=='student'){
      document.getElementById('number').style.display="";
    }
    else{
      document.getElementById('number').style.display="none";
    }
  }
  

}
