import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';

import { ToastController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {StatPage} from '../stats/stats';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';
@Component({
  selector: 'page-testslist',
  templateUrl: 'testslist.html',
  providers: [MainServiceProvider]
})
export class testslist {
  public items: any;
  data1 : any ;
  uncompleted : any = false ;
  searchTerm: string = '';
  elements : '';
  descending: boolean = false;
  order: number;
  column: string = 'test_version';
  private timeoutId: any;
  constructor(public events: Events, public navCtrl: NavController,private mainServiceProvider: MainServiceProvider, public toastCtrl: ToastController,) {
    events.publish('app:testAuth');
    
    this.events.publish('app:showloading');
    this.loadData();
    this.events.publish('app:hideloading');
  
  }
  
  private refresh() {
    console.log(`Refresh at ${moment().format('LTS')}`);
  }

  private stopRefresh() {
    clearInterval(this.timeoutId);
  }
  private initRefresh() {
    //localStorage.removeItem('jbb-data3');
    this.refresh();
    this.timeoutId = setInterval(() => this.refresh(), 5 * 1000);
  }

  ionViewDidEnter() {
    this.initRefresh();
  }
  
  ionViewDidLeave() {
    this.stopRefresh();
  }
  manualRefresh() {
    this.stopRefresh();
    this.initRefresh();
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }
  
/////////////////////////////////////////////////////////////////////////////////// load data to testslist ///////////////////////////////////////////////////////////////////////////////// 

loadData(){
   
    this.mainServiceProvider.loadHomeData()
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
      let toast = this.toastCtrl.create({
        message:'test is deleted',
        duration: 3000 
      });
      toast.present();
      this.loadData();
    }).then((data)=>{ 
    }),(err) => {
      this.events.publish('app:hideloading');
      let toast = this.toastCtrl.create({
        message:'test not deleted',
        duration: 3000   
      });
      toast.present();
    };
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
}

