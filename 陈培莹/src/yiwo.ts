import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PushsuccessPage } from '../pushsuccess/pushsuccess';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the YiwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yiwo',
  templateUrl: 'yiwo.html',
})
export class YiwoPage {
  username:string="49";
  issue_time;
  issue_content;
  constructor(public http:HttpClient,private camera: Camera,private imagePicker: ImagePicker,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YiwoPage');
    
  }
  gosuccess(){
    this.navCtrl.push(PushsuccessPage);
    this.issue_time=JSON.stringify(new Date());
    this.http.post('/before/twoissues/yiwo',
    {username:this.username,issue_time:this.issue_time,
      issue_content:this.issue_content}).subscribe(data=>{
      console.log(data);
    })
  }
  goback(){
    this.navCtrl.pop();
  }


  footersty:boolean=false;

  change(){
    this.footersty=!this.footersty;
    if(this.footersty==false)
    {
      document.getElementById('footer').style.display="none";
    }
    else{
      document.getElementById('footer').style.display="block";
    }
  }

  imgURL:string;
  takephoto(){
    var div1=document.getElementById('div1');
    var div2=document.createElement('div');
    var img=document.createElement('img');
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
  
    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.imgURL=base64Image;
    img.src=this.imgURL;
    img.style.border="1px solid #cccccc";
    div2.appendChild(img);
    div1.appendChild(div2);
    }, (err) => {
    // Handle error
    });
    this.footersty=!this.footersty;
    document.getElementById('footer').style.display="none";
  }
  
  selectphoto(){
    var div1=document.getElementById('div1');
    var div2=document.createElement('div');
    const options:  ImagePickerOptions = {
      maximumImagesCount: 6,
      width:200,
      // height: 120,
      quality: 100, 
      outputType:1//特别注意
    };
    this.imagePicker.getPictures(options).then((results) => {
      for(var i = 0; i < results.length; i++) {
        var img=document.createElement('img');
        let base64Image = 'data:image/jpeg;base64,' +results[i];
        this.imgURL=base64Image;
        img.src=this.imgURL;
        img.style.border="1px solid #cccccc";
        div2.appendChild(img);
        div1.appendChild(div2);
      }
    }, (err) => { });
    this.footersty=!this.footersty;
    document.getElementById('footer').style.display="none";
  }

  back(){
      this.footersty=!this.footersty;
      document.getElementById('footer').style.display="none";
  }

  tipfir:string='#我想要#';
  tipsec:string='#失物招领#';
  text:string='';
  buy(){
    this.text=this.tipfir+this.text;
  }
  lost(){
    this.text=this.tipsec+this.text;
  }
}
