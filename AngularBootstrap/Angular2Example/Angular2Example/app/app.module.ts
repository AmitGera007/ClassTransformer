import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import "reflect-metadata";
//import "es6-shim;"

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
