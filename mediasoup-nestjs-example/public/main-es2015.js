(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/test/test.component */ "./src/app/core/test/test.component.ts");





const routes = [
    {
        path: '',
        component: _core_test_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null);


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null);


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _wss_wss_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wss/wss.module */ "./src/app/wss/wss.module.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm2015/ngx-logger.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");










class AppModule {
}
AppModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_5__["LoggerModule"].forRoot({ level: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NgxLoggerLevel"].DEBUG }),
            _wss_wss_module__WEBPACK_IMPORTED_MODULE_4__["WssModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ngx_logger__WEBPACK_IMPORTED_MODULE_5__["LoggerModule"], _wss_wss_module__WEBPACK_IMPORTED_MODULE_4__["WssModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    ngx_logger__WEBPACK_IMPORTED_MODULE_5__["LoggerModule"].forRoot({ level: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NgxLoggerLevel"].DEBUG }),
                    _wss_wss_module__WEBPACK_IMPORTED_MODULE_4__["WssModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _test_test_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.module */ "./src/app/core/test/test.module.ts");




class CoreModule {
}
CoreModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]
        ],
        _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]], exports: [_test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]
                ],
                exports: [
                    _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"],
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/core/test/test.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/test/test.component.ts ***!
  \*********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm2015/ngx-logger.js");
/* harmony import */ var src_app_wss_wss_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/wss/wss.service */ "./src/app/wss/wss.service.ts");





const _c0 = ["producerVideo"];
const _c1 = ["consumerVideo"];
const _c2 = ["consumerAudio"];
const _c3 = ["autoplay", "", "controls", "", "playsinline", "", 2, "height", "400px", "width", "400px"];
const _c4 = ["producerVideo", ""];
const _c5 = ["consumerVideo", ""];
const _c6 = ["consumerAudio", ""];
const _c7 = [3, "click"];
class TestComponent {
    constructor(logger, wssService) {
        this.logger = logger;
        this.wssService = wssService;
        // tslint:disable-next-line: variable-name
        this.user_id = 'aaa' + Math.random();
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.wssService.connect(this.user_id);
        });
    }
    showProducerVideo() {
        this.producerVideo.nativeElement.srcObject = this.wssService.mediasoup.producerVideoStream;
    }
    showConsumerVideo() {
        const keys = Array.from(this.wssService.mediasoup.consumersVideoStream.keys());
        this.consumerVideo.nativeElement.srcObject = this.wssService.mediasoup.consumersVideoStream.get(keys[0]);
    }
    showConsumerAudio() {
        const keys = Array.from(this.wssService.mediasoup.consumersAudioStream.keys());
        this.consumerAudio.nativeElement.srcObject = this.wssService.mediasoup.consumersAudioStream.get(keys[0]);
    }
    pauseProducerVideo() {
        this.wssService.mediasoup.producerVideoPause();
    }
    resumeProducerVideo() {
        this.wssService.mediasoup.producerVideoResume();
    }
    pauseProducerAudio() {
        this.wssService.mediasoup.producerAudioPause();
    }
    resumeProducerAudio() {
        this.wssService.mediasoup.producerAudioResume();
    }
}
TestComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], factory: function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_wss_wss_service__WEBPACK_IMPORTED_MODULE_3__["WssService"])); }, viewQuery: function TestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadViewQuery"]())) && (ctx.producerVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadViewQuery"]())) && (ctx.consumerVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"]((_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadViewQuery"]())) && (ctx.consumerAudio = _t.first);
    } }, consts: 43, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Producer Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "video", _c3, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Consumer Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "video", _c3, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Consumer Audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "audio", _c3, _c6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_19_listener($event) { return ctx.showProducerVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Show producer video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_22_listener($event) { return ctx.showConsumerVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Show consumer video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_25_listener($event) { return ctx.showConsumerAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Show consumer audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_29_listener($event) { return ctx.pauseProducerVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Pause producer video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_31_listener($event) { return ctx.resumeProducerVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Resume producer video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_37_listener($event) { return ctx.pauseProducerAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Pause producer audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", _c7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TestComponent_Template_button_click_39_listener($event) { return ctx.resumeProducerAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Resume producer audio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.scss']
            }]
    }], function () { return [{ type: ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"] }, { type: src_app_wss_wss_service__WEBPACK_IMPORTED_MODULE_3__["WssService"] }]; }, { producerVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['producerVideo', { static: false }]
        }], consumerVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['consumerVideo', { static: false }]
        }], consumerAudio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['consumerAudio', { static: false }]
        }] });


/***/ }),

/***/ "./src/app/core/test/test.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/test/test.module.ts ***!
  \******************************************/
/*! exports provided: TestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestModule", function() { return TestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.component */ "./src/app/core/test/test.component.ts");




class TestModule {
}
TestModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TestModule, bootstrap: [_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"]] });
TestModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TestModule_Factory(t) { return new (t || TestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestModule, { declarations: [_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                bootstrap: [
                    _test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"]
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/wss/wss.mediasoup.ts":
/*!**************************************!*\
  !*** ./src/app/wss/wss.mediasoup.ts ***!
  \**************************************/
/*! exports provided: MediasoupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediasoupService", function() { return MediasoupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var mediasoup_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mediasoup-client */ "./node_modules/mediasoup-client/lib/index.js");
/* harmony import */ var mediasoup_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mediasoup_client__WEBPACK_IMPORTED_MODULE_1__);


class MediasoupService {
    constructor(socket) {
        this.socket = socket;
        this.consumersVideo = new Map();
        this.consumersAudio = new Map();
        this.consumersVideoStream = new Map();
        this.consumersAudioStream = new Map();
        this.mediasoupDevice = new mediasoup_client__WEBPACK_IMPORTED_MODULE_1__["Device"]({});
        /**
         * Когда пользователь (не current_user) начинает передавать свой стрим
         */
        this.socket.on('mediaProduce', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                switch (data.kind) {
                    case 'video':
                        yield this.consumerVideoStart(data.user_id);
                        break;
                    case 'audio':
                        yield this.consumerAudioStart(data.user_id);
                        break;
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        }));
        /**
         * Когда пользователь (любой) поворачивает камеру
         */
        this.socket.on('mediaVideoOrientationChange', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('mediaVideoOrientationChange', data);
        }));
        /**
         * Когда пользователю (current_user) необходимо заново переподключить стрим
         */
        this.socket.on('mediaReproduce', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                switch (data.kind) {
                    case 'audio':
                        this.producerAudioStart();
                        break;
                    case 'video':
                        this.producerVideoStart();
                        break;
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        }));
        /**
         * Когда пользователь (не current_user) ставит свой стрим на паузу
         */
        this.socket.on('mediaProducerPause', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('mediaProducerPause', data);
        }));
        /**
         * Когда пользователь (не current_user) снимает свой стрим с паузы
         */
        this.socket.on('mediaProducerResume', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('mediaProducerResume', data);
        }));
        /**
         * Когда кто-то разговаривает
         */
        this.socket.on('mediaActiveSpeaker', (data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('mediaActiveSpeaker', data);
        }));
        /**
         * Когда в комнате сменился воркер медиасупа и требуется переподключиться.
         */
        this.socket.on('mediaReconfigure', () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.load(true);
                yield this.producerAudioStart();
                yield this.producerVideoStart();
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        }));
    }
    /**
     * Сменить воркер медиасупа в комнате
     */
    reConfigureMedia() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('mediaReconfigure');
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Подключиться к медиасупу
     * @param skipConsume не принимать стримы от уже подключенных
     */
    load(skipConsume = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const data = yield this.socket.request('media', { action: 'getRouterRtpCapabilities' });
                if (!this.mediasoupDevice.loaded) {
                    yield this.mediasoupDevice.load(data);
                }
                yield this.createProducerTransport();
                yield this.createConsumerTransport();
                if (!skipConsume) {
                    const audioProducerIds = yield this.socket.request('media', { action: 'getAudioProducerIds' });
                    audioProducerIds.forEach((id) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.consumerAudioStart(id);
                    }));
                    const videoProducerIds = yield this.socket.request('media', { action: 'getVideoProducerIds' });
                    videoProducerIds.forEach((id) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.consumerVideoStart(id);
                    }));
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Отключиться от медиасупа
     */
    close() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.producerVideoClose();
                yield this.producerAudioClose();
                if (this.producerTransport && !this.producerTransport.closed) {
                    this.producerTransport.close();
                }
                if (this.consumerTransport && !this.consumerTransport.closed) {
                    this.consumerTransport.close();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Создать транспорт для передачи своего стрима
     */
    createProducerTransport() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const data = yield this.socket.request('media', { action: 'createWebRtcTransport', data: { type: 'producer' } });
                this.producerTransport = this.mediasoupDevice.createSendTransport(data.params);
                // 'connect' | 'produce' | 'producedata' | 'connectionstatechange'
                this.producerTransport.on('connect', ({ dtlsParameters }, callback, errback) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.socket.request('media', { action: 'connectWebRtcTransport', data: { dtlsParameters, type: 'producer' } })
                        .then(callback)
                        .catch(errback);
                }));
                this.producerTransport.on('produce', ({ kind, rtpParameters }, callback, errback) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.socket.request('media', {
                        action: 'produce',
                        data: {
                            producerTransportId: this.producerTransport.id,
                            kind,
                            rtpParameters,
                        },
                    }).then(({ id }) => callback({ id }))
                        .catch(errback);
                }));
                this.producerTransport.on('connectionstatechange', (state) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    switch (state) {
                        case 'connecting': break;
                        case 'connected': break;
                        case 'failed':
                            this.producerTransport.close();
                            break;
                        default: break;
                    }
                }));
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Создать транспорт для приема стримов от других пользователей
     */
    createConsumerTransport() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const data = yield this.socket.request('media', { action: 'createWebRtcTransport', data: { type: 'consumer' } });
                this.consumerTransport = this.mediasoupDevice.createRecvTransport(data.params);
                // 'connect' | 'connectionstatechange'
                this.consumerTransport.on('connect', ({ dtlsParameters }, callback, errback) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.socket.request('media', { action: 'connectWebRtcTransport', data: { dtlsParameters, type: 'consumer' } })
                        .then(callback)
                        .catch(errback);
                }));
                this.consumerTransport.on('connectionstatechange', (state) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    switch (state) {
                        case 'connecting': break;
                        case 'connected': break;
                        case 'failed':
                            this.consumerTransport.close();
                            break;
                        default: break;
                    }
                }));
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Начать передавать свой видео-стрим
     */
    producerVideoStart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.mediasoupDevice.canProduce('video')) {
                    const videoStream = yield navigator.mediaDevices.getUserMedia({ video: { width: 200, height: 150 } });
                    const videoTrack = videoStream.getVideoTracks()[0];
                    if (videoTrack) {
                        if (this.producerTransport && !this.producerTransport.closed) {
                            this.producerVideo = yield this.producerTransport.produce({ track: videoTrack });
                        }
                        // 'trackended' | 'transportclose'
                        // this.producerVideo.on('transportclose', () => {});
                    }
                    this.producerVideoStream = videoStream;
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Поставить передачу своего видео-стрима на паузу
     */
    producerVideoPause() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.producerVideo && !this.producerVideo.paused) {
                    this.producerVideo.pause();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Снять с паузы передапчу своего видео-стрима
     */
    producerVideoResume() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.producerVideo && this.producerVideo.paused && !this.producerVideo.closed) {
                    this.producerVideo.resume();
                }
                else if (this.producerVideo && this.producerVideo.closed) {
                    yield this.producerVideoStart();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Остановить передачу своего видео-стрима (для повторной передачи требуется пересоздать продюсера)
     */
    producerVideoClose() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.producerVideo && !this.producerVideo.closed) {
                    this.producerVideo.close();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Начать передавать свой аудио-стрим
     */
    producerAudioStart() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.mediasoupDevice.canProduce('audio')) {
                    const audioStream = yield navigator.mediaDevices.getUserMedia({ audio: true });
                    const audioTrack = audioStream.getAudioTracks()[0];
                    if (audioTrack) {
                        if (this.producerTransport && !this.producerTransport.closed) {
                            this.producerAudio = yield this.producerTransport.produce({ track: audioTrack });
                        }
                        // 'trackended' | 'transportclose'
                        // this.producerAudio.on('transportclose', () => {});
                    }
                    this.producerAudioStream = audioStream;
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Поставить передачу своего аудио-стрима на паузу
     */
    producerAudioPause() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.producerAudio && !this.producerAudio.paused) {
                    this.producerAudio.pause();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Снять с паузы передапчу своего аудио-стрима
     */
    producerAudioResume() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.producerAudio && this.producerAudio.paused && !this.producerAudio.closed) {
                    this.producerAudio.resume();
                }
                else if (this.producerAudio && this.producerAudio.closed) {
                    yield this.producerAudioStart();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Остановить передачу своего аудио-стрима (для повторной передачи требуется пересоздать продюсера)
     */
    producerAudioClose() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                if (this.producerAudio && !this.producerAudio.closed) {
                    this.producerAudio.close();
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Поставить на паузу стрим юзера
     */
    targetProducerPause(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('media', { action: 'producerPause', data });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Снять с паузы стрим юзера
     * @param data юзер и тип стрима
     */
    targetProducerResume(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('media', { action: 'producerResume', data });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Остановить стрим юзера (чтобы возобновить передачу этому пользователю придется пересоздать продюсера)
     * @param data юзер и тип стрима
     */
    targetProducerClose(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('media', { action: 'producerClose', data });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Поставить на паузу стрим всех юзеров
     * @param data тип стрима
     */
    allProducerPause(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('media', { action: 'allProducerPause', data });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Снять с паузы стрим всех юзеров
     * @param data тип стрима
     */
    allProducerResume(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('media', { action: 'allProducerResume', data });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Остановить стрим всех юзеров (чтобы возобновить передачу этим пользователям придется пересоздать продюсера)
     * @param data тип стрима
     */
    allProducerClose(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.socket.request('media', { action: 'allProducerClose', data });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Приня видео стрим от другого пользователя
     * @param user_id юзер, которой передает видео-стрим
     */
    consumerVideoStart(user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const { rtpCapabilities } = this.mediasoupDevice;
                const consumeData = yield this.socket.request('media', {
                    action: 'consume',
                    data: { rtpCapabilities, user_id, kind: 'video' },
                });
                const consumer = yield this.consumerTransport.consume(consumeData);
                // 'trackended' | 'transportclose'
                consumer.on('transportclose', () => {
                    this.consumersVideoStream.delete(user_id);
                    this.consumersVideo.delete(user_id);
                });
                this.consumersVideo.set(user_id, consumer);
                const stream = new MediaStream();
                stream.addTrack(consumer.track);
                this.consumersVideoStream.set(user_id, stream);
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Принять аудио стрим от другого пользователя
     * @param user_id юзер, который передает аудио-стрим
     */
    consumerAudioStart(user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const { rtpCapabilities } = this.mediasoupDevice;
                const consumeData = yield this.socket.request('media', {
                    action: 'consume',
                    data: { rtpCapabilities, user_id, kind: 'audio' },
                });
                const consumer = yield this.consumerTransport.consume(consumeData);
                // 'trackended' | 'transportclose'
                consumer.on('transportclose', () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.consumersAudioStream.delete(user_id);
                    this.consumersAudio.delete(user_id);
                }));
                this.consumersAudio.set(user_id, consumer);
                const stream = new MediaStream();
                stream.addTrack(consumer.track);
                this.consumersAudioStream.set(user_id, stream);
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Перезапустить подключение
     * @param type тип транспорта
     */
    restartIce(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const iceParameters = yield this.socket.request('media', {
                    action: 'restartIce',
                    data: {
                        type,
                    },
                });
                switch (type) {
                    case 'producer':
                        yield this.producerTransport.restartIce({ iceParameters });
                        break;
                    case 'consumer':
                        yield this.consumerTransport.restartIce({ iceParameters });
                        break;
                }
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Получить инфу о своем транспорте
     * @param type тип транспорта
     */
    getTransportStats(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                return yield this.socket.request('media', {
                    action: 'getTransportStats',
                    data: {
                        type,
                    },
                });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Получить инфу о стриме, который передает пользователь
     * @param kind тип стрима
     * @param user_id уникальный идентификатор юзера
     */
    getProducerStats(kind, user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                return yield this.socket.request('media', {
                    action: 'getProducerStats',
                    data: {
                        kind,
                        user_id,
                    },
                });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Получить инфу о стриме, который принимает current_user от другого пользователя
     * @param kind тип стрима
     * @param user_id уникальный идентификатор юзера
     */
    getConsumerStats(kind, user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                return yield this.socket.request('media', {
                    action: 'getConsumerStats',
                    data: {
                        kind,
                        user_id,
                    },
                });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
    /**
     * Получить опорный кадр у пользователя, стрим которого принимается.
     * Только для видео
     * @param user_id уникальный идентификатор юзера
     */
    requestConsumerKeyFrame(user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                return yield this.socket.request('media', {
                    action: 'requestConsumerKeyFrame',
                    data: {
                        user_id,
                    },
                });
            }
            catch (error) {
                console.error(error.message, error.stack);
            }
        });
    }
}


/***/ }),

/***/ "./src/app/wss/wss.module.ts":
/*!***********************************!*\
  !*** ./src/app/wss/wss.module.ts ***!
  \***********************************/
/*! exports provided: WssModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WssModule", function() { return WssModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _wss_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wss.service */ "./src/app/wss/wss.service.ts");




class WssModule {
}
WssModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WssModule });
WssModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WssModule_Factory(t) { return new (t || WssModule)(); }, providers: [
        _wss_service__WEBPACK_IMPORTED_MODULE_2__["WssService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WssModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WssModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                providers: [
                    _wss_service__WEBPACK_IMPORTED_MODULE_2__["WssService"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null);


/***/ }),

/***/ "./src/app/wss/wss.service.ts":
/*!************************************!*\
  !*** ./src/app/wss/wss.service.ts ***!
  \************************************/
/*! exports provided: WssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WssService", function() { return WssService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _wss_mediasoup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wss.mediasoup */ "./src/app/wss/wss.mediasoup.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm2015/ngx-logger.js");







class WssService {
    constructor(logger) {
        this.logger = logger;
    }
    // tslint:disable-next-line: variable-name
    connect(current_user_id) {
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wss_url, {
            query: {
                session_id: 1,
                user_id: current_user_id,
            }
        });
        this.socket.request = (ioEvent, data = {}) => {
            return new Promise((resolve) => {
                this.socket.emit(ioEvent, data, resolve);
            });
        };
        this.mediasoup = new _wss_mediasoup__WEBPACK_IMPORTED_MODULE_4__["MediasoupService"](this.socket);
        this.socket.on('connect', () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.mediasoup.load();
            yield this.mediasoup.producerVideoStart();
            yield this.mediasoup.producerAudioStart();
        }));
        this.socket.on('mediaClientConnected', (msg) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // pass
        }));
        this.socket.on('mediaClientDisconnect', (msg) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // await this.mediasoup.deletePeer(msg.user_id);
        }));
    }
}
WssService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WssService, factory: function WssService_Factory(t) { return new (t || WssService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"])); }, providedIn: null });
/*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WssService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] }]; }, null);


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
const environment = {
    production: false,
    name: 'development',
    wss_url: 'https://tillsco.vboxe.com:8086/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/mediasoupTeam/nestAngular/app/mediasoup-angular-example/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map