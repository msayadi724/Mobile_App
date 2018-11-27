import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
//import { HomePage } from '../../pages/home/home';
//import { NavController,Events } from 'ionic-angular';
import { NavController, AlertController ,  Events } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { ControleProvider } from '../../providers/controle/controle';
import { ToastController } from 'ionic-angular';
import { testslist } from '../testslist/testslist';
/**
 * Generated class for the AuthenticationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  
  templateUrl: 'tests.html'
})
export class tests {
    
  constructor(public events: Events, public navCtrl: NavController,
    private auth: AuthProvider,
    private controle : ControleProvider,
    public alertCrtl: AlertController,
    public toastCtrl: ToastController,
      ) {
        localStorage.removeItem('jbb-data3');
        events.publish('app:testAuth');
    
  }

  addtest(data){

    
    var dataregister= {
      trush_name : data.trush_name,
      trush_capacity : data.trush_capacity,
      trush_address : data.trush_address,
      trush_lg : 0,
      trush_al : 0,
      trush_id : data.trush_id,
      treatment_number : 0,
      rubbish_weight : 0,
        
        
        }
        
        this.auth.addtest(dataregister).then(Data => {
          
          if(Data !== 'null'){
            //var dataname=data.result 
            let toast = this.toastCtrl.create({
            message: 'trush has been successfully added',
            duration: 3000
          });
          toast.present();
          data.trush_name='';
          data.trush_capacity='';
          data.trush_address='';
          data.trush_id='';
         
            this.navCtrl.push(testslist);
            
         }
          else{
            //this.msgerr= data.msg;
            let toast = this.toastCtrl.create({
            message:'There is a problem while adding this trush !!!',
            duration: 3000
            
          });
        
          toast.present();
          
          }
        });
        }
        gototrushlist(){

          this.navCtrl.push(testslist);


        }
      
      
      


      }


   

  

