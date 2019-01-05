import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { POSTS } from '../mock-posts';
@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.scss']
})
export class PostTestComponent implements OnInit {
  posts = POSTS;
  selectedPost: Post;

  constructor() { }

  ngOnInit() {
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }

}
