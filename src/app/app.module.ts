import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { NavbarComponent } from './navbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
