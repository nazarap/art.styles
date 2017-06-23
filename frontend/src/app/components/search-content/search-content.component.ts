import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service'

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.css'],
  providers: [StyleService]
})
export class SearchContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
