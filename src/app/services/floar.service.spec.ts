import { TestBed } from '@angular/core/testing';

import { FloarService } from './floar.service';

describe('FloarService', () => {
  let service: FloarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
