webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.password = "";
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function (user) {
            console.log(user);
            _this.toastCtrl.create({
                message: "Bienvenido " + user.user.displayName,
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__feed_feed__["a" /* FeedPage */]);
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    LoginPage.prototype.gotoSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Planit\Desktop\movie last\feedly\src\pages\login\login.html"*/'<ion-header hidden>\n\n  <ion-navbar color="greenPrin">\n\n    <ion-title>\n\n      FeedRead\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-item text-center no-lines>\n\n    <ion-icon name="logo-rss" class="logo" color="light"></ion-icon>\n\n  </ion-item>\n\n  <ion-item text-center no-lines>\n\n    <h1>feedRead</h1>\n\n    <h6>Una app para tus feeds</h6>\n\n  </ion-item>\n\n  <ion-grid style="width: 75%">\n\n    <ion-row class="rowStyle">\n\n      <ion-icon name="mail" color="radicalRed"></ion-icon>\n\n      <ion-input type="email" placeholder="Tu email" [(ngModel)]="email"></ion-input>\n\n    </ion-row>\n\n    <ion-row class="rowStyle">\n\n      <ion-icon name="key" color="radicalRed"></ion-icon>\n\n      <ion-input type="password" placeholder="Tu password" [(ngModel)]="password"></ion-input>\n\n    </ion-row>\n\n    <ion-row>\n\n      <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="login()">Login</button>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <button ion-button block clear color="light" (click)="gotoSignup()">¿No tienes cuenta? Registro</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Planit\Desktop\movie last\feedly\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var FeedPage = /** @class */ (function () {
    function FeedPage(navCtrl, navParams, loadingCtrl, toastCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.camera = camera;
        this.text = "";
        this.posts = [];
        this.pageSize = 10;
        this.getPosts();
    }
    FeedPage.prototype.getPosts = function () {
        var _this = this;
        this.posts = [];
        var loading = this.loadingCtrl.create({
            content: "Cargando feeds..."
        });
        loading.present();
        var query = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").orderBy("created", "desc").limit(this.pageSize);
        // query.onSnapshot((snapshot) => {
        //   let changedDocs = snapshot.docChanges();
        //   changedDocs.forEach((change) => {
        //     if(change.type == "added"){
        //       //TODO
        //     }
        //     if(change.type == "modified"){
        //       console.log("El documento con el id " + change.doc.id + "ha sido modificado");
        //     }
        //     if(change.type == "removed"){
        //       //TODO
        //     }
        //   })
        // })
        query.get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            loading.dismiss();
            _this.cursor = _this.posts[_this.posts.length - 1];
            console.log(_this.posts);
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.loadMorePosts = function (event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").orderBy("created", "desc")
            .startAfter(this.cursor)
            .limit(this.pageSize).get()
            .then(function (docs) {
            docs.forEach(function (doc) {
                _this.posts.push(doc);
            });
            console.log(_this.posts);
            if (docs.size < _this.pageSize) {
                event.enable(false);
                _this.infiniteEvent = event;
            }
            else {
                event.complete();
                _this.cursor = _this.posts[_this.posts.length - 1];
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.refresh = function (event) {
        this.posts = [];
        this.getPosts();
        if (this.infiniteEvent) {
            this.infiniteEvent.enable(true);
        }
        event.complete();
    };
    FeedPage.prototype.post = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").add({
            text: this.text,
            created: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore.FieldValue.serverTimestamp(),
            owner: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid,
            owner_name: __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.displayName
        }).then(function (doc) { return __awaiter(_this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.image) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.upload(doc.id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.text = "";
                        this.image = undefined;
                        toast = this.toastCtrl.create({
                            message: "Tu post a sido creado exitosamente.",
                            duration: 3000
                        }).present();
                        this.getPosts();
                        return [2 /*return*/];
                }
            });
        }); }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.ago = function (time) {
        var difference = __WEBPACK_IMPORTED_MODULE_3_moment___default()(time).diff(__WEBPACK_IMPORTED_MODULE_3_moment___default()());
        return __WEBPACK_IMPORTED_MODULE_3_moment___default.a.duration(difference).humanize();
    };
    FeedPage.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().signOut().then(function () {
            var toast = _this.toastCtrl.create({
                message: "Te has deslogueado exitosamente.",
                duration: 3000
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    FeedPage.prototype.addPhoto = function () {
        this.launchCamera();
    };
    FeedPage.prototype.launchCamera = function () {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            targetHeight: 512,
            targetWidth: 512,
            allowEdit: true
        };
        this.camera.getPicture(options).then(function (base64Image) {
            console.log(base64Image);
            _this.image = "data:image/png;base64," + base64Image;
        }).catch(function (err) {
            console.log(err);
        });
    };
    FeedPage.prototype.upload = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var loading = _this.loadingCtrl.create({
                content: "Subiendo imagen"
            });
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage().ref("postImages/" + name);
            var uploadTask = ref.putString(_this.image.split(',')[1], "base64");
            uploadTask.on("state_changed", function (taskSnapshot) {
                console.log(taskSnapshot);
                var percentage = taskSnapshot.bytesTransferred / taskSnapshot.totalBytes * 100;
                loading.setContent("Subiendo " + percentage + "%");
            }, function (error) {
                console.log(error);
            }, function () {
                console.log("La fotografia se termino de subir!");
                uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
                    __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore().collection("posts").doc(name).update({
                        image: url
                    }).then(function () {
                        loading.dismiss();
                        resolve();
                    }).catch(function (err) {
                        loading.dismiss();
                        reject();
                    });
                }).catch(function (err) {
                    loading.dismiss();
                    reject();
                });
            });
        });
    };
    FeedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feed',template:/*ion-inline-start:"C:\Users\Planit\Desktop\movie last\feedly\src\pages\feed\feed.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="radicalRed">\n\n    <ion-title>Tus feeds</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only clear (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-row margin class="rowStyle">\n\n    <button ion-button icon-only color="radicalRed" clear (click)="addPhoto()">\n\n      <ion-icon name="images"></ion-icon>\n\n    </button>\n\n    <ion-input type="text" placeholder="Comenta algo..." [(ngModel)]="text"></ion-input>\n\n    <button ion-button icon-only color="radicalRed" clear (click)="post()">\n\n        <ion-icon name="send"></ion-icon>\n\n      </button>\n\n  </ion-row>\n\n  <ion-row margin class="rowStyle" *ngIf="image">\n\n    <ion-card class="round-corners">\n\n      <img [src]="image" class="round-corners">\n\n    </ion-card>\n\n  </ion-row>\n\n  <ion-refresher (ionRefresh)="refresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n  <ion-card *ngFor="let post of posts">\n\n    <ion-item-divider color="radicalRed">\n\n      {{ post.data().owner_name }} Dice\n\n    </ion-item-divider>\n\n    <ion-item text-wrap>\n\n      {{ post.data().text }}\n\n    </ion-item>\n\n    <img [src]="post.data().image" *ngIf="post.data().image">\n\n    <ion-row class="bottom-bar">\n\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="radicalRed" class="border-right">\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <small>12 Likes</small>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n          <button ion-button block icon-left clear small color="radicalRed" class="border-right">\n\n            <ion-icon name="text"></ion-icon>\n\n            <small>12 Coment.</small>\n\n          </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button block icon-left clear small color="radicalRed">\n\n          <small>hace {{ ago(post.data().created.toDate()) }}</small>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="loadMorePosts($event)">\n\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Planit\Desktop\movie last\feedly\src\pages\feed\feed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
    ], FeedPage);
    return FeedPage;
}());

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.name = "";
        this.email = "";
        this.password = "";
    }
    SignupPage.prototype.signup = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(function (data) {
            console.log(data);
            var newUser = data.user;
            newUser.updateProfile({
                displayName: _this.name,
                photoURL: ""
            }).then(function (res) {
                console.log("Perfil actualizado");
                _this.alertCtrl.create({
                    title: "Cuenta creada",
                    message: "Su cuenta fue creada exitosamente.",
                    buttons: [
                        {
                            text: "Ok",
                            handler: function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */]);
                            }
                        }
                    ]
                }).present();
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
            _this.toastCtrl.create({
                message: err.message,
                duration: 3000
            }).present();
        });
    };
    SignupPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Planit\Desktop\movie last\feedly\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar color="radicalRed">\n\n      \n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <ion-item text-center no-lines>\n\n      <ion-icon name="logo-rss" class="logo" color="light"></ion-icon>\n\n    </ion-item>\n\n    <ion-item text-center no-lines>\n\n      <h1>feedRead</h1>\n\n      <h6>Una app para tus feeds</h6>\n\n    </ion-item>\n\n    <ion-grid style="width: 75%">\n\n      <ion-row class="rowStyle">\n\n        <ion-icon name="person" color="radicalRed"></ion-icon>\n\n        <ion-input type="text" placeholder="Tu nombre" [(ngModel)]="name"></ion-input>\n\n      </ion-row>\n\n      <ion-row class="rowStyle">\n\n        <ion-icon name="mail" color="radicalRed"></ion-icon>\n\n        <ion-input type="email" placeholder="Tu email" [(ngModel)]="email"></ion-input>\n\n      </ion-row>\n\n      <ion-row class="rowStyle">\n\n          <ion-icon name="key" color="radicalRed"></ion-icon>\n\n        <ion-input type="password" placeholder="Tu password" [(ngModel)]="password"></ion-input>\n\n      </ion-row>\n\n      <ion-row>\n\n        <button ion-button block round outline color="light" style="margin-top: 20px;" (click)="signup()">Registro</button>\n\n      </ion-row>\n\n    </ion-grid>\n\n    <button ion-button block clear color="light" (click)="goBack()">¿Ya tienes cuenta? Login</button>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Planit\Desktop\movie last\feedly\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_feed_feed__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var config = {
    apiKey: "AIzaSyDds-vQhAIm_y1jvz48IZPmZYxbf8vIUBk",
    authDomain: "feedly-5e940.firebaseapp.com",
    databaseURL: "https://feedly-5e940.firebaseio.com",
    projectId: "feedly-5e940",
    storageBucket: "feedly-5e940.appspot.com",
    messagingSenderId: "891325014043"
};
__WEBPACK_IMPORTED_MODULE_10_firebase___default.a.initializeApp(config);
__WEBPACK_IMPORTED_MODULE_10_firebase___default.a.firestore().settings({
    timestampsInSnapshots: true
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_feed_feed__["a" /* FeedPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_feed_feed__["a" /* FeedPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Planit\Desktop\movie last\feedly\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Planit\Desktop\movie last\feedly\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 202,
	"./af.js": 202,
	"./ar": 203,
	"./ar-dz": 204,
	"./ar-dz.js": 204,
	"./ar-kw": 205,
	"./ar-kw.js": 205,
	"./ar-ly": 206,
	"./ar-ly.js": 206,
	"./ar-ma": 207,
	"./ar-ma.js": 207,
	"./ar-sa": 208,
	"./ar-sa.js": 208,
	"./ar-tn": 209,
	"./ar-tn.js": 209,
	"./ar.js": 203,
	"./az": 210,
	"./az.js": 210,
	"./be": 211,
	"./be.js": 211,
	"./bg": 212,
	"./bg.js": 212,
	"./bm": 213,
	"./bm.js": 213,
	"./bn": 214,
	"./bn.js": 214,
	"./bo": 215,
	"./bo.js": 215,
	"./br": 216,
	"./br.js": 216,
	"./bs": 217,
	"./bs.js": 217,
	"./ca": 218,
	"./ca.js": 218,
	"./cs": 219,
	"./cs.js": 219,
	"./cv": 220,
	"./cv.js": 220,
	"./cy": 221,
	"./cy.js": 221,
	"./da": 222,
	"./da.js": 222,
	"./de": 223,
	"./de-at": 224,
	"./de-at.js": 224,
	"./de-ch": 225,
	"./de-ch.js": 225,
	"./de.js": 223,
	"./dv": 226,
	"./dv.js": 226,
	"./el": 227,
	"./el.js": 227,
	"./en-au": 228,
	"./en-au.js": 228,
	"./en-ca": 229,
	"./en-ca.js": 229,
	"./en-gb": 230,
	"./en-gb.js": 230,
	"./en-ie": 231,
	"./en-ie.js": 231,
	"./en-il": 232,
	"./en-il.js": 232,
	"./en-nz": 233,
	"./en-nz.js": 233,
	"./eo": 234,
	"./eo.js": 234,
	"./es": 235,
	"./es-do": 236,
	"./es-do.js": 236,
	"./es-us": 237,
	"./es-us.js": 237,
	"./es.js": 235,
	"./et": 238,
	"./et.js": 238,
	"./eu": 239,
	"./eu.js": 239,
	"./fa": 240,
	"./fa.js": 240,
	"./fi": 241,
	"./fi.js": 241,
	"./fo": 242,
	"./fo.js": 242,
	"./fr": 243,
	"./fr-ca": 244,
	"./fr-ca.js": 244,
	"./fr-ch": 245,
	"./fr-ch.js": 245,
	"./fr.js": 243,
	"./fy": 246,
	"./fy.js": 246,
	"./gd": 247,
	"./gd.js": 247,
	"./gl": 248,
	"./gl.js": 248,
	"./gom-latn": 249,
	"./gom-latn.js": 249,
	"./gu": 250,
	"./gu.js": 250,
	"./he": 251,
	"./he.js": 251,
	"./hi": 252,
	"./hi.js": 252,
	"./hr": 253,
	"./hr.js": 253,
	"./hu": 254,
	"./hu.js": 254,
	"./hy-am": 255,
	"./hy-am.js": 255,
	"./id": 256,
	"./id.js": 256,
	"./is": 257,
	"./is.js": 257,
	"./it": 258,
	"./it.js": 258,
	"./ja": 259,
	"./ja.js": 259,
	"./jv": 260,
	"./jv.js": 260,
	"./ka": 261,
	"./ka.js": 261,
	"./kk": 262,
	"./kk.js": 262,
	"./km": 263,
	"./km.js": 263,
	"./kn": 264,
	"./kn.js": 264,
	"./ko": 265,
	"./ko.js": 265,
	"./ky": 266,
	"./ky.js": 266,
	"./lb": 267,
	"./lb.js": 267,
	"./lo": 268,
	"./lo.js": 268,
	"./lt": 269,
	"./lt.js": 269,
	"./lv": 270,
	"./lv.js": 270,
	"./me": 271,
	"./me.js": 271,
	"./mi": 272,
	"./mi.js": 272,
	"./mk": 273,
	"./mk.js": 273,
	"./ml": 274,
	"./ml.js": 274,
	"./mn": 275,
	"./mn.js": 275,
	"./mr": 276,
	"./mr.js": 276,
	"./ms": 277,
	"./ms-my": 278,
	"./ms-my.js": 278,
	"./ms.js": 277,
	"./mt": 279,
	"./mt.js": 279,
	"./my": 280,
	"./my.js": 280,
	"./nb": 281,
	"./nb.js": 281,
	"./ne": 282,
	"./ne.js": 282,
	"./nl": 283,
	"./nl-be": 284,
	"./nl-be.js": 284,
	"./nl.js": 283,
	"./nn": 285,
	"./nn.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 288,
	"./pt-br": 289,
	"./pt-br.js": 289,
	"./pt.js": 288,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 298,
	"./sr-cyrl": 299,
	"./sr-cyrl.js": 299,
	"./sr.js": 298,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./tg": 306,
	"./tg.js": 306,
	"./th": 307,
	"./th.js": 307,
	"./tl-ph": 308,
	"./tl-ph.js": 308,
	"./tlh": 309,
	"./tlh.js": 309,
	"./tr": 310,
	"./tr.js": 310,
	"./tzl": 311,
	"./tzl.js": 311,
	"./tzm": 312,
	"./tzm-latn": 313,
	"./tzm-latn.js": 313,
	"./tzm.js": 312,
	"./ug-cn": 314,
	"./ug-cn.js": 314,
	"./uk": 315,
	"./uk.js": 315,
	"./ur": 316,
	"./ur.js": 316,
	"./uz": 317,
	"./uz-latn": 318,
	"./uz-latn.js": 318,
	"./uz.js": 317,
	"./vi": 319,
	"./vi.js": 319,
	"./x-pseudo": 320,
	"./x-pseudo.js": 320,
	"./yo": 321,
	"./yo.js": 321,
	"./zh-cn": 322,
	"./zh-cn.js": 322,
	"./zh-hk": 323,
	"./zh-hk.js": 323,
	"./zh-tw": 324,
	"./zh-tw.js": 324
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
webpackContext.id = 412;

/***/ })

},[326]);
//# sourceMappingURL=main.js.map