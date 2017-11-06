import { Component } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'comments',
  templateUrl: 'app/comment-list.component.html',
  styleUrls: ['css/stylish-portfolio.css']
})
export class CommentListComponent  { 
  constructor(private commentService: CommentService) {}
  comments: any;

  ngOnInit() {
    console.log("ngOnInit");
    this.comments = this.commentService.get();
    console.log(this.comments);
  }
}

