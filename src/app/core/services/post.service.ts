import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  fetchPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  fetchPostById(id: any): Observable<any[]> {
    return this.http.get<any[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
