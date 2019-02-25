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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <header class=\"d-flex align-items-center justify-content-center\">\n        <h1 class=\"display-4\">Analiza morfologiczna zabawki</h1>\n    </header>\n    <div class=\"jumbotron \">\n        <h2 class=\"display-4\">Zaprojektuj nową zabawkę</h2>\n        <p class=\"lead\">Poniżej masz do wyboru 3 aspekty. Znajdź swoje roziwiązanie!</p>\n        <hr class=\"my-4\">\n    </div>\n    <!--  1st item  -->\n    <h2>1. Wybierz wiek osoby</h2>\n    <div id=\"carouselExampleControls\" class=\"carousel carousel-box\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item\" *ngFor=\"let person of personObject; let isFirst = first\"\n                 [class.active]=\"isFirst\">\n                <div class=\"carousel-content\">\n\n                    <div class=\"d-flex flex-column align-items-center justify-content-center\">\n                        <img src=\"{{person.photoUrl}}\" alt=\"\">\n                        <p>{{person.age}}</p>\n\n                        <label for=\"age{{person.id}}\">Wybierz...\n                            <input (change)=\"isCheckedFromCarouselOne(person)\" class=\"disabled\"\n                                   id=\"age{{person.id}}\" type=\"radio\" name=\"optionOne\" value=\"{{person.id}}\">\n                        </label>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n    <!--    2nd item    -->\n    <div *ngIf=\"if1stSelected\">\n        <h2>2. Wybierz materiał zabawki</h2>\n        <div id=\"carouselExampleControls2\" class=\"carousel carousel-box\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n\n                <div class=\"carousel-item\" *ngFor=\"let material of materialObject; let isFirst = first\"\n                     [class.active]=\"isFirst\">\n                    <div class=\"carousel-content\">\n\n                        <div class=\"d-flex flex-column align-items-center justify-content-center\">\n                            <img src=\"{{material.photoUrl}}\" alt=\"\">\n                            <p>{{material.material}}</p>\n\n                            <label for=\"material{{material.id}}\">Wybierz...\n                                <input (change)=\"isCheckedFromCarouselTwo(material)\"\n                                       id=\"material{{material.id}}\"\n                                       type=\"radio\" name=\"optionTwo\" value=\"{{material.id}}\">\n                            </label>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls2\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls2\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n\n    <!--    3rd item    -->\n\n    <div *ngIf=\"if2ndSelected && if1stSelected\">\n        <h2>3. Wybierz funkcję zabawki</h2>\n        <div id=\"carouselExampleControls3\" class=\"carousel carousel-box\" data-ride=\"carousel\">\n            <div class=\"carousel-inner\">\n\n                <form action=\"\">\n\n                    <div class=\"carousel-item\" *ngFor=\"let Functionobject of functionObject; let isFirst = first\"\n                         [class.active]=\"isFirst\">\n                        <div class=\"carousel-content\">\n\n                            <div class=\"d-flex flex-column align-items-center justify-content-center\">\n                                <img src=\"{{Functionobject.photoUrl}}\" alt=\"\">\n                                <p>{{Functionobject.function}}</p>\n\n                                <label for=\"Functionobject{{Functionobject.id}}\">Wybierz...\n                                    <input (change)=\"isCheckedFromCarouselThree(Functionobject)\"\n                                           id=\"Functionobject{{Functionobject.id}}\"\n                                           type=\"radio\" name=\"optionThree\" value=\"{{Functionobject.id}}\">\n                                </label>\n\n                            </div>\n                        </div>\n                    </div>\n\n                </form>\n\n            </div>\n            <a class=\"carousel-control-prev\" href=\"#carouselExampleControls3\" role=\"button\" data-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carouselExampleControls3\" role=\"button\" data-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"sr-only\">Next</span>\n            </a>\n        </div>\n    </div>\n    <br>\n    <div class=\"d-flex justify-content-center\">\n        <button *ngIf=\"if3rdSelected\" type=\"button\" class=\"btn btn-info\" (click)=\"completeOrder()\">Generuj zabawkę\n        </button>\n    </div>\n    <div *ngIf=\"generateToy\">\n        <p>Tutaj zrobiłbym element z wygenerowaną zabawką w zależności od wybranych właściwości.</p>\n    </div>\n\n\n    <br>\n    <br>\n    <br>\n    <br>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background-image: url('header_bg.jpg'); }\n\nheader h1 {\n  color: aliceblue; }\n\n.carousel-box {\n  border: 2px solid gray; }\n\n.carousel-content {\n  min-height: 200px; }\n\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  background-color: #ca3333;\n  border-radius: 50%;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGVrc2FuZGVyL0RvY3VtZW50cy93d3cvYWtzb255L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQWdELEVBQUE7O0FBRXBEO0VBQVcsZ0JBQWdCLEVBQUE7O0FBSTNCO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBRXJCOztFQUVJLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvaGVhZGVyX2JnLmpwZ1wiKTtcbn1cbmhlYWRlciBoMSB7Y29sb3I6IGFsaWNlYmx1ZX1cblxuLy8gIGNhcm91c2VsXG5cbi5jYXJvdXNlbC1ib3gge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG59XG5cbi5jYXJvdXNlbC1jb250ZW50IHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhMzMzMztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'aksony';
        //  person object
        this.personObject = [
            { id: 1, age: 'Junior', photoUrl: '../assets/person.png' },
            { id: 2, age: 'Dorosły', photoUrl: '../assets/person.png' },
            { id: 3, age: 'Senior', photoUrl: '../assets/person.png' }
        ];
        //  meterial object
        this.materialObject = [
            { id: 4, material: 'Drewno', photoUrl: '../assets/material.png' },
            { id: 5, material: 'Plastik', photoUrl: '../assets/material.png' },
            { id: 6, material: 'Metal', photoUrl: '../assets/material.png' }
        ];
        //  function object
        this.functionObject = [
            { id: 7, function: 'Ćwiczenie pamięci', photoUrl: '../assets/function.png' },
            { id: 8, function: 'Ćwiczenie wyobraźni', photoUrl: '../assets/function.png' },
            { id: 9, function: 'Zabicie czasu :)', photoUrl: '../assets/function.png' }
        ];
        this.if1stSelected = false;
        this.if2ndSelected = false;
        this.if3rdSelected = false;
        //    show on console completeArray
        this.generateToy = false;
    }
    AppComponent.prototype.isCheckedFromCarouselOne = function (person) {
        if (event.target) {
            this.if1stSelected = true;
            console.log(person.id);
        }
        else {
            this.if1stSelected = false;
        }
    };
    AppComponent.prototype.isCheckedFromCarouselTwo = function (material) {
        if (event.target) {
            this.if2ndSelected = true;
            console.log(material.id);
        }
        else {
            this.if2ndSelected = false;
        }
    };
    AppComponent.prototype.isCheckedFromCarouselThree = function (Functionobject) {
        if (event.target) {
            this.if3rdSelected = true;
            console.log(Functionobject.id);
        }
        else {
            this.if3rdSelected = false;
        }
    };
    AppComponent.prototype.completeOrder = function () {
        this.generateToy = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _make_input_disabled_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./make-input-disabled.directive */ "./src/app/make-input-disabled.directive.ts");





//  bootstrap modules:



// do obsługi ngModel:



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _make_input_disabled_directive__WEBPACK_IMPORTED_MODULE_10__["MakeInputDisabledDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/make-input-disabled.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/make-input-disabled.directive.ts ***!
  \**************************************************/
/*! exports provided: MakeInputDisabledDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeInputDisabledDirective", function() { return MakeInputDisabledDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MakeInputDisabledDirective = /** @class */ (function () {
    function MakeInputDisabledDirective(element) {
        this.element = element;
    }
    MakeInputDisabledDirective.prototype.onChange = function ($event) {
        console.log(this);
        this.element.nativeElement.setAttribute('disabled', 'disabled');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MakeInputDisabledDirective.prototype, "onChange", null);
    MakeInputDisabledDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMakeInputDisabled]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], MakeInputDisabledDirective);
    return MakeInputDisabledDirective;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aleksander/Documents/www/aksony/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map