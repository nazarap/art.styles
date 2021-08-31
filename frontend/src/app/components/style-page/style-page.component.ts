import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service'
import { SubtypeService } from './../../services/subtype.service'
import Style from './../../domain/Style';
import Subtype from './../../domain/Subtype';
import { ActivatedRoute } from '@angular/router';
import ImageAbstract from './../../domain/ImageAbstract';
import { Meta, Title } from '@angular/platform-browser';

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
  styleLink: string;

  constructor(private styleService: StyleService, private subtypeService: SubtypeService, private route:ActivatedRoute,
                private meta: Meta, private title: Title) {

      this.route.params.subscribe(params => {
          this.styleLink = params['link'];
      });
  }

  ngOnInit(): void {
      this.styleService.getStyleByLink(this.styleLink).subscribe(
          data => {this.style = data.style as Style},
          error => {},
          () => {
                    this.getSubtypes(this.style.subtypes);

                    this.title.setTitle("ARTstyle - " + this.style.name);

                    this.meta.addTags([
                      {
                        name: 'description', content: this.style.description
                      },
                    ])
                }
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

  imageUrl (imageUrl: string): string { return ImageAbstract.getCImage(imageUrl); }

}
