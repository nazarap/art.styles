import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { SearchBlockComponent } from './components/search-block/search-block.component';
import { ListBlockComponent } from './components/list-block/list-block.component';
import { TypeModalComponent } from './components/type-modal/type-modal.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminStyleComponent } from './components/admin-style/admin-style.component';
import { AdminTypeComponent } from './components/admin-type/admin-type.component';
import { AdminSubtypeComponent } from './components/admin-subtype/admin-subtype.component';
import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
import { AboutStylesComponent } from './components/about-styles/about-styles.component';
import { StylePageComponent } from './components/style-page/style-page.component';

import { routing, appRoutingProviders } from './app.routes';
import TokenGuard from './guard/token.guard';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    SearchContentComponent,
    SearchBlockComponent,
    ListBlockComponent,
    TypeModalComponent,
    AdminContentComponent,
    AdminLoginComponent,
    AdminStyleComponent,
    AdminTypeComponent,
    AdminSubtypeComponent,
    AdminBarComponent,
    AboutStylesComponent,
    StylePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    TokenGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
