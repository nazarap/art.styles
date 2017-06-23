import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service'
import { SubtypeService } from './../../services/subtype.service'
import Style from './../../domain/Style';
import Subtype from './../../domain/Subtype';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-style-page',
  templateUrl: './style-page.component.html',
  styleUrls: ['./style-page.component.css'],
  providers: [StyleService, SubtypeService]
})
export class StylePageComponent implements OnInit {
  style: Style = new Style("", "", [], []);
  subtypeList: Array<Subtype>;
  imageURL: string;
  styleID: number;

  constructor(private styleService: StyleService, private subtypeService: SubtypeService, private route:ActivatedRoute) {
      this.route.params.subscribe(params => {
          this.styleID = params['id'];
      });
  }

  ngOnInit(): void {
      this.styleService.getStyleById(this.styleID).subscribe(
          data => {this.style = data.style as Style},
          error => {},
          () => { this.getSubtypes(this.style.subtypes) }
      )
  }

  getSubtypes(idsList): void {
      this.subtypeService.getSubtypesById(idsList).subscribe(
          data => {this.subtypeList = data.subtypes as Subtype[]},
          error => {},
          () => {}
      )
  }

  imagePopup(imageURL): void {
      this.imageURL = imageURL;
  }

}
