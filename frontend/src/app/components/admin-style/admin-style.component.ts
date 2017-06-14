import { Component } from '@angular/core';
import { TypeService } from './../../services/type.service'
import { SubtypeService } from './../../services/subtype.service'
import Subtype from './../../domain/Subtype';

@Component({
  selector: 'admin-style',
  templateUrl: './admin-style.component.html',
  styleUrls: ['./admin-style.component.css'],
  providers: [TypeService, SubtypeService]
})
export class AdminStyleComponent {
  constructor(private typeService: TypeService, private subtypeService: SubtypeService) {}

  openPopup(): any {
      this.typeService.setTypePopup();
  }

  getSubtypeList(): Array<Subtype> {
      return [{"id":3,"name":"3Sub2","description":"3Des2","type":2,"images":["http://artyhomes.ru/wp-content/uploads/2015/03/vizr-arty.jpg"]},{"id":4,"name":"4Sub2","description":"4Des2","type":2,"images":["http://artyhomes.ru/wp-content/uploads/2015/03/vizr-arty.jpg"]}];
  }

}
