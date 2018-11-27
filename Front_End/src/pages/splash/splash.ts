//import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


import { Slides } from 'ionic-angular';
import { AuthenticationComponent } from '../../components/authentication/authentication';
//import {signup} from '../../components/signup/signup';
import {signup} from '../../components/signup/signup';
import { PopoverController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';


/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  template: `

    <button ion-item (click)="loginpage()">
          <ion-icon name="contact" item-start></ion-icon>
          Connexion
    </button>
        <button ion-item (click)="registerpage()">
              <ion-icon name="add-circle" item-start></ion-icon>
              Inscription
        </button>




  `
})
export class PopoverPage {
  //background: string;
  contentEle: any;
  //textEle: any;
  constructor( public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  loginpage(){
    //this.navCtrl.setRoot(SignupPage);
    this.navCtrl.push(AuthenticationComponent).then(() => {
        this.viewCtrl.dismiss();
    });
  }

  registerpage(){
    this.navCtrl.push(signup).then(() => {
        this.viewCtrl.dismiss();
    });
  }
}


  @Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})




export class SplashPage {
       @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
       // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
       constructor(public navCtrl: NavController, public navParams: NavParams,private popoverCtrl: PopoverController) {
       }

      presentPopover(ev) {

      let popover = this.popoverCtrl.create(PopoverPage, {
      contentEle: this.content.nativeElement,
      //textEle: this.text.nativeElement
      });

      popover.present({
      ev: ev
      });
       console.log("okkkk");
      }

      @ViewChild(Slides) slides: Slides;



skip() {
  this.navCtrl.push(AuthenticationComponent);
}

// slideChanged() {
//   if (this.slides.isEnd())
//   //  this.skipMsg = "Alright, I got it";
// }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
  }

}
