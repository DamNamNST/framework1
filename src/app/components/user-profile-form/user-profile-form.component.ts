import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UserProfileType } from 'src/app/models/Profile';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css'],
})
export class UserProfileFormComponent implements OnInit {
  breadcrumb: string = 'Form Thông Tin';
  id: number | undefined;
  isImgLoad: boolean = false;
  product: UserProfileType = {
    name: '',
    position: '',
    about: '',
    cv: '',
  };
  categoryPost: any;
  validateForm!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userProfileService: UserProfileService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (this.id) {
      this.userProfileService
        .getDetailUserProfile(this.id)
        .subscribe((data) => {
          this.product = data;
          this.isImgLoad = true;
          console.log(this.product);
        });
    }
  }

  onSubmit() {
    console.log(this.product);
    console.log(this.product);
    if (this.id) {
      return this.userProfileService
        .updateUserProfile(this.product)
        .subscribe((data) => {
          this.router.navigate([`/admin/userProfile/edit/1`]);
          this.message.success('Sửa Thành Công!');
        });
    }

    return this.userProfileService
      .addUserProfile(this.product)
      .subscribe((data) => {
        this.router.navigate([`/admin/userProfile/edit/1`]);
      });
  }
}
