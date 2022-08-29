import { Injectable } from '@angular/core';
import {CONFIG} from './config.service';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private uriPath = CONFIG.path.v2;

  constructor(private httpService: HttpService) { }

  /**
   * [GET] `/latest_headlines`
   *
   * @docsRef `https://docs.newscatcherapi.com/api-docs/endpoints/latest-headlines`
   *
   * @param params
   *
   * === list will use in future, for more see @docsRef ===
   * when: string (keyword) - time period
   *   - Accepted forms:
   *      + Daily Form:
   *        7d => last 7 days
   *        30d => last 30 days
   *      + Hourly Form
   *        1h => last hour
   *        24h => last 24 hour
   * lang: array of string [ISO 639-1] (language) e.g: en, id ...
   * countries: array of string [ISO 3166-1 alpha-2] (countries) e.g:  US, ID ...
   * topic: string
   *    - Accepted values:
   *        news,
   *        sport,
   *        tech,
   *        world,
   *        finance,
   *        politics,
   *        business,
   *        economics,
   *        entertainment,
   *        beauty,
   *        travel,
   *        music,
   *        food,
   *        science,
   *        gaming,
   *        energy.
   */
  getHeadlineNews(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.uriPath.news.headlines;
      this.httpService.getRequestWithParam(url, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  /**
   * [GET] `/search`
   *
   * @docsRef `https://docs.newscatcherapi.com/api-docs/endpoints/search-news`
   *
   * @param params
   *
   * === list will use in future, for more see @docsRef ===
   * q: string (keyword)
   * lang: array of string [ISO 639-1] (language) e.g: en, id ...
   * countries: array of string [ISO 3166-1 alpha-2] (countries) e.g:  US, ID ...
   * topic: string
   *    - Accepted values:
   *        news,
   *        sport,
   *        tech,
   *        world,
   *        finance,
   *        politics,
   *        business,
   *        economics,
   *        entertainment,
   *        beauty,
   *        travel,
   *        music,
   *        food,
   *        science,
   *        gaming,
   *        energy.
   * from: string (start date)
   *     - Accepted Format: YYYY/mm/dd (default UTC)
   * to: string (end date)
   *     - Accepted Format: YYYY/mm/dd (default UTC)
   */
  findNews(params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.uriPath.news.search;
      this.httpService.getRequestWithParam(url, params)
        .then((response) => resolve(response))
        .catch((error) => reject(error));
    });
  }
}
