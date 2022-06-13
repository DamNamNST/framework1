import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: any;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    // const id = Number(routeParams.get("id"))

    this.productService.getDetailProduct(id).subscribe((data) => {
      this.product = data;
    });
  }
}
