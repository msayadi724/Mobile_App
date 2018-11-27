import { Component } from '@angular/core';
import { NavController, Events ,  NavParams  } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';
import {Observable} from 'rxjs/Rx';
import { ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {testslist} from '../testslist/testslist';
import { ImageViewerController } from 'ionic-img-viewer';
import * as moment from 'moment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MainServiceProvider]
})
export class HomePage {
  public timeLeft: number = 0;
  _imageViewerCtrl: ImageViewerController;
   date : any ;
   private timeoutId: any;
   visited1 : any = null ;
   rssi1 : any = null ;
   r1 : any = null;
   f1 : any = null;
   a1 : any = null;
   visited2 : any = null;
   rssi2 : any = null;
   r2 : any = null;
   f2 : any = null;
   a2 : any = null;
   visited3 : any = null;
   rssi3 : any = null;
   r3 : any = null;
   f3 : any = null;
   a3 : any = null;
   visited4 : any = null;
   rssi4 : any = null;
   r4 : any = null;
   f4 : any = null;
   a4 : any = null;
   visited5 : any = null;
   rssi5 : any = null; 
   r5 : any = null;
   f5 : any = null;
   a5 : any = null;
   visited6 : any = null;
   rssi6 : any = null;
   r6 : any = null;
   f6 : any = null;
   a6 : any = null;
   visited7 : any = null;
   rssi7 : any = null;
   r7 : any = null;
   f7 : any = null;
   a7 : any = null;
   visited8 : any = null;
   rssi8 : any = null;
   r8 : any = null;
   f8 : any = null;
   a8 : any = null;
   visited9 : any = null;
   rssi9 : any = null;
   r9 : any = null;
   f9 : any = null;
   a9 : any = null;
   visited10 : any= null ;
   rssi10 : any = null;
   r10 : any = null;
   f10 : any = null;
   a10 : any = null;
   visited11 : any = null;
   rssi11 : any = null;
   r11 : any = null;
   f11 : any = null;
   a11 : any = null;
   visited12 : any = null;
   rssi12 : any = null;
   r12 : any = null;
   f12 : any = null;
   a12 : any = null;
 
  
   updated : boolean = false ;
   local1 : any ;
   day : any =0 ;
   min : any = 0;
   hours : any = 0;
   dayf : any =0 ;
   minf : any =0 ;
   hoursf : any =0 ;
   today : any ;
   test_type : any;
   test_version : any;
   robot_id : any ; 
   current_pos : any=0 ;
   test_finished : any = "no" ;
   idtest : any ;
   ssid  : any ;
   finished : any ;



  constructor( private auth: AuthProvider,public toastCtrl: ToastController,public events: Events, 
    public navCtrl: NavController,private mainServiceProvider: MainServiceProvider ,private navParams: NavParams ,imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    events.publish('app:testAuth');
    localStorage.removeItem('jbb-data2');
   
    let local = JSON.parse(localStorage.getItem('jbb-data1'));
    if(local){
    console.log(local)
      this.today = Date.now();
      this.idtest=local.idtest;
     this.auth.gettestinfo(this.idtest).then(Data => {
      if(Data !== 'null'){
        this.local1 = JSON.parse(localStorage.getItem('jbb-data2'));
        console.log(this.local1);
        if(this.local1){
        this.test_type = this.local1.test_type;
        this.test_version = this.local1.test_version ;
        this.robot_id= this.local1.robot_id;
        this.ssid = this.local1.ssid;
        this.finished = this.local1.finished;
        this.minf = this.local1.seconds;
        this.hoursf = this.local1.mins;
        this.dayf = this.local1.hours
     }
        this.loadData(local);
     }
      else{}
    });
    
    var timer = setInterval(() => {
   
      if(this.local1){
      if(this.current_pos != 12 && this.local1.finished != "Yes") {
        this.timeLeft +=  1;
        if(this.timeLeft == 60)
        {
           this.min += 1;
           this.timeLeft = 0 ;
        }else
        if(this.min == 60){
          this.hours += 1 ;
          this.min = 0 ;
        }else
        if(this.hours == 60 )
        {
          this.day += 1 ;
          this.hours = 0 ;
        }
       
      } else {
        clearInterval(timer);
        
      }}
     }, 2000);
          console.log("current position "+this.current_pos);
}
  else{
    this.navCtrl.push(testslist);
  }
  }


  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }




  private refresh() {
    console.log(this.minf)

    let iditem = localStorage.getItem('jbb-data3')
   
    this.mainServiceProvider.loadHomeData2(iditem)
    .then(data => {
      let local = JSON.parse(localStorage.getItem('jbb-data1'));
      if(local){
        this.loadData(local);
      }else{
        
      }
    }).then((data)=>{        
    }),(err) => {
    
    };
    
    console.log(`Refresh at ${moment().format('LTS')}`);
    
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
  manualRefresh() {
    this.stopRefresh();
    this.initRefresh();
  }



  loadData(local){
    
    console.log(local)
   
    
    for(let i = 0 ; i < local.payload.length ; i++){
  if(local.payload[i]){
    console.log(local.payload[i])
   if( local.payload[i].command === "m" && local.payload[i].POS === "1"){
    this.visited1 = 1 ;
    this.current_pos = 1;
    this.rssi1 = local.payload[i].signal ;
    this.r1 = local.payload[i].Rates;
    this.f1 = local.payload[i].Frequency ;
    this.a1 = local.payload[i].Address ;

    //break;
   
   }
   
   
  
    if( local.payload[i].command === "m" && local.payload[i].POS === "2"){
    this.visited2 = 1 ;
    this.current_pos = 2;
    this.rssi2 = local.payload[i].signal ;
    this.r2 = local.payload[i].Rates;
    this.f2 = local.payload[i].Frequency ;
    this.a2 = local.payload[i].Address ;
    //break;
   }
  
    
    if(local.payload[i].command === "m" && local.payload[i].POS === "3"){
    this.visited3 = 1 ;
    this.current_pos = 3;
    this.rssi3 = local.payload[i].signal ;
    this.r3 = local.payload[i].Rates;
    this.f3 = local.payload[i].Frequency ;
    this.a3 = local.payload[i].Address ;
   // break;
   }
    
    if(local.payload[i].command === "m" && local.payload[i].POS === "4"){
    this.visited4 = 1 ;
    this.current_pos = 4;
    this.rssi4 = local.payload[i].signal ;
    this.r4 = local.payload[i].Rates;
    this.f4 = local.payload[i].Frequency ;
    this.a4 = local.payload[i].Address ;
   // break;
   }
 
    if( local.payload[i].command === "m" && local.payload[i].POS === "5"){
    this.visited5 = 1 ;
    this.current_pos = 5;
    this.rssi5 = local.payload[i].signal ;
    this.r5 = local.payload[i].Rates;
    this.f5 = local.payload[i].Frequency ;
    this.a5 = local.payload[i].Address ;
   // break;
   }
    
    if(local.payload[i].command === "m" && local.payload[i].POS === "6"){
    this.visited6 = 1 ;
    this.current_pos = 6;
    this.rssi6 = local.payload[i].signal ;
    this.r6 = local.payload[i].Rates;
    this.f6 = local.payload[i].Frequency ;
    this.a6 = local.payload[i].Address ;
    //break;
   }
    
    if( local.payload[i].command === "m" && local.payload[i].POS === "7"){
    this.visited7 = 1 ;
    this.current_pos = 7;
    this.rssi7 = local.payload[i].signal ;
    this.r7 = local.payload[i].Rates;
    this.f7 = local.payload[i].Frequency ;
    this.a7 = local.payload[i].Address ;
   // break;
   }
   
    
    if(local.payload[i].command === "m" && local.payload[i].POS === "8"){
    this.visited8 = 1 ;
    this.current_pos = 8;
    this.rssi8 = local.payload[i].signal ;
    this.r8 = local.payload[i].Rates;
    this.f8 = local.payload[i].Frequency ;
    this.a8 = local.payload[i].Address ;
    //break;
   }
   
   
    if(local.payload[i].command === "m" && local.payload[i].POS === "9"){
    this.visited9 = 1 ;
    this.current_pos = 9;
    this.rssi9 = local.payload[i].signal ;
    this.r9 = local.payload[i].Rates;
    this.f9 = local.payload[i].Frequency ;
    this.a9 = local.payload[i].Address ;
    //break;
   }
  
   
    if(local.payload[i].command === "m" && local.payload[i].POS === "10"){
    this.visited10 = 1 ;
    this.current_pos = 10;
    this.rssi10 = local.payload[i].signal ;
    this.r10 = local.payload[i].Rates;
    this.f10 = local.payload[i].Frequency ;
    this.a10 = local.payload[i].Address ;
   // break;
   }
   
   
    if(local.payload[i].command === "m" && local.payload[i].POS === "11"){
    this.visited11 = 1 ;
    this.current_pos = 11;
    this.rssi11 = local.payload[i].signal ;
    this.r11 = local.payload[i].Rates;
    this.f11 = local.payload[i].Frequency ;
    this.a11 = local.payload[i].Address ;
   //break;
   }
   
    if(local.payload[i].command === "m" && local.payload[i].POS === "12"){
    
    this.visited12 = 1 ;
    this.current_pos = 12;
    this.rssi12 = local.payload[i].signal ;
    this.r12 = local.payload[i].Rates;
    this.f12 = local.payload[i].Frequency ;
    this.a12 = local.payload[i].Address ;
    //break;
   }}}
   

   this.auth.gettestinfo(this.idtest).then(Data => {
    if(Data !== 'null'){
      this.local1 = JSON.parse(localStorage.getItem('jbb-data2'));
      console.log(this.local1);
   }
    else{}
  });
 
   if(this.local1){
   if( this.local1.finished === "No" && this.visited12 && !this.updated){

        this.minf = this.timeLeft ;
        this.hoursf = this.min ;
        this.dayf = this.hours;

        console.log(this.local1)
        console.log(this.updated)
        console.log(this.local1.finished)
        console.log(this.visited12)
        console.log(this.timeLeft);
          
        console.log(this.current_pos);
        console.log('hhhhhhhhhhhhhhhh');
      
    var dataregister= {
  test_version : this.local1.test_version,
  robot_id: this.local1.robot_id,
  test_type: this.local1.test_type,
  ssid: this.local1.ssid,
  password: this.local1.password,
  finished : "Yes",
  seconds : this.minf,
  mins : this.hoursf,
  hours : this.dayf ,
  idtest : this.idtest     
  }
  console.log(this.local1)
  console.log(this.updated)
  console.log(this.local1.finished)
  console.log(this.visited12)
  console.log(this.timeLeft);
    
  console.log(this.current_pos);
  console.log('hhhhhhhhhhhhhhhh');
  console.log(dataregister);
  this.updated = true ;
  this.auth.updatetest(dataregister).then(Data => {
      
    
  });}}else{
  }


  
    


     }


    
}
