import { Routes, RouterModule } from '@angular/router';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminStyleComponent } from './components/admin-style/admin-style.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchContentComponent },
  { path: 'admin', component: AdminContentComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: AdminLoginComponent },
      { path: 'style', component: AdminStyleComponent }
    ]
  }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);
