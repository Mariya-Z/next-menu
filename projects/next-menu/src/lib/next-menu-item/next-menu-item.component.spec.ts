import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {NextMenuItemComponent} from './next-menu-item.component';

@Component({
  template: `
    <next-menu-item (itemClickEmitter)="catchClick()"></next-menu-item>
  `,
})
class MockHostComponent extends NextMenuItemComponent {
  public catchClick() {
    console.log('user clicked on menu item');
  }
}

describe('NextMenuItemComponent', () => {
  let component: NextMenuItemComponent;
  let fixture: ComponentFixture<NextMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextMenuItemComponent, MockHostComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event by click', () => {
    const mockFixture = TestBed.createComponent(MockHostComponent);
    const mockComponent = mockFixture.componentInstance;
    mockFixture.detectChanges();
    const clickSpy = spyOn(mockComponent, 'catchClick');
    const elements = mockFixture.nativeElement.querySelector('.next-menu-item');
    elements.dispatchEvent(new Event('click'));
    expect(clickSpy).toHaveBeenCalled();
  });
});
