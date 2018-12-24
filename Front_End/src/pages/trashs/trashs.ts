import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
//import { HomePage } from '../../pages/home/home';
//import { NavController,Events } from 'ionic-angular';
import { NavController, AlertController ,  Events } from 'ionic-angular';


import { ControleProvider } from '../../providers/controle/controle';
import { ToastController } from 'ionic-angular';
import { trashslist } from '../trashslist/trashslist';
/**
 * Generated class for the AuthenticationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  
  templateUrl: 'trashs.html'
})
export class trashs {
    
  constructor(public events: Events, public navCtrl: NavController,
    private auth: AuthProvider,
    private controle : ControleProvider,
    public alertCrtl: AlertController,
    public toastCtrl: ToastController,
      ) {
        events.publish('app:testAuth');
    
  }

  addtrash(data){

    
    var dataregister= {
      
      trash_capacity : data.trash_capacity,
      trash_address : data.trash_address,
      trash_owner : data.trash_owner,
      trash_lg : data.trash_lg,
      trash_al : data.trash_al,
      trash_id : data.trash_id,
      treatment_number : 0,
      rubbish_weight : 0,
        
        
        }

        console.log(dataregister)
        
        this.auth.addtrash2(dataregister).then( Data => {
          
          if(Data !== 'null'){
          
            
          
          data.trash_capacity='';
          data.trash_address='';
          data.trash_id='';
          data.trash_owner='';
          data.trash_al='';
          data.trash_lg='';
            this.navCtrl.push(trashslist);
            
         }
          else{
            //this.msgerr= data.msg;
            this.events.publish('app:toast', "There is a problem while adding this trash !!!");
            
          
          }
        });
        }
        gototrushlist(){

          this.navCtrl.push(trashslist);


        }
      
      
      


      }


   

  

