import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//custom imports
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpJwtInterceptor } from './helper/http.jwt.interceptor';
import { HttpErrorInterceptor } from './helper/http.error.interceptor';
import { BandCreatePageModule } from './pages/band/band-create/band-create.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule, 
      IonicModule.forRoot(), 
      AppRoutingModule, 
      HttpClientModule,
      BandCreatePageModule
    ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
