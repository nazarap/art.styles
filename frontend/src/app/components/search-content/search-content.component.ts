import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css'],
  providers: [StyleService]
})
export class SearchContentComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
      title.setTitle("ARTstyle - Стилі архітектури");

      meta.addTags([
          {
            name: 'description', content: 'Стилі архітектури. Знайти стиль архітектури по основним особливостям. Пошук стилів архітектури по основним особливостям.'
          },
      ])
  }

  ngOnInit() {
  }

}
