import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { CommentsComponent } from './comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsTableModule } from '../../shared/components/comments-table/comments-table.module';
import { WidgetModule } from '../../shared/components/witget/witget.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommentsTableModule,
    ReactiveFormsModule,
    WidgetModule
  ],
  providers: [],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule {
}
