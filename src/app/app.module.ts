import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CommentService } from './comment.service';
import { CommentListComponent } from './comment-list.component';
import { CommentComponent } from './comment.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CommentComponent, CommentListComponent],
  providers:    [ 
    CommentService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
