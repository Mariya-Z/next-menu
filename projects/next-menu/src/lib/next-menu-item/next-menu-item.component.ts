import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'next-menu-item',
  templateUrl: './next-menu-item.component.html',
  styleUrls: ['./next-menu-item.component.scss'],
})
export class NextMenuItemComponent {
  @Input() public title = 'Title';
  @Input() public routerLink: string;
  @Output() public itemClickEmitter: EventEmitter<string> = new EventEmitter<string>();

  public onItemClick() {
    this.itemClickEmitter.emit(this.routerLink);
  }
}
