import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: 'app/comment.component.html',
  styles: ['span { display: block }'],
  styleUrls: ['css/stylish-portfolio.css']
})
export class CommentComponent  { 
    @Input() comment: any;
    @Input() position: string;
}
