import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBHPVJyAaOSZGgmgE9PR4rowOV7UM17VCs",
    authDomain: "facebooklogin-7e371.firebaseapp.com",
    databaseURL: "https://facebooklogin-7e371.firebaseio.com",
    projectId: "facebooklogin-7e371",
    storageBucket: "facebooklogin-7e371.appspot.com",
    messagingSenderId: "119507331706"
  });

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
