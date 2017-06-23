import { Component, OnInit } from '@angular/core';
import { TypeService } from './../../services/type.service'
import { SubtypeService } from './../../services/subtype.service'
import Type from './../../domain/Type';
import Subtype from './../../domain/Subtype';

@Component({
  selector: 'app-type-modal',
  templateUrl: './type-modal.component.html',
  styleUrls: ['./type-modal.component.css']
})
export class TypeModalComponent implements OnInit {
  typeList: Array<Type>;
  subtypeList: Array<Subtype>;
  isOpenSubPopup: boolean;

  constructor(private typeService: TypeService, private subtypeService: SubtypeService) {}

  ngOnInit(): void {
      this.typeService.getTypes().subscribe(
          data => {this.typeList = data.types as Type[]},
          error => {},
          () => {}
      )
  }

  isOpen(): boolean {
      return this.typeService.getTypePopup();
  }

  closePopup(): any {
      this.typeService.setTypePopup();
  }

  subPopup(typeID: number): any {
      if(!!typeID) {
          this.subtypeService.getSubtypes(typeID).subscribe(
              data => {this.subtypeList = data.subtypes as Subtype[]},
              error => {},
              () => {}
          )
          this.isOpenSubPopup = true;
      } else {
          this.isOpenSubPopup = false;
      }
  }

  addSubtype(subtype: Subtype): any {
      this.subtypeService.addSelectedSubtype(subtype);
  }

  getSelectedList(): { [key: string]: Subtype } {
      return this.subtypeService.getSelectedSubtype();
  }


}
