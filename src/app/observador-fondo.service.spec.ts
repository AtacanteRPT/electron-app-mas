import { TestBed, inject } from '@angular/core/testing';

import { ObservadorFondoService } from './observador-fondo.service';

describe('ObservadorFondoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObservadorFondoService]
    });
  });

  it('should be created', inject([ObservadorFondoService], (service: ObservadorFondoService) => {
    expect(service).toBeTruthy();
  }));
});
