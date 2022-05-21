import { Component } from '@angular/core';
import mockData from 'src/data';
import { IProduct } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'my-app';
  // productName: string = 'Product A';
  // productPrice: number = 10;
  // productStatus: boolean = false;
  // productInfo: { id: number; price: number; name: string } = {
  //   id: 1,
  //   name: 'Product Info',
  //   price: 200,
  // };
  productList: IProduct[] = mockData;
    // [
    //   {
    //     id: 1,
    //     name: 'Product AA',
    //     price: 200,
    //     status: false,
    //   },
    //   {
    //     id: 2,
    //     name: 'Product BB',
    //     price: 400,
    //     status: true,
    //   },
    //   {
    //     id: 3,
    //     name: 'Product CC',
    //     price: 800,
    //     status: true,
    //   },
    //   {
    //     id: 4,
    //     name: 'Product DD',
    //     price: 600,
    //     status: true,
    //   },
    // ];
    onHandleAdd(product: IProduct){
      console.log(product);
      this.productList.push(product)
    }
  // onHandleClick() {
  //   console.log('Clicked!');
  //   this.productStatus = !this.productStatus;
  // }
  // onHandleRemove(id: number) {
  //   console.log('Deleted!');
  //   console.log(id);
  //   this.productList = this.productList.filter((product) => product.id !== id);
  // }
  // onHandleKeyPress(event: any) {
  //   console.log(event.target.value);
  //   this.title = event.target.value;
  // }
}
