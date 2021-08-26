import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() titrePost : string;
  @Input() contentPost : string;
  @Input() loveIts : number;
  @Input() createdAt : Date;
  constructor() { 
    this.titrePost ="";
    this.contentPost = "";
    this.loveIts =0;
    this.createdAt = new Date();
  }

  onLoveIt(){
    this.loveIts++;
  }

  onDisLoveIt(){
    this.loveIts--;
  }
  ngOnInit(): void {
  }

}
