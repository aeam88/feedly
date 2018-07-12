import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { FeedPage } from '../pages/feed/feed';
import { CommentsPage } from '../pages/comments/comments';

import { Camera } from '@ionic-native/camera';
import { Firebase } from '@ionic-native/firebase';

import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyDds-vQhAIm_y1jvz48IZPmZYxbf8vIUBk",
  authDomain: "feedly-5e940.firebaseapp.com",
  databaseURL: "https://feedly-5e940.firebaseio.com",
  projectId: "feedly-5e940",
  storageBucket: "feedly-5e940.appspot.com",
  messagingSenderId: "891325014043"
};
firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
})

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    FeedPage,
    CommentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
