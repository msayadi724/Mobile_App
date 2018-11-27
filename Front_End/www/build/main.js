webpackJsonp([1],{

/***/ 119:
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

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testslist_testslist__ = __webpack_require__(60);
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
var tests = (function () {
    function tests(events, navCtrl, auth, controle, alertCrtl, toastCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.controle = controle;
        this.alertCrtl = alertCrtl;
        this.toastCtrl = toastCtrl;
        localStorage.removeItem('jbb-data3');
        events.publish('app:testAuth');
    }
    tests.prototype.addtest = function (data) {
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
        this.auth.addtest(dataregister).then(function (Data) {
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
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__testslist_testslist__["a" /* testslist */]);
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
    tests.prototype.gototrushlist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__testslist_testslist__["a" /* testslist */]);
    };
    return tests;
}());
tests = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\tests\tests.html"*/'<ion-header >\n\n        <ion-navbar color="medcolor">\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button> \n\n          <ion-title>Add Trush</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n        <form #data="ngForm" (ngSubmit)="addtest(data)">\n\n\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trush Name</ion-label>\n\n            <ion-input  [(ngModel)]="data.trush_name" name="trush_name" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trush Capacity</ion-label>\n\n            <ion-input  [(ngModel)]="data.trush_capacity" name="trush_capacity" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n        <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n            <ion-label floating> <ion-icon name="search" ></ion-icon> Trush Address</ion-label>\n\n            <ion-input  [(ngModel)]="data.trush_address" name="trush_address" type="text" required></ion-input>\n\n       \n\n           \n\n        </ion-item>\n\n    \n\n            <ion-item style="widows: 15%; height:15%; background-color: beige; border-bottom-color: black ;" >\n\n          \n\n                    <ion-label floating> <ion-icon name="search"></ion-icon>Trush ID</ion-label>\n\n                    <ion-input  [(ngModel)]="data.trush_id" name="trush_id" type="text" required></ion-input>\n\n               \n\n                   \n\n                </ion-item>\n\n               \n\n\n\n        <ion-item style="widows: 13%; height:13%; background-color: beige; border-bottom-color: black ;" >\n\n            <div padding>\n\n               <button ion-button [disabled]="!data.form.valid" type="submit" color="medcolor1" block >Add Trush</button>\n\n            </div>\n\n          </ion-item>\n\n        </form>\n\n          <ion-item style="widows: 13%; height:13%; background-color: beige; border-bottom-color: black ;" >\n\n                <div padding>\n\n                   <button ion-button   color="medcolor2" (click)="gototrushlist()" block >Go To Trush Liste</button>\n\n                </div>\n\n              </ion-item>\n\n              \n\n  \n\n        </ion-content>   \n\n        <ion-footer >\n\n                <ion-toolbar color="medcolor" >\n\n                </ion-toolbar>\n\n            </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\tests\tests.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__["a" /* ControleProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */]])
], tests);

//# sourceMappingURL=tests.js.map

/***/ }),

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/splash/splash.module": [
		637,
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
webpackAsyncContext.id = 202;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(409);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_controle_controle__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_authentication_authentication__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_main_service_main_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tests_tests__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_testslist_testslist__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_search_search__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_sort_sort__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_stats_stats__ = __webpack_require__(636);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic_img_viewer__ = __webpack_require__(377);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__components_authentication_authentication__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_signup_signup__["a" /* signup */],
            __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__["b" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tests_tests__["a" /* tests */],
            __WEBPACK_IMPORTED_MODULE_15__pages_testslist_testslist__["a" /* testslist */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_search_search__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_sort_sort__["a" /* SortPipe */],
            __WEBPACK_IMPORTED_MODULE_19__pages_stats_stats__["a" /* StatPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'PopoverPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20_ionic_img_viewer__["b" /* IonicImageViewerModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_charts__["ChartsModule"],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__components_authentication_authentication__["a" /* AuthenticationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_signup_signup__["a" /* signup */],
            __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_splash_splash__["b" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tests_tests__["a" /* tests */],
            __WEBPACK_IMPORTED_MODULE_15__pages_testslist_testslist__["a" /* testslist */],
            __WEBPACK_IMPORTED_MODULE_19__pages_stats_stats__["a" /* StatPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_main_service_main_service__["a" /* MainServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_controle_controle__["a" /* ControleProvider */],
            __WEBPACK_IMPORTED_MODULE_20_ionic_img_viewer__["b" /* IonicImageViewerModule */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
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
webpackContext.id = 456;

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tests_tests__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_testslist_testslist__ = __webpack_require__(60);
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
            { title: 'Add Trush', component: __WEBPACK_IMPORTED_MODULE_7__pages_tests_tests__["a" /* tests */] },
            { title: 'Trush List', component: __WEBPACK_IMPORTED_MODULE_8__pages_testslist_testslist__["a" /* testslist */] },
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_tests_tests__["a" /* tests */]);
    };
    MyApp.prototype.testAuth = function () {
        var data = localStorage.getItem('jbb-data');
        if (!data) {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */]);
        }
        else {
            this.user = JSON.parse(data);
        }
    };
    MyApp.prototype.initComp = function () {
        var data = localStorage.getItem('jbb-data');
        if (!data) {
            return __WEBPACK_IMPORTED_MODULE_5__components_authentication_authentication__["a" /* AuthenticationComponent */];
        }
        else {
            this.user = JSON.parse(data);
            return __WEBPACK_IMPORTED_MODULE_7__pages_tests_tests__["a" /* tests */];
        }
    };
    MyApp.prototype.triggerLoggedOff = function () {
        localStorage.removeItem('jbb-data');
        localStorage.removeItem('jbb-data1');
        localStorage.removeItem('jbb-data2');
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
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_testslist_testslist__["a" /* testslist */]);
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

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testslist_testslist__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(auth, toastCtrl, events, navCtrl, mainServiceProvider, navParams, imageViewerCtrl) {
        var _this = this;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.mainServiceProvider = mainServiceProvider;
        this.navParams = navParams;
        this.timeLeft = 0;
        this.visited1 = null;
        this.rssi1 = null;
        this.r1 = null;
        this.f1 = null;
        this.a1 = null;
        this.visited2 = null;
        this.rssi2 = null;
        this.r2 = null;
        this.f2 = null;
        this.a2 = null;
        this.visited3 = null;
        this.rssi3 = null;
        this.r3 = null;
        this.f3 = null;
        this.a3 = null;
        this.visited4 = null;
        this.rssi4 = null;
        this.r4 = null;
        this.f4 = null;
        this.a4 = null;
        this.visited5 = null;
        this.rssi5 = null;
        this.r5 = null;
        this.f5 = null;
        this.a5 = null;
        this.visited6 = null;
        this.rssi6 = null;
        this.r6 = null;
        this.f6 = null;
        this.a6 = null;
        this.visited7 = null;
        this.rssi7 = null;
        this.r7 = null;
        this.f7 = null;
        this.a7 = null;
        this.visited8 = null;
        this.rssi8 = null;
        this.r8 = null;
        this.f8 = null;
        this.a8 = null;
        this.visited9 = null;
        this.rssi9 = null;
        this.r9 = null;
        this.f9 = null;
        this.a9 = null;
        this.visited10 = null;
        this.rssi10 = null;
        this.r10 = null;
        this.f10 = null;
        this.a10 = null;
        this.visited11 = null;
        this.rssi11 = null;
        this.r11 = null;
        this.f11 = null;
        this.a11 = null;
        this.visited12 = null;
        this.rssi12 = null;
        this.r12 = null;
        this.f12 = null;
        this.a12 = null;
        this.updated = false;
        this.day = 0;
        this.min = 0;
        this.hours = 0;
        this.dayf = 0;
        this.minf = 0;
        this.hoursf = 0;
        this.current_pos = 0;
        this.test_finished = "no";
        this._imageViewerCtrl = imageViewerCtrl;
        events.publish('app:testAuth');
        localStorage.removeItem('jbb-data2');
        var local = JSON.parse(localStorage.getItem('jbb-data1'));
        if (local) {
            console.log(local);
            this.today = Date.now();
            this.idtest = local.idtest;
            this.auth.gettestinfo(this.idtest).then(function (Data) {
                if (Data !== 'null') {
                    _this.local1 = JSON.parse(localStorage.getItem('jbb-data2'));
                    console.log(_this.local1);
                    if (_this.local1) {
                        _this.test_type = _this.local1.test_type;
                        _this.test_version = _this.local1.test_version;
                        _this.robot_id = _this.local1.robot_id;
                        _this.ssid = _this.local1.ssid;
                        _this.finished = _this.local1.finished;
                        _this.minf = _this.local1.seconds;
                        _this.hoursf = _this.local1.mins;
                        _this.dayf = _this.local1.hours;
                    }
                    _this.loadData(local);
                }
                else { }
            });
            var timer = setInterval(function () {
                if (_this.local1) {
                    if (_this.current_pos != 12 && _this.local1.finished != "Yes") {
                        _this.timeLeft += 1;
                        if (_this.timeLeft == 60) {
                            _this.min += 1;
                            _this.timeLeft = 0;
                        }
                        else if (_this.min == 60) {
                            _this.hours += 1;
                            _this.min = 0;
                        }
                        else if (_this.hours == 60) {
                            _this.day += 1;
                            _this.hours = 0;
                        }
                    }
                    else {
                        clearInterval(timer);
                    }
                }
            }, 2000);
            console.log("current position " + this.current_pos);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__testslist_testslist__["a" /* testslist */]);
        }
    }
    HomePage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    HomePage.prototype.refresh = function () {
        var _this = this;
        console.log(this.minf);
        var iditem = localStorage.getItem('jbb-data3');
        this.mainServiceProvider.loadHomeData2(iditem)
            .then(function (data) {
            var local = JSON.parse(localStorage.getItem('jbb-data1'));
            if (local) {
                _this.loadData(local);
            }
            else {
            }
        }).then(function (data) {
        }), function (err) {
        };
        console.log("Refresh at " + __WEBPACK_IMPORTED_MODULE_6_moment__().format('LTS'));
    };
    HomePage.prototype.stopRefresh = function () {
        clearInterval(this.timeoutId);
    };
    HomePage.prototype.initRefresh = function () {
        var _this = this;
        this.refresh();
        this.timeoutId = setInterval(function () { return _this.refresh(); }, 1 * 1000);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.initRefresh();
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.stopRefresh();
    };
    HomePage.prototype.manualRefresh = function () {
        this.stopRefresh();
        this.initRefresh();
    };
    HomePage.prototype.loadData = function (local) {
        var _this = this;
        console.log(local);
        for (var i = 0; i < local.payload.length; i++) {
            if (local.payload[i]) {
                console.log(local.payload[i]);
                if (local.payload[i].command === "m" && local.payload[i].POS === "1") {
                    this.visited1 = 1;
                    this.current_pos = 1;
                    this.rssi1 = local.payload[i].signal;
                    this.r1 = local.payload[i].Rates;
                    this.f1 = local.payload[i].Frequency;
                    this.a1 = local.payload[i].Address;
                    //break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "2") {
                    this.visited2 = 1;
                    this.current_pos = 2;
                    this.rssi2 = local.payload[i].signal;
                    this.r2 = local.payload[i].Rates;
                    this.f2 = local.payload[i].Frequency;
                    this.a2 = local.payload[i].Address;
                    //break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "3") {
                    this.visited3 = 1;
                    this.current_pos = 3;
                    this.rssi3 = local.payload[i].signal;
                    this.r3 = local.payload[i].Rates;
                    this.f3 = local.payload[i].Frequency;
                    this.a3 = local.payload[i].Address;
                    // break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "4") {
                    this.visited4 = 1;
                    this.current_pos = 4;
                    this.rssi4 = local.payload[i].signal;
                    this.r4 = local.payload[i].Rates;
                    this.f4 = local.payload[i].Frequency;
                    this.a4 = local.payload[i].Address;
                    // break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "5") {
                    this.visited5 = 1;
                    this.current_pos = 5;
                    this.rssi5 = local.payload[i].signal;
                    this.r5 = local.payload[i].Rates;
                    this.f5 = local.payload[i].Frequency;
                    this.a5 = local.payload[i].Address;
                    // break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "6") {
                    this.visited6 = 1;
                    this.current_pos = 6;
                    this.rssi6 = local.payload[i].signal;
                    this.r6 = local.payload[i].Rates;
                    this.f6 = local.payload[i].Frequency;
                    this.a6 = local.payload[i].Address;
                    //break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "7") {
                    this.visited7 = 1;
                    this.current_pos = 7;
                    this.rssi7 = local.payload[i].signal;
                    this.r7 = local.payload[i].Rates;
                    this.f7 = local.payload[i].Frequency;
                    this.a7 = local.payload[i].Address;
                    // break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "8") {
                    this.visited8 = 1;
                    this.current_pos = 8;
                    this.rssi8 = local.payload[i].signal;
                    this.r8 = local.payload[i].Rates;
                    this.f8 = local.payload[i].Frequency;
                    this.a8 = local.payload[i].Address;
                    //break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "9") {
                    this.visited9 = 1;
                    this.current_pos = 9;
                    this.rssi9 = local.payload[i].signal;
                    this.r9 = local.payload[i].Rates;
                    this.f9 = local.payload[i].Frequency;
                    this.a9 = local.payload[i].Address;
                    //break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "10") {
                    this.visited10 = 1;
                    this.current_pos = 10;
                    this.rssi10 = local.payload[i].signal;
                    this.r10 = local.payload[i].Rates;
                    this.f10 = local.payload[i].Frequency;
                    this.a10 = local.payload[i].Address;
                    // break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "11") {
                    this.visited11 = 1;
                    this.current_pos = 11;
                    this.rssi11 = local.payload[i].signal;
                    this.r11 = local.payload[i].Rates;
                    this.f11 = local.payload[i].Frequency;
                    this.a11 = local.payload[i].Address;
                    //break;
                }
                if (local.payload[i].command === "m" && local.payload[i].POS === "12") {
                    this.visited12 = 1;
                    this.current_pos = 12;
                    this.rssi12 = local.payload[i].signal;
                    this.r12 = local.payload[i].Rates;
                    this.f12 = local.payload[i].Frequency;
                    this.a12 = local.payload[i].Address;
                    //break;
                }
            }
        }
        this.auth.gettestinfo(this.idtest).then(function (Data) {
            if (Data !== 'null') {
                _this.local1 = JSON.parse(localStorage.getItem('jbb-data2'));
                console.log(_this.local1);
            }
            else { }
        });
        if (this.local1) {
            if (this.local1.finished === "No" && this.visited12 && !this.updated) {
                this.minf = this.timeLeft;
                this.hoursf = this.min;
                this.dayf = this.hours;
                console.log(this.local1);
                console.log(this.updated);
                console.log(this.local1.finished);
                console.log(this.visited12);
                console.log(this.timeLeft);
                console.log(this.current_pos);
                console.log('hhhhhhhhhhhhhhhh');
                var dataregister = {
                    test_version: this.local1.test_version,
                    robot_id: this.local1.robot_id,
                    test_type: this.local1.test_type,
                    ssid: this.local1.ssid,
                    password: this.local1.password,
                    finished: "Yes",
                    seconds: this.minf,
                    mins: this.hoursf,
                    hours: this.dayf,
                    idtest: this.idtest
                };
                console.log(this.local1);
                console.log(this.updated);
                console.log(this.local1.finished);
                console.log(this.visited12);
                console.log(this.timeLeft);
                console.log(this.current_pos);
                console.log('hhhhhhhhhhhhhhhh');
                console.log(dataregister);
                this.updated = true;
                this.auth.updatetest(dataregister).then(function (Data) {
                });
            }
        }
        else {
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\home\home.html"*/'<ion-header >\n  <ion-navbar color="medcolor">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> \n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="card-background-page" >\n    <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n        \n       \n        \n        <div  style=" left:15%; font-size: 1em; color:brown;"><h1>Test Info</h1></div>\n        <div><h1 style="font-size: 0.6em;">Robot ID : {{robot_id}}</h1></div>\n        <div><h1 style="font-size: 0.6em;">Test type : {{test_type}}</h1></div>\n        <div><h1 style="font-size: 0.6em;">SSID : {{ssid}}</h1></div>\n        <div><h1 style="font-size: 0.6em;">Test Version : {{test_version}}</h1></div>\n        <div><h1 style="font-size: 0.6em;" *ngIf="!visited12">Test Delay : {{hours}}h:{{min}}m:{{timeLeft}}s </h1></div>\n        <div><h1 style="font-size: 0.6em;" *ngIf="visited12">Test Delay : {{dayf}}h:{{hoursf}}m:{{minf}}s  </h1></div>\n\n        <button ion-button round full type="button"   (click)="manualRefresh()" color="medcolor">Refresh Page</button>\n       \n      \n      \n         \n       </ion-item>\n       <ion-item >\n\n\n          <img style="widows: 500px; height:380px; object-fit: cover" src="assets/imgs/Image1.png"  #myImage (click)="presentImage(myImage)">\n       </ion-item>\n\n  \n    <ion-item style="widows: 20%; height:20%; background-color: beige; border-bottom-color: black ;">\n  \n  \n        <ion-card classe="card1">\n       \n        \n        <div style="top: 4%; position: absolute; left:-11%; font-size: 1.8em; width: 100%; font-weight: bold; color:brown;">Curent position</div>\n        <div class="card-subtitle8" style=" top: 50%;" *ngIf="!visited1">You didn\'t start this test</div>\n        <div class="card-subtitle8" style=" top: 50%;" *ngIf="visited1">{{current_pos}}</div>\n        <ion-icon style= "font-size: 230% ;  color:gray;  position: absolute; right:90%; top:2%;   "  name="pin" ></ion-icon>\n\n      \n      \n         </ion-card>\n       </ion-item>\n      \n  <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n    <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 1</h1></div>\n    <div *ngIf="rssi1"><h1 style="font-size: 0.6em;">RSSI : {{rssi1}}</h1></div>\n    <div  *ngIf="r1"><h1 style="font-size: 0.6em;">B.R : {{r1}} Mb/s</h1></div>\n    <div  *ngIf="f1"><h1 style="font-size: 0.6em;">Freq : {{f1}} Ghz</h1></div>\n    <div *ngIf="a1"><h1 style="font-size: 0.6em;">  Connected to : {{a1}}</h1></div>\n    \n    <div  *ngIf="!visited1"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n    \n    \n   \n\n    <div *ngIf="visited1"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n    <div *ngIf="visited1"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n    <div *ngIf="!visited1"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n    <div *ngIf="!visited1"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n    \n  \n  \n   </ion-item>\n  \n     <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n        <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 2</h1></div>\n        <div *ngIf="rssi2"><h1 style="font-size: 0.6em;">RSSI : {{rssi2}}</h1></div>\n        <div  *ngIf="r2"><h1 style="font-size: 0.6em;">B.R : {{r2}} Mb/s</h1></div>\n        <div  *ngIf="f2"><h1 style="font-size: 0.6em;">Freq : {{f2}} Ghz</h1></div>\n        <div *ngIf="a2"><h1 style="font-size: 0.6em;">  Connected to : {{a2}}</h1></div>\n        \n        <div  *ngIf="!visited2"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n        \n        \n       \n    \n        <div *ngIf="visited2"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n        <div *ngIf="visited2"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n        <div *ngIf="!visited2"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n        <div *ngIf="!visited2"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n        \n      \n      \n       </ion-item>\n       <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n          <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 3</h1></div>\n          <div *ngIf="rssi3"><h1 style="font-size: 0.6em;">RSSI : {{rssi3}}</h1></div>\n          <div  *ngIf="r3"><h1 style="font-size: 0.6em;">B.R : {{r3}} Mb/s</h1></div>\n          <div  *ngIf="f3"><h1 style="font-size: 0.6em;">Freq : {{f3}} Ghz</h1></div>\n          <div *ngIf="a3"><h1 style="font-size: 0.6em;">  Connected to : {{a3}}</h1></div>\n          \n          <div  *ngIf="!visited3"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n          \n          \n         \n      \n          <div *ngIf="visited3"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n          <div *ngIf="visited3"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n          <div *ngIf="!visited3"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n          <div *ngIf="!visited3"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n          \n        \n        \n         </ion-item>\n         <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n            <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 4</h1></div>\n            <div *ngIf="rssi4"><h1 style="font-size: 0.6em;">RSSI : {{rssi4}}</h1></div>\n            <div  *ngIf="r4"><h1 style="font-size: 0.6em;">B.R : {{r4}} Mb/s</h1></div>\n            <div  *ngIf="f4"><h1 style="font-size: 0.6em;">Freq : {{f4}} Ghz</h1></div>\n            <div *ngIf="a4"><h1 style="font-size: 0.6em;">  Connected to : {{a4}}</h1></div>\n            \n            <div  *ngIf="!visited4"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n            \n            \n           \n        \n            <div *ngIf="visited4"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n            <div *ngIf="visited4"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n            <div *ngIf="!visited4"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n            <div *ngIf="!visited4"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n            \n          \n          \n           </ion-item>\n           <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n              <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 5</h1></div>\n              <div *ngIf="rssi5"><h1 style="font-size: 0.6em;">RSSI : {{rssi5}}</h1></div>\n              <div  *ngIf="r5"><h1 style="font-size: 0.6em;">B.R : {{r5}} Mb/s</h1></div>\n              <div  *ngIf="f5"><h1 style="font-size: 0.6em;">Freq : {{f5}} Ghz</h1></div>\n              <div *ngIf="a5"><h1 style="font-size: 0.6em;">  Connected to : {{a5}}</h1></div>\n              \n              <div  *ngIf="!visited5"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n              \n              \n             \n          \n              <div *ngIf="visited5"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n              <div *ngIf="visited5"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n              <div *ngIf="!visited5"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n              <div *ngIf="!visited5"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n              \n            \n            \n             </ion-item>\n             <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 6</h1></div>\n                <div *ngIf="rssi6"><h1 style="font-size: 0.6em;">RSSI : {{rssi6}}</h1></div>\n                <div  *ngIf="r6"><h1 style="font-size: 0.6em;">B.R : {{r6}} Mb/s</h1></div>\n                <div  *ngIf="f6"><h1 style="font-size: 0.6em;">Freq : {{f6}} Ghz</h1></div>\n                <div *ngIf="a6"><h1 style="font-size: 0.6em;">  Connected to : {{a6}}</h1></div>\n                \n                <div  *ngIf="!visited6"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                \n                \n               \n            \n                <div *ngIf="visited6"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                <div *ngIf="visited6"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                <div *ngIf="!visited6"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                <div *ngIf="!visited6"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                \n              \n              \n               </ion-item>\n               <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                  <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 7</h1></div>\n                  <div *ngIf="rssi7"><h1 style="font-size: 0.6em;">RSSI : {{rssi7}}</h1></div>\n                  <div  *ngIf="r7"><h1 style="font-size: 0.6em;">B.R : {{r7}} Mb/s</h1></div>\n                  <div  *ngIf="f7"><h1 style="font-size: 0.6em;">Freq : {{f7}} Ghz</h1></div>\n                  <div *ngIf="a7"><h1 style="font-size: 0.6em;">  Connected to : {{a7}}</h1></div>\n                  \n                  <div  *ngIf="!visited7"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                  \n                  \n                 \n              \n                  <div *ngIf="visited7"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                  <div *ngIf="visited7"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                  <div *ngIf="!visited7"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                  <div *ngIf="!visited7"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                  \n                \n                \n                 </ion-item>\n                 <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                    <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 8</h1></div>\n                    <div *ngIf="rssi8"><h1 style="font-size: 0.6em;">RSSI : {{rssi8}}</h1></div>\n                    <div  *ngIf="r8"><h1 style="font-size: 0.6em;">B.R : {{r8}} Mb/s</h1></div>\n                    <div  *ngIf="f8"><h1 style="font-size: 0.6em;">Freq : {{f8}} Ghz</h1></div>\n                    <div *ngIf="a8"><h1 style="font-size: 0.6em;">  Connected to : {{a8}}</h1></div>\n                    \n                    <div  *ngIf="!visited8"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                    \n                    \n                   \n                \n                    <div *ngIf="visited8"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                    <div *ngIf="visited8"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                    <div *ngIf="!visited8"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                    <div *ngIf="!visited8"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                    \n                  \n                  \n                   </ion-item>\n                   <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                      <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 9</h1></div>\n                      <div *ngIf="rssi9"><h1 style="font-size: 0.6em;">RSSI : {{rssi9}}</h1></div>\n                      <div  *ngIf="r9"><h1 style="font-size: 0.6em;">B.R : {{r9}} Mb/s</h1></div>\n                      <div  *ngIf="f9"><h1 style="font-size: 0.6em;">Freq : {{f9}} Ghz</h1></div>\n                      <div *ngIf="a9"><h1 style="font-size: 0.6em;">  Connected to : {{a9}}</h1></div>\n                      \n                      <div  *ngIf="!visited9"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                      \n                      \n                     \n                  \n                      <div *ngIf="visited9"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                      <div *ngIf="visited9"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                      <div *ngIf="!visited9"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                      <div *ngIf="!visited9"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                      \n                    \n                    \n                     </ion-item>\n                     <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                        <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 10</h1></div>\n                        <div *ngIf="rssi10"><h1 style="font-size: 0.6em;">RSSI : {{rssi10}}</h1></div>\n                        <div  *ngIf="r10"><h1 style="font-size: 0.6em;">B.R : {{r10}} Mb/s</h1></div>\n                        <div  *ngIf="f10"><h1 style="font-size: 0.6em;">Freq : {{f10}} Ghz</h1></div>\n                        <div *ngIf="a10"><h1 style="font-size: 0.6em;">  Connected to : {{a10}}</h1></div>\n                        \n                        <div  *ngIf="!visited10"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                        \n                        \n                       \n                    \n                        <div *ngIf="visited10"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                        <div *ngIf="visited10"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                        <div *ngIf="!visited10"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                        <div *ngIf="!visited10"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                        \n                      \n                      \n                       </ion-item>\n                       <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                          <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 11</h1></div>\n                          <div *ngIf="rssi11"><h1 style="font-size: 0.6em;">RSSI : {{rssi11}}</h1></div>\n                          <div  *ngIf="r11"><h1 style="font-size: 0.6em;">B.R : {{r11}} Mb/s</h1></div>\n                          <div  *ngIf="f11"><h1 style="font-size: 0.6em;">Freq : {{f11}} Ghz</h1></div>\n                          <div *ngIf="a11"><h1 style="font-size: 0.6em;">  Connected to : {{a11}}</h1></div>\n                          \n                          <div  *ngIf="!visited11"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                          \n                          \n                         \n                      \n                          <div *ngIf="visited11"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                          <div *ngIf="visited11"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                          <div *ngIf="!visited11"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                          <div *ngIf="!visited11"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                          \n                        \n                        \n                         </ion-item>\n                         <ion-item style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n  \n  \n  \n   \n    \n                            <div  style="position: absolute; top : 5%; left:15%; font-size: 1em; color:brown;" ><h1 >Position 12</h1></div>\n                            <div *ngIf="rssi12"><h1 style="font-size: 0.6em;">RSSI : {{rssi12}}</h1></div>\n                            <div  *ngIf="r12"><h1 style="font-size: 0.6em;">B.R : {{r12}} Mb/s</h1></div>\n                            <div  *ngIf="f12"><h1 style="font-size: 0.6em;">Freq : {{f12}} Ghz</h1></div>\n                            <div *ngIf="a12"><h1 style="font-size: 0.6em;">  Connected to : {{a12}}</h1></div>\n                            \n                            <div  *ngIf="!visited12"><h1 style=" position: absolute; font-size: 0.6em; top : 30%; left : 30%">Waiting for connection....</h1></div>\n                            \n                            \n                           \n                        \n                            <div *ngIf="visited12"><ion-icon  name="checkmark" style="position: absolute; color: green ; right: 63%"  ></ion-icon></div>\n                            <div *ngIf="visited12"><h1 style="position: absolute; color: green ; right: 40% ; margin-top: 1%" >Visited</h1></div>\n                            <div *ngIf="!visited12"><ion-icon  name="close" style="position: absolute; color: red ; right: 75% ; bottom: 4%"  ></ion-icon></div>\n                            <div *ngIf="!visited12"><h1 style="position: absolute; color: red ; right: 30% ;  bottom: 5% ;" >Not yet visited</h1></div>\n                            \n                          \n                          \n                         </ion-item>\n                                                                                                                                      \n   \n</ion-content>\n\n<ion-footer >\n    <ion-toolbar color="medcolor" >\n        \n        <img  src="assets/imgs/sagem.png" >\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["a" /* ImageViewerController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(431);
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
        var hash = __WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.SHA256(cred.password).toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js___default.a.enc.Hex);
        var inscrit = {
            username: cred.username,
            password: hash,
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.link + "/auth", inscrit, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
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
            email: cred.email
        };
        headers.append('Content-Type', 'application/json');
        return new Promise(function (resolve) {
            _this.http.post(_this.link + "/users", inscrit, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { resolve(data); }, function (error) {
                _this.events.publish('app:toast', "Connection problem !!");
            });
        });
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////// add test ////////////////////////////////////////////////////////////////////////////////////////////////  
    AuthProvider.prototype.addtest = function (cred) {
        var _this = this;
        console.log(cred.trush_name);
        var local = JSON.parse(localStorage.getItem('jbb-data'));
        if (local) {
            this.User_id = local.user_id;
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
                user_id: this.User_id,
                Salt: local.Salt,
                token: local.token
            };
            headers_1.append('Content-Type', 'application/json');
            return new Promise(function (resolve) {
                _this.http.post(_this.link + "/addTrash", inscrit_1, { headers: headers_1 })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) { resolve(data); }, function (error) {
                    _this.events.publish('app:toast', JSON.parse(error._body).message);
                });
            });
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    AuthProvider.prototype.updatetest = function (cred) {
        var _this = this;
        var local = JSON.parse(localStorage.getItem('jbb-data'));
        if (local) {
            this.User_id = local.user_id;
            var headers_2 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            var inscrit_2 = {
                test_version: cred.test_version,
                robot_id: cred.robot_id,
                test_type: cred.test_type,
                ssid: cred.ssid,
                password: cred.password,
                finished: cred.finished,
                seconds: cred.seconds,
                mins: cred.mins,
                hours: cred.hours,
                user_id: this.User_id,
                token: local.token,
                Salt: local.Salt,
                idtest: cred.idtest
            };
            headers_2.append('Content-Type', 'application/json');
            return new Promise(function (resolve) {
                _this.http.post(_this.link + "/updatetest", inscrit_2, { headers: headers_2 })
                    .subscribe(function (data) {
                    if (data) {
                        _this.events.publish('app:alerte', "Test Updated", "Your test has been successfully updated", "1");
                    }
                }, function (error) {
                    _this.events.publish('app:alerte', "Test Not Updated", "There is a problem while updating this test !!!", "1");
                });
            });
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////// get test info /////////////////////////////////////////////////////////////////////////////////////////  
    AuthProvider.prototype.gettestinfo = function (idtest) {
        var _this = this;
        //let hash = CryptoJS.SHA256(cred.password).toString(CryptoJS.enc.Hex);
        var local = JSON.parse(localStorage.getItem('jbb-data'));
        if (local) {
            var User_id = local.user_id;
            var Token = local.token;
            var data_1 = {
                user_id: User_id,
                token: Token,
                idtest: idtest,
                Salt: local.Salt
            };
            var headers_3 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers_3.append('Content-Type', 'application/json');
            return new Promise(function (resolve) {
                _this.http.post(_this.link + "/gettestinfo", data_1, { headers: headers_3 })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data.result);
                    localStorage.setItem('jbb-data2', JSON.stringify(data.result));
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */]) === "function" && _c || Object])
], AuthProvider);

var _a, _b, _c;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 587:
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

/***/ 588:
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

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return testslist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__ = __webpack_require__(77);
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





var testslist = (function () {
    function testslist(events, navCtrl, mainServiceProvider, toastCtrl) {
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
    testslist.prototype.refresh = function () {
        console.log("Refresh at " + __WEBPACK_IMPORTED_MODULE_3_moment__().format('LTS'));
    };
    testslist.prototype.stopRefresh = function () {
        clearInterval(this.timeoutId);
    };
    testslist.prototype.initRefresh = function () {
        var _this = this;
        //localStorage.removeItem('jbb-data3');
        this.refresh();
        this.timeoutId = setInterval(function () { return _this.refresh(); }, 5 * 1000);
    };
    testslist.prototype.ionViewDidEnter = function () {
        this.initRefresh();
    };
    testslist.prototype.ionViewDidLeave = function () {
        this.stopRefresh();
    };
    testslist.prototype.manualRefresh = function () {
        this.stopRefresh();
        this.initRefresh();
    };
    testslist.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    /////////////////////////////////////////////////////////////////////////////////// load data to testslist ///////////////////////////////////////////////////////////////////////////////// 
    testslist.prototype.loadData = function () {
        var _this = this;
        this.mainServiceProvider.loadHomeData()
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
    testslist.prototype.delete = function (iditem) {
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
    return testslist;
}());
testslist = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-testslist',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\testslist\testslist.html"*/'<ion-header >\n\n  <ion-navbar color="medcolor">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button> \n\n    <ion-title>Trush List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n      \n\n      <ion-content >\n\n          \n\n         \n\n          \n\n        <ion-item style="widows: 20%; height:20%; background-color: rgb(223, 204, 182); border-bottom-color: black ;">\n\n          <ion-searchbar  [(ngModel)]="terms"></ion-searchbar>\n\n          <button ion-button round full type="button"  (click)="sort()" (click)="manualRefresh()" color="medcolor">Sort</button>\n\n        </ion-item>\n\n          <ion-list >\n\n          <ion-item *ngFor="let item of items  | search : terms | sort: {property: column, order: order}"  style="widows: 40%; height:40%; background-color: beige; border-bottom-color: black ;">\n\n             <div><h1 style="font-size: 1em;">Trush Name :     {{item.trush_name}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trush Address :     {{item.trush_address}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trush Capacity :     {{item.trush_capacity}}</h1></div> \n\n             <div><h1 style="font-size: 1em;">Trush ID :     {{item.trush_id}}</h1></div> \n\n            \n\n             \n\n             <div>\n\n                \n\n\n\n                \n\n                \n\n                <button ion-button round full style="font-size:120%;" color="medcolor2" (click)="delete(item._id)">Delete</button>\n\n                \n\n            </div>\n\n            <div>\n\n              <button ion-button round full style="font-size:120%; " (click)="stat(item)" color="medcolor" >Status</button>\n\n            </div>\n\n            <div><button ion-button round full style="font-size:120%;" color="medcolor2" (click)="dashboard(item)">Go To Maps</button></div>\n\n          </ion-item>\n\n      </ion-list>\n\n    \n\n    \n\n      </ion-content>\n\n      <ion-footer >\n\n          <ion-toolbar color="medcolor" >\n\n              \n\n            \n\n          </ion-toolbar>\n\n      </ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\testslist\testslist.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
], testslist);

//# sourceMappingURL=testslist.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(11);
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

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testslist_testslist__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatPage = (function () {
    function StatPage(auth, toastCtrl, events, navCtrl, mainServiceProvider, navParams) {
        var _this = this;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.navCtrl = navCtrl;
        this.mainServiceProvider = mainServiceProvider;
        this.navParams = navParams;
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(100,159,177,0.2)',
                borderColor: 'rgba(100,159,177,1)',
                pointBackgroundColor: 'rgba(100,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(100,159,177,0.8)'
            }
        ];
        this.lineChartColors2 = [
            {
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: ['rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ];
        this.lineChartLabels = ['Pos 1', 'Pos 2', 'Pos 3', 'Pos 4', 'Pos 5', 'Pos 6', 'Pos 7', 'Pos 8', 'Pos 9', 'Pos 10', 'Pos 11', 'Pos 12'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartData = [
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'AP 1' },
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'AP 2' },
            { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: 'AP 3' }
        ];
        this.lineChartType = 'line';
        this.doughnutChartLabels = ["AP1 MAC @", 'AP2 MAC @', 'AP3 MAC @'];
        this.doughnutChartData = [];
        this.doughnutChartType = 'doughnut';
        this.AP1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.AP2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.AP3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.count1 = 0;
        this.count2 = 0;
        this.count3 = 0;
        this.current_pos = 0;
        events.publish('app:testAuth');
        var local = JSON.parse(localStorage.getItem('jbb-data1'));
        this.idtest = local.idtest;
        console.log(this.idtest);
        this.auth.gettestinfo(this.idtest).then(function (Data) {
            if (Data !== 'null') {
                var local1 = JSON.parse(localStorage.getItem('jbb-data2'));
                if (local1) {
                    _this.test_type = local1.test_type;
                    _this.test_version = local1.test_version;
                    _this.robot_id = local1.robot_id;
                    _this.ssid = local1.ssid;
                    _this.loaddata(local);
                }
            }
            else {
            }
        });
    }
    StatPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    StatPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    StatPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ///////////////////////////////////////////////////////////////////////////// load data ///////////////////////////////////////////////////////////////   
    StatPage.prototype.loaddata = function (local) {
        if (local) {
            console.log(local);
            var add1 = false;
            var add2 = false;
            var add3 = false;
            var A1 = "Not Associeted";
            var A2 = "Not Associeted";
            var A3 = "Not Associeted";
            for (var i = 0; i < local.payload.length; i++) {
                console.log(local.payload[i].command);
                if (local.payload[i].command === "y" && !add1 && !add2 && !add3) {
                    add1 = !add1;
                    A1 = local.payload[i].Address;
                    this.doughnutChartLabels[0] = "AP1 : " + A1;
                }
                else if (local.payload[i].command === "y" && !add2 && !add3 && add1 && A1 != local.payload[i].Address) {
                    add2 = !add2;
                    A2 = local.payload[i].Address;
                    this.doughnutChartLabels[1] = "AP2 : " + A2;
                }
                else if (local.payload[i].command === "y" && !add3 && add1 && add2 && A1 != local.payload[i].Address && A2 != local.payload[i].Address) {
                    add3 = !add3;
                    A3 = local.payload[i].Address;
                    this.doughnutChartLabels[2] = "AP3 : " + A3;
                }
            }
            var l = 0;
            var m = 0;
            var n = 0;
            var j = 0;
            var pos = void 0;
            for (var i = 0; i < local.payload.length; i++) {
                if (local.payload[i].command === "y") {
                    if (local.payload[i].Address === A1) {
                        this.lineChartData[0].data[l] = parseInt(local.payload[i].signal);
                        l++;
                    }
                    else if (local.payload[i].Address === A2) {
                        this.lineChartData[1].data[m] = parseInt(local.payload[i].signal);
                        m++;
                    }
                    else if (local.payload[i].Address === A3) {
                        this.lineChartData[2].data[n] = parseInt(local.payload[i].signal);
                        n++;
                    }
                }
                if (local.payload[i].command === "m") {
                    if (local.payload[i].Address === A1 && local.payload[i].POS != pos) {
                        this.count1++;
                    }
                    else if (local.payload[i].Address === A2 && local.payload[i].POS != pos) {
                        this.count2++;
                    }
                    else if (local.payload[i].Address === A3 && local.payload[i].POS != pos) {
                        this.count3++;
                    }
                }
                pos = local.payload[i].POS;
            }
            this.doughnutChartData = [this.count1, this.count2, this.count3];
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__testslist_testslist__["a" /* testslist */]);
        }
    };
    return StatPage;
}());
StatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-stat',template:/*ion-inline-start:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\stats\stats.html"*/'<ion-header>\n\n    <ion-navbar color="medcolor">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n     <h1>Stat Page</h1>\n\n    </ion-navbar>\n\n  </ion-header>\n\n    \n\n\n\n\n\n<ion-content padding>\n\n    \n\n    <div class="row">\n\n      <div class="col-md-6">\n\n        <div style="display: block">\n\n        <canvas  baseChart width="370" height="500"\n\n                    [datasets]="lineChartData"\n\n                    [labels]="lineChartLabels"\n\n                    [options]="lineChartOptions"\n\n                    [colors]="lineChartColors"\n\n                    [legend]="lineChartLegend"\n\n                    [chartType]="lineChartType"\n\n                    (chartHover)="chartHovered($event)"\n\n                    (chartClick)="chartClicked($event)"></canvas>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n    <div style="display: block">\n\n        <canvas baseChart   width="50" height="50" \n\n                    [data]="doughnutChartData"\n\n                    [labels]="doughnutChartLabels"\n\n                    [colors]="lineChartColors2"\n\n                    [chartType]="doughnutChartType"\n\n                    (chartHover)="chartHovered($event)"\n\n                    (chartClick)="chartClicked($event)"></canvas>\n\n      </div>\n\n\n\n     \n\n     \n\n  </ion-content>\n\n\n\n  <ion-footer >\n\n    <ion-toolbar color="medcolor" >\n\n        \n\n        <img  src="assets/imgs/sagem.png" >\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\asus\Desktop\Smart_Trash\Front_End\src\pages\stats\stats.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_main_service_main_service__["a" /* MainServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
], StatPage);

//# sourceMappingURL=stats.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tests_tests__ = __webpack_require__(120);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_tests_tests__["a" /* tests */]);
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_controle_controle__ = __webpack_require__(119);
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

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(203);
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
        this.link = 'https://glacial-headland-60557.herokuapp.com/api';
    }
    ////////////////////////////////////////////////////////////////////////////////// load data to testlist ////////////////////////////////////////////////////////////////////////////////////    
    MainServiceProvider.prototype.loadHomeData = function () {
        var _this = this;
        var local = JSON.parse(localStorage.getItem('jbb-data'));
        if (local) {
            var User_id = local.user_id;
            var Token = local.token;
            var data_1 = {
                user_id: User_id,
                token: Token,
                Salt: local.Salt
            };
            var link_1 = this.link + "/getFakeData";
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
        var link = this.link + "/deletedata";
        var local = JSON.parse(localStorage.getItem('jbb-data'));
        if (local) {
            var User_id = local.user_id;
            var Token = local.token;
            var data1_1 = {
                user_id: User_id,
                token: Token,
                Iditem: iditem,
                Salt: local.Salt
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
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////  load data to dashboard ///////////////////////////////////////////////////////////////////////////////////////
    MainServiceProvider.prototype.loadHomeData2 = function (iditem) {
        var _this = this;
        localStorage.setItem('jbb-data3', iditem);
        var local = JSON.parse(localStorage.getItem('jbb-data'));
        if (local) {
            var User_id = local.user_id;
            var Token = local.token;
            var data_2 = {
                user_id: User_id,
                token: Token,
                Iditem: iditem,
                Salt: local.Salt
            };
            var link_2 = this.link + "/dashboarddata";
            return new Promise(function (resolve) {
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                _this.http.post(link_2, data_2, { headers: headers })
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data.result);
                    localStorage.setItem('jbb-data1', JSON.stringify(data.result));
                    var local = JSON.parse(localStorage.getItem('jbb-data1'));
                    console.log(local);
                }, function (err) {
                    _this.events.publish('app:hideloading');
                    _this.events.publish('app:toast', "Error while trying to load data");
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

/***/ })

},[401]);
//# sourceMappingURL=main.js.map