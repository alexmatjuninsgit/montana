import { NgModule } from '@angular/core';
import { RandomCommentsComponent } from './random-comments.component';
import { CommentsTableModule } from '../../shared/components/comments-table/comments-table.module';
import { WidgetModule } from '../../shared/components/witget/witget.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RandomCommentsComponent
  ],
  imports: [
    CommentsTableModule,
    WidgetModule,
    CommonModule
  ],
  providers: [],
  exports: [
    RandomCommentsComponent
  ]
})
export class RandomCommentsModule {
}
