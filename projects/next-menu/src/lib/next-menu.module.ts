import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {NextMenuItemComponent} from './next-menu-item/next-menu-item.component';
import {NextMenuPartComponent} from './next-menu-part/next-menu-part.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [NextMenuItemComponent, NextMenuPartComponent],
  exports: [NextMenuItemComponent, NextMenuPartComponent],
})
export class NextMenuModule {}
