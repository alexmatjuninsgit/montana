import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentsTableComponent } from './comments-table.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    CommentsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  exports: [
    CommentsTableComponent
  ]
})
export class CommentsTableModule {
}
