import { PostService } from './../../../post/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../../../post/models/post.model';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css'],
})
export class MyListComponent implements OnInit {
  entities: Post[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getMyList().subscribe((data) => (this.entities = data));
  }

  removeItemFromList(entityId: number): void {
    this.postService.removeItemFromList(entityId).subscribe(() => {
      this.entities = this.entities.filter((item) => item.id !== entityId);
    });
  }
}
