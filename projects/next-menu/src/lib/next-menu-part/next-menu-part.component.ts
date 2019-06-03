import {Component, Input, Output, EventEmitter} from '@angular/core';

export class Item {
  title: string;
  routerLink: string;
}

@Component({
  selector: 'next-menu-part',
  templateUrl: './next-menu-part.component.html',
  styleUrls: ['./next-menu-part.component.scss'],
})
export class NextMenuPartComponent {
  @Input() public partName: string;
  @Input() public showPartItems = false;
  @Input() public partItems: [Item];
  @Output() public itemClickEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() public editPart: EventEmitter<void> = new EventEmitter<void>();
  @Output() public deletePart: EventEmitter<void> = new EventEmitter<void>();

  public onClickShow() {
    this.showPartItems = !this.showPartItems;
  }

  public handleItemClick(link: string) {
    this.itemClickEmitter.emit(link);
  }

  public onEditClick(event: Event) {
    console.log('edit');
    event.stopPropagation();
    this.editPart.emit();
  }

  public onDeleteClick(event: Event) {
    console.log('delete');
    event.stopPropagation();
    this.deletePart.emit();
  }
}
