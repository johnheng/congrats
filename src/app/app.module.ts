import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CommentListComponent } from './comment-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CommentListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
