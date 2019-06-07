import {NgModule} from '@angular/core';

import {NextMenuItemComponent} from './next-menu-item/next-menu-item.component';
import {NextMenuPartComponent} from './next-menu-part/next-menu-part.component';

@NgModule({
  declarations: [NextMenuItemComponent, NextMenuPartComponent],
  exports: [NextMenuItemComponent, NextMenuPartComponent],
})
export class NextMenuModule {}
