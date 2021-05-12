import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiKey = '4ee572f39fe64bc18f0ac5724d0e2fb2';
  url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(`${this.url}${this.apiKey}`);
  }
}
