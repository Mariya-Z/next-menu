import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'next-menu-item',
  templateUrl: './next-menu-item.component.html',
  styleUrls: ['./next-menu-item.component.scss'],
})
export class NextMenuItemComponent implements OnInit {
  @Input() title = 'Title';
  @Input() routerLink: string;
  @Output() public newRouterLink: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onItemClick() {
    this.newRouterLink.emit(this.routerLink);
  }


}
