import { Component } from '@angular/core';
import { NavController, Events,AlertController } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';

import { ToastController } from 'ionic-angular';
import { userinfo } from '../userinfo/userinfo';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';
@Component({
  selector: 'page-userslist',
  templateUrl: 'userslist.html',
  providers: [MainServiceProvider]
})
export class userslist {
  public items: any;
  data1 : any ;
  uncompleted : any = false ;
  searchTerm: string = '';
  elements : '';
  descending: boolean = false;
  order: number;
  column: string = 'test_version';
  private timeoutId: any;
  constructor(private alertCtrl: AlertController ,public events: Events, public navCtrl: NavController,private mainServiceProvider: MainServiceProvider, public toastCtrl: ToastController,) {
    events.publish('app:testAuth');
    
    this.events.publish('app:showloading');
    this.loadData();
    this.events.publish('app:hideloading');
  
  }
  
  
  
/////////////////////////////////////////////////////////////////////////////////// load data to testslist ///////////////////////////////////////////////////////////////////////////////// 

loadData(){
   
    this.mainServiceProvider.loadusersData()
    .then(data => {
      console.log(data)
      this.items = data;
      
    }),(err) => {
          console.log("Erreur");
    };
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////// delete a test in the testslist ///////////////////////////////////////////////////////////////////////////
  deleteuser(iditem){
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do You Want Delete This User ??',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            
           
            this.events.publish('app:showloading');
            
            console.log(iditem);
            this.mainServiceProvider.deleteuser(iditem)
            .then(data => {
              this.events.publish('app:hideloading');
              
              this.loadData();
            }),(err) => {
              this.events.publish('app:hideloading');
              

           }
          
          }
          
        },
        {
          text: 'No',
          handler: () => {
            
           
            
          
          }
          
        }
      ]
    });
    alert.present();}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  


////////////////////////////////////////////////////////////////////////////////// delete a test in the testslist ///////////////////////////////////////////////////////////////////////////
getuserinfos(item){
  this.navCtrl.push(userinfo , {item : item});
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  



  }
 
 




