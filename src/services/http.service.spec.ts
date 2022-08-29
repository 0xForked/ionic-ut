import {TestBed} from '@angular/core/testing';
import { HttpService } from './http.service';
import {CONFIG} from './config.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {fakeResponse} from '../app/data/models/fakes/news.fake';

describe('HttpService', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should success: getRequestWithParam', () => {
    const mock = fakeResponse;
    const path = CONFIG.path.v2.news.headlines;
    const params = {countries: 'US', lang: 'en', topic: 'tech'};
    service.getRequestWithParam(path, params)
      .then(event => {
        expect(event.status).toEqual('ok');
        expect(event.articles).toBeDefined();
        expect(event.articles.length).toBeGreaterThan(0);
      });

    const apiParam = '?countries=US&lang=en&topic=tech';
    const fullUrlPath = `${CONFIG.apiUrl}${path}${apiParam}`;
    const req = httpTestingController.expectOne(fullUrlPath);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });
});
