import { Component ,ViewChild, ElementRef} from '@angular/core';
import { NavController, Events ,  NavParams ,Gesture, Content  } from 'ionic-angular';
import { MainServiceProvider } from '../../providers/main-service/main-service';
import {Observable} from 'rxjs/Rx';
import { ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import {testslist} from '../testslist/testslist';


@Component({
  selector: 'page-stat',
  templateUrl: 'stats.html',
  providers: [MainServiceProvider]
})
export class StatPage {



  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(100,159,177,0.2)',
      borderColor: 'rgba(100,159,177,1)',
      pointBackgroundColor: 'rgba(100,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(100,159,177,0.8)'
    }
  ];


  public lineChartColors2:Array<any> = [
   {
      backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                      ],


      borderColor:[     'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                      ],
      borderWidth : 1
      
   }];


  public lineChartLabels:Array<any> = ['Pos 1', 'Pos 2','Pos 3','Pos 4','Pos 5','Pos 6','Pos 7','Pos 8','Pos 9','Pos 10','Pos 11','Pos 12'];
  public lineChartOptions:any = {
    responsive: true 
  };
 
  public lineChartLegend:boolean = true;
  public lineChartData:Array<any> = [
    {data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'AP 1'},
    {data:[0,0,0,0,0,0,0,0,0,0,0,0], label: 'AP 2'},
    {data: [0,0,0,0,0,0,0,0,0,0,0,0], label: 'AP 3'}
  ];
  public lineChartType:string = 'line';
  


  public doughnutChartLabels:string[] = ["AP1 MAC @", 'AP2 MAC @', 'AP3 MAC @'];
  public doughnutChartData:number[] = [] ;
  public doughnutChartType:string = 'doughnut';


  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events

 public chartClicked(e:any):void {
    console.log(e);
  }
  
 public chartHovered(e:any):void {
    console.log(e);
  }
 



   AP1 : any = [0,0,0,0,0,0,0,0,0,0,0,0] ;
   AP2 : any = [0,0,0,0,0,0,0,0,0,0,0,0] ;
   AP3 : any = [0,0,0,0,0,0,0,0,0,0,0,0] ;

    count1 : any = 0 ;
    count2 : any = 0 ;
   count3 : any = 0 ;

  test_type : any;
  test_version : any;
  robot_id : any ; 
  current_pos : any=0 ;
  idtest : any ;
  ssid  : any ;

  constructor( private auth: AuthProvider,public toastCtrl: ToastController,public events: Events, public navCtrl: NavController,
    private mainServiceProvider: MainServiceProvider ,private navParams: NavParams) {

    events.publish('app:testAuth');
    let local = JSON.parse(localStorage.getItem('jbb-data1'));
    this.idtest=local.idtest;
    console.log(this.idtest);
     this.auth.gettestinfo(this.idtest).then(Data => {
      if(Data !== 'null'){
        let local1 = JSON.parse(localStorage.getItem('jbb-data2'));
        if(local1){
        this.test_type = local1.test_type;
        this.test_version = local1.test_version ;
        this.robot_id= local1.robot_id;
        this.ssid = local1.ssid;
        this.loaddata(local);
     }}
      else{
      }
    });
    
   }


   

///////////////////////////////////////////////////////////////////////////// load data ///////////////////////////////////////////////////////////////   
loaddata(local){

  if(local){

    console.log(local);

    let add1 : boolean = false ;
    let add2 : boolean = false ;
    let add3 : boolean = false ;
    let A1 : any   = "Not Associeted" ;
    let A2 : any   = "Not Associeted";
    let A3 : any   = "Not Associeted";
    

   
      
    for(let i =0 ; i<local.payload.length ; i++){
      console.log(local.payload[i].command);
     
     
    if(local.payload[i].command === "y" && !add1 && !add2 && !add3){

      add1 = !add1;
      A1 = local.payload[i].Address
      this.doughnutChartLabels[0] = "AP1 : "+A1;
    }else
    if(local.payload[i].command === "y" && !add2 && !add3 && add1 && A1 != local.payload[i].Address ){

      add2 = !add2;
      
      A2 = local.payload[i].Address
      this.doughnutChartLabels[1] = "AP2 : "+A2;
    }else
    if(local.payload[i].command === "y" && !add3 && add1 && add2 &&  A1 != local.payload[i].Address  &&  A2 != local.payload[i].Address ){

      add3 = !add3;
      A3 = local.payload[i].Address
      this.doughnutChartLabels[2] = "AP3 : "+A3;
    }

    }
   
    let l : any = 0;
    let m : any = 0;
    let n : any = 0 ;
    let j : any = 0 ;

    let pos : any ;
    
    for(let i = 0 ; i < local.payload.length ; i++){
      if(local.payload[i].command === "y" ){
        if( local.payload[i].Address === A1  )
       {
        
        this.lineChartData[0].data[l] = parseInt(local.payload[i].signal) ;
          l++;
     }else
      if( local.payload[i].Address === A2 ){
        
        this.lineChartData[1].data[m] = parseInt(local.payload[i].signal) ;
        m++;
      }else
      if( local.payload[i].Address === A3){
       
        this.lineChartData[2].data[n] = parseInt(local.payload[i].signal) ;
          n++;
      }}

      if(local.payload[i].command === "m" ){
        if( local.payload[i].Address === A1 && local.payload[i].POS != pos )
       {
        this.count1 ++ ;
       
     }else
      if( local.payload[i].Address === A2 && local.payload[i].POS != pos ){
        this.count2 ++ ;
        
      }else
      if( local.payload[i].Address === A3 && local.payload[i].POS != pos){
        this.count3 ++ ;
        
      }}
      pos = local.payload[i].POS;
   }
     this.doughnutChartData = [this.count1, this.count2, this.count3];
  }else{
    this.navCtrl.push(testslist);
  }
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  
  
 
 

 





}