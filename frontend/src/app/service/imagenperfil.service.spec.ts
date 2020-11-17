import { TestBed } from '@angular/core/testing';

import { ImagenperfilService } from './imagenperfil.service';

describe('ImagenperfilService', () => {
  let service: ImagenperfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenperfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
