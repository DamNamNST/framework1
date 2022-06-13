import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../models/User';
import { LoginService } from '../../services/login.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser: IUser = {
    id: 0,
    name: '',
    age: 0,
    password: '',
    avatar: ''
  };
  constructor(private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(){
    //const id = +this.route.snapshot.paramMap.get('id')!;
    this.loginService.addUser(this.newUser).subscribe(data =>{
      setTimeout(() => {
        this.router.navigateByUrl('/user')
      }, 2000);
    })
  }
}
