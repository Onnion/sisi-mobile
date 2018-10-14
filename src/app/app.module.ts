import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { HttpClientModule }       from '@angular/common/http';
import { MyApp }                  from './app.component';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar }          from '@ionic-native/status-bar';
import { SplashScreen }       from '@ionic-native/splash-screen';

import { AboutPage }          from '../pages/about/about';
import { ContactPage }        from '../pages/contact/contact';
import { HomePage }           from '../pages/home/home';
import { TabsPage }           from '../pages/tabs/tabs';

import { LoginPage }          from '../pages/login/login';
import { RegisterPerfilPage } from '../pages/registerPerfil/registerPerfil';
import { RegisterPage }       from '../pages/register/register';
import { FeedPage }           from '../pages/feed/feed';

import { RegisterProvider }   from '../providers/register/register';
import { AuthProvider }       from '../providers/auth/auth';
import { UserProvider }       from '../providers/user/user';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPerfilPage,
    RegisterPage,
    FeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPerfilPage,
    RegisterPage,
    FeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RegisterProvider,
    AuthProvider,
    UserProvider
  ]
})
export class AppModule { }
