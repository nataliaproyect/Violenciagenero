import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';

import { ContactenosPage } from '../pages/contactenos/contactenos';

//login y registro

import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { ChapineroPage } from '../pages/chapinero/chapinero';
import { NoticiasPage } from '../pages/noticias/noticias';


import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { ImagesProvider } from '../providers/images/images';
import { ImageInfoPage } from '../pages/image-info/image-info';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    ContactenosPage,
    LoginPage,
    WelcomePage,
    SignUpPage,
    ImageInfoPage,
    ConfiguracionPage,
    ChapineroPage,
    NoticiasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    ContactenosPage,
    LoginPage,
    WelcomePage,
    ImageInfoPage,
    SignUpPage,
    ConfiguracionPage,
    ChapineroPage,
    NoticiasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ImagesProvider
  ]
})
export class AppModule {}
