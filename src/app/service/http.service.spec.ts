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

  it('should be created1', () => {
    expect(service).toBeTruthy();
  });

  it('should be created2', () => {
    expect(service).toBeTruthy();
  });

  it('should be created3', () => {
    expect(service).toBeTruthy();
  });

  it('should be created4', () => {
    expect(service).toBeTruthy();
  });

  it('should be created5', () => {
    expect(service).toBeTruthy();
  });

  it('should be created6', () => {
    expect(service).toBeTruthy();
  });
  
  it('should be created7', () => {
    expect(service).toBeTruthy();
  });
});
