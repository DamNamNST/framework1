import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductType } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  id: number | undefined
  breadcrumb: string = "Thêm Sản Phẩm"
  addProduct: ProductType = { name: "", price: 0, status: true, description: "" }
  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.addProduct);
    // this.onAdd.emit(this.addProduct)
    this.productService.addProduct(this.addProduct).subscribe((data) => {
      console.log(data)
      this.router.navigate([`/products`])
    })
  }
}
