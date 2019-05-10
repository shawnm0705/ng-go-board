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

module.exports = "::ng-deep mat-grid-tile .mat-figure {\n  display: block !important;\n}\nbutton {\n  margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIG1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\">\n  <mat-grid-tile>\n    <go-board #board\n    [moves]=\"moves\"\n    [next]=\"next\"\n    (move)=onMove($event)\n    [showStep]=\"showStep\"\n    ></go-board>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <h3>Actions</h3>\n    <div>\n      <button mat-raised-button color=\"primary\" (click)=\"board.reset(); reset()\">Reset</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.retract(); retract()\">Retract</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.disable()\">Disable</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.enable()\">Enable</button>\n      <button mat-raised-button color=\"primary\" (click)=\"showStep = !showStep\">Toggle Step</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.addMove(9, 9)\">Add to (9, 9)</button>\n    </div>\n    <h3>Stone color</h3>\n    <div>\n      <button mat-raised-button color=\"primary\" (click)=\"board.normalColor()\">Normal</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.oneColor('black')\">Black Only</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.oneColor('white')\">White Only</button>\n    </div>\n    <h3>Moves History (0, 0) - (18, 18)</h3>\n    <ul>\n      <li *ngFor=\"let move of movesHistory\">{{ move }}</li>\n    </ul>\n  </mat-grid-tile>\n</mat-grid-list>\n"

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
        this.moves = [
            {
                x: 3,
                y: 15,
                color: 'black'
            },
            {
                x: 15,
                y: 15,
                color: 'white'
            },
            {
                x: 3,
                y: 3,
                color: 'black'
            },
            {
                x: 15,
                y: 3,
                color: 'white'
            }
        ];
        this.next = 'black';
        this.showStep = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.reset();
    };
    AppComponent.prototype.onMove = function (event) {
        this.movesHistory.push('(' + event.x + ', ' + event.y + ') ' + event.color);
    };
    AppComponent.prototype.reset = function () {
        this.movesHistory = [];
    };
    AppComponent.prototype.retract = function () {
        this.movesHistory.pop();
    };
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_board_board_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/board/board.module */ "./src/app/modules/board/board.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_board_board_module__WEBPACK_IMPORTED_MODULE_3__["BoardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/board/board.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/board/board.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"board\" [ngClass]=\"nextColor()\">\n  <div class=\"row\" *ngFor=\"let a of boardArray; let x = index\">\n    <div class=\"cell\" [ngClass]=\"cellClass(x, y)\" (click)=\"onClick(x, y)\" [attr.data-step]=\"getStep(x, y)\" *ngFor=\"let b of boardArray; let y = index\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/board/board.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/board/board.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.board {\n  display: inline-block;\n  border: 1px solid #522;\n  background-color: #E9C372;\n}\n\n.board .row {\n  font-size: 0;\n}\n\n.board .row .cell {\n  width: 20px;\n  height: 21px;\n  display: inline-block;\n  position: relative;\n}\n\n.board .row .cell:after {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background-color: #522;\n  width: 100%;\n  height: 1px;\n}\n\n.board .row .cell:before {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background-color: #522;\n  width: 1px;\n  height: 100%;\n}\n\n.board .row .cell:first-child:after {\n  width: 50%;\n  left: 50%;\n}\n\n.board .row .cell:last-child:after {\n  width: 50%;\n  right: 50%;\n}\n\n.board .row .cell.star {\n  background-image: -webkit-radial-gradient(center, circle closest-side, #522 20%, rgba(0, 0, 0, 0) 30%);\n}\n\n.board .row .cell.black:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  padding-top: 3px;\n  text-align: center;\n  content: attr(data-step);\n  box-shadow: 1px 1px 1px #404040;\n  background-color: black;\n  color: white;\n  background-image: -moz-radial-gradient(40% 40%, circle closest-side, #404040 0%, rgba(0, 0, 0, 0) 90%);\n}\n\n.board .row .cell.white:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  padding-top: 3px;\n  text-align: center;\n  content: attr(data-step);\n  background-color: white;\n  color: black;\n  box-shadow: 1px 1px 1px #404040, inset -3px -3px 5px gray;\n}\n\n.board .row:first-child .cell:before {\n  height: 50%;\n  top: 50%;\n}\n\n.board .row:last-child .cell:before {\n  height: 50%;\n  bottom: 50%;\n}\n\n.board.black .cell:not(.black):not(.white):hover:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  padding-top: 3px;\n  text-align: center;\n  content: attr(data-step);\n  box-shadow: 1px 1px 1px #404040;\n  background-color: black;\n  color: white;\n  background-image: -moz-radial-gradient(40% 40%, circle closest-side, #404040 0%, rgba(0, 0, 0, 0) 90%);\n  opacity: 0.5;\n}\n\n.board.black .cell:not(.black):not(.white):hover:before {\n  display: none;\n}\n\n.board.white .cell:not(.black):not(.white):hover:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  padding-top: 3px;\n  text-align: center;\n  content: attr(data-step);\n  background-color: white;\n  color: black;\n  box-shadow: 1px 1px 1px #404040, inset -3px -3px 5px gray;\n  opacity: 0.5;\n}\n\n.board.white .cell:not(.black):not(.white):hover:before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bm1hL0RvY3VtZW50cy9HaXRIdWIvbmctZ28tYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ3BDRjs7QURzQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBNUNXO0FDU2I7O0FEb0NFO0VBQ0UsWUFBQTtBQ2xDSjs7QURtQ0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNqQ047O0FEa0NNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUFRLE9BQUE7RUFBUyxTQUFBO0VBQVcsUUFBQTtFQUM1QixXQUFBO0VBQ0Esc0JBeERJO0VBeURKLFdBQUE7RUFDQSxXQUFBO0FDN0JSOztBRCtCTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsU0FBQTtFQUFXLFFBQUE7RUFDNUIsV0FBQTtFQUNBLHNCQWpFSTtFQWtFSixVQUFBO0VBQ0EsWUFBQTtBQzFCUjs7QUQ2QlE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQzNCVjs7QUQrQlE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBQzdCVjs7QURnQ007RUFsREosc0dBQUE7QUNxQkY7O0FEZ0NNO0VBakZKLE9BQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBS0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxzR0FBQTtBQ2dERjs7QURtQk07RUFwRkosT0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFjQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx5REFBQTtBQ3VERjs7QURXUTtFQUNFLFdBQUE7RUFDQSxRQUFBO0FDVFY7O0FEZVE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ2JWOztBRG1CSTtFQTFHRixPQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUtBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBRUEsc0dBQUE7RUEyRkksWUFBQTtBQ0pOOztBRE1JO0VBQ0UsYUFBQTtBQ0pOOztBRFFJO0VBbkhGLE9BQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBY0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7RUE2RkksWUFBQTtBQ0tOOztBREhJO0VBQ0UsYUFBQTtBQ0tOIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjZWxsU2l6ZTogMjA7XG4kYm9hcmRDb2xvcjogI0U5QzM3MjtcbiRsaW5lQ29sb3I6ICM1MjI7XG5cbkBtaXhpbiBzdG9uZSgpIHtcbiAgbGVmdDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29udGVudDogYXR0cihkYXRhLXN0ZXApO1xufVxuXG5AbWl4aW4gYmxhY2tTdG9uZSgpIHtcbiAgQGluY2x1ZGUgc3RvbmUoKTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzQwNDA0MDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIDQwJSA0MCUsIGNpcmNsZSBjbG9zZXN0LWNvcm5lciwgIzQwNDA0MCAwJSwgcmdiYSgwLCAwLCAwLCAwKSA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudCggNDAlIDQwJSwgY2lyY2xlIGNsb3Nlc3Qtc2lkZSwgIzQwNDA0MCAwJSwgcmdiYSgwLCAwLCAwLCAwKSA5MCUpO1xufVxuXG5AbWl4aW4gd2hpdGVTdG9uZSgpIHtcbiAgQGluY2x1ZGUgc3RvbmUoKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzQwNDA0MCAsIGluc2V0IC0zcHggLTNweCA1cHggZ3JheTtcbn1cblxuQG1peGluIHN0YXJQb2ludCgpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAkbGluZUNvbG9yIDIwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpO1xuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjbG9zZXN0LXNpZGUsICRsaW5lQ29sb3IgMjAlLCByZ2JhKDAsIDAsIDAsIDApIDMwJSk7XG59XG5cbmRpdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJvYXJkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAkbGluZUNvbG9yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9hcmRDb2xvcjtcbiAgLnJvdyB7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIC5jZWxsIHtcbiAgICAgIHdpZHRoOiAjeyRjZWxsU2l6ZX1weDtcbiAgICAgIGhlaWdodDogI3skY2VsbFNpemUrMX1weDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwOyBsZWZ0OiAwOyBib3R0b206IDA7IHJpZ2h0OiAwO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluZUNvbG9yO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICB9XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5lQ29sb3I7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICByaWdodDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLnN0YXIge1xuICAgICAgICBAaW5jbHVkZSBzdGFyUG9pbnQoKTtcbiAgICAgIH1cbiAgICAgICYuYmxhY2s6YWZ0ZXIge1xuICAgICAgICBAaW5jbHVkZSBibGFja1N0b25lKCk7XG4gICAgICB9XG4gICAgICAmLndoaXRlOmFmdGVyIHtcbiAgICAgICAgQGluY2x1ZGUgd2hpdGVTdG9uZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC5jZWxsIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAuY2VsbCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmJsYWNrIC5jZWxsOm5vdCguYmxhY2spOm5vdCgud2hpdGUpOmhvdmVyIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGJsYWNrU3RvbmUoKTtcbiAgICAgIG9wYWNpdHk6MC41O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICB9XG4gICYud2hpdGUgLmNlbGw6bm90KC5ibGFjayk6bm90KC53aGl0ZSk6aG92ZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgd2hpdGVTdG9uZSgpO1xuICAgICAgb3BhY2l0eTowLjU7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsImRpdiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9hcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MjI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUMzNzI7XG59XG4uYm9hcmQgLnJvdyB7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5ib2FyZCAucm93IC5jZWxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjFweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm9hcmQgLnJvdyAuY2VsbDphZnRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbn1cbi5ib2FyZCAucm93IC5jZWxsOmJlZm9yZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjI7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ib2FyZCAucm93IC5jZWxsOmZpcnN0LWNoaWxkOmFmdGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuLmJvYXJkIC5yb3cgLmNlbGw6bGFzdC1jaGlsZDphZnRlciB7XG4gIHdpZHRoOiA1MCU7XG4gIHJpZ2h0OiA1MCU7XG59XG4uYm9hcmQgLnJvdyAuY2VsbC5zdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAjNTIyIDIwJSwgcmdiYSgwLCAwLCAwLCAwKSAzMCUpO1xufVxuLmJvYXJkIC5yb3cgLmNlbGwuYmxhY2s6YWZ0ZXIge1xuICBsZWZ0OiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb250ZW50OiBhdHRyKGRhdGEtc3RlcCk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM0MDQwNDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQwJSA0MCUsIGNpcmNsZSBjbG9zZXN0LWNvcm5lciwgIzQwNDA0MCAwJSwgcmdiYSgwLCAwLCAwLCAwKSA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudCg0MCUgNDAlLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAjNDA0MDQwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDkwJSk7XG59XG4uYm9hcmQgLnJvdyAuY2VsbC53aGl0ZTphZnRlciB7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zdGVwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzQwNDA0MCwgaW5zZXQgLTNweCAtM3B4IDVweCBncmF5O1xufVxuLmJvYXJkIC5yb3c6Zmlyc3QtY2hpbGQgLmNlbGw6YmVmb3JlIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRvcDogNTAlO1xufVxuLmJvYXJkIC5yb3c6bGFzdC1jaGlsZCAuY2VsbDpiZWZvcmUge1xuICBoZWlnaHQ6IDUwJTtcbiAgYm90dG9tOiA1MCU7XG59XG4uYm9hcmQuYmxhY2sgLmNlbGw6bm90KC5ibGFjayk6bm90KC53aGl0ZSk6aG92ZXI6YWZ0ZXIge1xuICBsZWZ0OiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb250ZW50OiBhdHRyKGRhdGEtc3RlcCk7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM0MDQwNDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQwJSA0MCUsIGNpcmNsZSBjbG9zZXN0LWNvcm5lciwgIzQwNDA0MCAwJSwgcmdiYSgwLCAwLCAwLCAwKSA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudCg0MCUgNDAlLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAjNDA0MDQwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDkwJSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ib2FyZC5ibGFjayAuY2VsbDpub3QoLmJsYWNrKTpub3QoLndoaXRlKTpob3ZlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJvYXJkLndoaXRlIC5jZWxsOm5vdCguYmxhY2spOm5vdCgud2hpdGUpOmhvdmVyOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29udGVudDogYXR0cihkYXRhLXN0ZXApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjNDA0MDQwLCBpbnNldCAtM3B4IC0zcHggNXB4IGdyYXk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ib2FyZC53aGl0ZSAuY2VsbDpub3QoLmJsYWNrKTpub3QoLndoaXRlKTpob3ZlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/board/board.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/board/board.component.ts ***!
  \**************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var godash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godash */ "./node_modules/godash/dist/godash.js");
/* harmony import */ var godash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(godash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        // a move event
        this.move = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // prevent click event or not
        this.disabled = false;
    }
    BoardComponent.prototype.ngOnInit = function () {
        if (!this.dimensions) {
            // default go board settings
            this.dimensions = 19;
            this.stars = [{ x: 3, y: 3 }, { x: 3, y: 9 }, { x: 3, y: 15 }, { x: 9, y: 3 }, { x: 9, y: 9 }, { x: 9, y: 15 }, { x: 15, y: 3 }, { x: 15, y: 9 }, { x: 15, y: 15 }];
        }
        this.boardArray = Array(this.dimensions).fill(1);
        this.reset();
    };
    /************
      Functions that can be triggered from parent component
    ************/
    /**
     * Add move
     */
    BoardComponent.prototype.addMove = function (x, y) {
        this.onClick(x, y);
    };
    /**
     * Reset the board
     * @param forRetract If this is for retract
     */
    BoardComponent.prototype.reset = function (forRetract) {
        var _this = this;
        if (forRetract === void 0) { forRetract = false; }
        // initialise the next color
        if (this.next) {
            this.color = this.next;
        }
        else {
            if (this.moves) {
                switch (this.moves[this.moves.length - 1].color.toUpperCase()) {
                    case 'BLACK':
                        this.color = godash__WEBPACK_IMPORTED_MODULE_1___default.a.WHITE;
                        break;
                    case 'WHITE':
                        this.color = godash__WEBPACK_IMPORTED_MODULE_1___default.a.BLACK;
                        break;
                }
            }
            else {
                this.color = godash__WEBPACK_IMPORTED_MODULE_1___default.a.BLACK;
            }
        }
        // initialise the board
        this.board = new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Board(this.dimensions);
        // add pre-exist moves
        if (this.moves) {
            this.moves.forEach(function (move) {
                var color = move.color.toUpperCase() === 'BLACK' ? godash__WEBPACK_IMPORTED_MODULE_1___default.a.BLACK : godash__WEBPACK_IMPORTED_MODULE_1___default.a.WHITE;
                _this.board = godash__WEBPACK_IMPORTED_MODULE_1___default.a.addMove(_this.board, new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Coordinate(move.x, move.y), color);
            });
        }
        if (!forRetract) {
            this.movesHistory = [];
            this.steps = [];
        }
    };
    /**
     * Use only one color for every move
     * @param color The color of moves
     */
    BoardComponent.prototype.oneColor = function (color) {
        this.fixColor = true;
        this.color = color === 'white' ? godash__WEBPACK_IMPORTED_MODULE_1___default.a.WHITE : godash__WEBPACK_IMPORTED_MODULE_1___default.a.BLACK;
    };
    /**
     * Use normal color change rule
     */
    BoardComponent.prototype.normalColor = function () {
        this.fixColor = false;
        this.color = godash__WEBPACK_IMPORTED_MODULE_1___default.a.oppositeColor(this.color);
    };
    /**
     * Retract back one move
     */
    BoardComponent.prototype.retract = function () {
        var _this = this;
        this.reset(true);
        if (!this.movesHistory.length) {
            return;
        }
        var lastMove = this.movesHistory.pop();
        // pop steps list if it is the same with the last move from moves history
        if (this.steps.length && lastMove.x === this.steps[this.steps.length - 1].x && lastMove.y === this.steps[this.steps.length - 1].y) {
            this.steps.pop();
        }
        // add moves from moves history
        if (this.movesHistory.length) {
            this.movesHistory.forEach(function (move, i) {
                _this.board = godash__WEBPACK_IMPORTED_MODULE_1___default.a.addMove(_this.board, new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Coordinate(move.x, move.y), move.color);
            });
        }
        // set the next color to the color of last move
        this.color = lastMove.color;
    };
    /**
     * Not allow clicking
     */
    BoardComponent.prototype.disable = function () {
        this.disabled = true;
    };
    /**
     * Allow clicking
     */
    BoardComponent.prototype.enable = function () {
        this.disabled = false;
    };
    /************
      Functions that are used inside this component only
    ************/
    /**
     * Check if this coordinate is a star
     * @return boolean
     */
    BoardComponent.prototype.isStar = function (x, y) {
        return this.stars.find(function (star) {
            return star.x === x && star.y === y;
        }) !== undefined;
    };
    /**
     * Next color
     */
    BoardComponent.prototype.nextColor = function () {
        if (this.color === godash__WEBPACK_IMPORTED_MODULE_1___default.a.BLACK) {
            return 'black';
        }
        return 'white';
    };
    /**
     * Get the cell classes
     * @return class string
     */
    BoardComponent.prototype.cellClass = function (x, y) {
        var c = '';
        if (this.isStar(x, y)) {
            c = 'star ';
        }
        switch (this.board.moves.get(new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Coordinate(x, y))) {
            case godash__WEBPACK_IMPORTED_MODULE_1___default.a.BLACK:
                c += 'black';
                break;
            case godash__WEBPACK_IMPORTED_MODULE_1___default.a.WHITE:
                c += 'white';
                break;
        }
        return c;
    };
    /**
     * Get the step text for a coordinate
     * @return step number | ''
     */
    BoardComponent.prototype.getStep = function (x, y) {
        var step = this.steps.find(function (s) {
            return s.x === x && s.y === y;
        });
        if (step) {
            return step.step;
        }
        return '';
    };
    /**
     * On click event
     */
    BoardComponent.prototype.onClick = function (x, y) {
        if (this.disabled) {
            return;
        }
        if (!godash__WEBPACK_IMPORTED_MODULE_1___default.a.isLegalMove(this.board, new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Coordinate(x, y), this.color)) {
            return;
        }
        // this coordinate already has stone
        if (this.board.moves.get(new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Coordinate(x, y), godash__WEBPACK_IMPORTED_MODULE_1___default.a.EMPTY) !== godash__WEBPACK_IMPORTED_MODULE_1___default.a.EMPTY) {
            return;
        }
        this.board = godash__WEBPACK_IMPORTED_MODULE_1___default.a.addMove(this.board, new godash__WEBPACK_IMPORTED_MODULE_1___default.a.Coordinate(x, y), this.color);
        // trigger a move event
        this.move.emit({ x: x, y: y, color: this.color });
        this.movesHistory.push({ x: x, y: y, color: this.color });
        if (this.showStep) {
            this.steps.push({
                x: x,
                y: y,
                step: this.steps.length + 1
            });
        }
        if (!this.fixColor) {
            // change the next move color
            this.color = godash__WEBPACK_IMPORTED_MODULE_1___default.a.oppositeColor(this.color);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "dimensions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BoardComponent.prototype, "stars", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BoardComponent.prototype, "moves", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BoardComponent.prototype, "next", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BoardComponent.prototype, "showStep", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "move", void 0);
    BoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'go-board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/modules/board/board.component.html"),
            styles: [__webpack_require__(/*! ./board.component.scss */ "./src/app/modules/board/board.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/modules/board/board.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/board/board.module.ts ***!
  \***********************************************/
/*! exports provided: BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.component */ "./src/app/modules/board/board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BoardModule = /** @class */ (function () {
    function BoardModule() {
    }
    BoardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [
                _board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"]
            ]
        })
    ], BoardModule);
    return BoardModule;
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

module.exports = __webpack_require__(/*! /Users/shawnma/Documents/GitHub/ng-go-board/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map