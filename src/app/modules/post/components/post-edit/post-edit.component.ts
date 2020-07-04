import { PostService } from './../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  postEditForm = this.formBuilder.group({
    title: [''],
    body: [''],
    image: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => this.postService.show(+params.get('id'))))
      .subscribe((data) => {
        this.postEditForm.patchValue(data);
      });
  }

  onSubmit(): void {
    console.log(this.postEditForm.value);
    this.postService
      .update(+this.route.snapshot.paramMap.get('id'), this.postEditForm.value)
      .subscribe();
  }
}
