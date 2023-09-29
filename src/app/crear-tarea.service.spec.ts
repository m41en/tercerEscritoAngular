import { TestBed } from '@angular/core/testing';

import { CrearTareaService } from './crear-tarea.service';

describe('CrearTareaService', () => {
  let service: CrearTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
