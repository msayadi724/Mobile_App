import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ControleProvider } from '../../providers/controle/controle';
import { ToastController } from 'ionic-angular';
import { AuthenticationComponent } from '../authentication/authentication';
import { SplashPage } from '../../pages/splash/splash';
import { Events } from 'ionic-angular';



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
    private controle: ControleProvider,
    public alertCrtl: AlertController,
    public toastCtrl: ToastController,
    private events: Events

  ) { }


  Register(FormRegister) {


    var confpswd = this.controle.ctrpassword(FormRegister.password, FormRegister.confirmepassword);
    if (confpswd === "false") {
      this.events.publish('app:toast', "Verify your password");
    }

    else {
      var dataregister = {
        username: FormRegister.username,
        password: FormRegister.password,
        email: FormRegister.email,
        owner_code : FormRegister.owner_code,
        region_code : FormRegister.region_code,

      }

      this.auth.register(dataregister).then(data => {

        if (data !== 'null') {
          this.events.publish('app:toast', "Your account has been successfully created");
          this.navCtrl.push(AuthenticationComponent);
        }
        else {
          FormRegister.username = '';
          FormRegister.password = '';
          FormRegister.email = '';
          FormRegister.confirmepassword = '';
          FormRegister.owner_code = '';
          FormRegister.region_code = '';
          this.events.publish('app:toast', "Please fill in all the fields");
        }
      });
    }
  }
  
  skip() {
    this.navCtrl.push(SplashPage);
  }


  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

}
