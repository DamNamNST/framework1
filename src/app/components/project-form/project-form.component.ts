import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ProjectType } from 'src/app/models/Project';
import { CateProjectService } from 'src/app/services/cate-project.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  breadcrumb: string = 'Form Dự Án';
  id: number | undefined;
  isImgLoad: boolean = false;
  product: ProjectType = {
    name: '',
    image: 'https://picsum.photos/200/300',
    createAt: '',
    categoriesProjectId: 0,
    short_desc: '',
    desc: '',
  };
  categoryPost: any;
  validateForm!: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService,
    private categoryProjectService: CateProjectService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.id) {
      this.projectService.getDetailProject(this.id).subscribe((data) => {
        const { categoriesProject, ...abc } = data;
        this.product = abc;
        this.isImgLoad = true;
        console.log(this.product);
      });
    }
    this.categoryProjectService.getCateProject().subscribe((data2) => {
      this.categoryPost = data2;
      console.log(this.categoryPost);
    });
  }
  onSubmit() {
    console.log(this.product);
    if (this.id) {
      return this.projectService
        .updateProject(this.product)
        .subscribe((data) => {
          this.router.navigate([`/admin/projects`]);
        });
    }
    this.product.createAt = moment().toISOString();
    console.log(this.product);
    return this.projectService.addProject(this.product).subscribe((data) => {
      this.router.navigate([`/admin/projects`]);
    });
  }

  
}
