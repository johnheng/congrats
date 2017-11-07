import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import 'rxjs/add/operator/map';

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
    // console.log(this.commentService.get().subscribe((result => { this.comments = result })));
    console.log(this.commentService.get().subscribe(result => { this.comments = result }));
  }
}

