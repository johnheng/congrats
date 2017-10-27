import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-right',
  templateUrl: 'app/comment-right.component.html',
  styles: ['span { display: block }'],
  styleUrls: ['css/stylish-portfolio.css']
})
export class CommentRightComponent  { 
    @Input() comment;
}
