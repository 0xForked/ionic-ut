import { TestBed } from '@angular/core/testing';

import { NewsService } from './news.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {CONFIG} from './config.service';
import {fakeResponse} from '../app/data/models/fakes/news.fake';

describe('NewsService', () => {
  let httpTestingController: HttpTestingController;
  let service: NewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(NewsService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should success: getHeadlineNews', () => {
    const mock = fakeResponse;
    const params = {countries: 'US', lang: 'en', topic: 'tech'};
    service.getHeadlineNews(params)
      .then(event => {
        expect(event.status).toEqual('ok');
        expect(event.articles).toBeDefined();
        expect(event.articles.length).toBeGreaterThan(0);
      });

    const apiUrl = CONFIG.apiUrl;
    const apiPath = CONFIG.path.v2.news.headlines;
    const apiParam = '?countries=US&lang=en&topic=tech';
    const fullUrlPath = `${apiUrl}${apiPath}${apiParam}`;
    const req = httpTestingController.expectOne(fullUrlPath);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });

  it('should success: findNews', () => {
    const mock = fakeResponse;
    const params = {q: 'bitcoin', countries: 'US', lang: 'en', topic: 'tech'};
    service.findNews(params)
      .then(event => {
        expect(event.status).toEqual('ok');
        expect(event.articles).toBeDefined();
        expect(event.articles.length).toBeGreaterThan(0);
      });

    const apiUrl = CONFIG.apiUrl;
    const apiPath = CONFIG.path.v2.news.search;
    const apiParam = '?q=bitcoin&countries=US&lang=en&topic=tech';
    const fullUrlPath = `${apiUrl}${apiPath}${apiParam}`;
    const req = httpTestingController.expectOne(fullUrlPath);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });
});
