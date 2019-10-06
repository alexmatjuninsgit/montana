import { Component } from '@angular/core';
import { CommentsService } from './services/comments/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public commentsService: CommentsService) {
  }

  private applicationName = 'Montana';

  private onRefresh = (): void => {
    this.commentsService.fetchComments();
  };
}
