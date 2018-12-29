import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule  } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import {ControleProvider} from '../providers/controle/controle';
import { MyApp } from './app.component';
import {signup} from '../components/signup/signup';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationComponent } from '../components/authentication/authentication';
import { AuthProvider } from '../providers/auth/auth';
import { MainServiceProvider } from '../providers/main-service/main-service';
import {PopoverPage} from '../pages/splash/splash';
import {SplashPage} from '../pages/splash/splash';
import {trashs} from '../pages/trashs/trashs';
import { trashslist } from '../pages/trashslist/trashslist';
import { userslist } from '../pages/userslist/userslist';
import { userinfo } from '../pages/userinfo/userinfo';
import { HomePage } from '../pages/viewmap/viewmap';
import { changeuserinfo } from '../pages/changeuserinfo/changeuserinfo';
import { trashinfo } from '../pages/trashinfo/trashinfo';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { ChartsModule } from 'ng2-charts';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Geolocation } from '@ionic-native/geolocation';
import { MapsProvider } from '../providers/maps/maps';
import { JsMapsProvider } from '../providers/js-maps/js-maps';
import { NativeMapsProvider } from '../providers/native-maps/native-maps';
@NgModule({
  declarations: [
    MyApp,
   
    AuthenticationComponent,
    signup,
    PopoverPage,
    SplashPage,
    trashs,
    trashslist,
    SearchPipe,
    SortPipe,
    userslist,
    userinfo,
    trashinfo,
    changeuserinfo,
    HomePage
    
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
    
    AuthenticationComponent,
    signup,
    PopoverPage,
    SplashPage,
    trashs,
    trashslist,
    userslist,
    userinfo,
    trashinfo,
    changeuserinfo,
    HomePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MainServiceProvider,
    ControleProvider,
    IonicImageViewerModule,
    Geolocation,
    MapsProvider,
    JsMapsProvider,
    NativeMapsProvider 
  
    
  ]
})
export class AppModule {}
