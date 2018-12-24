import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';

import { ToastController } from 'ionic-angular';
import { trashinfo } from '../trashinfo/trashinfo';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';
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
  constructor(public events: Events, public navCtrl: NavController,private mainServiceProvider: MainServiceProvider, public toastCtrl: ToastController,) {
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

gettrashinfos(item){
  this.navCtrl.push(trashinfo , {item : item});
  }


  gotomap(item){

    
  }
  }
 
 




