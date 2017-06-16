import { Component } from '@angular/core';
import { TypeService } from './../../services/type.service'

@Component({
  selector: 'admin-type',
  templateUrl: './admin-type.component.html',
  styleUrls: ['./admin-type.component.css'],
  providers: [TypeService]
})
export class AdminTypeComponent {
  typeName: string;
  typeDescription: string;

  constructor(private typeService: TypeService) {}

  createType(): void {
      this.typeService.createType(this.typeName, this.typeDescription);
  }
}
