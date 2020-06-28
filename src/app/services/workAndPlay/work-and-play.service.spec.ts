import { TestBed } from '@angular/core/testing';

import { WorkAndPlayService } from './work-and-play.service';

describe('WorkAndPlayService', () => {
  let service: WorkAndPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkAndPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
