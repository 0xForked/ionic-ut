/* eslint-disable no-underscore-dangle */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsComponent } from './news.component';
import {News} from '../../data/models/news';
import {fakeNewsObject} from '../../data/models/fakes/news.fake';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  const news: News = fakeNewsObject;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.data).toBeNull();
  });

  it('should have data', () => {
    component.data = news;
    expect(component.data).toBeDefined(news);
    expect(component.data._id).toMatch(news._id);
  });
});
