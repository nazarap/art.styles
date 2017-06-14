import { Component } from '@angular/core';

@Component({
  selector: 'admin-content',
  template: `<div class="container">
                <router-outlet></router-outlet>
            </div>`,
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent {
  constructor() {}
}
