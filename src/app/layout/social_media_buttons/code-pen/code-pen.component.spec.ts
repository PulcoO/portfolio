import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePenComponent } from './code-pen.component';

describe('CodePenComponent', () => {
  let component: CodePenComponent;
  let fixture: ComponentFixture<CodePenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
