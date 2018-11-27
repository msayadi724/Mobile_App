import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule  } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {ControleProvider} from '../providers/controle/controle';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {signup} from '../components/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationComponent } from '../components/authentication/authentication';
import { AuthProvider } from '../providers/auth/auth';
import { MainServiceProvider } from '../providers/main-service/main-service';
import {PopoverPage} from '../pages/splash/splash';
import {SplashPage} from '../pages/splash/splash';
import {tests} from '../pages/tests/tests';
import { testslist } from '../pages/testslist/testslist';

import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { ChartsModule } from 'ng2-charts';
import {StatPage} from '../pages/stats/stats';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthenticationComponent,
    signup,
    PopoverPage,
    SplashPage,
    tests,
    testslist,
    SearchPipe,
    SortPipe,
    StatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicImageViewerModule,
    ChartsModule,
    
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthenticationComponent,
    signup,
    PopoverPage,
    SplashPage,
    tests,
    testslist,
    StatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MainServiceProvider,
    ControleProvider,
    IonicImageViewerModule,
  
    
  ]
})
export class AppModule {}
