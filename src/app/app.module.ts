import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CommentListComponent } from './comment-list.component';
import { CommentComponent } from './comment.component';
import { CommentService } from './comment.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CommentListComponent, CommentComponent ],
  providers:    [ CommentService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
