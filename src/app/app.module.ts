import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { environment } from '../environments/environment';

import { HttpClient } from './shared/interceptor';
import { LoginServices } from './login/login.services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [
    HttpClient,
    LoginServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
