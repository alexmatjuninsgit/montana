import { async, getTestBed, TestBed } from '@angular/core/testing';
import { CommentsService } from './comments.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockGetCommentsResponse } from './comments.service.mock';
import { AppSettings } from '../../app.settings';

describe('CommentsService', () => {
  let injector: TestBed;
  let service: CommentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommentsService],
    });

    injector = getTestBed();
    service = injector.get(CommentsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('fetchComments() should return comment data', async(() => {
    const dummyData = mockGetCommentsResponse();

    service.fetchComments();

    const req = httpMock.expectOne(AppSettings.API.COMMENTS.GET);
    expect(req.request.method).toBe('GET');
    req.flush(dummyData);

    expect(service.comments.value).toEqual(dummyData);
  }));
});
