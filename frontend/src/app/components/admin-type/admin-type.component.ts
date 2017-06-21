import { Component } from '@angular/core';
import { TypeService } from './../../services/type.service'
import { Router } from '@angular/router';

@Component({
  selector: 'admin-type',
  templateUrl: './admin-type.component.html',
  styleUrls: ['./admin-type.component.css'],
  providers: [TypeService]
})
export class AdminTypeComponent {
  typeName: string;
  typeDescription: string;

  constructor(private typeService: TypeService, private router: Router) {}

  createType(): void {
      this.typeService.createType(this.typeName, this.typeDescription)
      .subscribe(
          data => { this.router.navigate(['/styles']) },
          error => {},
          () => {}
      )
  }
}
