import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service';

@Component({
  selector: 'search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css']
})
export class SearchBlockComponent implements OnInit {
  constructor(private styleService: StyleService) {}

  ngOnInit(): void {

  }
}
