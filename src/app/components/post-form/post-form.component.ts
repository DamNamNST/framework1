import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import axios from 'axios';
import { PostType } from 'src/app/models/Post';
import { CatePostService } from 'src/app/services/cate-post.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  breadcrumb: string = 'Form Bài Viết';
  id: number | undefined;
  isImgLoad: boolean = false;
  product: PostType = {
    title: '',
    image: 'https://picsum.photos/200/300',
    createAt: '',
    categoriesPostId: 0,
    short_desc: '',
    desc: '',
  };
  categoryPost: any;
  validateForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private categoryPostService: CatePostService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    if (this.id) {
      this.postService.getDetailPost(this.id).subscribe((data) => {
        const { categoriesPost, ...abc } = data;
        this.product = abc
        this.isImgLoad = true
        console.log( this.product);
        
      })
    }
    this.categoryPostService.getCatePost().subscribe((data2)=>{
      this.categoryPost = data2
      console.log(this.categoryPost);
      
    })
  }
  onSubmit() {
    console.log(this.product);
    if (this.id) {
      return this.postService.updatePost(this.product).subscribe((data) => {
        this.router.navigate([`/admin/posts`])
      })
    }
    this.product.createAt = moment().toISOString();
    console.log(this.product);
    return this.postService.addPost(this.product).subscribe((data) => {
      this.router.navigate([`/admin/posts`])
    })

  }

}
