import { NgModule, ErrorHandler } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule }          from '@angular/platform-browser';
import { MyApp }                  from './app.component';
import { AboutPage }    from '../pages/about/about';
import { ContactPage }  from '../pages/contact/contact';
import { HomePage }     from '../pages/home/home';
import { TabsPage }     from '../pages/tabs/tabs';
import { LoginPage }    from '../pages/login/login';


import { StatusBar }    from '@ionic-native/status-bar';
=======
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage }    from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
>>>>>>> d28e9d699e821ea93abdff14af322ec0d0fee1e9
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPerfilPageModule } from '../pages/registerPerfil/registerPerfil.module';
import { RegisterPageModule } from '../pages/register/register.module';




import { Geolocation } from '@ionic-native/geolocation';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisterPerfilPageModule,
    RegisterPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
