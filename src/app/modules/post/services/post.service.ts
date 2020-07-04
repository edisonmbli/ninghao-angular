import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry, retryWhen, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsApi = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  index(): Observable<any> {
    return this.http.get(this.postsApi).pipe(
      catchError(this.handleError),
      // retry(3),
      retryWhen((errors) => errors.pipe(delay(3000), take(3))),
    );
  }

  show(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.postsApi}/${id}`);
  }

  handleError(error: HttpErrorResponse): any {
    return throwError('Something went wrong.');
  }
}
