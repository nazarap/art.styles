import { Component, OnInit } from '@angular/core';
import Style from './../../domain/Style';
import { StyleService } from './../../services/style.service'

@Component({
  selector: 'list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.css']
})
export class ListBlockComponent implements OnInit {
  styleList: Array<Style>;

  constructor(private styleService: StyleService) {}

  ngOnInit(): void {
      this.styleService.getStyles().subscribe(
          data => {data.styles = this.styleList = data.styles as Style[]},
          error => {alert(error)},
          () => console.log(this.styleList)
      )
  }
}
