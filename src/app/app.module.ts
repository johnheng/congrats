import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CommentService } from './comment.service';
import { CommentListComponent } from './comment-list.component';
import { CommentComponent } from './comment.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, CommentComponent, CommentListComponent],
  providers:    [ 
    CommentService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
