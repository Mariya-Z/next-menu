import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextMenuItemComponent} from './next-menu-item.component';

describe('NextMenuItemComponent', () => {
  let component: NextMenuItemComponent;
  let fixture: ComponentFixture<NextMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextMenuItemComponent],
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
});
