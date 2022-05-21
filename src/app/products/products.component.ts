import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../models/Product';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // @Input('data') productList!: IProduct[];
  // productDetail!:IProduct;
  productList!: IProduct[];
  constructor(private productService: ProductService) {
    // this.productList = this.productService.getProducts();
    this.showProducts();
  }

  ngOnInit(): void {}
  showProducts(){
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    })
  }
  onRemoveItem(id: number){
    //call api 
    this.productService.removeProduct(id).subscribe(()=>{
      //reRender
      this.productList = this.productList.filter(item => item.id !== id)
    })
  }
  // onHandleRemove(id: number) {
  //   // console.log('Deleted!');
  //   // console.log(id);
  //   this.products = this.products.filter((product) => product.id !== id);
  // }
  // onHandleGetInfo(product: IProduct) {
  //   this.productDetail = product;
  //   console.log('product', product)
  // }
  // showDetail(id: number) {
  //   this.productDetail = this.productList.find(item => item.id === id)!;
  // }
}
