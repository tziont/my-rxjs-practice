import { TestBed } from '@angular/core/testing';

import { JsonServerMockEndpointService } from './json-server-mock-endpoint.service';

describe('JsonServerMockEndpointService', () => {
  let service: JsonServerMockEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonServerMockEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
