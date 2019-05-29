import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NextMenuPartComponent} from './next-menu-part.component';

describe('NextMenuPartComponent', () => {
  let component: NextMenuPartComponent;
  let fixture: ComponentFixture<NextMenuPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NextMenuPartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextMenuPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
