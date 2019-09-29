import { Component, Input } from '@angular/core';
import { CommentsTableModel } from './comments-table.model';

@Component({
  selector: 'app-comments-table',
  templateUrl: './comments-table.component.html',
  styleUrls: ['./comments-table.component.css']
})
export class CommentsTableComponent {
  @Input() public dataSource: Array<CommentsTableModel> = [];

  public displayedColumns: Array<string> = ['comment', 'name', 'email'];
}
