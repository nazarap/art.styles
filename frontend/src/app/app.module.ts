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

import { routing, appRoutingProviders } from './app.routes';

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
    AdminStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
