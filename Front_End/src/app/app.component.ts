import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {signup} from '../components/signup/signup';

import { AuthenticationComponent } from '../components/authentication/authentication';
import { SplashPage } from '../pages/splash/splash';
import { trashs } from '../pages/trashs/trashs';
import { trashslist } from '../pages/trashslist/trashslist';

import { AlertController } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  showSplash = true; // <-- show animation


  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{title: string, component: any}>;
  pageLogin: {title: string, component: any};
  pageSignup: {title: string, component: any};
  pageSplash: {title: string, component: any};
  loading: any;
  user: any;
  loggedin: boolean = false;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public loadingCtrl: LoadingController,
    public events: Events,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController) {
    this.initEvents();
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      {title:'Add Trush', component: trashs},
      {title:'Trush List', component: trashslist},
     
    ];
    this.pageSplash = { title: 'Splash', component: SplashPage};
    this.pageLogin = { title: 'Login', component: AuthenticationComponent};
    this.pageSignup = {  title: 'Signup', component: signup};
  }
  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();  // <-- hide static image
      this.testAuth();
      this.rootPage = this.initComp();
      timer(3000).subscribe(() => this.showSplash = false) // <-- hide animation after 3s
    });
  }

 // initializeApp() {
   // this.platform.ready().then(() => {
    //  this.statusBar.styleDefault();
    //  this.splashScreen.hide();
    //  this.testAuth();
     // this.rootPage = this.initComp();
  //  });
 // }


  initEvents(){
    // Events
    this.events.subscribe('app:showloading', () => {
      this.presentLoading();
    });
    this.events.subscribe('app:alerte', (message1,message2,message3) => {
      this.presentConfirm(message1,message2,message3);
    });
    this.events.subscribe('app:hideloading', () => {
      this.hideLoading();
    });
    this.events.subscribe('app:toast', (message) => {
      this.presentToast(message);
    });
    this.events.subscribe('app:toast1', (message) => {
      this.presentToast1(message);
    });
    this.events.subscribe('app:setUser', (data)=>{
      this.initUserLogged(data);
    })
    this.events.subscribe('app:testAuth', ()=>{
      this.testAuth();
    })
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Please wait while loading ...",
      
    });
    this.loading.present();
  }


  hideLoading() {
    this.loading.dismiss();
  }

  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000
  
    });
    toast.present();
  }
  presentToast1(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  initUserLogged(data){
    this.loggedin = true;
    this.user = data;
    localStorage.setItem('jbb-data', JSON.stringify(data));
    this.nav.setRoot(trashs);
  }


  testAuth(){
    
    let data = localStorage.getItem('userinfo');
    if(!data ){
      this.nav.setRoot(AuthenticationComponent);
    } else {
      this.user = JSON.parse(data);
    }
  }


  initComp(){
    
    let data = localStorage.getItem('userinfo');
    if(!data ){
      return AuthenticationComponent;
    } else {
      this.user = JSON.parse(data);
      return trashs;
    }
  }

  
  triggerLoggedOff(){
    localStorage.removeItem('userinfo');
    localStorage.removeItem('jbb-data');
    
    this.user=null;
    this.nav.setRoot(AuthenticationComponent);
  }
  presentConfirm(message1 , message2 , message3) {
    let alert = this.alertCtrl.create({
      title: message1,
      message: message2,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if(message3 === "1"){
            this.nav.setRoot(trashslist);}
          }
        }
      ]
    });
    alert.present();
  }
  
}
