/* eslint-disable @typescript-eslint/naming-convention */
import {News} from '../news';

export const fakeNewsObject = {
  _id: '12345',
  _score: 11.22,
  title: 'Hello World',
  author: 'Setan Jalan',
  published_date: '2022-02-03 16:53:12',
  published_date_precision: 'full',
  link:'https://www.makeuseof.com/apple-music-subscription-worth-it',
  clean_url: 'makeuseof.com',
  excerpt: 'Thinking of subscribing to Apple Music? Here\'s how to know if it\'s worth it for you.',
  summary: 'Since its launch in June 2015, Apple Music has been growing steadily. Because of its ....',
  rights: 'makeuseof.com',
  rank: 1729,
  topic: 'news',
  country: 'CA',
  language: 'en',
  authors: ['Shujaa Imran'],
  media: 'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/02/thomas-kolnowski-uY-9Dyz8PPM-unsplash-2-1.jpg',
  is_opinion: false,
  twitter_account: '@MUO_official'
} as News;

export const fakeNewsArray = [
  fakeNewsObject
] as News[];

export const fakeResponse = {
  page: 1,
  status: 'ok',
  total_hits: 10000,
  total_pages: 200,
  articles: fakeNewsArray,
  user_input: {
    countries: ['US'],
    from: '2022-07-30 15:34:34',
    lang: ['en'],
    not_countries: null,
    not_lang: null,
    not_sources: null,
    page: 1,
    size: 50,
    sources: null,
    topic: 'tech'
  }
};

