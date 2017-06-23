import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service'
import Style from './../../domain/Style'
import ImageAbstract from './../../domain/ImageAbstract';

@Component({
  selector: 'app-about-styles',
  templateUrl: './about-styles.component.html',
  styleUrls: ['./about-styles.component.css'],
  providers: [StyleService]
})
export class AboutStylesComponent implements OnInit {
  styleList: Array<Style>;
  searchKey: string;

  constructor(private styleService: StyleService) {}

  ngOnInit(): void {
      this.getStyle();
  }

  getStyle(): void {
      this.styleService.getStyles().subscribe(
          data => {this.styleList = data.styles as Style[]},
          error => {},
          () => {}
      )
  }

  searchStyle(): void {
      if(!this.searchKey) { this.getStyle(); return; }
      this.styleService.searchStyles(this.searchKey).subscribe(
          data => {this.styleList = data.styles as Style[]},
          error => {},
          () => {}
      )
  }

  imageUrl (imageUrl: string): string { return ImageAbstract.getCImage(imageUrl); }

}
