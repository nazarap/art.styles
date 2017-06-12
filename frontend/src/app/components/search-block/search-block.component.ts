import { Component, OnInit } from '@angular/core';
import { StyleService } from './../../services/style.service';
import { TypeService } from './../../services/type.service'
import { SubtypeService } from './../../services/subtype.service'
import Subtype from './../../domain/Subtype';

@Component({
  selector: 'search-block',
  templateUrl: './search-block.component.html',
  styleUrls: ['./search-block.component.css'],
  providers: [TypeService, SubtypeService]
})
export class SearchBlockComponent implements OnInit {
  constructor(private styleService: StyleService, private typeService: TypeService, private subtypeService: SubtypeService) {}

  ngOnInit(): void {}

  openPopup(): any {
      this.typeService.setTypePopup();
  }

  getSelectedList(): Array<Subtype> {
      let arr = this.subtypeService.getSelectedSubtype();
      return Object.keys(arr).map((k) => arr[k])
  }

  removeSelectedSubtype(id): any {
      this.subtypeService.removeSelectedSubtype(id);
  }

  search(): any {
      this.styleService.search(Object.keys(this.subtypeService.getSelectedSubtype()))
  }

}
