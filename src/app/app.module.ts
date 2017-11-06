import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CommentService } from './comment.service';
import { CommentListComponent } from './comment-list.component';
import { CommentComponent } from './comment.component';
// import { Tabletop } from 'tabletop/src/tabletop';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CommentComponent, CommentListComponent],
  providers:    [ 
    CommentService
    // { provide: Tabletop, useClass: Tabletop } 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
