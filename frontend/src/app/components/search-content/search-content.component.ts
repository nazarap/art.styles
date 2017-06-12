import { Component } from '@angular/core';
import { StyleService } from './../../services/style.service'

@Component({
  selector: 'search-content',
  template: `<div class="container">
                <search-block></search-block>
                <list-block></list-block>
            </div>`,
  styleUrls: ['./search-content.component.css'],
  providers: [StyleService]
})
export class SearchContentComponent {
  constructor() {}
}
