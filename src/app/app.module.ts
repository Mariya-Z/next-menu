import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NextMenuModule} from 'next-menu';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NextMenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
