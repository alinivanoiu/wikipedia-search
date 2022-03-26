import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

interface SearchResponse {
  query: {
    search: [];
  };
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wikipediaService: WikipediaService) {}
  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe((data: SearchResponse) => {
      this.pages = data.query.search;
    });
  }

  pages = [];
}
