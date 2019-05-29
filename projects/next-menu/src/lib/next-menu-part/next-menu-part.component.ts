import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

export class Item {
  title: string;
  routerLink: string;
}

@Component({
  selector: 'next-menu-part',
  templateUrl: './next-menu-part.component.html',
  styleUrls: ['./next-menu-part.component.scss'],
})
export class NextMenuPartComponent implements OnInit {
  @Input() public isFull = false;
  @Input() public partTitle: [Item];
  @Output() public newRouterLink: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  public onClickShow() {
    this.isFull = !this.isFull;
  }

  public handleItemClick(link: string) {
    this.newRouterLink.emit(link);
  }
}
