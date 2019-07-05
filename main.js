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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n\tleaflet \r\n\tstyle=\"height: 100vh;\"\r\n    leafletDraw\r\n    [leafletOptions]=\"options\"\r\n    [leafletDrawOptions]=\"drawOptions\"\r\n    (leafletMapReady)=\"onMapReady($event)\">\r\n</div>"

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
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet-draw */ "./node_modules/leaflet-draw/dist/leaflet.draw.js");
/* harmony import */ var leaflet_draw__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_draw__WEBPACK_IMPORTED_MODULE_4__);





// import 'leaflet/images/marker-shadow.png';
// import 'leaflet/images/marker-icon.png';

var iconRetinaUrl = 'assets/leaflet/images/marker-icon-2x.png';
var iconUrl = 'assets/leaflet/images/marker-icon.png';
var shadowUrl = 'assets/leaflet/images/marker-shadow.png';
var iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"].prototype.options.icon = iconDefault;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.options = {
            layers: [
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
            ],
            zoom: 18,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])(8.524139, 76.936638)
        };
    }
    //  options = {
    //     layers: [
    //       tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    //         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    //       })
    //     ],
    //     zoom: 18,
    //     center: latLng(8.524139, 76.936638)
    //   };
    // drawOptions = {
    //     position: 'topleft',
    //     draw: {
    //         marker: {
    //             icon: L.icon({
    //                 iconSize: [25, 41],
    //                 iconAnchor: [13, 41],
    //                 iconUrl: '/assets/marker-icon.png',
    //                 shadowUrl: '/assets/marker-shadow.png'
    //             })
    //         }
    //     }
    // };
    //get the current location 
    AppComponent.prototype.onMapReady = function (map) {
        function onLocationFound(e) {
            // let path=[];
            leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"](e.latlng).on('dragend', function (e) {
                jquery__WEBPACK_IMPORTED_MODULE_3__('#latitude').val(e.target.getLatLng().lat);
                jquery__WEBPACK_IMPORTED_MODULE_3__('#longitude').val(e.target.getLatLng().lng);
            }).addTo(map)
                .bindPopup("Current Location :" + e.latlng.lat + ',' + e.latlng.lng);
            jquery__WEBPACK_IMPORTED_MODULE_3__('#latitude').val(e.latlng.lat);
            jquery__WEBPACK_IMPORTED_MODULE_3__('#longitude').val(e.latlng.lng);
            console.log(e.latlng.lat + ',' + e.latlng.lng);
            //console.log(path.push(e.latlng.lat + ',' + e.latlng.lng));
        }
        function onLocationError(e) {
            console.log(e.message);
        }
        map.on('locationfound', onLocationFound);
        map.on('locationerror', onLocationError);
        map.locate({ setView: true, watch: true, maxZoom: 18 });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _asymmetrik_ngx_leaflet_draw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet-draw */ "./node_modules/@asymmetrik/ngx-leaflet-draw/dist/index.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
                _asymmetrik_ngx_leaflet_draw__WEBPACK_IMPORTED_MODULE_5__["LeafletDrawModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\crome\Desktop\ngx-leaflet-draw-coordinates\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map