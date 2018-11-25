import { TestBed } from '@angular/core/testing';

import { YtsService } from './yts.service';

describe('YtsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YtsService = TestBed.get(YtsService);
    expect(service).toBeTruthy();
  });
});
