import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  //@Output() onAdd = new EventEmitter()
  product: IProduct = {
    name: '',
    price: 0,
    status: true,
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.getProduct(id).subscribe((data) => {
        this.product = data;
      });
    }
  }
  onSubmit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.productService.updateProduct(this.product).subscribe((data) => {
        setTimeout(() => {
          //redirect về list
          this.router.navigateByUrl('/product');
        }, 2000);
      });
    }
    this.productService.addProduct(this.product).subscribe((data) => {
      setTimeout(() => {
        //redirect về list
        this.router.navigateByUrl('/product');
      }, 2000);
    });
  }
}
