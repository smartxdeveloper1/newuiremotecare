import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home.component';
import { HeaderComponent }  from './header/header.component';
import { AboutComponent }  from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';


import { GuardsGuard } from './guards.guard';
import {TokenInterceptorService} from './token-interceptor.service'
@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, HeaderComponent, AboutComponent, 
  ],
  imports: [
    BrowserModule,  AppRoutingModule,FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
    FormsModule,
   
  ],
  providers: [GuardsGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
