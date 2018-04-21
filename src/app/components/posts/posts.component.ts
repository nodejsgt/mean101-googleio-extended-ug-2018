import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.getAllPosts();
    this.getAllPostsObservable();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().then( result => {
      this.posts = result;
    })
  }

  getAllPostsObservable(): void {
    this.postService.getAllPostObservable()
                    .subscribe( posts => this.posts = posts);
  }

}
