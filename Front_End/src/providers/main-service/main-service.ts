import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the MainServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class MainServiceProvider {
  link: any;
  items : any;
  com : any = false ;

  constructor(public http: Http, private events: Events) {
    this.link = 'https://glacial-headland-60557.herokuapp.com/api';
  }

  


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
  loadHomeData() {
   
    let local = JSON.parse(localStorage.getItem('jbb-data'));
    if(local){
       let User_id = local.user_id;
       let Token = local.token ;
       let data ={
      user_id : User_id,
      token : Token,
      Salt : local.Salt 
       }
    let link = this.link + "/getFakeData";
    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post(link, data,  {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
            resolve(data.result);
           
            this.items=data.result;       
          }
          ,(err)=>{
            this.events.publish('app:hideloading');
            this.events.publish('app:toast', "Error while trying to load data");
          }
        );
    });}
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    
/////////////////////////////////////////////////////////////////////////////// delete service ////////////////////////////////////////////////////////////////////////////////////////////////
delete(iditem){
  let link = this.link + "/deletedata";
    let local = JSON.parse(localStorage.getItem('jbb-data'));
     if(local){
       let User_id = local.user_id;
       let Token = local.token ;
       let data1 ={
      user_id : User_id,
      token : Token,
      Iditem : iditem,
      Salt : local.Salt
       }
       return new Promise(resolve => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post(link, data1,  {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
              resolve(data.msg); 
          }
            ,(err)=>{
              this.events.publish('app:hideloading');
              this.events.publish('app:toast', "Error while trying to fetch data");
            }
          );
      });}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////  load data to dashboard ///////////////////////////////////////////////////////////////////////////////////////
loadHomeData2(iditem) {
  localStorage.setItem('jbb-data3',iditem);
  let local = JSON.parse(localStorage.getItem('jbb-data'));
  if(local){
     let User_id = local.user_id;
     let Token = local.token ;
     let data ={
    user_id : User_id,
    token : Token,
    Iditem :iditem,
    Salt : local.Salt
     }
  let link = this.link + "/dashboarddata";
  return new Promise(resolve => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(link, data,  {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
          resolve(data.result);
          localStorage.setItem('jbb-data1', JSON.stringify(data.result));
          let local = JSON.parse(localStorage.getItem('jbb-data1'));
          console.log(local);    
        }
        ,(err)=>{
          this.events.publish('app:hideloading');

          this.events.publish('app:toast', "Error while trying to load data");
          
        }
      );
  });}
  }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

}

