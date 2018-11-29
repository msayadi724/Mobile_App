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
    this.link = 'https://localhost:8443';
  }

  


////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
  loadtrashsData() {
   
    let userinfo = JSON.parse(localStorage.getItem('userinfo'));
    if(userinfo){
       let User_id = userinfo.user_id;
       let Token = userinfo.token ;
       let data ={
      user_id : User_id,
      token : Token
       }
    let link = this.link + "/Trashs/loadTrashsdata";
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
  let link = this.link + "/Trashs/deleteTrashdata";
    let userinfo = JSON.parse(localStorage.getItem('userinfo'));
     if(userinfo){
       let User_id = userinfo.user_id;
       let Token = userinfo.token ;
       let data1 ={
      user_id : User_id,
      token : Token,
      Iditem : iditem,
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

}

