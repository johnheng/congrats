import { Injectable } from '@angular/core';
import * as Tabletop from 'tabletop/src/tabletop';

@Injectable()
export class CommentService {
  constructor() {}
  private comments = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1VaWHioyj_OzKQ5J9HXDCwoSDgSRhkwbYbI9ZP_Ub2RQ&output=html';
  
  get() {
    Tabletop.init({
      key: this.comments,
      callback: function(data, tabletop) {
        console.log(data);
        return(data);
      },
      simpleSheet: true
    });
  }
}
