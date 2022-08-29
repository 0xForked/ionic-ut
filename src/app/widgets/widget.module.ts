import {NgModule} from '@angular/core';
import {NewsComponent} from './news/news.component';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    NewsComponent
  ],
  declarations: [
    NewsComponent
  ]
})
export class WidgetModule {}
