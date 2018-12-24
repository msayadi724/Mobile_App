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
   
    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');
    if (data1 || data2 || data3 || data4 || data5) {
      
    let link = this.link + "/Trashs/loadTrashsdata";

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      
      let refresh = {
        refresh_token: JSON.parse(data2),
        jwt: JSON.parse(data5)
      }
      var now = Math.floor(Date.now() / 1000);
      if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {


        this.http.post(this.link  + "/auth/refresh", refresh, { headers: headers })
          .map(res => res.json())
          .subscribe(
            data => {
              resolve(data)
              console.log(data)
              if (data.changed == true) {
                localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                localStorage.setItem('userjwt', JSON.stringify(data.jwt));

              }

            },
            error => {
              resolve(error)
              console.log(error)

            }
          )
      }
      headers.append('authorization', 'Bearer'+' '+data1);
      console.log(headers)
      this.http.get(link,  {headers: headers})
        .map(res => res.json())
        .subscribe(data => {

          
            resolve(data.result);
           
                  
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
  let data1 = localStorage.getItem('useraccesstoken');
  let data2 = localStorage.getItem('userrefreshtoken');
  let data3 = localStorage.getItem('useremail');
  let data4 = localStorage.getItem('userpassword');
  let data5 = localStorage.getItem('userjwt');
  if (data1 || data2 || data3 || data4 || data5) {
       let TrashInfo ={
      
      Iditem : iditem,
       }
       console.log(TrashInfo)
       return new Promise(resolve => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        

        let refresh = {
          refresh_token: JSON.parse(data2),
          jwt: JSON.parse(data5)
        }
        var now = Math.floor(Date.now() / 1000);
        if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
  
  
          this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
            .map(res => res.json())
            .subscribe(
              data => {
                resolve(data)
                console.log(data)
                if (data.changed == true) {
                  localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                  localStorage.setItem('userjwt', JSON.stringify(data.jwt));
  
                }
  
              },
              error => {
                resolve(error)
                console.log(error)
  
              }
            )
        }
        headers.append('authorization', 'Bearer'+' '+data1);
        this.http.post(link , TrashInfo,  {headers: headers})
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



////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
loadusersData() {
   
  let data1 = localStorage.getItem('useraccesstoken');
  let data2 = localStorage.getItem('userrefreshtoken');
  let data3 = localStorage.getItem('useremail');
  let data4 = localStorage.getItem('userpassword');
  let data5 = localStorage.getItem('userjwt');

  if (data1 || data2 || data3 || data4 || data5) {
    
  let link = this.link +"/users" ;

  return new Promise(resolve => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    let refresh = {
      refresh_token: JSON.parse(data2),
      jwt: JSON.parse(data5)
    }
    var now = Math.floor(Date.now() / 1000);
    if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {


      this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data)
            console.log(data)
            if (data.changed == true) {
              localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
              localStorage.setItem('userjwt', JSON.stringify(data.jwt));

            }

          },
          error => {
            resolve(error)
            console.log(error)

          }
        )
    }
    headers.append('authorization', 'Bearer'+' '+data1);
    console.log(headers)
    this.http.get(link ,  {headers: headers})
      .map(res => res.json())
      .subscribe(data => {

        
          resolve(data);
          return  data 
          
                 
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
deleteuser(iduser){
  let link = this.link + "/users/";
  let data1 = localStorage.getItem('useraccesstoken');
  let data2 = localStorage.getItem('userrefreshtoken');
  let data3 = localStorage.getItem('useremail');
  let data4 = localStorage.getItem('userpassword');
  let data5 = localStorage.getItem('userjwt');
  if (data1 || data2 || data3 || data4 || data5) {
       
      
       return new Promise(resolve => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        

        let refresh = {
          refresh_token: JSON.parse(data2),
          jwt: JSON.parse(data5)
        }
        var now = Math.floor(Date.now() / 1000);
        if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
  
  
          this.http.post(this.link + "/auth/refresh", refresh, { headers: headers })
            .map(res => res.json())
            .subscribe(
              data => {
                resolve(data)
                console.log(data)
                if (data.changed == true) {
                  localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                  localStorage.setItem('userjwt', JSON.stringify(data.jwt));
  
                }
  
              },
              error => {
                resolve(error)
                console.log(error)
  
              }
            )
        }
        headers.append('authorization', 'Bearer'+' '+data1);
        console.log(link )
        this.http.delete(link + iduser ,  {headers: headers})
          .map(res => res.json())
          .subscribe(data => {
              resolve(data); 
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

