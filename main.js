(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header{\n    padding:0 7px;\n    border-radius: 10px;\n    color:#000000;\n    font-weight: bolder;\n    font-size:2em;\n}\n.bg-black{\n    background-color:#000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGVye1xuICAgIHBhZGRpbmc6MCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjojMDAwMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOjJlbTtcbn1cbi5iZy1ibGFja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAwMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header starts here -->\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-black sticky-top\">\n  <a id=\"header\" class=\"navbar-brand bg-warning offset-lg-1\" [routerLink]=\"['/home']\">\n    <span style=\"color:#123363;\">\n      <b>Game</b>&nbsp;</span>Of\n    <span style=\"color:#C81900;\">\n      <b>Thrones</b>\n    </span>\n  </a>\n</nav>\n<!-- header ends here -->\n<!-- cover image starts here -->\n<div class=\"container-full\">\n  <img class=\"img-responsive\" src=\"./assets/images/cover.jpg\" style=\"width:100%; height:auto;\">\n</div>\n<!-- cover image ends here -->\n<br>\n<br>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _got_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./got.service */ "./src/app/got.service.ts");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./card-view/card-view.component */ "./src/app/card-view/card-view.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//importing service

//importing orderBy pipe

//importing formsmodule


//importing routermodule for routing



//importing all the components




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_9__["CardViewComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_1__["OrderModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                    //redirecting to home if nothing is suffixed
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    // using view and redirect paths interchangably in order to click api links and get data using each other view
                    { path: 'view/:url', component: _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_9__["CardViewComponent"] },
                    { path: 'redirect/:url', component: _card_view_card_view_component__WEBPACK_IMPORTED_MODULE_9__["CardViewComponent"] },
                    //if no path is found
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundComponent"] }
                ])
            ],
            providers: [_got_service__WEBPACK_IMPORTED_MODULE_0__["GotService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card-view/card-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/card-view/card-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-12{\n    word-break:break-all;\n}\n.underline{\n    color:#FFFFFF;\n    text-decoration: underline;\n    cursor:pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC12aWV3L2NhcmQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jYXJkLXZpZXcvY2FyZC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sLTEye1xuICAgIHdvcmQtYnJlYWs6YnJlYWstYWxsO1xufVxuLnVuZGVybGluZXtcbiAgICBjb2xvcjojRkZGRkZGO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjpwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card-view/card-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/card-view/card-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- loading animation before the data loads -->\n<div class=\"container top-buffer d-flex justify-content-center\" *ngIf=\"card==undefined\">\n  <div class=\"loader\"></div>\n</div>\n<!-- the card information after the card gets defined -->\n<div class=\"container\" *ngIf=\"card!=undefined\">\n  <div class=\"container text-white\">\n    <!-- defining only character details -->\n    <div class=\"row\" *ngIf=\"card.gender\">\n      <div class=\"col d-flex justify-content-center text-success\">\n        <h2>CHARACTER</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"container text-white\">\n    <!-- defining only book details -->\n    <div class=\"row\" *ngIf=\"card.isbn\">\n      <div class=\"col d-flex justify-content-center text-danger\">\n        <h2>BOOK</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"container text-white\">\n    <!-- defining only houses details -->\n    <div class=\"row\" *ngIf=\"card.region\">\n      <div class=\"col d-flex justify-content-center text-warning\">\n        <h2>HOUSE</h2>\n      </div>\n    </div>\n  </div>\n  <!-- goback button -->\n  <div class=\"container\">\n    <div>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</button>\n    </div>\n  </div>\n  <br>\n  <div class=\"container text-white\">\n    <!-- rows for character url -->\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Name:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"card.name\">\n        {{card.name}}\n      </div>\n      <div class=\"col-lg-7 col-12 text-muted\" *ngIf=\"card.name==''\">\n        Not Available\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.gender\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Gender:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.gender}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.born\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Date of Birth:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.born}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.died\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Died:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.died}}\n      </div>\n    </div>\n    <!-- checking if array is available and there is not only blank element present in the array -->\n    <div class=\"row\" *ngIf=\"card.titles && card.titles[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Titles:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let title of card.titles; let isLast=last\">{{title}}{{isLast?'':','}}</span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.aliases && card.aliases[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Aliases:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let alias of card.aliases; let isLast=last\">{{alias}}{{isLast?'':','}}</span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.father\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Father:</h4>\n      </div>\n      <!-- if page is loaded on view path -->\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <!-- by clicking on api link present on the page, the next view will be rendered on redirect path -->\n        <a class=\"underline\" [routerLink]=\"['/redirect',card.father.split('api/').pop()]\">{{card.father}}</a>\n      </div>\n      <!-- if page is loaded on redirect path -->\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <!-- by clicking on api link link present on the page, the next view will be render on view path -->\n        <a class=\"underline\" [routerLink]=\"['/view',card.father.split('api/').pop()]\">{{card.father}}</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.mother\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Mother:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',card.mother.split('api/').pop()]\">{{card.mother}}</a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',card.mother.split('api/').pop()]\">{{card.mother}}</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.spouse\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Spouse:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',card.spouse.split('api/').pop()]\">{{card.spouse}}</a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',card.spouse.split('api/').pop()]\">{{card.spouse}}</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.allegiances && card.allegiances[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Allegiances:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',allegiance.split('api/').pop()]\" *ngFor=\"let allegiance of card.allegiances; let isLast=last\">{{allegiance}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',allegiance.split('api/').pop()]\" *ngFor=\"let allegiance of card.allegiances; let isLast=last\">{{allegiance}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.books && card.books[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Books:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',book.split('api/').pop()]\" *ngFor=\"let book of card.books; let isLast=last\">{{book}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',book.split('api/').pop()]\" *ngFor=\"let book of card.books; let isLast=last\">{{book}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.povbooks && card.povbooks[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Pov Books:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',povbook.split('api/').pop()]\" *ngFor=\"let povbook of card.povbooks; let isLast=last\">{{povbook}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',povbook.split('api/').pop()]\" *ngFor=\"let povbook of card.povbooks; let isLast=last\">{{povbook}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.tvseries && card.tvseries[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Tv Series:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let tv of card.tvseries; let isLast=last\">{{tv}}{{isLast?'':','}}\n        </span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.playedby && card.playedby[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Played By:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let play of card.playedby; let isLast=last\">{{play}}{{isLast?'':','}}\n        </span>\n      </div>\n    </div>\n    <!-- rows for books url -->\n    <div class=\"row\" *ngIf=\"card.isbn\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Isbn Number:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.isbn}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.authors && card.authors[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Authors:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let author of card.authors; let isLast=last\">{{author}}{{isLast?'':','}}</span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.numberOfPages\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Pages:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.numberOfPages}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.publisher\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Publisher:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.publisher}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.country\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Country:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.country}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.mediaType\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Media Type:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.mediaType}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.released\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Release Date:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.released | date}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.characters && card.characters[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Characters:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',character.split('api/').pop()]\" *ngFor=\"let character of card.characters | slice:0:show; let isLast=last\">{{character}}{{isLast?'':','}}\n          <br>\n        </a>\n        <!-- by clicking this, 5 array elements will keep extending in the view for characters key in books card only -->\n        <a class=\"underline text-primary\" (click)=\"show=show+5\" *ngIf=\"show < card.characters.length\">show more (+5)</a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',character.split('api/').pop()]\" *ngFor=\"let character of card.characters | slice:0:show; let isLast=last\">{{character}}{{isLast?'':','}}\n          <br>\n        </a>\n        <a class=\"underline text-primary\" (click)=\"show=show+5\" *ngIf=\"show < card.characters.length\">show more (+5)</a>\n      </div>\n    </div>\n    <div *ngIf=\"card.characters && card.characters[0]\">\n      <br>\n    </div>\n    <div class=\"row\" *ngIf=\"card.povCharacters && card.povCharacters[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>POV Characters:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',character.split('api/').pop()]\" *ngFor=\"let character of card.povCharacters; let isLast=last\">{{character}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',character.split('api/').pop()]\" *ngFor=\"let character of card.povCharacters; let isLast=last\">{{character}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n    </div>\n    <!-- rows for houses url -->\n    <div class=\"row\" *ngIf=\"card.region\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Region:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.region}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.coatOfArms\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Coat Of Arms:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.coatOfArms}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.words\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Words:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.words}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.seats && card.seats[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Seats:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let seat of card.seats; let isLast=last\">{{seat}}{{isLast?'':','}}\n        </span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.currentLord\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Current Lord:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',card.currentLord.split('api/').pop()]\">{{card.currentLord}}</a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',card.currentLord.split('api/').pop()]\">{{card.currentLord}}</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.overLord\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Over Lord:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',card.overLord.split('api/').pop()]\">{{card.overLord}}</a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',card.overLord.split('api/').pop()]\">{{card.overLord}}</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.founded\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Founded:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.founded}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.founder\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Founder:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',card.founder.split('api/').pop()]\">{{card.founder}}</a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',card.founder.split('api/').pop()]\">{{card.founder}}</a>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.diedOut\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Died:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        {{card.diedOut}}\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.ancestralWeapons && card.ancestralWeapons[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Ancestral Weapons:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\">\n        <span *ngFor=\"let weapon of card.ancestralWeapons; let isLast=last\">{{weapon}}{{isLast?'':','}}\n        </span>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"card.cadetBranches && card.cadetBranches[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Cadet Branches:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',branch.split('api/').pop()]\" *ngFor=\"let branch of card.cadetBranches; let isLast=last\">{{branch}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',branch.split('api/').pop()]\" *ngFor=\"let branch of card.cadetBranches; let isLast=last\">{{branch}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n    </div>\n    <div *ngIf=\"card.cadetBranches && card.cadetBranches[0]\">\n      <br>\n    </div>\n    <div class=\"row\" *ngIf=\"card.swornMembers && card.swornMembers[0]\">\n      <div class=\"col-lg-3 col-12\">\n        <h4>Sworn Members:</h4>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='view'\">\n        <a class=\"underline\" [routerLink]=\"['/redirect',member.split('api/').pop()]\" *ngFor=\"let member of card.swornMembers; let isLast=last\">{{member}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n      <div class=\"col-lg-7 col-12\" *ngIf=\"router.url.split('/')[1]=='redirect'\">\n        <a class=\"underline\" [routerLink]=\"['/view',member.split('api/').pop()]\" *ngFor=\"let member of card.swornMembers; let isLast=last\">{{member}}{{isLast?'':','}}\n          <br>\n        </a>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div class=\"container\">\n    <div>\n      <button type=\"button\" class=\"btn btn-warning\" (click)=\"goBackToPreviousPage()\">Go Back</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/card-view/card-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-view/card-view.component.ts ***!
  \**************************************************/
/*! exports provided: CardViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewComponent", function() { return CardViewComponent; });
/* harmony import */ var _got_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../got.service */ "./src/app/got.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//importing activated route and router

//importing location for go back button

var CardViewComponent = /** @class */ (function () {
    function CardViewComponent(_route, _httpService, location, router) {
        this._route = _route;
        this._httpService = _httpService;
        this.location = location;
        this.router = router;
        //number to show number of elements of array at time of load
        this.show = 5;
    }
    CardViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //capturing url as a paremeter from url
        var url = this._route.snapshot.paramMap.get('url');
        this._httpService.getSingleCard(url).subscribe(function (data) {
            _this.card = data;
            console.log(_this.card);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    //go back button functionality
    CardViewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CardViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card-view',
            template: __webpack_require__(/*! ./card-view.component.html */ "./src/app/card-view/card-view.component.html"),
            //adding provider for go back button
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]],
            styles: [__webpack_require__(/*! ./card-view.component.css */ "./src/app/card-view/card-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _got_service__WEBPACK_IMPORTED_MODULE_0__["GotService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CardViewComponent);
    return CardViewComponent;
}());



/***/ }),

/***/ "./src/app/got.service.ts":
/*!********************************!*\
  !*** ./src/app/got.service.ts ***!
  \********************************/
/*! exports provided: GotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotService", function() { return GotService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// importing httpclient and http error response


//importing observable

var GotService = /** @class */ (function () {
    function GotService(_http) {
        this._http = _http;
        this.baseUrl = 'https://anapioficeandfire.com/api';
        console.log('http-service is called');
    }
    //method to get all books info
    GotService.prototype.getAllBooks = function () {
        var allBooks = this._http.get(this.baseUrl + '/books');
        console.log(allBooks);
        return allBooks;
    };
    //method to get all characters info
    GotService.prototype.getAllCharacters = function () {
        var allCharacters = this._http.get(this.baseUrl + '/characters');
        console.log(allCharacters);
        return allCharacters;
    };
    //method to get all houses info
    GotService.prototype.getAllHouses = function () {
        var allHouses = this._http.get(this.baseUrl + '/houses');
        console.log(allHouses);
        return allHouses;
    };
    // method to get info of single card
    GotService.prototype.getSingleCard = function (url) {
        var card = this._http.get(this.baseUrl + '/' + url);
        return card;
    };
    // method to handle error
    GotService.prototype.handleError = function (err) {
        console.log("Handle error http calls");
        console.log(err.message);
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    GotService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], GotService);
    return GotService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-padding{\n    padding:10px;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n}\n.card-padding:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUNBQXlCO0lBQXpCLHlCQUF5QjtJQUF6QixnREFBeUI7QUFDN0I7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1wYWRkaW5ne1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzO1xufVxuLmNhcmQtcGFkZGluZzpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHotaW5kZXg6IDEwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <!-- sort by button for sorting in ascending and descending starts here -->\n    <div class=\"col-auto\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Sort By\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <!-- setting instance variable to appropriate values for sorting -->\n          <a class=\"dropdown-item\" style=\"cursor:pointer;\" (click)=\"sortName='name';sortBool=false\">Ascending</a>\n          <a class=\"dropdown-item\" style=\"cursor:pointer;\" (click)=\"sortName='name';sortBool=true\">Descending</a>\n        </div>\n      </div>\n    </div>\n    <!-- sort by button for sorting in ascending and descending ends here -->\n    <!-- Caregory button for filtering books, character or houses starts here -->\n    <div class=\"col-auto\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          Categories\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n          <!-- calling respective fucntions on clicking -->\n          <a class=\"dropdown-item\" style=\"cursor:pointer;\" (click)=\"ngOnInit()\">All</a>\n          <a class=\"dropdown-item\" style=\"cursor:pointer;\" (click)=\"getBooks()\">Books</a>\n          <a class=\"dropdown-item\" style=\"cursor:pointer;\" (click)=\"getCharacters()\">Characters</a>\n          <a class=\"dropdown-item\" style=\"cursor:pointer;\" (click)=\"getHouses()\">Houses</a>\n        </div>\n      </div>\n    </div>\n    <!-- Caregory button for filtering books, character or houses ends here -->\n  </div>\n</div>\n<!-- loader animation -->\n<div class=\"container top-buffer d-flex justify-content-center\" *ngIf=\"allCards==undefined || allCards.length ==0\">\n  <div class=\"loader\"></div>\n</div>\n<!-- single ngFor loop for all the cards -->\n<div class=\"container\" *ngIf=\"allCards.length > 0\">\n  <div class=\"row\">\n    <!-- orderBy pipe for sorting -->\n    <div *ngFor=\"let card of allCards | orderBy : sortName : sortBool\" class=\"col-lg-4 col-md-6 col-12 card-padding\">\n      <!-- House card -->\n      <div class=\"card border border-warning\" *ngIf=\"card.region\" style=\"height: 100%;\">\n        <div class=\"card-header text-warning\">\n          <h3>House</h3>\n        </div>\n        <img class=\"card-img-top\" src=\"./assets/images/house.jpg\" style=\"height:50%;\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"background-color: #F7DFB3;\">\n          <h5 class=\"card-title text-muted\" *ngIf=\"card.name==''\">&nbsp;</h5>\n          <h5 class=\"card-title\">{{card.name}}</h5>\n          <p class=\"card-text\">Region:&nbsp;{{card.region}}</p>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/view',card.url.split('api/').pop()]\">View</a>\n        </div>\n      </div>\n      <!-- Character Card -->\n      <div class=\"card border border-success\" *ngIf=\"card.gender\" style=\"height: 100%;\">\n        <div class=\"card-header text-success\">\n          <h3>Character</h3>\n        </div>\n        <img class=\"card-img-top\" src=\"./assets/images/character.jpg\" style=\"height:50%;\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"background-color: #E1FFD3;\">\n          <h5 class=\"card-title\">Name: {{card.name}}</h5>\n          <p class=\"card-text\">Gender:&nbsp;{{card.gender}}</p>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/view',card.url.split('api/').pop()]\">View</a>\n        </div>\n      </div>\n      <!-- Book Card -->\n      <div class=\"card border border-danger\" *ngIf=\"card.isbn\" style=\"height: 100%;\">\n        <div class=\"card-header text-danger\">\n          <h3>Book</h3>\n        </div>\n        <img class=\"card-img-top\" src=\"./assets/images/book.png\" style=\"height:50%;\" alt=\"Card image cap\">\n        <div class=\"card-body\" style=\"background-color: #FFECDD;\">\n          <h5 class=\"card-title\">{{card.name}}</h5>\n          <h5 class=\"card-title text-muted\" *ngIf=\"card.name==''\">&nbsp;</h5>\n          <p class=\"card-text\">isbn:&nbsp;{{card.isbn}}</p>\n          <a href=\"#\" class=\"btn btn-primary\" [routerLink]=\"['/view',card.url.split('api/').pop()]\">View</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _got_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../got.service */ "./src/app/got.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//importing service


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService) {
        this._httpService = _httpService;
        //all cards array
        this.allCards = [];
        //sortName for property name by which sorting needs to be done
        this.sortName = '';
        //sortBool for setting ascending and descending
        this.sortBool = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        //getting all the cards (houses+books+characters)
        this._httpService.getAllBooks().subscribe(function (data) {
            _this.allCards = data;
            _this._httpService.getAllCharacters().subscribe(function (data) {
                _this.allCards = _this.allCards.concat(data);
                _this._httpService.getAllHouses().subscribe(function (data) {
                    _this.allCards = _this.allCards.concat(data);
                    console.log(_this.allCards);
                }, function (error) {
                    console.log(error.errorMessage);
                });
            }, function (error) {
                console.log(error.errorMessage);
            });
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    //function to fetch all the books data
    HomeComponent.prototype.getBooks = function () {
        var _this = this;
        this._httpService.getAllBooks().subscribe(function (data) {
            _this.allCards = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    //function to fetch all the characters data
    HomeComponent.prototype.getCharacters = function () {
        var _this = this;
        this._httpService.getAllCharacters().subscribe(function (data) {
            _this.allCards = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    //function to fetch all the houses data
    HomeComponent.prototype.getHouses = function () {
        var _this = this;
        this._httpService.getAllHouses().subscribe(function (data) {
            _this.allCards = data;
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_got_service__WEBPACK_IMPORTED_MODULE_0__["GotService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- not found page view in case none of the routing paths match -->\n<div class=\"container d-flex justify-content-center\">\n  <div class=\"card text-center\" style=\"width:50%;\">\n    <div class=\"card-header text-danger\">\n      Please try again\n    </div>\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">404 ERROR</h5>\n      <p class=\"card-text\">Page not found</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/siddharthsingh/Documents/EDWISOR/github projects_edwisor guys/Sharandeep Singh github projects/GameOfThrones-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map