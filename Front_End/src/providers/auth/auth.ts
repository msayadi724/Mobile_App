import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import CryptoJS from 'crypto-js';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AuthProvider {

  link: any;
  Token: any;
  User_id: any;


  constructor(public http: Http, private events: Events, public toastCtrl: ToastController) {
    this.link = 'https://localhost:8443';

  }

  /////////////////////////////////////////////////////////////////////////////////// login service //////////////////////////////////////////////////////////////////////////////////////////
  login(cred) {
    let user = JSON.parse(localStorage.getItem('user'));
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let inscrit = {
      email: cred.email,
      password: hash,


    };
    console.log(inscrit)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/users/login", inscrit, { headers: headers })
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
            localStorage.setItem('useraccesstoken', JSON.stringify(data.accessToken));
            localStorage.setItem('userrefreshtoken', JSON.stringify(data.refreshToken));
            localStorage.setItem('useremail', JSON.stringify(inscrit.email));
            localStorage.setItem('userpassword', JSON.stringify(inscrit.password));
            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
            console.log(data.jwt)

          },
          error => {
            resolve(error)
            this.events.publish('app:toast', "Verify your email or password !!");
          }
        )
    })
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////////// register service ////////////////////////////////////////////////////////////////////////////////////////
  register(cred) {
    let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
    let headers = new Headers();
    let inscrit = {

      username: cred.username,
      password: hash,
      email: cred.email,
      owner_code : cred.owner_code,
      region_code : cred.region_code,
      lat: 0,
      lon: 0
    };
    headers.append('Content-Type', 'application/json');
    return new Promise(resolve => {
      this.http.post(this.link + "/users/register", inscrit, { headers: headers })
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data)
          },
          error => {
            resolve(error);

            let Data: any;
            Data = JSON.parse(error._body)
            this.events.publish('app:toast', Data.msg);
          }
        )
    })
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /////////////////////////////////////////////////////////////////////////////////// add test ////////////////////////////////////////////////////////////////////////////////////////////////  
  addtrash2(cred) {
    let data1 = localStorage.getItem('useraccesstoken');
    let data2 = localStorage.getItem('userrefreshtoken');
    let data3 = localStorage.getItem('useremail');
    let data4 = localStorage.getItem('userpassword');
    let data5 = localStorage.getItem('userjwt');

    if (data1 || data2 || data3 || data4 || data5) {

      let headers = new Headers();
      let inscrit = {
        
        trash_capacity: cred.trash_capacity,
        trash_address: cred.trash_address,
        trash_owner : cred.trash_owner,
        trash_lg: cred.trash_lg,
        trash_al: cred.trash_al,
        trash_id: cred.trash_id,
        treatment_number: 0,
        rubbish_weight: 0,
      };

      let refresh = {
        refresh_token: JSON.parse(data2),
        jwt: JSON.parse(data5)
      }


      headers.append('Content-Type', 'application/json');

      var now = Math.floor(Date.now() / 1000);



      return new Promise(resolve => {

        console.log(now)
        console.log((parseInt(JSON.parse(data5).exp)))

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


        let data1 = localStorage.getItem('useraccesstoken');
        headers.append('authorization', 'Bearer' + ' ' + data1);
        this.http.post(this.link + "/Trashs/addTrash", inscrit, { headers: headers })
          .map(res => res.json())
          .subscribe(
            data => {
              resolve(data)
              console.log(data)
            },
            error => {
              resolve(error)
              console.log(error)
              this.events.publish('app:toast', "Error while adding this Trash !!");
            }
          )
      })
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
