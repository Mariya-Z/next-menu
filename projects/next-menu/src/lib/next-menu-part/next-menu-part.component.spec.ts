import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextMenuPartComponent} from './next-menu-part.component';
import {NextMenuItemComponent} from '../next-menu-item/next-menu-item.component';

export class Item {
  title: string;
  routerLink: string;
}

export const PartExample = [
  {
    title: 'first',
    routerLink: 'first link',
  },
  {
    title: 'second',
    routerLink: 'second link',
  },
];

@Component({
  template: `
    <next-menu-part
      partName="test menu"
      [children]="PartExample"
      [isOpen]="true"
      (itemClickEmitter)="catchClickOnItem($event)"
      (editPart)="catchEditClick($event)"
      (deletePart)="catchDeleteClick($event)"
    ></next-menu-part>
  `,
})
class MockHostComponent extends NextMenuPartComponent {
  public catchEditClick() {
    console.log('user clicked edit');
  }

  public catchDeleteClick() {
    console.log('user clicked delete');
  }

  public catchClickOnItem() {
    console.log('user clicked on menu item');
  }
}

describe('NextMenuPartComponent', () => {
  let component: NextMenuPartComponent;
  let fixture: ComponentFixture<NextMenuPartComponent>;
  let mockComponent: MockHostComponent;
  let mockFixture: ComponentFixture<MockHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextMenuPartComponent, NextMenuItemComponent, MockHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMenuPartComponent);
    component = fixture.componentInstance;
    component.children = PartExample as [Item];
    fixture.detectChanges();

    mockFixture = TestBed.createComponent(MockHostComponent);
    mockComponent = mockFixture.componentInstance;
    mockFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show items after click on part name and close after second click', () => {
    component.isOpen = false;
    const element = fixture.nativeElement.querySelector('.next-menu-part__header');
    element.dispatchEvent(new Event('click'));
    expect(component.isOpen).toBeTruthy();

    element.dispatchEvent(new Event('click'));
    expect(component.isOpen).toBeFalsy();
  });

  it('should emit event by click edit on part', () => {
    const clickEditSpy = spyOn(mockComponent, 'catchEditClick');
    const element = mockFixture.nativeElement.querySelector('.next-menu-part__edit');
    element.dispatchEvent(new Event('click'));
    expect(clickEditSpy).toHaveBeenCalled();
  });

  it('should emit event by click delete on part', () => {
    const clickDeleteSpy = spyOn(mockComponent, 'catchDeleteClick');
    const element = mockFixture.nativeElement.querySelector('.next-menu-part__delete');
    element.dispatchEvent(new Event('click'));
    expect(clickDeleteSpy).toHaveBeenCalled();
  });

  it('should emit event by click on item', () => {
    const clickOnItemSpy = spyOn(mockComponent, 'catchClickOnItem');
    mockFixture.detectChanges();
    const element = mockFixture.nativeElement.querySelector('.next-menu-item');
    element.dispatchEvent(new Event('click'));
    expect(clickOnItemSpy).toHaveBeenCalled();
  });
});
