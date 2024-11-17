import { TestBed } from '@angular/core/testing';

import { ReactWrapperService } from './react-wrapper.service';

describe('ReactWrapperService', () => {
  let service: ReactWrapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReactWrapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
