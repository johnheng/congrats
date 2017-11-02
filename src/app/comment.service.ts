import { Injectable } from '@angular/core';
import Tabletop from 'tabletop/src/tabletop';

@Injectable()
export class CommentService {
  constructor(private tabletop: Tabletop) {}

  get() {
    this.tabletop.init( { key: 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1VaWHioyj_OzKQ5J9HXDCwoSDgSRhkwbYbI9ZP_Ub2RQ&output=html',
    callback: function(data, tabletop) { 
        console.log(data)
    },
    simpleSheet: true } )
  }
}
