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

module.exports = "<mat-grid-list cols=\"2\">\n  <mat-grid-tile>\n    <go-board\n    [moves]=\"moves\"\n    [next]=\"next\"\n    (move)=onMove($event)\n    [showStep]=\"showStep\"\n    ></go-board>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <h3>Actions</h3>\n    <div>\n      <button mat-raised-button color=\"primary\" (click)=\"board.reset(); reset()\">Reset</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.retract(); retract()\">Retract</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.disable()\">Disable</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.enable()\">Enable</button>\n      <button mat-raised-button color=\"primary\" (click)=\"showStep = !showStep\">Toggle Step</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.addMove(9, 9)\">Add to (9, 9)</button>\n    </div>\n    <h3>Stone color</h3>\n    <div>\n      <button mat-raised-button color=\"primary\" (click)=\"board.normalColor()\">Normal</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.oneColor('black')\">Black Only</button>\n      <button mat-raised-button color=\"primary\" (click)=\"board.oneColor('white')\">White Only</button>\n    </div>\n    <h3>Moves History (0, 0) - (18, 18)</h3>\n    <ul>\n      <li *ngFor=\"let move of movesHistory\">{{ move }}</li>\n    </ul>\n  </mat-grid-tile>\n</mat-grid-list>\n"

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
/* harmony import */ var _modules_board_board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/board/board.service */ "./src/app/modules/board/board.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(board) {
        this.board = board;
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
        }),
        __metadata("design:paramtypes", [_modules_board_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]])
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

module.exports = "*, ::after, ::before {\n  box-sizing: border-box;\n}\n\ndiv {\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\n.board {\n  display: inline-block;\n  border: 1px solid #522;\n  background-color: #E9C372;\n}\n\n.board .row {\n  font-size: 0;\n}\n\n.board .row .cell {\n  width: 20px;\n  height: 21px;\n  display: inline-block;\n  position: relative;\n}\n\n.board .row .cell:after {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background-color: #522;\n  width: 100%;\n  height: 1px;\n}\n\n.board .row .cell:before {\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  content: \"\";\n  background-color: #522;\n  width: 1px;\n  height: 100%;\n}\n\n.board .row .cell:first-child:after {\n  width: 50%;\n  left: 50%;\n}\n\n.board .row .cell:last-child:after {\n  width: 50%;\n  right: 50%;\n}\n\n.board .row .cell.star {\n  background-image: -webkit-radial-gradient(center, circle closest-side, #522 20%, rgba(0, 0, 0, 0) 30%);\n}\n\n.board .row .cell.black:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  text-align: center;\n  box-shadow: 1px 1px 1px #404040;\n  background-color: black;\n  color: white;\n  background-image: -moz-radial-gradient(40% 40%, circle closest-side, #404040 0%, rgba(0, 0, 0, 0) 90%);\n  content: attr(data-step);\n}\n\n.board .row .cell.white:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  text-align: center;\n  background-color: white;\n  color: black;\n  box-shadow: 1px 1px 1px #404040, inset -3px -3px 5px gray;\n  content: attr(data-step);\n}\n\n.board .row:first-child .cell:before {\n  height: 50%;\n  top: 50%;\n}\n\n.board .row:last-child .cell:before {\n  height: 50%;\n  bottom: 50%;\n}\n\n.board.black .cell:not(.black):not(.white):hover:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  text-align: center;\n  box-shadow: 1px 1px 1px #404040;\n  background-color: black;\n  color: white;\n  background-image: -moz-radial-gradient(40% 40%, circle closest-side, #404040 0%, rgba(0, 0, 0, 0) 90%);\n  opacity: 0.5;\n}\n\n.board.black .cell:not(.black):not(.white):hover:before {\n  display: none;\n}\n\n.board.white .cell:not(.black):not(.white):hover:after {\n  left: 0;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  font-size: 15px;\n  text-align: center;\n  background-color: white;\n  color: black;\n  box-shadow: 1px 1px 1px #404040, inset -3px -3px 5px gray;\n  opacity: 0.5;\n}\n\n.board.white .cell:not(.black):not(.white):hover:before {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bm1hL0RvY3VtZW50cy9HaXRIdWIvbmctZ28tYm9hcmQvc3JjL2FwcC9tb2R1bGVzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksc0JBQUE7QUNGSjs7QURtQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNoQ0Y7O0FEa0NBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQTVDVztBQ2FiOztBRGdDRTtFQUNFLFlBQUE7QUM5Qko7O0FEK0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDN0JOOztBRDhCTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFBUSxPQUFBO0VBQVMsU0FBQTtFQUFXLFFBQUE7RUFDNUIsV0FBQTtFQUNBLHNCQXhESTtFQXlESixXQUFBO0VBQ0EsV0FBQTtBQ3pCUjs7QUQyQk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQVEsT0FBQTtFQUFTLFNBQUE7RUFBVyxRQUFBO0VBQzVCLFdBQUE7RUFDQSxzQkFqRUk7RUFrRUosVUFBQTtFQUNBLFlBQUE7QUN0QlI7O0FEeUJRO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUN2QlY7O0FEMkJRO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUN6QlY7O0FENEJNO0VBbERKLHNHQUFBO0FDeUJGOztBRDRCTTtFQS9FSixPQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBS0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxzR0FBQTtFQWtFTSx3QkFBQTtBQ2ZSOztBRGlCTTtFQW5GSixPQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBY0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseURBQUE7RUErRE0sd0JBQUE7QUNOUjs7QURXUTtFQUNFLFdBQUE7RUFDQSxRQUFBO0FDVFY7O0FEZVE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQ2JWOztBRG1CSTtFQTFHRixPQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBS0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSxzR0FBQTtFQTZGSSxZQUFBO0FDTk47O0FEUUk7RUFDRSxhQUFBO0FDTk47O0FEVUk7RUFuSEYsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQWNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHlEQUFBO0VBK0ZJLFlBQUE7QUNDTjs7QURDSTtFQUNFLGFBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2VsbFNpemU6IDIwO1xuJGJvYXJkQ29sb3I6ICNFOUMzNzI7XG4kbGluZUNvbG9yOiAjNTIyO1xuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWl4aW4gc3RvbmUoKSB7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtaXhpbiBibGFja1N0b25lKCkge1xuICBAaW5jbHVkZSBzdG9uZSgpO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjNDA0MDQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCggNDAlIDQwJSwgY2lyY2xlIGNsb3Nlc3QtY29ybmVyLCAjNDA0MDQwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDkwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmFkaWFsLWdyYWRpZW50KCA0MCUgNDAlLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAjNDA0MDQwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDkwJSk7XG59XG5cbkBtaXhpbiB3aGl0ZVN0b25lKCkge1xuICBAaW5jbHVkZSBzdG9uZSgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjNDA0MDQwICwgaW5zZXQgLTNweCAtM3B4IDVweCBncmF5O1xufVxuXG5AbWl4aW4gc3RhclBvaW50KCkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjbG9zZXN0LXNpZGUsICRsaW5lQ29sb3IgMjAlLCByZ2JhKDAsIDAsIDAsIDApIDMwJSk7XG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgY2lyY2xlIGNsb3Nlc3Qtc2lkZSwgJGxpbmVDb2xvciAyMCUsIHJnYmEoMCwgMCwgMCwgMCkgMzAlKTtcbn1cblxuZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYm9hcmQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaW5lQ29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRib2FyZENvbG9yO1xuICAucm93IHtcbiAgICBmb250LXNpemU6IDA7XG4gICAgLmNlbGwge1xuICAgICAgd2lkdGg6ICN7JGNlbGxTaXplfXB4O1xuICAgICAgaGVpZ2h0OiAjeyRjZWxsU2l6ZSsxfXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJjphZnRlciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7IGxlZnQ6IDA7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5lQ29sb3I7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIH1cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDsgbGVmdDogMDsgYm90dG9tOiAwOyByaWdodDogMDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpbmVDb2xvcjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIHJpZ2h0OiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYuc3RhciB7XG4gICAgICAgIEBpbmNsdWRlIHN0YXJQb2ludCgpO1xuICAgICAgfVxuICAgICAgJi5ibGFjazphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIGJsYWNrU3RvbmUoKTtcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXN0ZXApO1xuICAgICAgfVxuICAgICAgJi53aGl0ZTphZnRlciB7XG4gICAgICAgIEBpbmNsdWRlIHdoaXRlU3RvbmUoKTtcbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLXN0ZXApO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC5jZWxsIHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAuY2VsbCB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBoZWlnaHQ6IDUwJTtcbiAgICAgICAgICBib3R0b206IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLmJsYWNrIC5jZWxsOm5vdCguYmxhY2spOm5vdCgud2hpdGUpOmhvdmVyIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIEBpbmNsdWRlIGJsYWNrU3RvbmUoKTtcbiAgICAgIG9wYWNpdHk6MC41O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuICB9XG4gICYud2hpdGUgLmNlbGw6bm90KC5ibGFjayk6bm90KC53aGl0ZSk6aG92ZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgQGluY2x1ZGUgd2hpdGVTdG9uZSgpO1xuICAgICAgb3BhY2l0eTowLjU7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuZGl2IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgIzUyMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5QzM3Mjtcbn1cbi5ib2FyZCAucm93IHtcbiAgZm9udC1zaXplOiAwO1xufVxuLmJvYXJkIC5yb3cgLmNlbGwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5ib2FyZCAucm93IC5jZWxsOmFmdGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMXB4O1xufVxuLmJvYXJkIC5yb3cgLmNlbGw6YmVmb3JlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyMjtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJvYXJkIC5yb3cgLmNlbGw6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICB3aWR0aDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG4uYm9hcmQgLnJvdyAuY2VsbDpsYXN0LWNoaWxkOmFmdGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgcmlnaHQ6IDUwJTtcbn1cbi5ib2FyZCAucm93IC5jZWxsLnN0YXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGNpcmNsZSBjbG9zZXN0LXNpZGUsICM1MjIgMjAlLCByZ2JhKDAsIDAsIDAsIDApIDMwJSk7XG59XG4uYm9hcmQgLnJvdyAuY2VsbC5ibGFjazphZnRlciB7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM0MDQwNDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQwJSA0MCUsIGNpcmNsZSBjbG9zZXN0LWNvcm5lciwgIzQwNDA0MCAwJSwgcmdiYSgwLCAwLCAwLCAwKSA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudCg0MCUgNDAlLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAjNDA0MDQwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDkwJSk7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zdGVwKTtcbn1cbi5ib2FyZCAucm93IC5jZWxsLndoaXRlOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzQwNDA0MCwgaW5zZXQgLTNweCAtM3B4IDVweCBncmF5O1xuICBjb250ZW50OiBhdHRyKGRhdGEtc3RlcCk7XG59XG4uYm9hcmQgLnJvdzpmaXJzdC1jaGlsZCAuY2VsbDpiZWZvcmUge1xuICBoZWlnaHQ6IDUwJTtcbiAgdG9wOiA1MCU7XG59XG4uYm9hcmQgLnJvdzpsYXN0LWNoaWxkIC5jZWxsOmJlZm9yZSB7XG4gIGhlaWdodDogNTAlO1xuICBib3R0b206IDUwJTtcbn1cbi5ib2FyZC5ibGFjayAuY2VsbDpub3QoLmJsYWNrKTpub3QoLndoaXRlKTpob3ZlcjphZnRlciB7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4ICM0MDQwNDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KDQwJSA0MCUsIGNpcmNsZSBjbG9zZXN0LWNvcm5lciwgIzQwNDA0MCAwJSwgcmdiYSgwLCAwLCAwLCAwKSA5MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJhZGlhbC1ncmFkaWVudCg0MCUgNDAlLCBjaXJjbGUgY2xvc2VzdC1zaWRlLCAjNDA0MDQwIDAlLCByZ2JhKDAsIDAsIDAsIDApIDkwJSk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5ib2FyZC5ibGFjayAuY2VsbDpub3QoLmJsYWNrKTpub3QoLndoaXRlKTpob3ZlcjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJvYXJkLndoaXRlIC5jZWxsOm5vdCguYmxhY2spOm5vdCgud2hpdGUpOmhvdmVyOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxcHggIzQwNDA0MCwgaW5zZXQgLTNweCAtM3B4IDVweCBncmF5O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uYm9hcmQud2hpdGUgLmNlbGw6bm90KC5ibGFjayk6bm90KC53aGl0ZSk6aG92ZXI6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

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
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board.service */ "./src/app/modules/board/board.service.ts");
/* harmony import */ var godash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! godash */ "./node_modules/godash/dist/godash.js");
/* harmony import */ var godash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(godash__WEBPACK_IMPORTED_MODULE_2__);
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
    function BoardComponent(boardService) {
        this.boardService = boardService;
        // prevent click event or not
        this.disabled = false;
        // a move event
        this.move = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    BoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.dimensions) {
            // default go board settings
            this.dimensions = 19;
            this.stars = [{ x: 3, y: 3 }, { x: 3, y: 9 }, { x: 3, y: 15 }, { x: 9, y: 3 }, { x: 9, y: 9 }, { x: 9, y: 15 }, { x: 15, y: 3 }, { x: 15, y: 9 }, { x: 15, y: 15 }];
        }
        this.boardArray = Array(this.dimensions).fill(1);
        this.reset();
        this.boardService.getBoard().subscribe(function (board) {
            switch (board.action) {
                case 'reset':
                    _this.reset();
                    break;
                case 'retract':
                    _this.retract();
                    break;
                case 'disable':
                    _this.disable();
                    break;
                case 'enable':
                    _this.enable();
                    break;
                case 'normalColor':
                    _this.normalColor();
                    break;
                case 'oneColor':
                    _this.oneColor(board.data.color);
                    break;
                case 'addMove':
                    _this.addMove(board.data.x, board.data.y);
                    break;
            }
        });
    };
    /************
      Functions that can be triggered from service
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
                        this.color = godash__WEBPACK_IMPORTED_MODULE_2___default.a.WHITE;
                        break;
                    case 'WHITE':
                        this.color = godash__WEBPACK_IMPORTED_MODULE_2___default.a.BLACK;
                        break;
                }
            }
            else {
                this.color = godash__WEBPACK_IMPORTED_MODULE_2___default.a.BLACK;
            }
        }
        // initialise the board
        this.board = new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Board(this.dimensions);
        // add pre-exist moves
        if (this.moves) {
            this.moves.forEach(function (move) {
                var color = move.color.toUpperCase() === 'BLACK' ? godash__WEBPACK_IMPORTED_MODULE_2___default.a.BLACK : godash__WEBPACK_IMPORTED_MODULE_2___default.a.WHITE;
                _this.board = godash__WEBPACK_IMPORTED_MODULE_2___default.a.addMove(_this.board, new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Coordinate(move.x, move.y), color);
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
        this.color = color === 'white' ? godash__WEBPACK_IMPORTED_MODULE_2___default.a.WHITE : godash__WEBPACK_IMPORTED_MODULE_2___default.a.BLACK;
    };
    /**
     * Use normal color change rule
     */
    BoardComponent.prototype.normalColor = function () {
        this.fixColor = false;
        this.color = godash__WEBPACK_IMPORTED_MODULE_2___default.a.oppositeColor(this.color);
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
                _this.board = godash__WEBPACK_IMPORTED_MODULE_2___default.a.addMove(_this.board, new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Coordinate(move.x, move.y), move.color);
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
        if (this.color === godash__WEBPACK_IMPORTED_MODULE_2___default.a.BLACK) {
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
        switch (this.board.moves.get(new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Coordinate(x, y))) {
            case godash__WEBPACK_IMPORTED_MODULE_2___default.a.BLACK:
                c += 'black';
                break;
            case godash__WEBPACK_IMPORTED_MODULE_2___default.a.WHITE:
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
        var step = this.steps.slice().reverse().find(function (s) {
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
        if (!godash__WEBPACK_IMPORTED_MODULE_2___default.a.isLegalMove(this.board, new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Coordinate(x, y), this.color)) {
            return;
        }
        // this coordinate already has stone
        if (this.board.moves.get(new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Coordinate(x, y), godash__WEBPACK_IMPORTED_MODULE_2___default.a.EMPTY) !== godash__WEBPACK_IMPORTED_MODULE_2___default.a.EMPTY) {
            return;
        }
        this.board = godash__WEBPACK_IMPORTED_MODULE_2___default.a.addMove(this.board, new godash__WEBPACK_IMPORTED_MODULE_2___default.a.Coordinate(x, y), this.color);
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
            this.color = godash__WEBPACK_IMPORTED_MODULE_2___default.a.oppositeColor(this.color);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BoardComponent.prototype, "disabled", void 0);
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
        __metadata("design:paramtypes", [_board_service__WEBPACK_IMPORTED_MODULE_1__["BoardService"]])
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/app/modules/board/board.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/board/board.module.ts ***!
  \***********************************************/
/*! exports provided: BoardService, BoardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModule", function() { return BoardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board.component */ "./src/app/modules/board/board.component.ts");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.service */ "./src/app/modules/board/board.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"]; });

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

/***/ "./src/app/modules/board/board.service.ts":
/*!************************************************!*\
  !*** ./src/app/modules/board/board.service.ts ***!
  \************************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardService = /** @class */ (function () {
    function BoardService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    BoardService.prototype.getBoard = function () {
        return this.subject.asObservable();
    };
    BoardService.prototype.addMove = function (x, y) {
        this.subject.next({
            action: 'addMove',
            data: {
                x: x,
                y: y
            }
        });
    };
    BoardService.prototype.reset = function () {
        this.subject.next({
            action: 'reset'
        });
    };
    BoardService.prototype.retract = function () {
        this.subject.next({
            action: 'retract'
        });
    };
    BoardService.prototype.disable = function () {
        this.subject.next({
            action: 'disable'
        });
    };
    BoardService.prototype.enable = function () {
        this.subject.next({
            action: 'enable'
        });
    };
    BoardService.prototype.normalColor = function () {
        this.subject.next({
            action: 'normalColor'
        });
    };
    BoardService.prototype.oneColor = function (color) {
        this.subject.next({
            action: 'oneColor',
            data: {
                color: color
            }
        });
    };
    BoardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BoardService);
    return BoardService;
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