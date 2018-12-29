import { Component } from '@angular/core';
import { NavController, Events,AlertController } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';

import { ToastController } from 'ionic-angular';
import { trashinfo } from '../trashinfo/trashinfo';
import { HomePage} from '../viewmap/viewmap';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-trashslist',
  templateUrl: 'trashslist.html',
  providers: [MainServiceProvider]
})
export class trashslist {
  public items: any;
  data1 : any ;
  uncompleted : any = false ;
  searchTerm: string = '';
  elements : '';
  descending: boolean = false;
  order: number;
  column: string = 'test_version';
  private timeoutId: any;
  permissionlevel : any ;
  master : boolean = false;


  location: {
    latitude: number,
    longitude: number
  };
  constructor(private alertCtrl: AlertController , public events: Events, public navCtrl: NavController,private mainServiceProvider: MainServiceProvider, public toastCtrl: ToastController,
     public geolocation: Geolocation) {
    events.publish('app:testAuth');
    let data5 = localStorage.getItem('userjwt');

    if(data5){

      this.permissionlevel = (parseInt(JSON.parse(data5).roles))
      console.log( this.permissionlevel)
      console.log(typeof this.permissionlevel)
      this.master = (this.permissionlevel == 1073741824)

    }
    
    this.events.publish('app:showloading');
    this.loadData();
    this.events.publish('app:hideloading');
  
  }
  
  

  private refresh() {
   
        this.loadData();
        this.findUserLocation();
       
    
  }
  private stopRefresh() {
    clearInterval(this.timeoutId);
  }
  private initRefresh() {
    this.refresh();
    this.timeoutId = setInterval(() => this.refresh(), 1 * 1000);
  }

  ionViewDidEnter() {
    this.initRefresh();
  }
  
  ionViewDidLeave() {
    this.stopRefresh();
  }



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ionViewDidLoad() {
          console.log('eeeeeeeeeeeeeeee')
          this.findUserLocation();
        }

findUserLocation(){
  let options = {
    enableHighAccuracy: true,
    timeout: 25000
  };
  this.geolocation.getCurrentPosition(options).then((position) => {
 
    this.location = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    };
   console.log(this.location)
   }).catch((error) => {
     console.log('Error getting location', error);
   });
}



/////////////////////////////////////////////////////////////////////////////////// load data to testslist ///////////////////////////////////////////////////////////////////////////////// 

loadData(){
   
    this.mainServiceProvider.loadtrashsData()
    .then(data => {
      this.items = data;
      console.log(typeof data);
      console.log( data);
    }).then((data)=>{
        
    }),(err) => {
          console.log("Erreur");
    };
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////// delete a test in the testslist ///////////////////////////////////////////////////////////////////////////
  delete(iditem){
    let alert = this.alertCtrl.create({
      title: 'Confirmation',
      message: 'Do You Want Delete This Trash ??',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            
            this.events.publish('app:showloading');
    
            console.log(iditem);
            this.mainServiceProvider.delete(iditem)
            .then(data => {
              this.events.publish('app:hideloading');
              
              this.loadData();
            }).then((data)=>{ 
            }),(err) => {
              this.events.publish('app:hideloading');
              
             
            };

           }
          
        },
        {
          text: 'No',
          handler: () => {
            
           
            
          
          }
          
        }
      ]
    });
    alert.present();
   
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

gettrashinfos(item){
  this.navCtrl.push(trashinfo , {item : item});
  }


  gotomap(item){
    this.navCtrl.push(HomePage, {item : item});
    
  }
  }
 
 




