import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutStylesComponent } from './components/about-styles/about-styles.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { AdminBarComponent } from './components/admin-bar/admin-bar.component';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminStyleComponent } from './components/admin-style/admin-style.component';
import { AdminSubtypeComponent } from './components/admin-subtype/admin-subtype.component';
import { AdminTypeComponent } from './components/admin-type/admin-type.component';
import { ListBlockComponent } from './components/list-block/list-block.component';
import { SearchBlockComponent } from './components/search-block/search-block.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { StylePageComponent } from './components/style-page/style-page.component';
import { TypeModalComponent } from './components/type-modal/type-modal.component';
import {TruncatePipe} from './filters/truncate';

@NgModule({
  declarations: [
    AppComponent,
    AboutStylesComponent,
    ActionBarComponent,
    AdminBarComponent,
    AdminContentComponent,
    AdminLoginComponent,
    AdminStyleComponent,
    AdminSubtypeComponent,
    AdminTypeComponent,
    ListBlockComponent,
    SearchBlockComponent,
    SearchContentComponent,
    StylePageComponent,
    TypeModalComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'art.style'}),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
