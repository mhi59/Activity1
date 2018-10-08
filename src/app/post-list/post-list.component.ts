import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() arrayPosts: Array<Post>;

  ngOnInit() {
  }

}
