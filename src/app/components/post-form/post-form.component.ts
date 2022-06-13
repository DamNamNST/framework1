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
    image: '',
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

  async changeListener(files: any) {
    let fileList2 = files.target.files[0];
    console.log(fileList2);
    if (fileList2) {
      let file: File = fileList2;
      console.log(file.name);
      console.log(file.size);
      console.log(file.type);

      if (file) {
        const CLOUDINARY_PRESET = "iqnyfok8";
        const CLOUDINARY_API_URL =
          "https://api.cloudinary.com/v1_1/vintph16172/image/upload"

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", CLOUDINARY_PRESET);

        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
          headers: {
            "Content-Type": "application/form-data"
          }
        });
        console.log(data);
        
        this.product.image = data.url;
        this.isImgLoad = true
        console.log(this.product);
      }
    };
  }
}
