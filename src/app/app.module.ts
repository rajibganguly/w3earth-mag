import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { JobsPage } from '../pages/jobs/jobs';
import { ContactPage } from '../pages/contact/contact';
import { NewsPage } from '../pages/news/news';
import { LifePage } from '../pages/life/life';
import { MainW3eProvider } from '../providers/main-w3e/main-w3e';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    JobsPage,
    NewsPage,
    ContactPage,
    LifePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    JobsPage,
    NewsPage,
    ContactPage,
    LifePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainW3eProvider
  ]
})
export class AppModule {}
