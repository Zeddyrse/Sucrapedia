import { TestBed } from '@angular/core/testing';

import { BonbonsService } from './bonbons.service';

describe('BonbonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonbonsService = TestBed.get(BonbonsService);
    expect(service).toBeTruthy();
  });
});
