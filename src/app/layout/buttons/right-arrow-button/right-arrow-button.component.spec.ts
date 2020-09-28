import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightArrowButtonComponent } from './right-arrow-button.component';

describe('RightArrowButtonComponent', () => {
  let component: RightArrowButtonComponent;
  let fixture: ComponentFixture<RightArrowButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightArrowButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
