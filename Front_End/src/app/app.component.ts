import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { signup } from '../components/signup/signup';

import { AuthenticationComponent } from '../components/authentication/authentication';
import { SplashPage } from '../pages/splash/splash';
import { trashs } from '../pages/trashs/trashs';
import { trashslist } from '../pages/trashslist/trashslist';
import { userslist } from '../pages/userslist/userslist';


import { AlertController } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  showSplash = true; // <-- show animation


  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  pages: Array<{ title: string, component: any }>;
  pages2: Array<{ title: string, component: any }>;
  pageLogin: { title: string, component: any };
  pageSignup: { title: string, component: any };
  pageSplash: { title: string, component: any };
  loading: any;
  user: any;
  loggedin: boolean = false;
  permissionlevel : any;
  master : boolean;
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
      { title: 'Add Trash', component: trashs },
      { title: 'Trash List', component: trashslist },
      { title: 'User List', component: userslist },
      

    ];
    this.pages2 = [
      
      { title: 'Trash List', component: trashslist },
     
      

    ];
    this.pageSplash = { title: 'Splash', component: SplashPage };
    this.pageLogin = { title: 'Login', component: AuthenticationComponent };
    this.pageSignup = { title: 'Signup', component: signup };
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

  initEvents() {
    // Events
    this.events.subscribe('app:showloading', () => {
      this.presentLoading();
    });
    this.events.subscribe('app:hideloading', () => {
      this.hideLoading();
    });
    this.events.subscribe('app:toast', (message) => {
      this.presentToast(message);
    });
   
    this.events.subscribe('app:setUser', () => {
      this.initUserLogged();
    })
    this.events.subscribe('app:testAuth', () => {
      this.testAuth();
    })
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  

  initUserLogged() {
    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (!data1 || !data2 || !data3 || !data4 || !data5) {
      this.nav.setRoot(AuthenticationComponent);
    } else {
      
      let userdata : any = {
        useraccesstoken : data1,
        userrefreshtoken : data2,
        useremail : data3,
        userpassword : data4
      }
      this.loggedin = true;
      this.permissionlevel = (parseInt(JSON.parse(data5).roles))
      console.log( this.permissionlevel)
      console.log(typeof this.permissionlevel)
      this.master = (this.permissionlevel == 1073741824)

      this.user = userdata;
      
        this.nav.setRoot(trashslist);
      
    }
  }


  testAuth() {


    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(data4)
    console.log(JSON.parse(data5))
    if (!data1 || !data2 || !data3 || !data4 || !data5) {
      this.nav.setRoot(AuthenticationComponent);
    } else {
      
      let userdata : any = {
        useraccesstoken : data1,
        userrefreshtoken : data2,
        useremail : data3,
        userpassword : data4
      }
      
      this.user = userdata;
      this.permissionlevel = (parseInt(JSON.parse(data5).roles))
      console.log(this.permissionlevel)
      this.master = (this.permissionlevel == 1073741824)
      console.log(this.master)
    }
  }


  initComp() {

    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');
    console.log(data1)
    console.log(data2)
    console.log(data3)
    console.log(data4)
    if (!data1 || !data2 || !data3 || !data4 || !data5) {
      return AuthenticationComponent;
    } else {
      
      let userdata : any = {
        useraccesstoken : data1,
        userrefreshtoken : data2,
        useremail : data3,
        userpassword : data4
      }
      
      this.user = userdata;
      this.permissionlevel = (parseInt(JSON.parse(data5).roles))
      console.log(this.permissionlevel)
      this.master = (this.permissionlevel == 1073741824)
      console.log(this.master)
   
      return trashslist;
    
    }}
  


  triggerLoggedOff() {
    localStorage.removeItem('useraccesstoken');
    localStorage.removeItem('userrefreshtoken');
    localStorage.removeItem('useremail');
    localStorage.removeItem('userpassword');

    this.user = null;
    this.nav.setRoot(AuthenticationComponent);
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

}
