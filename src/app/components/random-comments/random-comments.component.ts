import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments/comments.service';
import { CommentsTableModel } from '../../shared/components/comments-table/comments-table.model';
import { mapCommentsResponseToTableModel } from '../../shared/components/comments-table/comments-table.utils';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-random-comments',
  templateUrl: './random-comments.component.html'
})
export class RandomCommentsComponent implements OnInit, OnDestroy {
  constructor(private commentsService: CommentsService) { }

  protected dataSource: Array<CommentsTableModel> = [];
  private readonly onDestroy = new Subject();

  public ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  public ngOnInit() {
    this.commentsService.comments
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response) => {
          this.dataSource = mapCommentsResponseToTableModel(
            this.commentsService.getRandomComments(response, 10)
          );
        }
      );
    this.commentsService.fetchComments();
  }
}
