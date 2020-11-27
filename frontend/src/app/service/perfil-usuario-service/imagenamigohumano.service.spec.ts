import { TestBed } from '@angular/core/testing';

import { ImagenamigohumanoService } from './imagenamigohumano.service';

describe('ImagenamigohumanoService', () => {
  let service: ImagenamigohumanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenamigohumanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
