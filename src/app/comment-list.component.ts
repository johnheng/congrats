import { Component } from '@angular/core';

@Component({
  selector: 'comments',
  templateUrl: 'app/comment-list.component.html',
  styleUrls: ['css/stylish-portfolio.css']
})
export class CommentListComponent  { 
    comments = [
      {
        author: "John",
        date: "01/01/2017 12:00:00 AM",
        text: "This is a test"
      },
      {
        author: "Aaron",
        date: "01/01/2017 12:00:00 AM",
        text: "This is a test"
      },
      {
        author: "Aardvark",
        date: "01/01/2017 12:00:00 AM",
        text: "This is a test"
      },
      {
        author: "Mike",
        date: "01/01/2017 12:00:00 AM",
        text: "This is a test"
      },
      {
        author: "Joey",
        date: "01/01/2017 12:00:00 AM",
        text: "This is a test"
      },
      {
        author: "Chris",
        date: "01/01/2017 12:00:00 AM",
        text: "This is a test"
      }
    ]
}

