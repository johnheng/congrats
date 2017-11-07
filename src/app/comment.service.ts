import { Injectable } from '@angular/core';
import * as Tabletop from 'tabletop/src/tabletop';
import { Observable } from 'rxjs/observable';

import 'rxjs/add/operator/map';
import * as bindCallback from 'rxjs/observable/bindCallback';

@Injectable()
export class CommentService {
  constructor() {}
  private spreadsheetUrl = 'https://docs.google.com/spreadsheet/pub?hl=en_US&hl=en_US&key=1VaWHioyj_OzKQ5J9HXDCwoSDgSRhkwbYbI9ZP_Ub2RQ&output=html';

  data: Observable<Comment[]>;
  getDataAsObservable = bindCallback.bindCallback(this.commentCallback);

  get() : Observable<{}> {
    
    
    // return this.data;
    // console.log(this.getData());
    this.getData();

    const log = (val, cb) => cb(val);
    const trace = bindCallback.bindCallback(log);

    return trace(this.data).map(res => res);
  }

  commentCallback(data, tabletop) {
    console.log(data);
    console.log(tabletop);
    this.data = data;
  }

  getData()  {
    let tabletopData;
    Tabletop.init({
      key: this.spreadsheetUrl,
      callback: this.getDataAsObservable,
      simpleSheet: true
    });

    return "tabletopData";
  }
}
