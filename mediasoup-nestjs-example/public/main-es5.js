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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _core_test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/test/test.component */ "./src/app/core/test/test.component.ts");





var routes = [
    {
        path: '',
        component: _core_test_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ngComponentDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], factory: function AppComponent_Factory(t) { return new (t || AppComponent)(); }, consts: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AppComponent;
}());

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _wss_wss_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wss/wss.module */ "./src/app/wss/wss.module.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm5/ngx-logger.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
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
    return AppModule;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _test_test_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.module */ "./src/app/core/test/test.module.ts");




var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
    CoreModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]
            ],
            _test_test_module__WEBPACK_IMPORTED_MODULE_2__["TestModule"]] });
    return CoreModule;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm5/ngx-logger.js");
/* harmony import */ var src_app_wss_wss_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/wss/wss.service */ "./src/app/wss/wss.service.ts");





var _c0 = ["producerVideo"];
var _c1 = ["consumerVideo"];
var _c2 = ["consumerAudio"];
var _c3 = ["autoplay", "", "controls", "", "playsinline", "", 2, "height", "400px", "width", "400px"];
var _c4 = ["producerVideo", ""];
var _c5 = ["consumerVideo", ""];
var _c6 = ["consumerAudio", ""];
var _c7 = [3, "click"];
var TestComponent = /** @class */ (function () {
    function TestComponent(logger, wssService) {
        this.logger = logger;
        this.wssService = wssService;
        // tslint:disable-next-line: variable-name
        this.user_id = 'aaa' + Math.random();
    }
    TestComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.wssService.connect(this.user_id);
                return [2 /*return*/];
            });
        });
    };
    TestComponent.prototype.showProducerVideo = function () {
        this.producerVideo.nativeElement.srcObject = this.wssService.mediasoup.producerVideoStream;
    };
    TestComponent.prototype.showConsumerVideo = function () {
        var keys = Array.from(this.wssService.mediasoup.consumersVideoStream.keys());
        this.consumerVideo.nativeElement.srcObject = this.wssService.mediasoup.consumersVideoStream.get(keys[0]);
    };
    TestComponent.prototype.showConsumerAudio = function () {
        var keys = Array.from(this.wssService.mediasoup.consumersAudioStream.keys());
        this.consumerAudio.nativeElement.srcObject = this.wssService.mediasoup.consumersAudioStream.get(keys[0]);
    };
    TestComponent.prototype.pauseProducerVideo = function () {
        this.wssService.mediasoup.producerVideoPause();
    };
    TestComponent.prototype.resumeProducerVideo = function () {
        this.wssService.mediasoup.producerVideoResume();
    };
    TestComponent.prototype.pauseProducerAudio = function () {
        this.wssService.mediasoup.producerAudioPause();
    };
    TestComponent.prototype.resumeProducerAudio = function () {
        this.wssService.mediasoup.producerAudioResume();
    };
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
    return TestComponent;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.component */ "./src/app/core/test/test.component.ts");




var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    TestModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TestModule, bootstrap: [_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"]] });
    TestModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TestModule_Factory(t) { return new (t || TestModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return TestModule;
}());

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


var MediasoupService = /** @class */ (function () {
    function MediasoupService(socket) {
        var _this = this;
        this.socket = socket;
        this.consumersVideo = new Map();
        this.consumersAudio = new Map();
        this.consumersVideoStream = new Map();
        this.consumersAudioStream = new Map();
        this.mediasoupDevice = new mediasoup_client__WEBPACK_IMPORTED_MODULE_1__["Device"]({});
        /**
         * Когда пользователь (не current_user) начинает передавать свой стрим
         */
        this.socket.on('mediaProduce', function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _a = data.kind;
                        switch (_a) {
                            case 'video': return [3 /*break*/, 1];
                            case 'audio': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.consumerVideoStart(data.user_id)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, this.consumerAudioStart(data.user_id)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        console.error(error_1.message, error_1.stack);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); });
        /**
         * Когда пользователь (любой) поворачивает камеру
         */
        this.socket.on('mediaVideoOrientationChange', function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('mediaVideoOrientationChange', data);
                return [2 /*return*/];
            });
        }); });
        /**
         * Когда пользователю (current_user) необходимо заново переподключить стрим
         */
        this.socket.on('mediaReproduce', function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
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
                return [2 /*return*/];
            });
        }); });
        /**
         * Когда пользователь (не current_user) ставит свой стрим на паузу
         */
        this.socket.on('mediaProducerPause', function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('mediaProducerPause', data);
                return [2 /*return*/];
            });
        }); });
        /**
         * Когда пользователь (не current_user) снимает свой стрим с паузы
         */
        this.socket.on('mediaProducerResume', function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('mediaProducerResume', data);
                return [2 /*return*/];
            });
        }); });
        /**
         * Когда кто-то разговаривает
         */
        this.socket.on('mediaActiveSpeaker', function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log('mediaActiveSpeaker', data);
                return [2 /*return*/];
            });
        }); });
        /**
         * Когда в комнате сменился воркер медиасупа и требуется переподключиться.
         */
        this.socket.on('mediaReconfigure', function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        return [4 /*yield*/, this.load(true)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.producerAudioStart()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.producerVideoStart()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error(error_2.message, error_2.stack);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    }
    /**
     * Сменить воркер медиасупа в комнате
     */
    MediasoupService.prototype.reConfigureMedia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('mediaReconfigure')];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.error(error_3.message, error_3.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Подключиться к медиасупу
     * @param skipConsume не принимать стримы от уже подключенных
     */
    MediasoupService.prototype.load = function (skipConsume) {
        if (skipConsume === void 0) { skipConsume = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, audioProducerIds, videoProducerIds, error_4;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'getRouterRtpCapabilities' })];
                    case 1:
                        data = _a.sent();
                        if (!!this.mediasoupDevice.loaded) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.mediasoupDevice.load(data)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.createProducerTransport()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.createConsumerTransport()];
                    case 5:
                        _a.sent();
                        if (!!skipConsume) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.socket.request('media', { action: 'getAudioProducerIds' })];
                    case 6:
                        audioProducerIds = _a.sent();
                        audioProducerIds.forEach(function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.consumerAudioStart(id)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, this.socket.request('media', { action: 'getVideoProducerIds' })];
                    case 7:
                        videoProducerIds = _a.sent();
                        videoProducerIds.forEach(function (id) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.consumerVideoStart(id)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_4 = _a.sent();
                        console.error(error_4.message, error_4.stack);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Отключиться от медиасупа
     */
    MediasoupService.prototype.close = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.producerVideoClose()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.producerAudioClose()];
                    case 2:
                        _a.sent();
                        if (this.producerTransport && !this.producerTransport.closed) {
                            this.producerTransport.close();
                        }
                        if (this.consumerTransport && !this.consumerTransport.closed) {
                            this.consumerTransport.close();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        console.error(error_5.message, error_5.stack);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Создать транспорт для передачи своего стрима
     */
    MediasoupService.prototype.createProducerTransport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, error_6;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'createWebRtcTransport', data: { type: 'producer' } })];
                    case 1:
                        data = _a.sent();
                        this.producerTransport = this.mediasoupDevice.createSendTransport(data.params);
                        // 'connect' | 'produce' | 'producedata' | 'connectionstatechange'
                        this.producerTransport.on('connect', function (_a, callback, errback) {
                            var dtlsParameters = _a.dtlsParameters;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.socket.request('media', { action: 'connectWebRtcTransport', data: { dtlsParameters: dtlsParameters, type: 'producer' } })
                                                .then(callback)
                                                .catch(errback)];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        this.producerTransport.on('produce', function (_a, callback, errback) {
                            var kind = _a.kind, rtpParameters = _a.rtpParameters;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.socket.request('media', {
                                                action: 'produce',
                                                data: {
                                                    producerTransportId: this.producerTransport.id,
                                                    kind: kind,
                                                    rtpParameters: rtpParameters,
                                                },
                                            }).then(function (_a) {
                                                var id = _a.id;
                                                return callback({ id: id });
                                            })
                                                .catch(errback)];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        this.producerTransport.on('connectionstatechange', function (state) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (state) {
                                    case 'connecting': break;
                                    case 'connected': break;
                                    case 'failed':
                                        this.producerTransport.close();
                                        break;
                                    default: break;
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.error(error_6.message, error_6.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Создать транспорт для приема стримов от других пользователей
     */
    MediasoupService.prototype.createConsumerTransport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var data, error_7;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'createWebRtcTransport', data: { type: 'consumer' } })];
                    case 1:
                        data = _a.sent();
                        this.consumerTransport = this.mediasoupDevice.createRecvTransport(data.params);
                        // 'connect' | 'connectionstatechange'
                        this.consumerTransport.on('connect', function (_a, callback, errback) {
                            var dtlsParameters = _a.dtlsParameters;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.socket.request('media', { action: 'connectWebRtcTransport', data: { dtlsParameters: dtlsParameters, type: 'consumer' } })
                                                .then(callback)
                                                .catch(errback)];
                                        case 1:
                                            _b.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                        this.consumerTransport.on('connectionstatechange', function (state) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (state) {
                                    case 'connecting': break;
                                    case 'connected': break;
                                    case 'failed':
                                        this.consumerTransport.close();
                                        break;
                                    default: break;
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [3 /*break*/, 3];
                    case 2:
                        error_7 = _a.sent();
                        console.error(error_7.message, error_7.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Начать передавать свой видео-стрим
     */
    MediasoupService.prototype.producerVideoStart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videoStream, videoTrack, _a, error_8;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        if (!this.mediasoupDevice.canProduce('video')) return [3 /*break*/, 4];
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ video: { width: 200, height: 150 } })];
                    case 1:
                        videoStream = _b.sent();
                        videoTrack = videoStream.getVideoTracks()[0];
                        if (!videoTrack) return [3 /*break*/, 3];
                        if (!(this.producerTransport && !this.producerTransport.closed)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.producerTransport.produce({ track: videoTrack })];
                    case 2:
                        _a.producerVideo = _b.sent();
                        _b.label = 3;
                    case 3:
                        this.producerVideoStream = videoStream;
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_8 = _b.sent();
                        console.error(error_8.message, error_8.stack);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Поставить передачу своего видео-стрима на паузу
     */
    MediasoupService.prototype.producerVideoPause = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    if (this.producerVideo && !this.producerVideo.paused) {
                        this.producerVideo.pause();
                    }
                }
                catch (error) {
                    console.error(error.message, error.stack);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Снять с паузы передапчу своего видео-стрима
     */
    MediasoupService.prototype.producerVideoResume = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(this.producerVideo && this.producerVideo.paused && !this.producerVideo.closed)) return [3 /*break*/, 1];
                        this.producerVideo.resume();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(this.producerVideo && this.producerVideo.closed)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.producerVideoStart()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_9 = _a.sent();
                        console.error(error_9.message, error_9.stack);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Остановить передачу своего видео-стрима (для повторной передачи требуется пересоздать продюсера)
     */
    MediasoupService.prototype.producerVideoClose = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    if (this.producerVideo && !this.producerVideo.closed) {
                        this.producerVideo.close();
                    }
                }
                catch (error) {
                    console.error(error.message, error.stack);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Начать передавать свой аудио-стрим
     */
    MediasoupService.prototype.producerAudioStart = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var audioStream, audioTrack, _a, error_10;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        if (!this.mediasoupDevice.canProduce('audio')) return [3 /*break*/, 4];
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: true })];
                    case 1:
                        audioStream = _b.sent();
                        audioTrack = audioStream.getAudioTracks()[0];
                        if (!audioTrack) return [3 /*break*/, 3];
                        if (!(this.producerTransport && !this.producerTransport.closed)) return [3 /*break*/, 3];
                        _a = this;
                        return [4 /*yield*/, this.producerTransport.produce({ track: audioTrack })];
                    case 2:
                        _a.producerAudio = _b.sent();
                        _b.label = 3;
                    case 3:
                        this.producerAudioStream = audioStream;
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_10 = _b.sent();
                        console.error(error_10.message, error_10.stack);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Поставить передачу своего аудио-стрима на паузу
     */
    MediasoupService.prototype.producerAudioPause = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    if (this.producerAudio && !this.producerAudio.paused) {
                        this.producerAudio.pause();
                    }
                }
                catch (error) {
                    console.error(error.message, error.stack);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Снять с паузы передапчу своего аудио-стрима
     */
    MediasoupService.prototype.producerAudioResume = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_11;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!(this.producerAudio && this.producerAudio.paused && !this.producerAudio.closed)) return [3 /*break*/, 1];
                        this.producerAudio.resume();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(this.producerAudio && this.producerAudio.closed)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.producerAudioStart()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_11 = _a.sent();
                        console.error(error_11.message, error_11.stack);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Остановить передачу своего аудио-стрима (для повторной передачи требуется пересоздать продюсера)
     */
    MediasoupService.prototype.producerAudioClose = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                try {
                    if (this.producerAudio && !this.producerAudio.closed) {
                        this.producerAudio.close();
                    }
                }
                catch (error) {
                    console.error(error.message, error.stack);
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Поставить на паузу стрим юзера
     */
    MediasoupService.prototype.targetProducerPause = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_12;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'producerPause', data: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_12 = _a.sent();
                        console.error(error_12.message, error_12.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Снять с паузы стрим юзера
     * @param data юзер и тип стрима
     */
    MediasoupService.prototype.targetProducerResume = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_13;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'producerResume', data: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_13 = _a.sent();
                        console.error(error_13.message, error_13.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Остановить стрим юзера (чтобы возобновить передачу этому пользователю придется пересоздать продюсера)
     * @param data юзер и тип стрима
     */
    MediasoupService.prototype.targetProducerClose = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_14;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'producerClose', data: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_14 = _a.sent();
                        console.error(error_14.message, error_14.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Поставить на паузу стрим всех юзеров
     * @param data тип стрима
     */
    MediasoupService.prototype.allProducerPause = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_15;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'allProducerPause', data: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_15 = _a.sent();
                        console.error(error_15.message, error_15.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Снять с паузы стрим всех юзеров
     * @param data тип стрима
     */
    MediasoupService.prototype.allProducerResume = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_16;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'allProducerResume', data: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_16 = _a.sent();
                        console.error(error_16.message, error_16.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Остановить стрим всех юзеров (чтобы возобновить передачу этим пользователям придется пересоздать продюсера)
     * @param data тип стрима
     */
    MediasoupService.prototype.allProducerClose = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_17;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', { action: 'allProducerClose', data: data })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        error_17 = _a.sent();
                        console.error(error_17.message, error_17.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Приня видео стрим от другого пользователя
     * @param user_id юзер, которой передает видео-стрим
     */
    MediasoupService.prototype.consumerVideoStart = function (user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rtpCapabilities, consumeData, consumer, stream, error_18;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        rtpCapabilities = this.mediasoupDevice.rtpCapabilities;
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'consume',
                                data: { rtpCapabilities: rtpCapabilities, user_id: user_id, kind: 'video' },
                            })];
                    case 1:
                        consumeData = _a.sent();
                        return [4 /*yield*/, this.consumerTransport.consume(consumeData)];
                    case 2:
                        consumer = _a.sent();
                        // 'trackended' | 'transportclose'
                        consumer.on('transportclose', function () {
                            _this.consumersVideoStream.delete(user_id);
                            _this.consumersVideo.delete(user_id);
                        });
                        this.consumersVideo.set(user_id, consumer);
                        stream = new MediaStream();
                        stream.addTrack(consumer.track);
                        this.consumersVideoStream.set(user_id, stream);
                        return [3 /*break*/, 4];
                    case 3:
                        error_18 = _a.sent();
                        console.error(error_18.message, error_18.stack);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Принять аудио стрим от другого пользователя
     * @param user_id юзер, который передает аудио-стрим
     */
    MediasoupService.prototype.consumerAudioStart = function (user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var rtpCapabilities, consumeData, consumer, stream, error_19;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        rtpCapabilities = this.mediasoupDevice.rtpCapabilities;
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'consume',
                                data: { rtpCapabilities: rtpCapabilities, user_id: user_id, kind: 'audio' },
                            })];
                    case 1:
                        consumeData = _a.sent();
                        return [4 /*yield*/, this.consumerTransport.consume(consumeData)];
                    case 2:
                        consumer = _a.sent();
                        // 'trackended' | 'transportclose'
                        consumer.on('transportclose', function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.consumersAudioStream.delete(user_id);
                                this.consumersAudio.delete(user_id);
                                return [2 /*return*/];
                            });
                        }); });
                        this.consumersAudio.set(user_id, consumer);
                        stream = new MediaStream();
                        stream.addTrack(consumer.track);
                        this.consumersAudioStream.set(user_id, stream);
                        return [3 /*break*/, 4];
                    case 3:
                        error_19 = _a.sent();
                        console.error(error_19.message, error_19.stack);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Перезапустить подключение
     * @param type тип транспорта
     */
    MediasoupService.prototype.restartIce = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var iceParameters, _a, error_20;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'restartIce',
                                data: {
                                    type: type,
                                },
                            })];
                    case 1:
                        iceParameters = _b.sent();
                        _a = type;
                        switch (_a) {
                            case 'producer': return [3 /*break*/, 2];
                            case 'consumer': return [3 /*break*/, 4];
                        }
                        return [3 /*break*/, 6];
                    case 2: return [4 /*yield*/, this.producerTransport.restartIce({ iceParameters: iceParameters })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.consumerTransport.restartIce({ iceParameters: iceParameters })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_20 = _b.sent();
                        console.error(error_20.message, error_20.stack);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Получить инфу о своем транспорте
     * @param type тип транспорта
     */
    MediasoupService.prototype.getTransportStats = function (type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_21;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'getTransportStats',
                                data: {
                                    type: type,
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_21 = _a.sent();
                        console.error(error_21.message, error_21.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Получить инфу о стриме, который передает пользователь
     * @param kind тип стрима
     * @param user_id уникальный идентификатор юзера
     */
    MediasoupService.prototype.getProducerStats = function (kind, user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_22;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'getProducerStats',
                                data: {
                                    kind: kind,
                                    user_id: user_id,
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_22 = _a.sent();
                        console.error(error_22.message, error_22.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Получить инфу о стриме, который принимает current_user от другого пользователя
     * @param kind тип стрима
     * @param user_id уникальный идентификатор юзера
     */
    MediasoupService.prototype.getConsumerStats = function (kind, user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_23;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'getConsumerStats',
                                data: {
                                    kind: kind,
                                    user_id: user_id,
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_23 = _a.sent();
                        console.error(error_23.message, error_23.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Получить опорный кадр у пользователя, стрим которого принимается.
     * Только для видео
     * @param user_id уникальный идентификатор юзера
     */
    MediasoupService.prototype.requestConsumerKeyFrame = function (user_id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var error_24;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.socket.request('media', {
                                action: 'requestConsumerKeyFrame',
                                data: {
                                    user_id: user_id,
                                },
                            })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_24 = _a.sent();
                        console.error(error_24.message, error_24.stack);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return MediasoupService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _wss_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wss.service */ "./src/app/wss/wss.service.ts");




var WssModule = /** @class */ (function () {
    function WssModule() {
    }
    WssModule.ngModuleDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WssModule });
    WssModule.ngInjectorDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WssModule_Factory(t) { return new (t || WssModule)(); }, providers: [
            _wss_service__WEBPACK_IMPORTED_MODULE_2__["WssService"],
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return WssModule;
}());

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _wss_mediasoup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wss.mediasoup */ "./src/app/wss/wss.mediasoup.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm5/ngx-logger.js");







var WssService = /** @class */ (function () {
    function WssService(logger) {
        this.logger = logger;
    }
    // tslint:disable-next-line: variable-name
    WssService.prototype.connect = function (current_user_id) {
        var _this = this;
        this.socket = Object(socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"])(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].wss_url, {
            query: {
                session_id: 1,
                user_id: current_user_id,
            }
        });
        this.socket.request = function (ioEvent, data) {
            if (data === void 0) { data = {}; }
            return new Promise(function (resolve) {
                _this.socket.emit(ioEvent, data, resolve);
            });
        };
        this.mediasoup = new _wss_mediasoup__WEBPACK_IMPORTED_MODULE_4__["MediasoupService"](this.socket);
        this.socket.on('connect', function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mediasoup.load()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.mediasoup.producerVideoStart()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.mediasoup.producerAudioStart()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        this.socket.on('mediaClientConnected', function (msg) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        }); });
        this.socket.on('mediaClientDisconnect', function (msg) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        }); });
    };
    WssService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WssService, factory: function WssService_Factory(t) { return new (t || WssService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"])); }, providedIn: null });
    return WssService;
}());

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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map