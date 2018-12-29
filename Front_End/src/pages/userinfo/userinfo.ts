import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';

import { NavController, AlertController ,  Events , NavParams } from 'ionic-angular';
import { changeuserinfo } from '../changeuserinfo/changeuserinfo';


import { ControleProvider } from '../../providers/controle/controle';
import { ToastController } from 'ionic-angular';


@Component({
  
  templateUrl: 'userinfo.html'
})
export class userinfo {
    
  private item : any ;

  constructor(public events: Events, public navCtrl: NavController,
    private auth: AuthProvider,
    private controle : ControleProvider,
    public alertCrtl: AlertController,
    public toastCtrl: ToastController,
    public navParams: NavParams
      ) {
        events.publish('app:testAuth');

        this.item = this.navParams.get('item')
        
        console.log(this.item)
        
  }

  gotochangeinfo(iduser){

    this.navCtrl.push( changeuserinfo , {iduser : iduser , user : this.item});
  }
      


      }


   

  

