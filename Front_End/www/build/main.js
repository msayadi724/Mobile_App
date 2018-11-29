webpackJsonp([1],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControleProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
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

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trashs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trashslist_trashslist__ = __webpack_require__(119);
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
            trush_name: data.trush_name,
            trush_capacity: data.trush_capacity,
            trush_address: data.trush_address,
            trush_lg: 0,
            trush_al: 0,
            trush_id: data.trush_id,
            treatment_number: 0,
            rubbish_weight: 0,
        };
        console.log(dataregister);
        this.auth.addtrash2(dataregister).then(function (Data) {
            if (Data !== 'null') {
                //var dataname=data.result 
                var toast = _this.toastCtrl.create({
                    message: 'trush has been successfully added',
                    duration: 3000
                });
                toast.present();
                data.trush_name = '';
                data.trush_capacity = '';
                data.trush_address = '';
                data.trush_id = '';
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trashslist_trashslist__["a" /* trashslist */]);
            }
            else {
                //this.msgerr= data.msg;
                var toast = _this.toastCtrl.create({
                    message: 'There is a problem while adding this trush !!!',
                    duration: 3000
                });
                toast.present();
            }
        });
    };
    trashs.prototype.gototrushlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__trashslist_trashslist__["a" /* trashslist */]);
    };
    return trashs;
}());
trashs = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashs\trashs.html"*/'<ion-header >\n\n        <ion-navbar color="medcolor">\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button> \n\n          <ion-title>Add Trush</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n        <form #data="ngForm" (ngSubmit)="addtrash(data)">\n\n\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trush Name</ion-label>\n\n            <ion-input  [(ngModel)]="data.trush_name" name="trush_name" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trush Capacity</ion-label>\n\n            <ion-input  [(ngModel)]="data.trush_capacity" name="trush_capacity" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trush Address</ion-label>\n\n            <ion-input  [(ngModel)]="data.trush_address" name="trush_address" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n    \n\n            <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n                    <ion-label floating> <ion-icon name="search"></ion-icon>Trush ID</ion-label>\n\n                    <ion-input  [(ngModel)]="data.trush_id" name="trush_id" type="text" required></ion-input>\n\n               \n\n                   \n\n                </ion-item>\n\n               \n\n\n\n        <ion-item style="widows: 13%; height:13%; background-color: beige; border-bottom-color: black ;" >\n\n            <div padding>\n\n               <button ion-button [disabled]="!data.form.valid" type="submit" color="medcolor1" block >Add Trush</button>\n\n            </div>\n\n          </ion-item>\n\n        </form>\n\n          <ion-item style="widows: 13%; height:13%; background-color: beige; border-bottom-color: black ;" >\n\n                <div padding>\n\n                   <button ion-button   color="medcolor2" (click)="gototrushlist()" block >Go To Trush Liste</button>\n\n                </div>\n\n              </ion-item>\n\n              \n\n  \n\n        </ion-content>   \n\n        <ion-footer >\n\n                <ion-toolbar color="medcolor" >\n\n                </ion-toolbar>\n\n            </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashs\trashs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */]])
], trashs);

//# sourceMappingURL=trashs.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return trashslist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
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
        events.publish('app:testAuth');
        this.events.publish('app:showloading');
        this.loadData();
        this.events.publish('app:hideloading');
    }
    trashslist.prototype.refresh = function () {
        console.log("Refresh at " + __WEBPACK_IMPORTED_MODULE_3_moment__().format('LTS'));
    };
    trashslist.prototype.stopRefresh = function () {
        clearInterval(this.timeoutId);
    };
    trashslist.prototype.initRefresh = function () {
        var _this = this;
        //localStorage.removeItem('jbb-data3');
        this.refresh();
        this.timeoutId = setInterval(function () { return _this.refresh(); }, 5 * 1000);
    };
    trashslist.prototype.ionViewDidEnter = function () {
        this.initRefresh();
    };
    trashslist.prototype.ionViewDidLeave = function () {
        this.stopRefresh();
    };
    trashslist.prototype.manualRefresh = function () {
        this.stopRefresh();
        this.initRefresh();
    };
    trashslist.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
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
            var toast = _this.toastCtrl.create({
                message: 'test is deleted',
                duration: 3000
            });
            toast.present();
            _this.loadData();
        }).then(function (data) {
        }), function (err) {
            _this.events.publish('app:hideloading');
            var toast = _this.toastCtrl.create({
                message: 'test not deleted',
                duration: 3000
            });
            toast.present();
        };
    };
    return trashslist;
}());
trashslist = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-trashslist',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashslist\trashslist.html"*/'<ion-header >\n\n  <ion-navbar color="medcolor">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> \n\n    <ion-title>Trush List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n      \n\n      <ion-content >\n\n          \n\n         \n\n          \n\n        <ion-item style="widows: 20%; height:20%; background-color: rgb(223, 204, 182); border-bottom-color: black ;">\n\n          <ion-searchbar  [(ngModel)]="terms"></ion-searchbar>\n\n          <button ion-button round full type="button"  (click)="sort()" (click)="manualRefresh()" color="medcolor">Sort</button>\n\n        </ion-item>\n\n          <ion-list >\n\n          <ion-item *ngFor="let item of items  | search : terms | sort: {property: column, order: order}"  style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n\n             <div><h1 style="font-size: 1em;">Trush Name :     {{item.trush_name}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trush Address :     {{item.trush_address}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trush Capacity :     {{item.trush_capacity}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trush ID :     {{item.trush_id}}</h1></div> \n\n            \n\n             \n\n             <div>\n\n                \n\n\n\n                \n\n                \n\n                <button ion-button round full style="font-size:120%;" color="medcolor2" (click)="delete(item._id)">Delete</button>\n\n                \n\n            </div>\n\n            <div>\n\n              <button ion-button round full style="font-size:120%; " (click)="stat(item)" color="medcolor" >Status</button>\n\n            </div>\n\n            <div><button ion-button round full style="font-size:120%;" color="medcolor2" (click)="dashboard(item)">Go To Maps</button></div>\n\n          </ion-item>\n\n      </ion-list>\n\n    \n\n    \n\n      </ion-content>\n\n      <ion-footer >\n\n          <ion-toolbar color="medcolor" >\n\n              \n\n            \n\n          </ion-toolbar>\n\n      </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\trashslist\trashslist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
], trashslist);

//# sourceMappingURL=trashslist.js.map

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
		635,
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

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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
        var userinfo = JSON.parse(localStorage.getItem('userinfo'));
        if (userinfo) {
            var User_id = userinfo.user_id;
            var Token = userinfo.token;
            var data_1 = {
                user_id: User_id,
                token: Token
            };
            var link_1 = this.link + "/Trashs/loadTrashsdata";
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                _this.http.post(link_1, data_1, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data.result);
                    _this.items = data.result;
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
        var userinfo = JSON.parse(localStorage.getItem('userinfo'));
        if (userinfo) {
            var User_id = userinfo.user_id;
            var Token = userinfo.token;
            var data1_1 = {
                user_id: User_id,
                token: Token,
                Iditem: iditem,
            };
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                _this.http.post(link, data1_1, { headers: headers })
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
    return MainServiceProvider;
}());
MainServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]) === "function" && _b || Object])
], MainServiceProvider);

var _a, _b;
//# sourceMappingURL=main-service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(408);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_controle_controle__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_signup_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_authentication_authentication__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_main_service_main_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_splash_splash__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_trashs_trashs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_trashslist_trashslist__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_search_search__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_sort_sort__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_charts__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__ = __webpack_require__(533);
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
            __WEBPACK_IMPORTED_MODULE_15__pipes_search_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_sort_sort__["a" /* SortPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'PopoverPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__["a" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_charts__["ChartsModule"],
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
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_11__providers_main_service_main_service__["a" /* MainServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_controle_controle__["a" /* ControleProvider */],
            __WEBPACK_IMPORTED_MODULE_18_ionic_img_viewer__["a" /* IonicImageViewerModule */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 206,
	"./af.js": 206,
	"./ar": 207,
	"./ar-dz": 208,
	"./ar-dz.js": 208,
	"./ar-kw": 209,
	"./ar-kw.js": 209,
	"./ar-ly": 210,
	"./ar-ly.js": 210,
	"./ar-ma": 211,
	"./ar-ma.js": 211,
	"./ar-sa": 212,
	"./ar-sa.js": 212,
	"./ar-tn": 213,
	"./ar-tn.js": 213,
	"./ar.js": 207,
	"./az": 214,
	"./az.js": 214,
	"./be": 215,
	"./be.js": 215,
	"./bg": 216,
	"./bg.js": 216,
	"./bm": 217,
	"./bm.js": 217,
	"./bn": 218,
	"./bn.js": 218,
	"./bo": 219,
	"./bo.js": 219,
	"./br": 220,
	"./br.js": 220,
	"./bs": 221,
	"./bs.js": 221,
	"./ca": 222,
	"./ca.js": 222,
	"./cs": 223,
	"./cs.js": 223,
	"./cv": 224,
	"./cv.js": 224,
	"./cy": 225,
	"./cy.js": 225,
	"./da": 226,
	"./da.js": 226,
	"./de": 227,
	"./de-at": 228,
	"./de-at.js": 228,
	"./de-ch": 229,
	"./de-ch.js": 229,
	"./de.js": 227,
	"./dv": 230,
	"./dv.js": 230,
	"./el": 231,
	"./el.js": 231,
	"./en-au": 232,
	"./en-au.js": 232,
	"./en-ca": 233,
	"./en-ca.js": 233,
	"./en-gb": 234,
	"./en-gb.js": 234,
	"./en-ie": 235,
	"./en-ie.js": 235,
	"./en-il": 236,
	"./en-il.js": 236,
	"./en-nz": 237,
	"./en-nz.js": 237,
	"./eo": 238,
	"./eo.js": 238,
	"./es": 239,
	"./es-do": 240,
	"./es-do.js": 240,
	"./es-us": 241,
	"./es-us.js": 241,
	"./es.js": 239,
	"./et": 242,
	"./et.js": 242,
	"./eu": 243,
	"./eu.js": 243,
	"./fa": 244,
	"./fa.js": 244,
	"./fi": 245,
	"./fi.js": 245,
	"./fo": 246,
	"./fo.js": 246,
	"./fr": 247,
	"./fr-ca": 248,
	"./fr-ca.js": 248,
	"./fr-ch": 249,
	"./fr-ch.js": 249,
	"./fr.js": 247,
	"./fy": 250,
	"./fy.js": 250,
	"./gd": 251,
	"./gd.js": 251,
	"./gl": 252,
	"./gl.js": 252,
	"./gom-latn": 253,
	"./gom-latn.js": 253,
	"./gu": 254,
	"./gu.js": 254,
	"./he": 255,
	"./he.js": 255,
	"./hi": 256,
	"./hi.js": 256,
	"./hr": 257,
	"./hr.js": 257,
	"./hu": 258,
	"./hu.js": 258,
	"./hy-am": 259,
	"./hy-am.js": 259,
	"./id": 260,
	"./id.js": 260,
	"./is": 261,
	"./is.js": 261,
	"./it": 262,
	"./it.js": 262,
	"./ja": 263,
	"./ja.js": 263,
	"./jv": 264,
	"./jv.js": 264,
	"./ka": 265,
	"./ka.js": 265,
	"./kk": 266,
	"./kk.js": 266,
	"./km": 267,
	"./km.js": 267,
	"./kn": 268,
	"./kn.js": 268,
	"./ko": 269,
	"./ko.js": 269,
	"./ky": 270,
	"./ky.js": 270,
	"./lb": 271,
	"./lb.js": 271,
	"./lo": 272,
	"./lo.js": 272,
	"./lt": 273,
	"./lt.js": 273,
	"./lv": 274,
	"./lv.js": 274,
	"./me": 275,
	"./me.js": 275,
	"./mi": 276,
	"./mi.js": 276,
	"./mk": 277,
	"./mk.js": 277,
	"./ml": 278,
	"./ml.js": 278,
	"./mn": 279,
	"./mn.js": 279,
	"./mr": 280,
	"./mr.js": 280,
	"./ms": 281,
	"./ms-my": 282,
	"./ms-my.js": 282,
	"./ms.js": 281,
	"./mt": 283,
	"./mt.js": 283,
	"./my": 284,
	"./my.js": 284,
	"./nb": 285,
	"./nb.js": 285,
	"./ne": 286,
	"./ne.js": 286,
	"./nl": 287,
	"./nl-be": 288,
	"./nl-be.js": 288,
	"./nl.js": 287,
	"./nn": 289,
	"./nn.js": 289,
	"./pa-in": 290,
	"./pa-in.js": 290,
	"./pl": 291,
	"./pl.js": 291,
	"./pt": 292,
	"./pt-br": 293,
	"./pt-br.js": 293,
	"./pt.js": 292,
	"./ro": 294,
	"./ro.js": 294,
	"./ru": 295,
	"./ru.js": 295,
	"./sd": 296,
	"./sd.js": 296,
	"./se": 297,
	"./se.js": 297,
	"./si": 298,
	"./si.js": 298,
	"./sk": 299,
	"./sk.js": 299,
	"./sl": 300,
	"./sl.js": 300,
	"./sq": 301,
	"./sq.js": 301,
	"./sr": 302,
	"./sr-cyrl": 303,
	"./sr-cyrl.js": 303,
	"./sr.js": 302,
	"./ss": 304,
	"./ss.js": 304,
	"./sv": 305,
	"./sv.js": 305,
	"./sw": 306,
	"./sw.js": 306,
	"./ta": 307,
	"./ta.js": 307,
	"./te": 308,
	"./te.js": 308,
	"./tet": 309,
	"./tet.js": 309,
	"./tg": 310,
	"./tg.js": 310,
	"./th": 311,
	"./th.js": 311,
	"./tl-ph": 312,
	"./tl-ph.js": 312,
	"./tlh": 313,
	"./tlh.js": 313,
	"./tr": 314,
	"./tr.js": 314,
	"./tzl": 315,
	"./tzl.js": 315,
	"./tzm": 316,
	"./tzm-latn": 317,
	"./tzm-latn.js": 317,
	"./tzm.js": 316,
	"./ug-cn": 318,
	"./ug-cn.js": 318,
	"./uk": 319,
	"./uk.js": 319,
	"./ur": 320,
	"./ur.js": 320,
	"./uz": 321,
	"./uz-latn": 322,
	"./uz-latn.js": 322,
	"./uz.js": 321,
	"./vi": 323,
	"./vi.js": 323,
	"./x-pseudo": 324,
	"./x-pseudo.js": 324,
	"./yo": 325,
	"./yo.js": 325,
	"./zh-cn": 326,
	"./zh-cn.js": 326,
	"./zh-hk": 327,
	"./zh-hk.js": 327,
	"./zh-tw": 328,
	"./zh-tw.js": 328
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
webpackContext.id = 455;

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_trashs_trashs__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__);
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
            { title: 'Add Trush', component: __WEBPACK_IMPORTED_MODULE_7__pages_trashs_trashs__["a" /* trashs */] },
            { title: 'Trush List', component: __WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__["a" /* trashslist */] },
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
            Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; }); // <-- hide animation after 3s
        });
    };
    // initializeApp() {
    // this.platform.ready().then(() => {
    //  this.statusBar.styleDefault();
    //  this.splashScreen.hide();
    //  this.testAuth();
    // this.rootPage = this.initComp();
    //  });
    // }
    MyApp.prototype.initEvents = function () {
        var _this = this;
        // Events
        this.events.subscribe('app:showloading', function () {
            _this.presentLoading();
        });
        this.events.subscribe('app:alerte', function (message1, message2, message3) {
            _this.presentConfirm(message1, message2, message3);
        });
        this.events.subscribe('app:hideloading', function () {
            _this.hideLoading();
        });
        this.events.subscribe('app:toast', function (message) {
            _this.presentToast(message);
        });
        this.events.subscribe('app:toast1', function (message) {
            _this.presentToast1(message);
        });
        this.events.subscribe('app:setUser', function (data) {
            _this.initUserLogged(data);
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
    MyApp.prototype.presentToast1 = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    };
    MyApp.prototype.initUserLogged = function (data) {
        this.loggedin = true;
        this.user = data;
        localStorage.setItem('jbb-data', JSON.stringify(data));
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_trashs_trashs__["a" /* trashs */]);
    };
    MyApp.prototype.testAuth = function () {
        var data = localStorage.getItem('userinfo');
        if (!data) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */]);
        }
        else {
            this.user = JSON.parse(data);
        }
    };
    MyApp.prototype.initComp = function () {
        var data = localStorage.getItem('userinfo');
        if (!data) {
            return __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */];
        }
        else {
            this.user = JSON.parse(data);
            return __WEBPACK_IMPORTED_MODULE_7__pages_trashs_trashs__["a" /* trashs */];
        }
    };
    MyApp.prototype.triggerLoggedOff = function () {
        localStorage.removeItem('userinfo');
        localStorage.removeItem('jbb-data');
        this.user = null;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */]);
    };
    MyApp.prototype.presentConfirm = function (message1, message2, message3) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: message1,
            message: message2,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        if (message3 === "1") {
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_trashslist_trashslist__["a" /* trashslist */]);
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n    <div class="spinner">\n        <div class="rect1"></div>\n        <div class="rect2"></div>\n        <div class="rect3"></div>\n        <div class="rect4"></div>\n        <div class="rect5"></div>\n    </div>\n  </div>\n\n<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="medcolor">\n      <ion-title style="margin-left: 6%;">TRUSH MANAGER APP</ion-title>\n      <div *ngIf="user"><h1 style="margin-top:2.5% !important; font-weight:bold; font-size:1.8em; color: brown; margin-left: 10%;">Welcome {{user.username}}</h1></div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n     \n\n    <ion-list *ngIf="user">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" style=" background-color: beige; border-bottom-color: black ;" large>\n        <h2 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n        {{p.title}}\n      </h2>\n      </button>\n      <button menuClose ion-item *ngIf="user"  (click)="triggerLoggedOff()" style=" background-color: beige; border-bottom-color: black ;" large>\n          <h6 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n              <ion-icon name="log-out" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n        Log out\n      </h6>\n      </button>\n\n    </ion-list>\n    <button menuClose ion-item *ngIf="!user"  (click)="openPage(pageLogin)" style=" background-color: beige; border-bottom-color: black ;" large>\n      <h3 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n          <ion-icon name="log-in" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n      Signin\n      </h3>\n    </button>\n    <button menuClose ion-item *ngIf="!user"  (click)="openPage(pageSignup)" style=" background-color: beige; border-bottom-color: black ;" large>\n      <h4 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n          <ion-icon name="contact" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n      Signup\n      </h4>\n    </button>\n\n    <button menuClose ion-item *ngIf="!user"  (click)="openPage(pageSplash)" style=" background-color: beige; border-bottom-color: black ;" large>\n      \n      <h5 style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;">\n          <ion-icon name="home" style="margin-top:2.5% !important; font-weight:bold; font-size:1em; color: brown;"></ion-icon>\n      Home\n    </h5>\n    </button>\n      \n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\app\app.html"*/
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

/***/ 484:
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
            return it.trush_address.toLowerCase().includes(terms); // only filter country name
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

/***/ 485:
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_authentication_authentication__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_signup__ = __webpack_require__(75);
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
//import { Component } from '@angular/core';




//import {signup} from '../../components/signup/signup';



/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_trashs_trashs__ = __webpack_require__(118);
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



/**
 * Generated class for the AuthenticationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AuthenticationComponent = (function () {
    function AuthenticationComponent(navCtrl, authprovider, events) {
        this.navCtrl = navCtrl;
        this.authprovider = authprovider;
        this.events = events;
        this.data = {
            username: '',
            password: ''
        };
    }
    AuthenticationComponent.prototype.signin = function () {
        var _this = this;
        this.authprovider.login(this.data)
            .then(function (Data) {
            _this.handleLoginSuccess(Data);
            console.log(Data);
        }).catch(function () {
            console.log("catched auth");
            _this.data.username = '';
            _this.data.password = '';
        });
    };
    AuthenticationComponent.prototype.handleLoginSuccess = function (Data) {
        this.events.publish('app:setUser', Data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_trashs_trashs__["a" /* trashs */]);
    };
    AuthenticationComponent.prototype.checkLoginDisable = function () {
        if (this.data.username.length == 0 || this.data.password.length == 0) {
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
        selector: 'authentication',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\authentication\authentication.html"*/'<ion-header>\n  <ion-navbar color="medcolor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n   <h1>Log In Page</h1>\n  </ion-navbar>\n</ion-header>\n  \n  \n<ion-content padding>\n    <ion-list>\n      <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="data.username"></ion-input>\n      </ion-item>\n  \n      <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="data.password"></ion-input>\n      </ion-item>\n  \n  \n      <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n    <div padding>\n       <button ion-button color="medcolor1"  block (click)="signin()" [disabled]="!checkLoginDisable()" >Log In</button>\n    </div>\n  </ion-item>\n  <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <div padding>\n         <button ion-button color="medcolor2" block (click)="signup()"  >Sign up</button>\n      </div>\n    </ion-item>\n\n    </ion-list>\n</ion-content>\n\n\n\n\n\n\n<ion-footer >\n      <ion-toolbar color="medcolor" >\n          \n      </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\authentication\authentication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]])
], AuthenticationComponent);

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(430);
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






/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthProvider = (function () {
    //token = this.local.token;
    //User_id = this.local.user_id;
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
            username: cred.username,
            password: hash,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.link + "/users/login", inscrit, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
                localStorage.setItem('userinfo', JSON.stringify(data));
                console.log(data);
            }, function (error) {
                _this.events.publish('app:toast', "Connection problem !!");
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
            //token: this.Token,
            username: cred.username,
            password: hash,
            email: cred.email,
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
                _this.events.publish('app:toast', "Connection problem !!");
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////// add test ////////////////////////////////////////////////////////////////////////////////////////////////  
    AuthProvider.prototype.addtrash2 = function (cred) {
        var _this = this;
        console.log(cred.trush_name);
        var userinfo = JSON.parse(localStorage.getItem('userinfo'));
        if (userinfo) {
            console.log(userinfo);
            var headers_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var inscrit_1 = {
                trush_name: cred.trush_name,
                trush_capacity: cred.trush_capacity,
                trush_address: cred.trush_address,
                trush_lg: 0,
                trush_al: 0,
                trush_id: cred.trush_id,
                treatment_number: 0,
                rubbish_weight: 0,
                user_id: userinfo.user_id,
                token: userinfo.token,
            };
            headers_1.append('Content-Type', 'application/json');
            return new Promise(function (resolve) {
                _this.http.post(_this.link + "/Trashs/addTrash", inscrit_1, { headers: headers_1 })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                    console.log(data);
                }, function (error) {
                    _this.events.publish('app:toast', JSON.parse(error._body).message);
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';
//import { LoginPage } from '../login/login';

//import { Auth } from '../../providers/auth/auth';




//import { CreateroomPage } from '../createroom/createroom';
//import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
/*
  Generated class for the Login page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var signup = (function () {
    function signup(navCtrl, auth, controle, alertCrtl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.controle = controle;
        this.alertCrtl = alertCrtl;
        this.toastCtrl = toastCtrl;
    }
    signup.prototype.Register = function (FormRegister) {
        var _this = this;
        var confpswd = this.controle.ctrpassword(FormRegister.password, FormRegister.confirmepassword);
        if (confpswd === "false") {
            var toast = this.toastCtrl.create({
                message: 'Incorrect password confirmation',
                duration: 3000
            });
            toast.present();
        }
        else {
            console.log(FormRegister);
            var dataregister = {
                username: FormRegister.username,
                password: FormRegister.password,
                email: FormRegister.email,
            };
            this.auth.register(dataregister).then(function (data) {
                if (data !== 'null') {
                    //var dataname=data.result 
                    var toast = _this.toastCtrl.create({
                        message: 'Your account has been successfully created',
                        duration: 3000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__authentication_authentication__["a" /* AuthenticationComponent */], data);
                }
                else {
                    FormRegister.username = '';
                    FormRegister.password = '';
                    FormRegister.email = '';
                    FormRegister.confirmepassword = '';
                    //this.msgerr= data.msg;
                    var toast = _this.toastCtrl.create({
                        message: 'Please fill in all the fields',
                        duration: 3000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__authentication_authentication__["a" /* AuthenticationComponent */], dataregister);
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
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\signup\signup.html"*/'<!--\n  Generated template for the Login page.\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n  <ion-header>\n\n    <ion-navbar color="medcolor">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n     <h1>Sign up Page</h1>\n    \n    \n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n<ion-content class="no-scroll">\n  <form #FormRegister="ngForm" (ngSubmit)="Register(FormRegister)">\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating> Username</ion-label>\n      <ion-icon name="heart"></ion-icon>\n      <ion-input [(ngModel)]="FormRegister.username" name="username" type="text" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Email</ion-label>\n      <ion-icon name="heart"></ion-icon>\n      <ion-input [(ngModel)]="FormRegister.email" name="email" type="email" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Password</ion-label>\n      <ion-input [(ngModel)]="FormRegister.password" name="password" type="password" required></ion-input>\n    </ion-item>\n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <ion-label floating>Password Confirmation </ion-label>\n      <ion-input [(ngModel)]="FormRegister.confirmepassword" name="confirmepassword" type="password" required></ion-input>\n    </ion-item>\n\n  \n\n    \n\n    <ion-item style="widows: 25%; height:25%; background-color: beige; border-bottom-color: black ;">\n      <button [disabled]="!FormRegister.form.valid" type="submit"  color="medcolor1"  ion-button round full ion-button>Sign up</button>\n    </ion-item>\n\n    \n   \n\n\n  </form>\n</ion-content>\n\n<ion-footer >\n    <ion-toolbar color="medcolor" >\n        \n    \n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\components\signup\signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
], signup);

//# sourceMappingURL=signup.js.map

/***/ })

},[400]);
//# sourceMappingURL=main.js.map