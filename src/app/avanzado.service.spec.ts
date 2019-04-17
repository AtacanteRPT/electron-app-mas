import { TestBed, inject } from '@angular/core/testing';

import { AvanzadoService } from './avanzado.service';

describe('AvanzadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvanzadoService]
    });
  });

  it('should be created', inject([AvanzadoService], (service: AvanzadoService) => {
    expect(service).toBeTruthy();
  }));
});
