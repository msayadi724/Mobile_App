webpackJsonp([1],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trashslist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trashinfo_trashinfo__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var trashslist = (function () {
    function trashslist(events, navCtrl, mainServiceProvider, toastCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.mainServiceProvider = mainServiceProvider;
        this.toastCtrl = toastCtrl;
        this.uncompleted = false;
        this.searchTerm = '';
        this.descending = false;
        this.column = 'test_version';
        this.master = false;
        events.publish('app:testAuth');
        var data5 = localStorage.getItem('userjwt');
        if (data5) {
            this.permissionlevel = (parseInt(JSON.parse(data5).roles));
            console.log(this.permissionlevel);
            console.log(typeof this.permissionlevel);
            this.master = (this.permissionlevel == 1073741824);
        }
        this.events.publish('app:showloading');
        this.loadData();
        this.events.publish('app:hideloading');
    }
    /////////////////////////////////////////////////////////////////////////////////// load data to testslist ///////////////////////////////////////////////////////////////////////////////// 
    trashslist.prototype.loadData = function () {
        var _this = this;
        this.mainServiceProvider.loadtrashsData()
            .then(function (data) {
            _this.items = data;
            console.log(typeof data);
            console.log(data);
        }).then(function (data) {
        }), function (err) {
            console.log("Erreur");
        };
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////// delete a test in the testslist ///////////////////////////////////////////////////////////////////////////
    trashslist.prototype.delete = function (iditem) {
        var _this = this;
        this.events.publish('app:showloading');
        console.log(iditem);
        this.mainServiceProvider.delete(iditem)
            .then(function (data) {
            _this.events.publish('app:hideloading');
            _this.loadData();
        }).then(function (data) {
        }), function (err) {
            _this.events.publish('app:hideloading');
        };
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    trashslist.prototype.gettrashinfos = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__trashinfo_trashinfo__["a" /* trashinfo */], { item: item });
    };
    trashslist.prototype.gotomap = function (item) {
    };
    return trashslist;
}());
trashslist = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-trashslist',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashslist\trashslist.html"*/'<ion-header >\n\n  <ion-navbar color="medcolor">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> \n\n    <ion-title>Trash List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n      \n\n      <ion-content >\n\n          \n\n         \n\n          \n\n        <ion-item style="widows: 10%; height:20%; background-color: rgb(223, 204, 182); border-bottom-color: black ;">\n\n          <ion-searchbar  [(ngModel)]="terms"></ion-searchbar>\n\n         \n\n        </ion-item>\n\n          <ion-list >\n\n          <ion-item *ngFor="let item of items  | search : terms | sort: {property: column, order: order}"  style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n\n              \n\n             <div><h1 style="font-size: 1em;">Trash Address :     {{item.trash_address}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trash Capacity :     {{item.trash_capacity}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trash ID :     {{item.trash_id}}</h1></div> \n\n            \n\n             \n\n             <div>\n\n                \n\n\n\n                \n\n                \n\n                <button *ngIf="master" ion-button round full style="font-size:120%;" color="medcolor2" (click)="delete(item._id)">Delete</button>\n\n                \n\n            </div>\n\n            <div>\n\n              <button ion-button round full style="font-size:120%; " (click)="gettrashinfos(item)" color="medcolor" >Status</button>\n\n            </div>\n\n            <div><button ion-button round full style="font-size:120%;" color="medcolor2" (click)="gotomap(item)">Go To Map</button></div>\n\n          </ion-item>\n\n      </ion-list>\n\n    \n\n    \n\n      </ion-content>\n\n      <ion-footer >\n\n          <ion-toolbar color="medcolor" >\n\n              \n\n            \n\n          </ion-toolbar>\n\n      </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashslist\trashslist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
], trashslist);

//# sourceMappingURL=trashslist.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MainServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var MainServiceProvider = (function () {
    function MainServiceProvider(http, events) {
        this.http = http;
        this.events = events;
        this.com = false;
        this.link = 'https://localhost:8443';
    }
    ////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
    MainServiceProvider.prototype.loadtrashsData = function () {
        var _this = this;
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        if (data1 || data2 || data3 || data4 || data5) {
            var link_1 = this.link + "/Trashs/loadTrashsdata";
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var refresh = {
                    refresh_token: JSON.parse(data2),
                    jwt: JSON.parse(data5)
                };
                var now = Math.floor(Date.now() / 1000);
                if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
                    _this.http.post(_this.link + "/auth/refresh", refresh, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        resolve(data);
                        console.log(data);
                        if (data.changed == true) {
                            localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                        }
                    }, function (error) {
                        resolve(error);
                        console.log(error);
                    });
                }
                headers.append('authorization', 'Bearer' + ' ' + data1);
                console.log(headers);
                _this.http.get(link_1, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data.result);
                }, function (err) {
                    _this.events.publish('app:hideloading');
                    _this.events.publish('app:toast', "Error while trying to load data");
                });
            });
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    /////////////////////////////////////////////////////////////////////////////// delete service ////////////////////////////////////////////////////////////////////////////////////////////////
    MainServiceProvider.prototype.delete = function (iditem) {
        var _this = this;
        var link = this.link + "/Trashs/deleteTrashdata";
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        if (data1 || data2 || data3 || data4 || data5) {
            var TrashInfo_1 = {
                Iditem: iditem,
            };
            console.log(TrashInfo_1);
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var refresh = {
                    refresh_token: JSON.parse(data2),
                    jwt: JSON.parse(data5)
                };
                var now = Math.floor(Date.now() / 1000);
                if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
                    _this.http.post(_this.link + "/auth/refresh", refresh, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        resolve(data);
                        console.log(data);
                        if (data.changed == true) {
                            localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                        }
                    }, function (error) {
                        resolve(error);
                        console.log(error);
                    });
                }
                headers.append('authorization', 'Bearer' + ' ' + data1);
                _this.http.post(link, TrashInfo_1, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data.msg);
                }, function (err) {
                    _this.events.publish('app:hideloading');
                    _this.events.publish('app:toast', "Error while trying to fetch data");
                });
            });
        }
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
    MainServiceProvider.prototype.loadusersData = function () {
        var _this = this;
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        if (data1 || data2 || data3 || data4 || data5) {
            var link_2 = this.link + "/users";
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var refresh = {
                    refresh_token: JSON.parse(data2),
                    jwt: JSON.parse(data5)
                };
                var now = Math.floor(Date.now() / 1000);
                if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
                    _this.http.post(_this.link + "/auth/refresh", refresh, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        resolve(data);
                        console.log(data);
                        if (data.changed == true) {
                            localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                        }
                    }, function (error) {
                        resolve(error);
                        console.log(error);
                    });
                }
                headers.append('authorization', 'Bearer' + ' ' + data1);
                console.log(headers);
                _this.http.get(link_2, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                    return data;
                }, function (err) {
                    _this.events.publish('app:hideloading');
                    _this.events.publish('app:toast', "Error while trying to load data");
                });
            });
        }
    };
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    /////////////////////////////////////////////////////////////////////////////// delete service ////////////////////////////////////////////////////////////////////////////////////////////////
    MainServiceProvider.prototype.deleteuser = function (iduser) {
        var _this = this;
        var link = this.link + "/users/";
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        if (data1 || data2 || data3 || data4 || data5) {
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                var refresh = {
                    refresh_token: JSON.parse(data2),
                    jwt: JSON.parse(data5)
                };
                var now = Math.floor(Date.now() / 1000);
                if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
                    _this.http.post(_this.link + "/auth/refresh", refresh, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        resolve(data);
                        console.log(data);
                        if (data.changed == true) {
                            localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                        }
                    }, function (error) {
                        resolve(error);
                        console.log(error);
                    });
                }
                headers.append('authorization', 'Bearer' + ' ' + data1);
                console.log(link);
                _this.http.delete(link + iduser, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                }, function (err) {
                    _this.events.publish('app:hideloading');
                    _this.events.publish('app:toast', "Error while trying to fetch data");
                });
            });
        }
    };
    return MainServiceProvider;
}());
MainServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]])
], MainServiceProvider);

//# sourceMappingURL=main-service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/splash/splash.module": [
		638,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 201;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trashs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trashslist_trashslist__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../../pages/home/home';
//import { NavController,Events } from 'ionic-angular';




/**
 * Generated class for the AuthenticationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var trashs = (function () {
    function trashs(events, navCtrl, auth, controle, alertCrtl, toastCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.controle = controle;
        this.alertCrtl = alertCrtl;
        this.toastCtrl = toastCtrl;
        events.publish('app:testAuth');
    }
    trashs.prototype.addtrash = function (data) {
        var _this = this;
        var dataregister = {
            trash_capacity: data.trash_capacity,
            trash_address: data.trash_address,
            trash_owner: data.trash_owner,
            trash_lg: data.trash_lg,
            trash_al: data.trash_al,
            trash_id: data.trash_id,
            treatment_number: 0,
            rubbish_weight: 0,
        };
        console.log(dataregister);
        this.auth.addtrash2(dataregister).then(function (Data) {
            if (Data !== 'null') {
                data.trash_capacity = '';
                data.trash_address = '';
                data.trash_id = '';
                data.trash_owner = '';
                data.trash_al = '';
                data.trash_lg = '';
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trashslist_trashslist__["a" /* trashslist */]);
            }
            else {
                //this.msgerr= data.msg;
                _this.events.publish('app:toast', "There is a problem while adding this trash !!!");
            }
        });
    };
    trashs.prototype.gototrushlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trashslist_trashslist__["a" /* trashslist */]);
    };
    return trashs;
}());
trashs = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashs\trashs.html"*/'<ion-header >\n\n        <ion-navbar color="medcolor">\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button> \n\n          <ion-title>Add Trash</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n        <form #data="ngForm" (ngSubmit)="addtrash(data)">\n\n\n\n      \n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trash Capacity</ion-label>\n\n            <ion-input  [(ngModel)]="data.trash_capacity" name="trash_capacity" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trash Address</ion-label>\n\n            <ion-input  [(ngModel)]="data.trash_address" name="trash_address" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trash Latitude</ion-label>\n\n            <ion-input  [(ngModel)]="data.trash_al" name="trash_al" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trash  Longitude</ion-label>\n\n            <ion-input  [(ngModel)]="data.trash_lg" name="trash_lg" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n       \n\n    \n\n            <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n                    <ion-label floating> <ion-icon name="search"></ion-icon>Trash ID</ion-label>\n\n                    <ion-input  [(ngModel)]="data.trash_id" name="trash_id" type="text" required></ion-input>\n\n               \n\n                   \n\n                </ion-item>\n\n\n\n                <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n                    <ion-label floating> <ion-icon name="search"></ion-icon>Trash Owner</ion-label>\n\n                    <ion-input  [(ngModel)]="data.trash_owner" name="trash_owner" type="text" required></ion-input>\n\n               \n\n                   \n\n                </ion-item>\n\n               \n\n\n\n        <ion-item style="widows: 13%; height:13%; background-color: beige; border-bottom-color: black ;" >\n\n            <div padding>\n\n               <button ion-button [disabled]="!data.form.valid" type="submit" color="medcolor1" block >Add Trash</button>\n\n            </div>\n\n          </ion-item>\n\n        </form>\n\n          <ion-item style="widows: 13%; height:13%; background-color: beige; border-bottom-color: black ;" >\n\n                <div padding>\n\n                   <button ion-button   color="medcolor2" (click)="gototrushlist()" block >Go To Trash Liste</button>\n\n                </div>\n\n              </ion-item>\n\n              \n\n  \n\n        </ion-content>   \n\n        <ion-footer >\n\n                <ion-toolbar color="medcolor" >\n\n                </ion-toolbar>\n\n            </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashs\trashs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */]])
], trashs);

//# sourceMappingURL=trashs.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trashinfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var trashinfo = (function () {
    function trashinfo(events, navCtrl, auth, controle, alertCrtl, toastCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.controle = controle;
        this.alertCrtl = alertCrtl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        events.publish('app:testAuth');
        this.item = this.navParams.get('item');
        console.log(this.item.owner);
    }
    trashinfo.prototype.changeinfo = function (iditem) {
    };
    return trashinfo;
}());
trashinfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashinfo\trashinfo.html"*/'<ion-header >\n\n    <ion-navbar color="medcolor">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button> \n\n      <ion-title>Trash Info</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n        \n\n        <ion-content style=" background-color: beige; border-bottom-color: black ;" >\n\n            \n\n           \n\n            \n\n          \n\n            \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Trash Address :  {{item.trash_address}} </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Trash Capacity :   {{item.trash_capacity}}  </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Trash Owner :    {{item.owner}} </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Trash Id :    {{item.trash_id}} </h1></div>\n\n               <div><h1 style="font-size: 1.5em; color:brown;">Treatment Number :    {{item.treatment_number}} </h1></div>\n\n               <div><h1 style="font-size: 1.5em; color:brown;">Rubbish Weight :    {{item.rubbish_weight}} </h1></div>\n\n               <div><h1 style="font-size: 1.5em; color:brown;">Trash Latitude  :    {{item.trash_al}} </h1></div>\n\n               <div><h1 style="font-size: 1.5em; color:brown;">Trash  Longitude :    {{item.trash_lg}} </h1></div>\n\n               \n\n              \n\n               \n\n               <div>\n\n                  \n\n  \n\n                  \n\n                  \n\n                  <button ion-button round full style="font-size:120%;" color="medcolor2" (click)="changeinfo(item._id)">Change Trash Information</button>\n\n                  \n\n              </div>\n\n              \n\n      \n\n      \n\n        </ion-content>\n\n        <ion-footer >\n\n            <ion-toolbar color="medcolor" >\n\n                \n\n              \n\n            </ion-toolbar>\n\n        </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashinfo\trashinfo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */]])
], trashinfo);

//# sourceMappingURL=trashinfo.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userslist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__userinfo_userinfo__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var userslist = (function () {
    function userslist(events, navCtrl, mainServiceProvider, toastCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.mainServiceProvider = mainServiceProvider;
        this.toastCtrl = toastCtrl;
        this.uncompleted = false;
        this.searchTerm = '';
        this.descending = false;
        this.column = 'test_version';
        events.publish('app:testAuth');
        this.events.publish('app:showloading');
        this.loadData();
        this.events.publish('app:hideloading');
    }
    /////////////////////////////////////////////////////////////////////////////////// load data to testslist ///////////////////////////////////////////////////////////////////////////////// 
    userslist.prototype.loadData = function () {
        var _this = this;
        this.mainServiceProvider.loadusersData()
            .then(function (data) {
            console.log(data);
            _this.items = data;
        }), function (err) {
            console.log("Erreur");
        };
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////// delete a test in the testslist ///////////////////////////////////////////////////////////////////////////
    userslist.prototype.deleteuser = function (iditem) {
        var _this = this;
        this.events.publish('app:showloading');
        console.log(iditem);
        this.mainServiceProvider.deleteuser(iditem)
            .then(function (data) {
            _this.events.publish('app:hideloading');
            _this.loadData();
        }), function (err) {
            _this.events.publish('app:hideloading');
        };
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    ////////////////////////////////////////////////////////////////////////////////// delete a test in the testslist ///////////////////////////////////////////////////////////////////////////
    userslist.prototype.getuserinfos = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__userinfo_userinfo__["a" /* userinfo */], { item: item });
    };
    return userslist;
}());
userslist = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-userslist',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\userslist\userslist.html"*/'<ion-header>\n\n    <ion-navbar color="medcolor">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>User List</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n\n\n\n\n\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of items " style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n\n            <div>\n\n                <h1 style="font-size: 1em;">User Name : {{item.username}}</h1>\n\n            </div>\n\n            <div>\n\n                <h1 style="font-size: 1em;">User Email : {{item.email}}</h1>\n\n            </div>\n\n\n\n\n\n\n\n\n\n            <div>\n\n\n\n\n\n\n\n\n\n                <button ion-button round full style="font-size:120%;" color="medcolor2" (click)="deleteuser(item._id)">Delete</button>\n\n\n\n            </div>\n\n            <div>\n\n                <button ion-button round full style="font-size:120%; " (click)="getuserinfos(item)" color="medcolor">User Infos</button>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar color="medcolor">\n\n\n\n\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\userslist\userslist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
], userslist);

//# sourceMappingURL=userslist.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userinfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var userinfo = (function () {
    function userinfo(events, navCtrl, auth, controle, alertCrtl, toastCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.controle = controle;
        this.alertCrtl = alertCrtl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        events.publish('app:testAuth');
        this.item = this.navParams.get('item');
        console.log(this.item);
    }
    userinfo.prototype.changeinfo = function (iditem) {
    };
    return userinfo;
}());
userinfo = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\userinfo\userinfo.html"*/'<ion-header >\n\n    <ion-navbar color="medcolor">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button> \n\n      <ion-title>User Info</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n        \n\n        <ion-content style=" background-color: beige; border-bottom-color: black ;" >\n\n            \n\n           \n\n            \n\n          \n\n            \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Username :  {{item.username}}   </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Email :    {{item.email}} </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Permission Level :   {{item.permissionLevel}}  </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">User Code :   {{item.owner_code}}  </h1></div> \n\n               <div><h1 style="font-size: 1.5em; color:brown;">Region Code :   {{item.region_code}}  </h1></div> \n\n               \n\n              \n\n               \n\n               <div>\n\n                  \n\n  \n\n                  \n\n                  \n\n                  <button ion-button round full style="font-size:120%;" color="medcolor2" (click)="changeinfo(item._id)">Change User Information</button>\n\n                  \n\n              </div>\n\n              \n\n      \n\n      \n\n        </ion-content>\n\n        <ion-footer >\n\n            <ion-toolbar color="medcolor" >\n\n                \n\n              \n\n            </ion-toolbar>\n\n        </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\userinfo\userinfo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */]])
], userinfo);

//# sourceMappingURL=userinfo.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(411);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_controle_controle__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_authentication_authentication__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_main_service_main_service__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_trashs_trashs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_trashslist_trashslist__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_userslist_userslist__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_userinfo_userinfo__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_trashinfo_trashinfo__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_search_search__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_sort_sort__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_img_viewer__ = __webpack_require__(536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__components_authentication_authentication__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_signup_signup__["a" /* signup */],
            __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["b" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_trashs_trashs__["a" /* trashs */],
            __WEBPACK_IMPORTED_MODULE_14__pages_trashslist_trashslist__["a" /* trashslist */],
            __WEBPACK_IMPORTED_MODULE_18__pipes_search_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pipes_sort_sort__["a" /* SortPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_userslist_userslist__["a" /* userslist */],
            __WEBPACK_IMPORTED_MODULE_16__pages_userinfo_userinfo__["a" /* userinfo */],
            __WEBPACK_IMPORTED_MODULE_17__pages_trashinfo_trashinfo__["a" /* trashinfo */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'PopoverPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_20_ng2_charts__["ChartsModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__components_authentication_authentication__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_signup_signup__["a" /* signup */],
            __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__["b" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_trashs_trashs__["a" /* trashs */],
            __WEBPACK_IMPORTED_MODULE_14__pages_trashslist_trashslist__["a" /* trashslist */],
            __WEBPACK_IMPORTED_MODULE_15__pages_userslist_userslist__["a" /* userslist */],
            __WEBPACK_IMPORTED_MODULE_16__pages_userinfo_userinfo__["a" /* userinfo */],
            __WEBPACK_IMPORTED_MODULE_17__pages_trashinfo_trashinfo__["a" /* trashinfo */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_main_service_main_service__["a" /* MainServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_controle_controle__["a" /* ControleProvider */],
            __WEBPACK_IMPORTED_MODULE_21_ionic_img_viewer__["a" /* IonicImageViewerModule */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_trashs_trashs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_userslist_userslist__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, loadingCtrl, events, toastCtrl, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.showSplash = true; // <-- show animation
        this.loggedin = false;
        this.initEvents();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Add Trash', component: __WEBPACK_IMPORTED_MODULE_7__pages_trashs_trashs__["a" /* trashs */] },
            { title: 'Trash List', component: __WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__["a" /* trashslist */] },
            { title: 'User List', component: __WEBPACK_IMPORTED_MODULE_9__pages_userslist_userslist__["a" /* userslist */] },
        ];
        this.pages2 = [
            { title: 'Trash List', component: __WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__["a" /* trashslist */] },
        ];
        this.pageSplash = { title: 'Splash', component: __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["b" /* SplashPage */] };
        this.pageLogin = { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */] };
        this.pageSignup = { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_4__components_signup_signup__["a" /* signup */] };
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide(); // <-- hide static image
            _this.testAuth();
            _this.rootPage = _this.initComp();
            Object(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    MyApp.prototype.initEvents = function () {
        var _this = this;
        // Events
        this.events.subscribe('app:showloading', function () {
            _this.presentLoading();
        });
        this.events.subscribe('app:hideloading', function () {
            _this.hideLoading();
        });
        this.events.subscribe('app:toast', function (message) {
            _this.presentToast(message);
        });
        this.events.subscribe('app:setUser', function () {
            _this.initUserLogged();
        });
        this.events.subscribe('app:testAuth', function () {
            _this.testAuth();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.initUserLogged = function () {
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        if (!data1 || !data2 || !data3 || !data4 || !data5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */]);
        }
        else {
            var userdata = {
                useraccesstoken: data1,
                userrefreshtoken: data2,
                useremail: data3,
                userpassword: data4
            };
            this.loggedin = true;
            this.permissionlevel = (parseInt(JSON.parse(data5).roles));
            console.log(this.permissionlevel);
            console.log(typeof this.permissionlevel);
            this.master = (this.permissionlevel == 1073741824);
            this.user = userdata;
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__["a" /* trashslist */]);
        }
    };
    MyApp.prototype.testAuth = function () {
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
        console.log(JSON.parse(data5));
        if (!data1 || !data2 || !data3 || !data4 || !data5) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */]);
        }
        else {
            var userdata = {
                useraccesstoken: data1,
                userrefreshtoken: data2,
                useremail: data3,
                userpassword: data4
            };
            this.user = userdata;
            this.permissionlevel = (parseInt(JSON.parse(data5).roles));
            console.log(this.permissionlevel);
            this.master = (this.permissionlevel == 1073741824);
            console.log(this.master);
        }
    };
    MyApp.prototype.initComp = function () {
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
        if (!data1 || !data2 || !data3 || !data4 || !data5) {
            return __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */];
        }
        else {
            var userdata = {
                useraccesstoken: data1,
                userrefreshtoken: data2,
                useremail: data3,
                userpassword: data4
            };
            this.user = userdata;
            this.permissionlevel = (parseInt(JSON.parse(data5).roles));
            console.log(this.permissionlevel);
            this.master = (this.permissionlevel == 1073741824);
            console.log(this.master);
            return __WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__["a" /* trashslist */];
        }
    };
    MyApp.prototype.triggerLoggedOff = function () {
        localStorage.removeItem('useraccesstoken');
        localStorage.removeItem('userrefreshtoken');
        localStorage.removeItem('useremail');
        localStorage.removeItem('userpassword');
        this.user = null;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */]);
    };
    MyApp.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: "Please wait while loading ...",
        });
        this.loading.present();
    };
    MyApp.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    MyApp.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        toast.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="spinner">\n        <div class="rect1"></div>\n        <div class="rect2"></div>\n        <div class="rect3"></div>\n        <div class="rect4"></div>\n        <div class="rect5"></div>\n    </div>\n  </div>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="medcolor">\n      <ion-title style="margin-left: 6%;">TRASH MANAGER APP</ion-title>\n      <div *ngIf="user"><h1 style="margin-top:2.5% !important; font-weight:bold; font-size:1.8em; color: brown; margin-left: 10%;"> {{user.useremail}}</h1></div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n     \n\n    <ion-list *ngIf="user && master">\n      <button menuClose ion-item *ngFor="let p of pages"  (click)="openPage(p)" style=" background-color: beige; border-bottom-color: black ;" large>\n        <h2 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n        {{p.title}}\n      </h2>\n      </button>\n      <button menuClose ion-item *ngIf="user"  (click)="triggerLoggedOff()" style=" background-color: beige; border-bottom-color: black ;" large>\n          <h6 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n              <ion-icon name="log-out" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n        Log out\n      </h6>\n      </button>\n\n    </ion-list>\n    \n    <ion-list *ngIf="user && !master">\n      <button menuClose ion-item *ngFor="let p of pages2"  (click)="openPage(p)" style=" background-color: beige; border-bottom-color: black ;" large>\n        <h2 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n        {{p.title}}\n      </h2>\n      </button>\n      <button menuClose ion-item *ngIf="user"  (click)="triggerLoggedOff()" style=" background-color: beige; border-bottom-color: black ;" large>\n          <h6 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n              <ion-icon name="log-out" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n        Log out\n      </h6>\n      </button>\n\n    </ion-list>\n    <button menuClose ion-item *ngIf="!user"  (click)="openPage(pageLogin)" style=" background-color: beige; border-bottom-color: black ;" large>\n      <h3 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n          <ion-icon name="log-in" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n      Signin\n      </h3>\n    </button>\n    <button menuClose ion-item *ngIf="!user"  (click)="openPage(pageSignup)" style=" background-color: beige; border-bottom-color: black ;" large>\n      <h4 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n          <ion-icon name="contact" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n      Signup\n      </h4>\n    </button>\n\n    <button menuClose ion-item *ngIf="!user"  (click)="openPage(pageSplash)" style=" background-color: beige; border-bottom-color: black ;" large>\n      \n      <h5 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n          <ion-icon name="home" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n      Home\n    </h5>\n    </button>\n      \n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SearchPipe = (function () {
    function SearchPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.trash_address.toLowerCase().includes(terms); // only filter country name
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'search',
    })
], SearchPipe);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the SortPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
var SortPipe = (function () {
    function SortPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    return SortPipe;
}());
SortPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sort',
    })
], SortPipe);

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthProvider = (function () {
    function AuthProvider(http, events, toastCtrl) {
        this.http = http;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.link = 'https://localhost:8443';
    }
    /////////////////////////////////////////////////////////////////////////////////// login service //////////////////////////////////////////////////////////////////////////////////////////
    AuthProvider.prototype.login = function (cred) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        var hash = __WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.SHA256(cred.password).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.enc.Hex);
        var inscrit = {
            email: cred.email,
            password: hash,
        };
        console.log(inscrit);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.link + "/users/login", inscrit, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                localStorage.setItem('useraccesstoken', JSON.stringify(data.accessToken));
                localStorage.setItem('userrefreshtoken', JSON.stringify(data.refreshToken));
                localStorage.setItem('useremail', JSON.stringify(inscrit.email));
                localStorage.setItem('userpassword', JSON.stringify(inscrit.password));
                localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                console.log(data.jwt);
            }, function (error) {
                resolve(error);
                _this.events.publish('app:toast', "Verify your email or password !!");
            });
        });
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////// register service ////////////////////////////////////////////////////////////////////////////////////////
    AuthProvider.prototype.register = function (cred) {
        var _this = this;
        var hash = __WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.SHA256(cred.password).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.enc.Hex);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var inscrit = {
            username: cred.username,
            password: hash,
            email: cred.email,
            owner_code: cred.owner_code,
            region_code: cred.region_code,
            lat: 0,
            lon: 0
        };
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.link + "/users/register", inscrit, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            }, function (error) {
                resolve(error);
                var Data;
                Data = JSON.parse(error._body);
                _this.events.publish('app:toast', Data.msg);
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////// add test ////////////////////////////////////////////////////////////////////////////////////////////////  
    AuthProvider.prototype.addtrash2 = function (cred) {
        var _this = this;
        var data1 = localStorage.getItem('useraccesstoken');
        var data2 = localStorage.getItem('userrefreshtoken');
        var data3 = localStorage.getItem('useremail');
        var data4 = localStorage.getItem('userpassword');
        var data5 = localStorage.getItem('userjwt');
        if (data1 || data2 || data3 || data4 || data5) {
            var headers_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var inscrit_1 = {
                trash_capacity: cred.trash_capacity,
                trash_address: cred.trash_address,
                trash_owner: cred.trash_owner,
                trash_lg: cred.trash_lg,
                trash_al: cred.trash_al,
                trash_id: cred.trash_id,
                treatment_number: 0,
                rubbish_weight: 0,
            };
            var refresh_1 = {
                refresh_token: JSON.parse(data2),
                jwt: JSON.parse(data5)
            };
            headers_1.append('Content-Type', 'application/json');
            var now = Math.floor(Date.now() / 1000);
            return new Promise(function (resolve) {
                console.log(now);
                console.log((parseInt(JSON.parse(data5).exp)));
                if (now >= (parseInt(JSON.parse(data5).exp) - 200)) {
                    _this.http.post(_this.link + "/auth/refresh", refresh_1, { headers: headers_1 })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        resolve(data);
                        console.log(data);
                        if (data.changed == true) {
                            localStorage.setItem('useraccesstoken', JSON.stringify(data.access_token));
                            localStorage.setItem('userjwt', JSON.stringify(data.jwt));
                        }
                    }, function (error) {
                        resolve(error);
                        console.log(error);
                    });
                }
                var data1 = localStorage.getItem('useraccesstoken');
                headers_1.append('authorization', 'Bearer' + ' ' + data1);
                _this.http.post(_this.link + "/Trashs/addTrash", inscrit_1, { headers: headers_1 })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                    console.log(data);
                }, function (error) {
                    resolve(error);
                    console.log(error);
                    _this.events.publish('app:toast', "Error while adding this Trash !!");
                });
            });
        }
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 263,
	"./af.js": 263,
	"./ar": 264,
	"./ar-dz": 265,
	"./ar-dz.js": 265,
	"./ar-kw": 266,
	"./ar-kw.js": 266,
	"./ar-ly": 267,
	"./ar-ly.js": 267,
	"./ar-ma": 268,
	"./ar-ma.js": 268,
	"./ar-sa": 269,
	"./ar-sa.js": 269,
	"./ar-tn": 270,
	"./ar-tn.js": 270,
	"./ar.js": 264,
	"./az": 271,
	"./az.js": 271,
	"./be": 272,
	"./be.js": 272,
	"./bg": 273,
	"./bg.js": 273,
	"./bm": 274,
	"./bm.js": 274,
	"./bn": 275,
	"./bn.js": 275,
	"./bo": 276,
	"./bo.js": 276,
	"./br": 277,
	"./br.js": 277,
	"./bs": 278,
	"./bs.js": 278,
	"./ca": 279,
	"./ca.js": 279,
	"./cs": 280,
	"./cs.js": 280,
	"./cv": 281,
	"./cv.js": 281,
	"./cy": 282,
	"./cy.js": 282,
	"./da": 283,
	"./da.js": 283,
	"./de": 284,
	"./de-at": 285,
	"./de-at.js": 285,
	"./de-ch": 286,
	"./de-ch.js": 286,
	"./de.js": 284,
	"./dv": 287,
	"./dv.js": 287,
	"./el": 288,
	"./el.js": 288,
	"./en-au": 289,
	"./en-au.js": 289,
	"./en-ca": 290,
	"./en-ca.js": 290,
	"./en-gb": 291,
	"./en-gb.js": 291,
	"./en-ie": 292,
	"./en-ie.js": 292,
	"./en-il": 293,
	"./en-il.js": 293,
	"./en-nz": 294,
	"./en-nz.js": 294,
	"./eo": 295,
	"./eo.js": 295,
	"./es": 296,
	"./es-do": 297,
	"./es-do.js": 297,
	"./es-us": 298,
	"./es-us.js": 298,
	"./es.js": 296,
	"./et": 299,
	"./et.js": 299,
	"./eu": 300,
	"./eu.js": 300,
	"./fa": 301,
	"./fa.js": 301,
	"./fi": 302,
	"./fi.js": 302,
	"./fo": 303,
	"./fo.js": 303,
	"./fr": 304,
	"./fr-ca": 305,
	"./fr-ca.js": 305,
	"./fr-ch": 306,
	"./fr-ch.js": 306,
	"./fr.js": 304,
	"./fy": 307,
	"./fy.js": 307,
	"./gd": 308,
	"./gd.js": 308,
	"./gl": 309,
	"./gl.js": 309,
	"./gom-latn": 310,
	"./gom-latn.js": 310,
	"./gu": 311,
	"./gu.js": 311,
	"./he": 312,
	"./he.js": 312,
	"./hi": 313,
	"./hi.js": 313,
	"./hr": 314,
	"./hr.js": 314,
	"./hu": 315,
	"./hu.js": 315,
	"./hy-am": 316,
	"./hy-am.js": 316,
	"./id": 317,
	"./id.js": 317,
	"./is": 318,
	"./is.js": 318,
	"./it": 319,
	"./it.js": 319,
	"./ja": 320,
	"./ja.js": 320,
	"./jv": 321,
	"./jv.js": 321,
	"./ka": 322,
	"./ka.js": 322,
	"./kk": 323,
	"./kk.js": 323,
	"./km": 324,
	"./km.js": 324,
	"./kn": 325,
	"./kn.js": 325,
	"./ko": 326,
	"./ko.js": 326,
	"./ky": 327,
	"./ky.js": 327,
	"./lb": 328,
	"./lb.js": 328,
	"./lo": 329,
	"./lo.js": 329,
	"./lt": 330,
	"./lt.js": 330,
	"./lv": 331,
	"./lv.js": 331,
	"./me": 332,
	"./me.js": 332,
	"./mi": 333,
	"./mi.js": 333,
	"./mk": 334,
	"./mk.js": 334,
	"./ml": 335,
	"./ml.js": 335,
	"./mn": 336,
	"./mn.js": 336,
	"./mr": 337,
	"./mr.js": 337,
	"./ms": 338,
	"./ms-my": 339,
	"./ms-my.js": 339,
	"./ms.js": 338,
	"./mt": 340,
	"./mt.js": 340,
	"./my": 341,
	"./my.js": 341,
	"./nb": 342,
	"./nb.js": 342,
	"./ne": 343,
	"./ne.js": 343,
	"./nl": 344,
	"./nl-be": 345,
	"./nl-be.js": 345,
	"./nl.js": 344,
	"./nn": 346,
	"./nn.js": 346,
	"./pa-in": 347,
	"./pa-in.js": 347,
	"./pl": 348,
	"./pl.js": 348,
	"./pt": 349,
	"./pt-br": 350,
	"./pt-br.js": 350,
	"./pt.js": 349,
	"./ro": 351,
	"./ro.js": 351,
	"./ru": 352,
	"./ru.js": 352,
	"./sd": 353,
	"./sd.js": 353,
	"./se": 354,
	"./se.js": 354,
	"./si": 355,
	"./si.js": 355,
	"./sk": 356,
	"./sk.js": 356,
	"./sl": 357,
	"./sl.js": 357,
	"./sq": 358,
	"./sq.js": 358,
	"./sr": 359,
	"./sr-cyrl": 360,
	"./sr-cyrl.js": 360,
	"./sr.js": 359,
	"./ss": 361,
	"./ss.js": 361,
	"./sv": 362,
	"./sv.js": 362,
	"./sw": 363,
	"./sw.js": 363,
	"./ta": 364,
	"./ta.js": 364,
	"./te": 365,
	"./te.js": 365,
	"./tet": 366,
	"./tet.js": 366,
	"./tg": 367,
	"./tg.js": 367,
	"./th": 368,
	"./th.js": 368,
	"./tl-ph": 369,
	"./tl-ph.js": 369,
	"./tlh": 370,
	"./tlh.js": 370,
	"./tr": 371,
	"./tr.js": 371,
	"./tzl": 372,
	"./tzl.js": 372,
	"./tzm": 373,
	"./tzm-latn": 374,
	"./tzm-latn.js": 374,
	"./tzm.js": 373,
	"./ug-cn": 375,
	"./ug-cn.js": 375,
	"./uk": 376,
	"./uk.js": 376,
	"./ur": 377,
	"./ur.js": 377,
	"./uz": 378,
	"./uz-latn": 379,
	"./uz-latn.js": 379,
	"./uz.js": 378,
	"./vi": 380,
	"./vi.js": 380,
	"./x-pseudo": 381,
	"./x-pseudo.js": 381,
	"./yo": 382,
	"./yo.js": 382,
	"./zh-cn": 383,
	"./zh-cn.js": 383,
	"./zh-hk": 384,
	"./zh-hk.js": 384,
	"./zh-tw": 385,
	"./zh-tw.js": 385
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 517;

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ControleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ControleProvider = (function () {
    function ControleProvider(http) {
        this.http = http;
        console.log('Hello ControleProvider Provider');
    }
    ControleProvider.prototype.ctrpassword = function (psw1, psw2) {
        console.log(psw1, psw2);
        if (psw1 !== psw2) {
            return "false";
        }
        else {
            return "true";
        }
    };
    return ControleProvider;
}());
ControleProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ControleProvider);

//# sourceMappingURL=controle.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_authentication_authentication__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PopoverPage = (function () {
    //textEle: any;
    function PopoverPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PopoverPage.prototype.loginpage = function () {
        var _this = this;
        //this.navCtrl.setRoot(SignupPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__components_authentication_authentication__["a" /* AuthenticationComponent */]).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    PopoverPage.prototype.registerpage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__components_signup_signup__["a" /* signup */]).then(function () {
            _this.viewCtrl.dismiss();
        });
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        template: "\n\n    <button ion-item (click)=\"loginpage()\">\n          <ion-icon name=\"contact\" item-start></ion-icon>\n          Connexion\n    </button>\n        <button ion-item (click)=\"registerpage()\">\n              <ion-icon name=\"add-circle\" item-start></ion-icon>\n              Inscription\n        </button>\n\n\n\n\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["y" /* ViewController */]])
], PopoverPage);

var SplashPage = (function () {
    // @ViewChild('popoverText', { read: ElementRef }) text: ElementRef;
    function SplashPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    SplashPage.prototype.presentPopover = function (ev) {
        var popover = this.popoverCtrl.create(PopoverPage, {
            contentEle: this.content.nativeElement,
        });
        popover.present({
            ev: ev
        });
        console.log("okkkk");
    };
    SplashPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__components_authentication_authentication__["a" /* AuthenticationComponent */]);
    };
    // slideChanged() {
    //   if (this.slides.isEnd())
    //   //  this.skipMsg = "Alright, I got it";
    // }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    return SplashPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('popoverContent', { read: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] }),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
], SplashPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["v" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["v" /* Slides */])
], SplashPage.prototype, "slides", void 0);
SplashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-splash',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\splash\splash.html"*/'<!--\n  Generated template for the SplashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-header class="header">\n    <ion-navbar color="medcolor">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n     <h1>Overview Page</h1>\n    </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content #popoverContent padding class="no-scroll" >\n\n  <ion-slides pager>\n\n    <ion-slide style=" background-color: beige;" >\n      \n     <div >\n       <h2  >WELCOME TO RUBBISH MANAGER APP! </h2>\n     </div>\n    </ion-slide>\n\n    \n\n      \n          \n       <ion-slide style=" background-color: beige;">\n      <div class="diag" >\n         <img style="widows: 650px; height:400px;" src="assets/imgs/smart-waste-management.png" >\n     </div>\n     \n\n    </ion-slide>\n    \n    <ion-slide style=" background-color: beige;">\n\n        <div class="diag" >\n           <img  src="assets/imgs/smart-waste-management.png" >\n       </div>\n\n       <div>\n          <h3 >DESCRIPTION ! </h3>\n          <p>RUBBISH MANAGER APP is a mobile app that provides estimated dates for collection of waste,\n                         real time bin status, expected fill up dates for the bins,\n                             and optimized shortest path for waste collection. \n                   The system will summarize the collected information and generate reports.\n          </p>\n        </div>\n   </ion-slide>\n\n\n\n  </ion-slides>\n\n <button (click)="skip()" id="skip">            Continuer > </button>\n\n</ion-content>\n<ion-footer >\n    <ion-toolbar color="medcolor" >\n        \n        \n    \n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\splash\splash.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["u" /* PopoverController */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationComponent = (function () {
    function AuthenticationComponent(navCtrl, authprovider, events) {
        this.navCtrl = navCtrl;
        this.authprovider = authprovider;
        this.events = events;
        this.data = {
            email: '',
            password: ''
        };
    }
    AuthenticationComponent.prototype.signin = function () {
        var _this = this;
        this.authprovider.login(this.data)
            .then(function (Data) {
            _this.handleLoginSuccess();
        }).catch(function () {
            _this.data.email = '';
            _this.data.password = '';
        });
    };
    AuthenticationComponent.prototype.handleLoginSuccess = function () {
        this.events.publish('app:setUser');
    };
    AuthenticationComponent.prototype.checkLoginDisable = function () {
        if (this.data.email.length == 0 || this.data.password.length == 0) {
            return false;
        }
        return true;
    };
    AuthenticationComponent.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* signup */]);
    };
    return AuthenticationComponent;
}());
AuthenticationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'authentication',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\authentication\authentication.html"*/'<ion-header>\n  <ion-navbar color="medcolor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n   <h1>Log In Page</h1>\n  </ion-navbar>\n</ion-header>\n  \n  \n<ion-content padding>\n   \n    <ion-list>\n      <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="data.email"></ion-input>\n      </ion-item>\n  \n      <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="data.password"></ion-input>\n      </ion-item>\n  \n  \n      <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n    <div padding>\n       <button ion-button color="medcolor1"  block (click)="signin()" [disabled]="!checkLoginDisable()" >Log In</button>\n    </div>\n  </ion-item>\n  <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <div padding>\n         <button ion-button color="medcolor2" block (click)="signup()"  >Sign up</button>\n      </div>\n    </ion-item>\n\n    </ion-list>\n</ion-content>\n\n\n\n\n\n\n<ion-footer >\n      <ion-toolbar color="medcolor" >\n          \n      </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\authentication\authentication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]])
], AuthenticationComponent);

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var signup = (function () {
    function signup(navCtrl, auth, controle, alertCrtl, toastCtrl, events) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.controle = controle;
        this.alertCrtl = alertCrtl;
        this.toastCtrl = toastCtrl;
        this.events = events;
    }
    signup.prototype.Register = function (FormRegister) {
        var _this = this;
        var confpswd = this.controle.ctrpassword(FormRegister.password, FormRegister.confirmepassword);
        if (confpswd === "false") {
            this.events.publish('app:toast', "Verify your password");
        }
        else {
            var dataregister = {
                username: FormRegister.username,
                password: FormRegister.password,
                email: FormRegister.email,
                owner_code: FormRegister.owner_code,
                region_code: FormRegister.region_code,
            };
            this.auth.register(dataregister).then(function (data) {
                if (data !== 'null') {
                    _this.events.publish('app:toast', "Your account has been successfully created");
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__authentication_authentication__["a" /* AuthenticationComponent */]);
                }
                else {
                    FormRegister.username = '';
                    FormRegister.password = '';
                    FormRegister.email = '';
                    FormRegister.confirmepassword = '';
                    FormRegister.owner_code = '';
                    FormRegister.region_code = '';
                    _this.events.publish('app:toast', "Please fill in all the fields");
                }
            });
        }
    };
    signup.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__["b" /* SplashPage */]);
    };
    signup.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    return signup;
}());
signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\signup\signup.html"*/'<!--\n  Generated template for the Login page.\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n  <ion-header>\n\n    <ion-navbar color="medcolor">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n     <h1>Sign up Page</h1>\n    \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content class="no-scroll">\n  <form #FormRegister="ngForm" (ngSubmit)="Register(FormRegister)">\n\n     \n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating> Username</ion-label>\n      <ion-icon name="heart"></ion-icon>\n      <ion-input [(ngModel)]="FormRegister.username" name="username" type="text" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Email</ion-label>\n      <ion-icon name="heart"></ion-icon>\n      <ion-input [(ngModel)]="FormRegister.email" name="email" type="email" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Owner Code</ion-label>\n      <ion-icon name="heart"></ion-icon>\n      <ion-input [(ngModel)]="FormRegister.owner_code" name="owner_code" type="owner_code" required></ion-input>\n    </ion-item>\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Region Code</ion-label>\n      <ion-icon name="heart"></ion-icon>\n      <ion-input [(ngModel)]="FormRegister.region_code" name="region_code" type="region_code" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="FormRegister.password" name="password" type="password" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Password Confirmation </ion-label>\n      <ion-input [(ngModel)]="FormRegister.confirmepassword" name="confirmepassword" type="password" required></ion-input>\n    </ion-item>\n\n  \n\n    \n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <button [disabled]="!FormRegister.form.valid" type="submit"  color="medcolor1"  ion-button round full ion-button>Sign up</button>\n    </ion-item>\n\n    \n   \n\n\n  </form>\n</ion-content>\n\n<ion-footer >\n    <ion-toolbar color="medcolor" >\n        \n    \n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */]])
], signup);

//# sourceMappingURL=signup.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map