import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Site1Component } from './site1.component';

describe('Site1Component', () => {
  let component: Site1Component;
  let fixture: ComponentFixture<Site1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Site1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Site1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
