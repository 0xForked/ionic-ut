/* eslint-disable no-underscore-dangle */
// noinspection DuplicatedCode

import { TestBed } from '@angular/core/testing';

import { NewsUsecase } from './news.usecase';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {fakeResponse} from '../models/fakes/news.fake';
import {CONFIG} from '../../../services/config.service';
import {ResponseStatus} from '../../enums/response.status';

describe('NewsUsecase', () => {
  let httpTestingController: HttpTestingController;
  let usecase: NewsUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsUsecase]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    usecase = TestBed.inject(NewsUsecase);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });

  it('should success: search$', () => {
    const mock = fakeResponse;
    const params = {q: 'bitcoin', countries: 'US', lang: 'en', topic: 'tech'};
    usecase.search$(params).subscribe(event => {
      if (event.state === ResponseStatus.success) {
        expect(event.state).toEqual( ResponseStatus.success);
        expect(event.error).toEqual(null);
        expect(event.value).toBeDefined();
        expect(event.value.length).toBeGreaterThan(0);
        expect(event.value[0]._id).toEqual('12345');
      }
    });

    const apiUrl = CONFIG.apiUrl;
    const apiPath = CONFIG.path.v2.news.search;
    const apiParam = '?q=bitcoin&countries=US&lang=en&topic=tech';
    const fullUrlPath = `${apiUrl}${apiPath}${apiParam}`;
    const req = httpTestingController.expectOne(fullUrlPath);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });

  it('should success: headlines$', () => {
    const mock = fakeResponse;
    const params = {countries: 'US', lang: 'en', topic: 'tech'};
    usecase.headlines$(params).subscribe(event => {
      if (event.state === ResponseStatus.success) {
        expect(event.state).toEqual( ResponseStatus.success);
        expect(event.error).toEqual(null);
        expect(event.value).toBeDefined();
        expect(event.value.length).toBeGreaterThan(0);
        expect(event.value[0]._id).toEqual('12345');
      }
    });

    const apiUrl = CONFIG.apiUrl;
    const apiPath = CONFIG.path.v2.news.headlines;
    const apiParam = '?countries=US&lang=en&topic=tech';
    const fullUrlPath = `${apiUrl}${apiPath}${apiParam}`;
    const req = httpTestingController.expectOne(fullUrlPath);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);
  });
});
