import { TestBed } from '@angular/core/testing';

import { HobbiesserviceService } from './hobbiesservice.service';

describe('HobbiesserviceService', () => {
  let service: HobbiesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbiesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
