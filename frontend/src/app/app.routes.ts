import { Routes, RouterModule } from '@angular/router';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminStyleComponent } from './components/admin-style/admin-style.component';
import { AdminTypeComponent } from './components/admin-type/admin-type.component';
import { AdminSubtypeComponent } from './components/admin-subtype/admin-subtype.component';
import { AboutStylesComponent } from './components/about-styles/about-styles.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchContentComponent },
  { path: 'styles', component: AboutStylesComponent },
  { path: 'admin', component: AdminContentComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
      { path: 'create/style', component: AdminStyleComponent },
      { path: 'create/type', component: AdminTypeComponent },
      { path: 'create/subtype', component: AdminSubtypeComponent }
    ]
  }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);