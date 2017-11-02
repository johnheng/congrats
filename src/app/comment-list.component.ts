import { Component } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'comments',
  templateUrl: 'app/comment-list.component.html',
  styleUrls: ['css/stylish-portfolio.css']
})
export class CommentListComponent  { 
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.get();
  }
  
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

