import { CommentsResponseModel } from '../../../services/comments/comments.service.model';
import { CommentsTableModel } from './comments-table.model';

export const mapCommentsResponseToTableModel = (response: Array<CommentsResponseModel>): Array<CommentsTableModel> => (
  response && response.map((comment) =>
    ({
      comment: comment.body,
      email: comment.email,
      id: comment.id,
      name: comment.name
    }))
);
