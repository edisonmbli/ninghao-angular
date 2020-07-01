import { TestBed } from '@angular/core/testing';

import { PostDetailResolveService } from './post-detail-resolve.service';

describe('PostDetailResolveService', () => {
  let service: PostDetailResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
