import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { posts } from './posts';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  title = 'posts';
  entities: Post[];

  constructor(private postService: PostService) {
    this.entities = this.postService.index();
  }

  ngOnInit(): void {}

  removeItem(item: Post): void {
    console.log('remove...');
    this.entities = this.entities.filter((entity) => {
      return entity.id !== item.id;
    });
  }
}
