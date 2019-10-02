import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments/comments.service';
import { CommentsTableModel } from '../../shared/components/comments-table/comments-table.model';
import { mapCommentsResponseToTableModel } from '../../shared/components/comments-table/comments-table.utils';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  constructor(private commentsService: CommentsService) {
  }

  protected dataSource: Array<CommentsTableModel> = [];
  private filterInputControl = new FormControl();
  private readonly onDestroy = new Subject();

  public ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  }

  public ngOnInit(): void {
    this.commentsService.comments
      .pipe(takeUntil(this.onDestroy))
      .subscribe((response) => {
        this.resetFilterInputValue();
        this.dataSource = mapCommentsResponseToTableModel(response);
      });

    this.filterInputControl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe((value) => {
        this.dataSource = mapCommentsResponseToTableModel(
          this.commentsService.comments.value.filter((item) =>
            item.name.includes(value) ||
            item.email.includes(value) ||
            item.body.includes(value)));
      });

    this.commentsService.fetchComments();
  }

  private resetFilterInputValue() {
    this.filterInputControl.patchValue('');
  }
}
