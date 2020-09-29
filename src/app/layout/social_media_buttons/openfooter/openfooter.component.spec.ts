import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenfooterComponent } from './openfooter.component';

describe('OpenfooterComponent', () => {
  let component: OpenfooterComponent;
  let fixture: ComponentFixture<OpenfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
