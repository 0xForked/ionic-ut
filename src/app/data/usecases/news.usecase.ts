import {Injectable} from '@angular/core';
import {NewsService} from '../../../services/news.service';
import {defer, from, Observable, of, throwError} from 'rxjs';
import {HttpRequestState} from '../../utils/http-request-state.util';
import {News} from '../models/news';
import {catchError, concatMap, delay, map, retryWhen, startWith} from 'rxjs/operators';
import {ResponseStatus} from '../../enums/response.status';

@Injectable()
export class NewsUsecase {
  constructor(private newsService: NewsService) {}

  search$(params: any): Observable<HttpRequestState<News[]>> {
    return defer(() =>
      from(this.newsService.findNews(params))
        .pipe(
          retryWhen(errors => errors.pipe(
            concatMap((error, index) => {
              if (index >= 2) {
                return throwError(error);
              }

              return of(error).pipe(delay(1000));
            })
          ))
        )
        .pipe(
          map((data) => ({
            state: ResponseStatus.success,
            value: data?.articles as News[],
            error: null
          })),

          catchError((error) => of({
            state: ResponseStatus.error,
            value: null,
            error
          })),

          startWith({
            state: ResponseStatus.loading,
            value: null,
            error: null
          })
        ));
  }

  headlines$(params: any): Observable<HttpRequestState<News[]>> {
    return defer(() =>
      from(this.newsService.getHeadlineNews(params))
        .pipe(
          retryWhen(errors => errors.pipe(
            concatMap((error, index) => {
              if (index >= 2) {
                return throwError(error);
              }

              return of(error).pipe(delay(1000));
            })
          ))
        )
        .pipe(
          map((data) => ({
            state: ResponseStatus.success,
            value: data?.articles as News[],
            error: null
          })),

          catchError((error) => of({
            state: ResponseStatus.error,
            value: null,
            error
          })),

          startWith({
            state: ResponseStatus.loading,
            value: null,
            error: null
          })
        ));
  }
}
