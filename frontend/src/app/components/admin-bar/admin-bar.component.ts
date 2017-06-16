import { Component } from '@angular/core';

@Component({
  selector: 'admin-bar',
  template: `<ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/admin/styles']" [routerLinkActive]="['active']">Style list</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/admin/create/style']" [routerLinkActive]="['active']">New Style</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/admin/types']" [routerLinkActive]="['active']">Type list</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/admin/create/type']" [routerLinkActive]="['active']">New Type</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/admin/subtypes']" [routerLinkActive]="['active']">Subtype list</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" [routerLink]="['/admin/create/subtype']" [routerLinkActive]="['active']">New Subtype</a>
                </li>
            </ul>`,
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent {
  constructor() {}
}
