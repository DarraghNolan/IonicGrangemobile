import { TestBed } from '@angular/core/testing';

import { ModuleCreateService } from './modulecreate.service';

describe('ModulecreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModuleCreateService = TestBed.get(ModuleCreateService);
    expect(service).toBeTruthy();
  });
});
