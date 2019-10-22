import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAndPlayDetailsComponent } from './work-and-play-details.component';

describe('WorkAndPlayDetailsComponent', () => {
  let component: WorkAndPlayDetailsComponent;
  let fixture: ComponentFixture<WorkAndPlayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAndPlayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAndPlayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
