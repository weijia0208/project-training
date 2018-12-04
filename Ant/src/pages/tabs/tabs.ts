import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';

import { HomePage } from '../home/home';
import { SocialPage } from '../social/social';
import { MessagePage } from '../message/message';
import { MinePage } from '../mine/mine';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SocialPage;
  tab3Root = MessagePage;
  tab4Root = MinePage;

  constructor(public modalCtrl: ModalController) {

  }

  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let profileModal = this.modalCtrl.create(AddPage);
      profileModal.present();
    },false);
  }
}
