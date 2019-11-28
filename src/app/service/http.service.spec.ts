import {FormsModule} from '@angular/forms';
import {TestBed} from '@angular/core/testing';
import {HttpService} from './http.service';
import {HttpTestingController} from '@angular/common/http/testing';
import {Type} from '@angular/core';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // FormsModule,
        // RouterTestingModule,
        // HttpClientTestingModule
      ],
      providers: [
        // HttpRequestsService
      ]
    });

    service = TestBed.get(HttpService);
    // httpMock = TestBed.get(HttpTestingController as Type<HttpTestingController>);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
