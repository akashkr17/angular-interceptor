import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HeaderInterceptor } from './headerinterceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderInterceptorComponent } from './header-interceptor/header-interceptor.component';
import { FormatInterceptorComponent } from './components/format-interceptor/format-interceptor.component';
import { FormatInterceptor } from './formatinterceptor';
import { RetryInterceptor } from './retryinterceptor';
import { RetryInterceptorComponent } from './components/retry-interceptor/retry-interceptor.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderInterceptorComponent,
    FormatInterceptorComponent,
    RetryInterceptorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [   { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FormatInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
