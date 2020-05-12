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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 p-0 bg-img h-md-100\" style=\"background-size: 100% 100%;\">\n    <img class=\"logo\" src=\"assets/images/symple_logo.png\" alt=\"\" style=\"height: 3.5rem;\">\n    <div class=\"text-white h-100 p-5\" style=\"margin-top: 0 !important; height: 100vh !important; overflow-x: hidden; display: flex; align-items: center; justify-content: center;\">\n      <div class=\"show-effect\" style=\"position: absolute; display: flex;\">\n        <img class=\"popupBg\" src=\"assets/images/popup-bg.png\" alt=\"\" style=\"position: relative; bottom: 3rem; left: 0; background-color: white; border-radius: 10px; width: 301px; height: 423px;\"> \n        <div style=\"position: absolute; left: 0; top: 0; right: 0; bottom: 0; display: block; margin: auto; text-align: center;\">\n          <img class=\"popupImg\" src=\"assets/images/popup-img.png\" alt=\"\" style=\"height:17rem;\">\n          <div class=\"congratzText\" style=\"line-height: 3rem; font-weight: 700; margin-top: 1rem; color:black; font-size: 3rem;\">Congratulations!</div><br />\n          <p style=\"font-size: 1.1rem; color:black;\"> You have setup a Symple Account with Free Plan for your company.<br />\n          A verification email has been sent to your email address. Please follow the step<br />\n          to verfiy your email.<br />\n          </p>\n          <button class=\"show-effect\" style=\"border-radius: 4px; padding: 0.5rem; width: 17rem; background-color: #2295F0; color: white; margin-top: 2rem; font-size: 1.7rem;\">OK</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/setupAccount/setup-account/setup-account.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/setupAccount/setup-account/setup-account.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-md-flex h-md-100 align-items-center\" style=\"background-color:white;\">\n    <div class=\"col-md-6 p-0 bg-img h-md-100\" style=\"background-size: 100% 100%;\">\n      <div class=\"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center\" style=\"margin-top: 0 !important;\">\n        <div class=\"logoarea pt-5 pb-5\">\n          <img class=\"logo\" src=\"assets/images/symple_logo.png\" alt=\"\" style=\"float: left; height: 3.5rem;\">\n          <h5 class=\"mb-4 font-weight-bold\" style=\"line-height: 5rem; font-size: 5rem; margin-top: 5.5rem;\">Sign up to <br />Symple Free Plan</h5>\n          <ul style=\"text-align: -webkit-center; margin-top: 2.5rem;\">\n            <li style=\"width: fit-content; font-size: 2rem;\">Start using with <strong>Free 10 Users</strong></li>\n            <li style=\"width: fit-content; font-size: 2rem;\">Full access to Activity Module</li>\n            <li style=\"width: fit-content; font-size: 2rem;\">Full access tp Attendance Module</li>\n            <li style=\"width: fit-content; font-size: 2rem;\">Full access to Leave Module</li>\n          </ul>\n          <img src=\"assets/images/screens.png\" alt=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; margin-top:1rem;\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 p-0 bg-white h-md-100 loginarea\">\n      <div class=\"d-md-flex align-items-center h-md-100 p-5 justify-content-center\" style=\"position: relative;\">\n        <h3 class=\"mb-4\" style=\"margin-bottom: 2.5rem; font-weight: 600; line-height: normal; font-size: xx-large; padding: 5rem;\">Setting up your <br /> Symple Company Account\n          <form class=\"form-horizontal\" [formGroup]=\"formGrp\" #f=\"ngForm\" autocomplete=\"off\" novalidate style=\"margin-top: 3rem;\">\n            <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n              <label for=\"tenant\" style=\"font-size:2rem;\">Symple Company Account Name</label>\n              <input class=\"form-control\" id=\"tenant\" formControlName=\"tenant\" type=\"text\" placeholder=\"Please enter your company name\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n              <validation-messages [control]=\"formGrp.controls.tenant\"></validation-messages>\n              <small style=\"color: red; font-size: small;\" *ngIf=\"formGrp.get('tenant').errors?.tenantExists\">Company Account name already taken</small>\n            </div>\n            <!-- <small class=\"form-text text-danger\" *ngIf=\"formGrp.controls['tenant'].errors?.invalid &amp;&amp; formGrp.get('tenant').touched\"  style=\"padding-left: 1rem; font-size: small;\">WHY NOT PRINTING</small> -->\n            <div class=\"form-group\" style=\"font-size: 2rem;\">\n              <label class=\"col-lg-3 control-label\" style=\"max-width: max-content; width: fit-content; color:black;\">Company Time Zone</label>\n              <div class=\"col-lg-12\">\n                <select class=\"bootstrap-select\" formControlName=\"timezone\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                  <option value=\"\">Please select your time zone</option>\n                  <option *ngFor=\"let i of timezones\" [value]=\"i.value\">{{i.label}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n              <label for=\"companyAddress\" style=\"font-size:2rem;\">Company Location</label>\n              <div class=\"location_input\" style=\"padding-right: 3rem; border: 0.5px solid #DFDFDF;\">\n                <input class=\"form-control\" id=\"companyAddress\" formControlName=\"companyAddress\" type=\"text\" placeholder=\"Please enter your company address\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n              </div>\n              <validation-messages [control]=\"formGrp.controls.companyAddress\"></validation-messages>\n            </div>\n            <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n              <label for=\"companyEmail\" style=\"font-size:2rem;\">Company Email</label>\n              <input class=\"form-control\" id=\"companyEmail\" formControlName=\"companyEmail\" type=\"email\" placeholder=\"company@test.email\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n              <validation-messages [control]=\"formGrp.controls.companyEmail\"></validation-messages>\n            </div>\n            <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n              <label for=\"companyPhone\" style=\"font-size:2rem;\">Company Phone Number</label>\n              <input class=\"form-control\" id=\"companyPhone\" formControlName=\"companyPhone\" type=\"text\" placeholder=\"+60161234567\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n              <validation-messages [control]=\"formGrp.controls.companyPhone\"></validation-messages>\n            </div>\n            <div class=\"form-group\" style=\"display:flex; justify-content:center;\">      \n              <button class=\"btn btn-success btn-round btn-block shadow-sm\" (click)=\"setup()\" [disabled]=\"formGrp.invalid\" type=\"button\" style=\"background-color: #2295F0; margin-top: 1.5rem; border-radius:7px !important; width: 25rem; padding: 1rem; font-size: 2rem;\">Next</button>\n            </div>\n          </form>\n        </h3>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"d-md-flex h-md-100 align-items-center\" style=\"background-color:white;\">\n    <div class=\"col-md-6 p-0 bg-img h-md-100\" style=\"background-size: 100% 100%;\">\n      <div class=\"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center\" style=\"margin-top: 0 !important;\">\n        <div class=\"logoarea pt-5 pb-5\">\n          <img class=\"logo\" src=\"assets/images/symple_logo.png\" alt=\"\" style=\"float: left; height: 3.5rem;\">\n          <h5 class=\"mb-4 font-weight-bold\" style=\"line-height: 5rem; font-size: 5rem; margin-top: 5.5rem;\">Sign up to <br />Symple Free Plan</h5>\n          <ul style=\"text-align: -webkit-center; margin-top: 2.5rem;\">\n            <li style=\"width: fit-content; font-size: 2rem;\">Start using with <strong>Free 10 Users</strong></li>\n            <li style=\"width: fit-content; font-size: 2rem;\">Full access to Activity Module</li>\n            <li style=\"width: fit-content; font-size: 2rem;\">Full access tp Attendance Module</li>\n            <li style=\"width: fit-content; font-size: 2rem;\">Full access to Leave Module</li>\n          </ul>\n          <img src=\"assets/images/screens.png\" alt=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; margin-top:1rem;\">\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 p-0 bg-white h-md-100 loginarea\">\n      <div class=\"d-md-flex align-items-center h-md-100 p-5 justify-content-center\" style=\"position: relative;\">\n          <h3 class=\"mb-4\" style=\"margin-bottom: 2.5rem; font-weight: 600; line-height: normal; font-size: xx-large; padding: 5rem;\">Start with a free account <br /> for your company today\n            <form class=\"form-horizontal\" [formGroup]=\"formGrp\" autocomplete=\"off\" novalidate style=\"margin-top: 3rem;\">\n              <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n                <label for=\"userName\" style=\"font-size:2rem;\">Admin Login</label>\n                <input class=\"form-control\" id=\"userName\" formControlName=\"userName\" type=\"text\" placeholder=\"Please enter your admin login\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                <validation-messages [control]=\"formGrp.controls.userName\"></validation-messages>\n                <small style=\"color: red; font-size: small;\" *ngIf=\"formGrp.get('userName').errors?.userNameExists\">Username already taken</small>\n              </div>\n              <div style=\"display:flex;\">                           \n                <div class=\"form-group\" style=\"padding: 0 1.5rem; width: calc(100% / 2);\">\n                  <label for=\"firstName\" style=\"font-size:2rem;\">First Name</label>\n                  <input class=\"form-control\" id=\"firstName\" formControlName=\"firstName\" type=\"text\" placeholder=\"John\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                  <validation-messages [control]=\"formGrp.controls.firstName\"></validation-messages>\n                </div>\n                <div class=\"form-group\" style=\"padding: 0 1.5rem; width: calc(100% / 2);\">\n                  <label for=\"lastName\" style=\"font-size:2rem;\">Last Name</label>\n                  <input class=\"form-control\" id=\"lastName\" formControlName=\"lastName\" type=\"text\" placeholder=\"Doe\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                  <validation-messages [control]=\"formGrp.controls.lastName\"></validation-messages>\n                </div>\n              </div>\n              <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n                <label for=\"password\" style=\"font-size:2rem;\">Password</label>\n                <input class=\"form-control\" id=\"password\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                <validation-messages [control]=\"formGrp.controls.password\"></validation-messages>\n              </div>\n              <div class=\"form-group\" style=\"padding: 0 1.5rem; margin-bottom: 0 !important;\">\n                <label for=\"confirmPassword\" style=\"font-size:2rem;\">Confirm Password</label>\n                <input class=\"form-control\" id=\"confirmPassword\" formControlName=\"confirmPassword\" type=\"password\" placeholder=\"Confirm Password\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                <validation-messages [control]=\"formGrp.controls.confirmPassword\"></validation-messages>\n              </div>\n              <!-- <small class=\"form-text text-danger\" *ngIf=\"formGrp.hasError('passwordMatch') &amp;&amp; formGrp.get('password').touched &amp;&amp; formGrp.get('confirmPassword').touched\" style=\"padding-left: 1rem; \">Passwords must match</small> -->\n              <div class=\"form-group\" style=\"display:flex; justify-content:center;\">  \n                <button class=\"btn btn-success btn-round btn-block shadow-sm\" (click)=\"done()\" [disabled]=\"formGrp.invalid\" type=\"button\" style=\"background-color: #2295F0; margin-top: 1.5rem; border-radius:7px !important; width: 25rem; padding: 1rem; font-size: 2rem;\">Done</button>\n              </div>\n            </form>\n          </h3>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/sign-up/sign-up.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/sign-up/sign-up.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-md-flex h-md-100 align-items-center\" style=\"background-color:white;\">\n    <div class=\"col-md-6 p-0 bg-img h-md-100\" style=\"background-size: 100% 100%;\">\n    <img class=\"logo\" src=\"assets/images/symple_logo.png\" alt=\"\" style=\"float: left; height: 3.5rem;\">\n        <div class=\"text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center\">\n            <div class=\"logoarea pt-5 pb-5\">\n                <h5 class=\"mb-4 font-weight-bold\" style=\"line-height: 5rem; font-size: 5rem; margin-top: 5.5rem;\">Sign up to <br />Symple Free Plan</h5>\n                <ul style=\"text-align: -webkit-center; margin-top: 2.5rem;\">\n                    <li style=\"width: fit-content; font-size: 2rem;\">Start using with <strong>Free 10 Users</strong></li>\n                    <li style=\"width: fit-content; font-size: 2rem;\">Full access to Activity Module</li>\n                    <li style=\"width: fit-content; font-size: 2rem;\">Full access tp Attendance Module</li>\n                    <li style=\"width: fit-content; font-size: 2rem;\">Full access to Leave Module</li>\n                </ul>\n                <img src=\"assets/images/screens.png\" alt=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; margin-top:1rem;\">\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6 p-0 bg-white h-md-100 loginarea\">\n        <div class=\"d-md-flex align-items-center h-md-100 p-5 justify-content-center\" style=\"position: relative;\">\n            <h3 class=\"mb-4\" style=\"margin-bottom: 2.5rem; font-weight: 600; line-height: normal; font-size: xx-large; padding: 5rem;\">Start with a free account <br /> for your company today\n                <form [formGroup]=\"formGrp\" novalidate style=\"margin-top: 3rem;\">\n                    <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n                        <label for=\"companyName\" style=\"font-size:2rem;\">Company Name</label>\n                        <input class=\"form-control\" id=\"companyName\" formControlName=\"companyName\" type=\"text\" placeholder=\"symple sdn bhd\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                        <validation-messages [control]=\"formGrp.controls.companyName\"></validation-messages>\n                    </div>\n                    <!-- <small class=\"form-text text-danger\" *ngIf=\"formGrp.hasError('isAlphaNumeric') &amp;&amp; formGrp.touched\" style=\"padding-left: 1rem; font-size: small;\">No special character are allowed.</small> -->\n                    <div class=\"form-group\" style=\"padding: 0 1.5rem;\">\n                        <label for=\"accountEmail\" style=\"font-size:2rem;\">Email</label>\n                        <input class=\"form-control\" formControlName=\"accountEmail\" type=\"accountEmail\" placeholder=\"johndoe@test.com\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                        <validation-messages [control]=\"formGrp.controls.accountEmail\"></validation-messages>\n                    </div>\n                    <div style=\"display:flex;\">                           \n                        <div class=\"form-group\" style=\"padding: 0 1.5rem; width: calc(100% / 2);\">\n                            <label for=\"accountFirstName\" style=\"font-size:2rem;\">First Name</label>\n                            <input class=\"form-control\" id=\"accountFirstName\" formControlName=\"accountFirstName\" type=\"text\" placeholder=\"John\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                            <validation-messages [control]=\"formGrp.controls.accountFirstName\"></validation-messages>\n                        </div>\n                        <div class=\"form-group\" style=\"padding: 0 1.5rem; width: calc(100% / 2);\">\n                            <label for=\"lastName\" style=\"font-size:2rem;\">Last Name</label>\n                            <input class=\"form-control\" id=\"accountLastName\" formControlName=\"accountLastName\" type=\"text\" placeholder=\"Doe\" style=\"padding: 2.375rem .75rem; font-size: 1.5rem;\">\n                            <validation-messages [control]=\"formGrp.controls.accountLastName\"></validation-messages>\n                        </div>\n                    </div>\n                    <div class=\"form-group form-check\" style=\"padding: 0 1rem; display:flex; flex-direction:column;\">\n                        <div style=\"display:flex;\">\n                            <input class=\"form-check-input\" id=\"terms\" type=\"checkbox\" style=\"margin-right: 1rem;\" formControlName=\"terms\" style=\"margin-left: 1rem;\">\n                            <label class=\"form-check-label small text-muted\" for=\"terms\" style=\"font-size: 1.5rem; margin-top: 0.4rem; margin-left: 3rem;\">I have read and accept the <a href=\"#\">Terms and Conditions</a></label>\n                        </div>\n                        <validation-messages style=\"padding:1rem;\" [control]=\"formGrp.controls.terms\"></validation-messages>\n                    </div>\n                    <div class=\"form-group\" style=\"display:flex; justify-content:center;\">  \n                        <button class=\"btn btn-success btn-round btn-block shadow-sm\" (click)=\"save(formGrp.value)\" [disabled]=\"formGrp.invalid\" type=\"submit\" style=\"background-color: #2295F0; margin-top: 1.5rem; border-radius:7px !important; width: 25rem; padding: 1rem; font-size: 2rem;\">\n                            <!-- <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span> -->\n                            Sign Up\n                        </button>\n                    </div>\n                </form>\n            </h3>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_validation_validation_messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/validation/validation-messages.component */ "./src/app/components/validation/validation-messages.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _components_signup_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/signup/sign-up/sign-up.component */ "./src/app/components/signup/sign-up/sign-up.component.ts");
/* harmony import */ var _components_setupAccount_setup_account_setup_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/setupAccount/setup-account/setup-account.component */ "./src/app/components/setupAccount/setup-account/setup-account.component.ts");
/* harmony import */ var _components_setupAdmin_setup_admin_setup_admin_setup_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setupAdmin/setup-admin/setup-admin/setup-admin.component */ "./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.ts");
/* harmony import */ var _components_congratz_congratz_page_congratz_page_congratz_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/congratz/congratz-page/congratz-page/congratz-page.component */ "./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.ts");









// import { RegisterComponent } from './Components/Users/sign-up/register.component';




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            // RegisterComponent,
            _components_signup_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"],
            _components_setupAccount_setup_account_setup_account_component__WEBPACK_IMPORTED_MODULE_10__["SetupAccountComponent"],
            _components_setupAdmin_setup_admin_setup_admin_setup_admin_component__WEBPACK_IMPORTED_MODULE_11__["SetupAdminComponent"],
            _components_congratz_congratz_page_congratz_page_congratz_page_component__WEBPACK_IMPORTED_MODULE_12__["CongratzPageComponent"],
            _components_validation_validation_messages_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessagesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRouting"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [
            _components_validation_validation_messages_component__WEBPACK_IMPORTED_MODULE_4__["ValidationMessagesComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_signup_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/sign-up/sign-up.component */ "./src/app/components/signup/sign-up/sign-up.component.ts");
/* harmony import */ var _components_setupAccount_setup_account_setup_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setupAccount/setup-account/setup-account.component */ "./src/app/components/setupAccount/setup-account/setup-account.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_setupAdmin_setup_admin_setup_admin_setup_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/setupAdmin/setup-admin/setup-admin/setup-admin.component */ "./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.ts");
/* harmony import */ var _components_congratz_congratz_page_congratz_page_congratz_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/congratz/congratz-page/congratz-page/congratz-page.component */ "./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.ts");









const appRoutes = [
    { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
    { path: 'sign-up', component: _components_signup_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'setup-account', component: _components_setupAccount_setup_account_setup_account_component__WEBPACK_IMPORTED_MODULE_5__["SetupAccountComponent"] },
    { path: 'setup-admin', component: _components_setupAdmin_setup_admin_setup_admin_setup_admin_component__WEBPACK_IMPORTED_MODULE_7__["SetupAdminComponent"] },
    { path: 'congratulation', component: _components_congratz_congratz_page_congratz_page_congratz_page_component__WEBPACK_IMPORTED_MODULE_8__["CongratzPageComponent"] }
];
let AppRouting = class AppRouting {
};
AppRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
        declarations: [],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRouting);



/***/ }),

/***/ "./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZ3JhdHovY29uZ3JhdHotcGFnZS9jb25ncmF0ei1wYWdlL2NvbmdyYXR6LXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CongratzPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratzPageComponent", function() { return CongratzPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CongratzPageComponent = class CongratzPageComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() { }
    ngOnDestroy() { }
};
CongratzPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-congratz-page',
        template: __webpack_require__(/*! raw-loader!./congratz-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.html"),
        styles: ["\n      @media (min-width: 768px) {\n          .h-md-100 { height: 120vh; }\n          .popupBg { width: 690px !important; height: 570px !important; }\n          .popupImg { height: 26rem !important; }\n          .congratzText { line-height: 5rem !important; font-size: 3rem !important; }\n          p { font-size: 2rem !important; }\n          button { padding: 1rem !important; width: 25rem !important; font-size: 2rem !important;}\n      }\n      .btn-round { border-radius: 30px; }\n      .bg-img { background: url(assets/images/bg.png) no-repeat; }\n      .text-cyan { color: #35bdff; }\n      p {\n          font-family: Lato;\n      }\n      div.h-100 {\n        margin-top: 10vh;\n      }\n      input.ng-invalid.ng-touched {\n        border-color: red;\n      }\n      table {\n        margin-top: 20px;\n      }\n      .location_input {\n        background-image: url(assets/images/location.svg);\n        background-size: 25px 25px;\n        background-repeat: no-repeat;\n        background-position: right;\n      }\n      div.show-effect\n      {\n        position: relative;\n      }\n      div.show-effect:before, .effect2:after\n      {\n        z-index: -1;\n        position: absolute;\n        content: \"\";\n        bottom: 15px;\n        left: 10px;\n        width: 50%;\n        top: 80%;\n        max-width:300px;\n        background: #777;\n        -webkit-box-shadow: 0 15px 10px #777;\n        -moz-box-shadow: 0 15px 10px #777;\n        box-shadow: 0 15px 10px #777;\n        -webkit-transform: rotate(-3deg);\n        -moz-transform: rotate(-3deg);\n        -o-transform: rotate(-3deg);\n        -ms-transform: rotate(-3deg);\n        transform: rotate(-3deg);\n      }\n      div.show-effect:after\n      {\n        -webkit-transform: rotate(3deg);\n        -moz-transform: rotate(3deg);\n        -o-transform: rotate(3deg);\n        -ms-transform: rotate(3deg);\n        transform: rotate(3deg);\n        right: 10px;\n        left: auto;\n      }\n    ", __webpack_require__(/*! ./congratz-page.component.css */ "./src/app/components/congratz/congratz-page/congratz-page/congratz-page.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CongratzPageComponent);



/***/ }),

/***/ "./src/app/components/setupAccount/setup-account/setup-account.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/setupAccount/setup-account/setup-account.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dXBBY2NvdW50L3NldHVwLWFjY291bnQvc2V0dXAtYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setupAccount/setup-account/setup-account.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/setupAccount/setup-account/setup-account.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SetupAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupAccountComponent", function() { return SetupAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _validation_tenant_async_validation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../validation/tenant-async-validation.component */ "./src/app/components/validation/tenant-async-validation.component.ts");







let SetupAccountComponent = class SetupAccountComponent {
    constructor(fb, http, route, router, service) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.router = router;
        this.service = service;
        this.invalid = {};
        this.timezones = [
            { label: '(GMT)       Universal Coordinated Time', value: '0' },
            { label: '(GMT+1:00)  European Central Time', value: '1' },
            { label: '(GMT+2:00)  Eastern European Time', value: '2' },
            { label: '(GMT+3:00)  Eastern African Time', value: '3' },
            { label: '(GMT+3:50)  Middle East Time', value: '3.5' },
            { label: '(GMT+4:00)  Near East Time', value: '4' },
            { label: '(GMT+5:00)  Pakistan Lahore Time', value: '5' },
            { label: '(GMT+5:30)  India Standard Time', value: '5.5' },
            { label: '(GMT+6:00)  Bangladesh Standard Time', value: '6' },
            { label: '(GMT+7:00)  Vietnam Standard Time', value: '7' },
            { label: '(GMT+8:00)  China Taiwan Time', value: '8' },
            { label: '(GMT+9:00)  Japan Standard Time', value: '9' },
            { label: '(GMT+9:30)  Australia Central Time', value: '9.5' },
            { label: '(GMT+10:00) Australia Eastern Time', value: '10' },
            { label: '(GMT+11:00) Solomon Standard Time', value: '11' },
            { label: '(GMT+12:00) New Zealand Standard Time', value: '12' },
            { label: '(GMT-11:00) Midway Islands Time', value: '-11' },
            { label: '(GMT-10:00) Hawaii Standard Time', value: '-10' },
            { label: '(GMT-9:00)  Alaska Standard Time', value: '-9' },
            { label: '(GMT-8:00)  Pacific Standard Time', value: '-8' },
            { label: '(GMT-7:00)  Mountain Standard Time', value: '-7' },
            { label: '(GMT-6:00)  Central Standard Time', value: '-6' },
            { label: '(GMT-5:00)  Eastern Standard Time', value: '-5' },
            { label: '(GMT-4:00)  Puerto Rico and US Virgin Islands Time', value: '-4' },
            { label: '(GMT-3:00)  Canada Newfoundland Time', value: '-3' },
            { label: '(GMT-2:00)  Argentina Standard Time', value: '-2' },
            { label: '(GMT-1:00)  Central African Time', value: '-1' }
        ];
        this.route.queryParams.subscribe(itm => {
            this.queryParamsData = itm;
        });
    }
    ngOnInit() {
        this.formGrp = this.fb.group({
            tenant: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]), this.service.tenantValidator()],
            timezone: ['8', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            companyEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            companyPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].numberValidator]],
        });
    }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    setup() {
        console.log(this.formGrp.value);
        console.log(this.formGrp.valid);
        const data = this.formGrp.value;
        const object = Object.assign({}, this.queryParamsData, data);
        this.router.navigate(['/setup-admin'], { queryParams: object });
    }
};
SetupAccountComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _validation_tenant_async_validation_component__WEBPACK_IMPORTED_MODULE_6__["TenantValidators"] }
];
SetupAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setup-account',
        template: __webpack_require__(/*! raw-loader!./setup-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/setupAccount/setup-account/setup-account.component.html"),
        providers: [],
        styles: ["\n    .location_input {\n      background-image: url(assets/images/location.svg);\n      background-size: 26px 20px;\n      background-repeat: no-repeat;\n      background-position: right;\n    }\n  ", __webpack_require__(/*! ./setup-account.component.css */ "./src/app/components/setupAccount/setup-account/setup-account.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _validation_tenant_async_validation_component__WEBPACK_IMPORTED_MODULE_6__["TenantValidators"]])
], SetupAccountComponent);



/***/ }),

/***/ "./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dXBBZG1pbi9zZXR1cC1hZG1pbi9zZXR1cC1hZG1pbi9zZXR1cC1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SetupAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupAdminComponent", function() { return SetupAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var src_app_components_validation_username_async_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/validation/username-async-validation.component */ "./src/app/components/validation/username-async-validation.component.ts");









let SetupAdminComponent = class SetupAdminComponent {
    constructor(fb, http, route, router, service) {
        this.fb = fb;
        this.http = http;
        this.route = route;
        this.router = router;
        this.service = service;
        this.queryParamsData = {};
        this.route.queryParams.subscribe(itm => {
            this.queryParamsData = itm;
        });
    }
    ngOnInit() {
        this.formGrp = this.fb.group({
            userName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]), this.service.usernameValidator()],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"].confirmPasswordValidator
        });
    }
    ngAfterViewInit() { }
    ngOnDestroy() { }
    done() {
        const data = this.formGrp.value;
        delete data.confirmPassword;
        const object = Object.assign({}, this.queryParamsData, data);
        delete object.terms;
        console.log('final_object', object);
        this.createFreemiumAccount(object);
        this.router.navigate(['/congratulation']);
    }
    createFreemiumAccount(data) {
        const url = 'https://graph.symple.my/license';
        return this.http
            .post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.onError));
    }
    onError(err) {
        const errorMessage = err;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
SetupAdminComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_components_validation_username_async_validation_component__WEBPACK_IMPORTED_MODULE_8__["UsernameValidators"] }
];
SetupAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setup-admin',
        template: __webpack_require__(/*! raw-loader!./setup-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.html"),
        styles: [__webpack_require__(/*! ./setup-admin.component.css */ "./src/app/components/setupAdmin/setup-admin/setup-admin/setup-admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_components_validation_username_async_validation_component__WEBPACK_IMPORTED_MODULE_8__["UsernameValidators"]])
], SetupAdminComponent);



/***/ }),

/***/ "./src/app/components/signup/sign-up/sign-up.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/signup/sign-up/sign-up.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/sign-up/sign-up.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/signup/sign-up/sign-up.component.ts ***!
  \****************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignUpComponent = class SignUpComponent {
    constructor(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
    }
    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.formGrp = this.formBuilder.group({
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].alpaNumValidator]],
            accountEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator]],
            accountFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            accountLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            terms: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        });
    }
    save(data) {
        this.formGrp.markAllAsTouched();
        if (this.formGrp.valid) {
            this.router.navigate(['/setup-account'], { queryParams: data });
        }
    }
};
SignUpComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: __webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/sign-up/sign-up.component.html"),
        styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/signup/sign-up/sign-up.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SignUpComponent);



/***/ }),

/***/ "./src/app/components/validation/tenant-async-validation.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/validation/tenant-async-validation.component.ts ***!
  \****************************************************************************/
/*! exports provided: TenantValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TenantValidators", function() { return TenantValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TenantValidators = class TenantValidators {
    constructor(http) {
        this.http = http;
    }
    searchTenant(name) {
        // debounce
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            // Check if tenant is available
            return this.http.get(`https://graph.symple.my/license/check-tenant/${name}`);
        }));
    }
    tenantValidator() {
        return (control) => {
            return this.searchTenant(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
                console.log('tenantValidator', res);
                // if tenant is already taken
                if (!res.available) {
                    // return error
                    return { tenantExists: true };
                }
                else {
                    return null;
                }
            }));
        };
    }
};
TenantValidators.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TenantValidators = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TenantValidators);



/***/ }),

/***/ "./src/app/components/validation/username-async-validation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/validation/username-async-validation.component.ts ***!
  \******************************************************************************/
/*! exports provided: UsernameValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidators", function() { return UsernameValidators; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsernameValidators = class UsernameValidators {
    constructor(http) {
        this.http = http;
    }
    searchUser(name) {
        // debounce
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(500)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            // Check if username is available
            return this.http.get(`https://graph.symple.my/license/check-username/${name}`);
        }));
    }
    usernameValidator() {
        return (control) => {
            return this.searchUser(control.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
                console.log('usernameValidator', res);
                // if username is already taken
                if (!res.available) {
                    // return error
                    return { userNameExists: true };
                }
                else {
                    return null;
                }
            }));
        };
    }
};
UsernameValidators.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsernameValidators = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UsernameValidators);



/***/ }),

/***/ "./src/app/components/validation/validation-messages.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/validation/validation-messages.component.ts ***!
  \************************************************************************/
/*! exports provided: ValidationMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessagesComponent", function() { return ValidationMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");




let ValidationMessagesComponent = class ValidationMessagesComponent {
    constructor() {
    }
    get errorMessage() {
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
                return src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
], ValidationMessagesComponent.prototype, "control", void 0);
ValidationMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line: component-selector
        selector: 'validation-messages',
        template: `<small class="form-text text-danger" style="font-size: small;" *ngIf="errorMessage">{{errorMessage}}</small>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ValidationMessagesComponent);



/***/ }),

/***/ "./src/app/services/validation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/validation.service.ts ***!
  \************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
class ValidationService {
    // function to set error messages
    static getValidatorErrorMessage(validatorName, validatorValue) {
        const config = {
            required: 'This field is required',
            twoDecimalAllowed: 'Decimal value upto 2 decimal places is allowed.',
            invalidNumber: 'Input should be an integer value',
            invalidEmailAddress: 'Invalid email address',
            invalidPassword: 'New password and confirm password does not match',
            alphaNumericAllowed: 'Only apha numeric input is allowed',
            numericAllowed: 'Only numeric values are allowed',
            emailTaken: 'Email id already taken',
            minlength: `Minimum length should be ${validatorValue.requiredLength} characters`,
            maxlength: `Maximum length should be ${validatorValue.requiredLength} characters`
        };
        return config[validatorName];
    }
    static emailValidator(control) {
        // tslint:disable-next-line: max-line-length
        if (control.value.length === 0 || control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { invalidEmailAddress: true };
        }
    }
    static alpaNumValidator(control) {
        if (control.value.match(/^[a-zA-Z0-9]*$/)) {
            return null;
        }
        else {
            return { alphaNumericAllowed: true };
        }
    }
    static numberValidator(control) {
        if (control.value.length === 0 || control.value.match(/^[0-9]*$/)) {
            return null;
        }
        else {
            return { numericAllowed: true };
        }
    }
    static decimalValidation(control) {
        if (control.value.match(/^\d*\.?\d{0,2}$/g)) {
            return null;
        }
        else {
            return { twoDecimalAllowed: true };
        }
    }
    static confirmPasswordValidator(control) {
        const password = control.get('password').value; // get password from our password form control
        const confirmPassword = control.get('confirmPassword').value; // get password from our confirmPassword form control
        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({ invalidPassword: true });
        }
        return null;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/loke/Desktop/self-registration_symple/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map