import {Component, OnDestroy, OnInit} from '@angular/core';
import {News} from '../data/models/news';
import {fakeNewsArray, fakeNewsObject} from '../data/models/fakes/news.fake';
import {Subscription} from 'rxjs';
import {Platform} from '@ionic/angular';
import {NewsUsecase} from '../data/usecases/news.usecase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  articles: News[] = [];

  private headlineSubscription: Subscription;

  constructor(
    private platform: Platform,
    private newsUsecase: NewsUsecase
  ) {}

  ngOnInit() {
    this.articles = fakeNewsArray;

    this.platform.ready().then(() => {
      this.performSubscribeHeadlineNews();
    });
  }

  performSubscribeHeadlineNews() {
    const params = {countries: 'US', lang: 'en', topic: 'tech'};
    this.headlineSubscription = this.newsUsecase
      .headlines$(params)
      .subscribe(articles => {
        console.log(articles);
      });
  }

  ngOnDestroy() {
    if (this.headlineSubscription) {
      this.headlineSubscription.unsubscribe();
    }
  }
}
