import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../../app.settings';
import { CommentsResponseModel } from './comments.service.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  public comments = new BehaviorSubject<Array<CommentsResponseModel>>([]);
  public isLoading = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {
  }

  public fetchComments = (): void => {
    this.isLoading.next(true);

    this.httpClient.get<Array<CommentsResponseModel>>(AppSettings.API.COMMENTS.GET)
      .subscribe((response) => {
          this.comments.next(response);
          this.isLoading.next(false);
        },
        (error) => {
          this.isLoading.next(false);
          this.comments.error(error);
        },
      );
  };

  public getRandomComments = (array: Array<CommentsResponseModel>, howMany: number): Array<CommentsResponseModel> => {
    const randomComments: Array<CommentsResponseModel> = [];

    for (let i = 0; i < howMany; i++) {
      const newComment = array[Math.floor(Math.random() * array.length)];
      if (newComment) {
        randomComments.push(newComment);
      }
    }

    return randomComments;
  };
}
