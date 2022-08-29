import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../data/models/news';

@Component({
  selector: 'app-news-widget',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() data: News = null;

  constructor() { }

  ngOnInit() {}

}
