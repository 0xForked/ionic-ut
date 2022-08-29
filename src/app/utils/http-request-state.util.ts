import {HttpErrorResponse} from '@angular/common/http';

export interface HttpRequestState<T> {
  state: number;
  value?: T;
  error?: HttpErrorResponse | Error;
}
