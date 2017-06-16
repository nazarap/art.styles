import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service'
import Style from './../../domain/Style'

@Component({
  selector: 'about-styles',
  templateUrl: './about-styles.component.html',
  styleUrls: ['./about-styles.component.css'],
  providers: [StyleService]
})
export class AboutStylesComponent implements OnInit {
  styleList: Array<Style>;

  constructor(private styleService: StyleService) {}

  ngOnInit(): void {
      this.styleService.getStyles().subscribe(
          data => {this.styleList = data.styles as Style[]},
          error => {alert(error)},
          () => {}
      )
  }

}
