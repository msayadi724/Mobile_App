import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { HomePage } from '../home/home';
//import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
//import { Auth } from '../../providers/auth/auth';
import { ControleProvider } from '../../providers/controle/controle';
import { ToastController } from 'ionic-angular';
import { AuthenticationComponent } from '../authentication/authentication';
import { SplashPage } from '../../pages/splash/splash';
//import { CreateroomPage } from '../createroom/createroom';

//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
/*
  Generated class for the Login page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class signup {
 msgerr: string;
 lat: number;
 lon: number;
  
  constructor(
    public navCtrl: NavController,
    private auth: AuthProvider,
    private controle : ControleProvider,
    public alertCrtl: AlertController,
    public toastCtrl: ToastController,
     
  ) {}

    
  Register(FormRegister){
      

    var confpswd= this.controle.ctrpassword(FormRegister.password, FormRegister.confirmepassword);
    if(confpswd === "false"){
      let toast = this.toastCtrl.create({
      message:  'Incorrect password confirmation',
      duration: 3000
    }); 
    toast.present();

    }

else{
  console.log(FormRegister);
var dataregister= {
username:FormRegister.username,
password: FormRegister.password,
email: FormRegister.email,

}

this.auth.register(dataregister).then(data => {
  
  if(data !== 'null'){
    //var dataname=data.result 
    let toast = this.toastCtrl.create({
    message: 'Your account has been successfully created',
    duration: 3000
  });
  toast.present();
  
    this.navCtrl.push(AuthenticationComponent, data);
 
  }
  else{

    FormRegister.username='';
    FormRegister.password='';
    FormRegister.email='';
    FormRegister.confirmepassword='';
    //this.msgerr= data.msg;
    let toast = this.toastCtrl.create({
    message:'Please fill in all the fields',
    duration: 3000
    
  });

  toast.present();
  this.navCtrl.push(AuthenticationComponent, dataregister);
  }
});
}}
skip() {
  this.navCtrl.push(SplashPage);
}


    ionViewDidLoad() {
      console.log('Hello LoginPage Page');
    }

}
