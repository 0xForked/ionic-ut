/* eslint-disable @typescript-eslint/member-ordering,@typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CONFIG } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(public http: HttpClient) { }

  getRequestWithParam(path: string, params: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': CONFIG.apiKey
    });

    const options = {headers, params};
    const uri = `${CONFIG.apiUrl}${path}`;

    return this.http.get<any>(uri, options).pipe(
      map(response => response),
      catchError(HttpService.handleError)
    ).toPromise();
  }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`Error: ${error.error.message}`);
    } else {
      console.log(`Error Code: ${error.status}\nMessage: ${error.message}`);
    }

    return Promise.reject(error);
  }
}
