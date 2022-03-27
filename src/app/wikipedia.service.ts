import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Page } from './models/Page.model';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}
@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  BASE_URL = 'https://en.wikipedia.org/w/api.php?';
  constructor(private http: HttpClient) {}
  search(term: string) {
    let params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      srsearch: term,
      origin: '*',
    };
    return this.http
      .get<WikipediaResponse>(this.BASE_URL, { params })
      .pipe(pluck('query', 'search'));
  }
}
