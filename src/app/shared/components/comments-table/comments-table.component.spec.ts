import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsTableComponent } from './comments-table.component';
import { CommentsTableModule } from './comments-table.module';
import { mapCommentsResponseToTableModel } from './comments-table.utils';
import { mockGetCommentsResponse } from '../../../services/comments/comments.service.mock';

describe('CommentsTableComponent', () => {
  let component: CommentsTableComponent;
  let fixture: ComponentFixture<CommentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommentsTableModule
      ]
    });

    return TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show table data', () => {
    const mockData = mockGetCommentsResponse();
    component.dataSource = mapCommentsResponseToTableModel(mockData);

    fixture.detectChanges();

    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(4);

    // Header row
    const headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('Comment');
    expect(headerRow.cells[1].innerHTML).toBe('Name');
    expect(headerRow.cells[2].innerHTML).toBe('Email');

    // Data rows
    const row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toBe('quia molestiae reprehenderit quasi aspernatur');
    expect(row1.cells[1].innerHTML).toBe('odio adipisci rerum aut animi');
    expect(row1.cells[2].innerHTML).toBe('Nikita@garfield.biz');
  });
});
