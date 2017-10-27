import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-left',
  templateUrl: 'app/comment-left.component.html',
  styles: ['span { display: block }'],
  styleUrls: ['css/stylish-portfolio.css']
})
export class CommentLeftComponent  { 
    @Input() comment;
}
