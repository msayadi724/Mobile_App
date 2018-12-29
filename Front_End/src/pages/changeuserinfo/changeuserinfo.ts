import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
//import { HomePage } from '../../pages/home/home';
//import { NavController,Events } from 'ionic-angular';
import { NavController, AlertController, Events , NavParams } from 'ionic-angular';
import { userinfo } from '../userinfo/userinfo';

import { userslist } from '../userslist/userslist';
import { MainServiceProvider } from '../../providers/main-service/main-service';

import { ControleProvider } from '../../providers/controle/controle';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AuthenticationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({

    templateUrl: 'changeuserinfo.html'
})
export class changeuserinfo {

    constructor(public events: Events, public navCtrl: NavController,
        private auth: AuthProvider,
        private controle: ControleProvider,
        public alertCrtl: AlertController,
        public toastCtrl: ToastController,
        public navParams: NavParams,
        private mainServiceProvider: MainServiceProvider
    ) {
console.log(this.navParams.get('iduser'))
        events.publish('app:testAuth')
    }

    updateuser(data) {
        var permission ;
        if(data.permissionlevel == "surfer"){
            permission = 1
        }else{
            permission = 1073741824
        }
        var dataregister= {
            permissionLevel : permission,
            owner_code : data.owner_code,
            region_code : data.region_code,
            user_id : this.navParams.get('iduser')
            
            }

            console.log(dataregister) ;
            
            this.mainServiceProvider.updateuser(dataregister).then(Data => {
              
            
                
              data.permissionlevel='';
              data.owner_code='';
              data.region_code='';
              
                this.navCtrl.push(userslist);
                
           
            
            });


    }
    gotouserinfo() {

        this.navCtrl.push(userslist);


    }





}






