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

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    SearchContentComponent,
    SearchBlockComponent,
    ListBlockComponent,
    TypeModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
