import { Component, OnInit } from '@angular/core';
import Style from './../../domain/Style';
import { StyleService } from './../../services/style.service'

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.css']
})
export class ListBlockComponent implements OnInit {

  constructor(private styleService: StyleService) {}

  ngOnInit(): void {}

  getSearchStyleList(): Array<Style> {
      return this.styleService.getSearchStyleList();
  }

}
