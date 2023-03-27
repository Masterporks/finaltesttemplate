import { TestBed } from '@angular/core/testing';

import { ClassUnitService } from './class-unit.service';

describe('ClassUnitService', () => {
  let service: ClassUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
