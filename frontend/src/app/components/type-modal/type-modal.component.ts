import { Component, OnInit } from '@angular/core';
import { TypeService } from './../../services/type.service'
import Type from './../../domain/Type';

@Component({
  selector: 'type-modal',
  templateUrl: './type-modal.component.html',
  styleUrls: ['./type-modal.component.css'],
  providers: [TypeService]
})
export class TypeModalComponent implements OnInit {
  typeList: Array<Type>;

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
      this.typeService.getTypes().subscribe(
          data => {data.types = this.typeList = data.types as Type[]},
          error => {alert(error)},
          () => console.log(this.typeList)
      )
  }

}
