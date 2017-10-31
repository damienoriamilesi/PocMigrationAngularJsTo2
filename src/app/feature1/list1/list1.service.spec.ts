import { TestBed, inject } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { List1Service } from './list1.service';
import { HttpModule, ConnectionBackend, RequestOptions, XHRBackend } from '@angular/http';

describe('List1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [List1Service,
        { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should be created', inject([List1Service], (service: List1Service) => {
    expect(service).toBeTruthy();
    // expect(service).toHaveBeenCalled(service.getAll())
  }));
});
