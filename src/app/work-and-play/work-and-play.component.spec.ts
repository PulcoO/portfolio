import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndPlayComponent } from './work-and-play.component';

describe('WorkAndPlayComponent', () => {
  let component: WorkAndPlayComponent;
  let fixture: ComponentFixture<WorkAndPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAndPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAndPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
