import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatProgressBarModule } from '@angular/material';

@NgModule({
  declarations: [
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  exports: [
    WidgetComponent
  ],
  bootstrap: [
    WidgetComponent
  ]
})
export class WidgetModule { }
