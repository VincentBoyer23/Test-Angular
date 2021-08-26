import { Component, Input, OnInit } from '@angular/core';
type post = {
  title : string,
  content : string,
  loveIts : number,
  created_at : Date
};
@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() PostArray : Array<post>;
  constructor() {
    this.PostArray = [];
   }

  ngOnInit(): void {
  }

}
