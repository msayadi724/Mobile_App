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
    this.link = 'https://localhost:8443';
    
  }
  
/////////////////////////////////////////////////////////////////////////////////// login service //////////////////////////////////////////////////////////////////////////////////////////
  login(cred){
    let user = JSON.parse(localStorage.getItem('user'));
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let inscrit={
          username:cred.username,
          password:hash,
          
        };          
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/users/login", inscrit, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data);
            localStorage.setItem('userinfo', JSON.stringify(data)); 
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
          email: cred.email,
          lat : 0,
          lon : 0
        };
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/users/register", inscrit, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data) 
            },
            error=> {
              this.events.publish('app:toast',  "Connection problem !!");
            }
          )
      })
  }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////// add test ////////////////////////////////////////////////////////////////////////////////////////////////  
  addtrash2(cred){
    console.log(cred.trush_name)
    let userinfo = JSON.parse(localStorage.getItem('userinfo'));
    if(userinfo){
    console.log(userinfo)
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
      user_id :userinfo.user_id,
      token : userinfo.token,
        
        };   
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/Trashs/addTrash", inscrit, {headers: headers})
          .map(res => res.json())
          .subscribe(
            data => {resolve(data)
            console.log(data)
            },
            error=> {
              this.events.publish('app:toast', JSON.parse(error._body).message);
            }
          )
      })}
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
