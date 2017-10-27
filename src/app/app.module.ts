import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CommentListComponent } from './comment-list.component';
import { CommentRightComponent } from './comment-right.component';
import { CommentLeftComponent } from './comment-left.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CommentListComponent, CommentRightComponent, CommentLeftComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
