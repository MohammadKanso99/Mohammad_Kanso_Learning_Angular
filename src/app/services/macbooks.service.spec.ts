import { TestBed } from '@angular/core/testing';

import { MacbooksService } from './macbooks.service';

describe('MacbooksService', () => {
  let service: MacbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MacbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
