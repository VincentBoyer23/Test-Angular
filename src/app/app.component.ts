import { Component } from '@angular/core';

type post = {
  title : string,
  content : string,
  loveIts : number,
  created_at : Date
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post1 :post = {
    title : "titrepost1",
    content : "contentpost1",
    loveIts : 0,
    created_at : new Date()
  };

  post2 :post = {
    title : "titrepost2",
    content : "contentpost2",
    loveIts : 0,
    created_at : new Date()
  };

  post3 :post = {
    title : "titrepost3",
    content : "contentpost3",
    loveIts : 0,
    created_at : new Date()
  };

  postArray = [this.post1, this.post2, this.post3];
}
