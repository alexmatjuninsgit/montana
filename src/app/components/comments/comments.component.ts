import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments/comments.service';
import { CommentsTableModel } from '../../shared/components/comments-table/comments-table.model';
import { mapCommentsResponseToTableModel } from '../../shared/components/comments-table/comments-table.utils';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CommentsResponseModel } from '../../services/comments/comments.service.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  protected dataSource: Array<CommentsTableModel> = [];
  public filterInputControl = new FormControl();

  constructor(private commentsService: CommentsService) {
  }

  private readonly onDestroy = new Subject();

  public ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  public ngOnInit(): void {
    this.commentsService.comments
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response) => {
        this.dataSource = mapCommentsResponseToTableModel(
          this.filteredComments(response, this.filterInputControl.value)
        );
      });

    this.filterInputControl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe((value) => {
        this.dataSource = mapCommentsResponseToTableModel(
          this.filteredComments(this.commentsService.comments.value, value)
        );
      });

    this.commentsService.fetchComments();
  }

  private filteredComments(comments: Array<CommentsResponseModel>, value): Array<CommentsResponseModel> {
    return comments.filter((item) =>
      item.name.includes(value) ||
      item.email.includes(value) ||
      item.body.includes(value));
  }

  private resetFilterInputValue() {
    this.filterInputControl.patchValue('');
  }
}
