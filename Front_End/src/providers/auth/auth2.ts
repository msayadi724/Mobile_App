import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {  Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  
  link: any;
  Token: any ;
  User_id : any;

  
  //token = this.local.token;
  //User_id = this.local.user_id;

  
  constructor(public http: Http, private events: Events,public toastCtrl: ToastController) {
    this.link = 'https://glacial-headland-60557.herokuapp.com/auth';
    
  }
  
/////////////////////////////////////////////////////////////////////////////////// login service //////////////////////////////////////////////////////////////////////////////////////////
  login(cred){
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let inscrit={
          username:cred.username,
          password:hash,
        };          
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/login", inscrit, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data);
            console.log(data);},
            error=> {
              this.events.publish('app:toast', "Connection problem !!");
            }
          )
      })
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////// register service ////////////////////////////////////////////////////////////////////////////////////////
  register(cred){
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let headers = new Headers();
    let inscrit={
      //token: this.Token,
          username:cred.username,
          password:hash,
          email: cred.email};
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/register", inscrit, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data)},
            error=> {
              this.events.publish('app:toast',  "Connection problem !!");
            }
          )
      })
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////// add test ////////////////////////////////////////////////////////////////////////////////////////////////  
  addtest(cred){
    let local = JSON.parse(localStorage.getItem('jbb-data'));
    if(local){
      this.User_id = local.user_id;
    let headers = new Headers();
    let inscrit={
      trush_name: cred.trush_name,
      trush_capacity: cred.trush_capacity,
      trush_address: cred.trush_address,
      trush_lg: 0,
      trush_al: 0,
      trush_id : cred.trush_id,
      treatment_number : 0,
      rubbish_weight : 0,
      user_id : this.User_id,
      Salt : local.Salt ,
      token : local.token
        
        };   
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/addTrash", inscrit, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data)},
            error=> {
              this.events.publish('app:toast', JSON.parse(error._body).message);
            }
          )
      })}
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
updatetest(cred){
  let local = JSON.parse(localStorage.getItem('jbb-data'));
  if(local){
    this.User_id = local.user_id;
  let headers = new Headers();
  let inscrit={
        test_version :cred.test_version,
        robot_id : cred.robot_id,
        test_type: cred.test_type,
        ssid : cred.ssid,
        password : cred.password,
        finished : cred.finished,
        seconds : cred.seconds,
        mins : cred.mins,
        hours : cred.hours,
        user_id : this.User_id,
        token  : local.token,
        Salt : local.Salt,
        idtest : cred.idtest
      };   
  headers.append('Content-Type', 'application/json');
  return new Promise(resolve => {
    this.http.post(this.link + "/updatetest", inscrit, {headers: headers})
        .subscribe(
          data => {if(data){
         
           
          this.events.publish('app:alerte',"Test Updated","Your test has been successfully updated","1");
                  
         }
          
           
          },
          error=> {
              
            this.events.publish('app:alerte',"Test Not Updated","There is a problem while updating this test !!!","1");
            
            
          }
        )
    })}
}

/////////////////////////////////////////////////////////////////////////////////////// get test info /////////////////////////////////////////////////////////////////////////////////////////  
  gettestinfo(idtest){
    //let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let local = JSON.parse(localStorage.getItem('jbb-data'));
    if(local){
       let User_id = local.user_id;
       let Token = local.token ;
       let data ={
      user_id : User_id,
      token : Token,
      idtest :idtest,
      Salt : local.Salt
       }
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/gettestinfo", data, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data.result);
              localStorage.setItem('jbb-data2', JSON.stringify(data.result));   
            },
            error=> {
              this.events.publish('app:toast', JSON.parse(error._body).message);
            }
          )
      })
  }}
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
