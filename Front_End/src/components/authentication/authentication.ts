import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController, Events } from 'ionic-angular';
import { signup } from '../signup/signup';
import { trashs } from '../../pages/trashs/trashs';


@Component({
  selector: 'authentication',
  templateUrl: 'authentication.html'
})
export class AuthenticationComponent {
  public data: any;
  public checkpassword: boolean;

  constructor(public navCtrl: NavController, private authprovider: AuthProvider, private events: Events) {
    this.data = {
      email: '',
      password: ''
    }
  }

  signin() {
    this.authprovider.login(this.data)
      .then(
        Data => {
          this.handleLoginSuccess();
        }
      ).catch(() => {

        this.data.email = '';
        this.data.password = '';

      }
      )
  }

  handleLoginSuccess() { 
    this.events.publish('app:setUser');   
  }
  checkLoginDisable() {
    if (this.data.email.length == 0 || this.data.password.length == 0) {
      return false;
    }
    return true;
  }
  signup() {
    this.navCtrl.push(signup);

  }
}


