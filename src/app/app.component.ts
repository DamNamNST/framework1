import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  productName: string = 'Product A';
  productPrice: number = 10;
  productStatus: boolean = false;
  productInfo: { id: number; price: number; name: string } = {
    id: 1,
    name: 'Product Info',
    price: 200,
  };
  productList: { id: number; price: number; name: string; status: boolean }[] =
    [
      {
        id: 1,
        name: 'Product AA',
        price: 200,
        status: false,
      },
      {
        id: 2,
        name: 'Product BB',
        price: 400,
        status: true,
      },
      {
        id: 3,
        name: 'Product CC',
        price: 800,
        status: true,
      },
      {
        id: 4,
        name: 'Product DD',
        price: 600,
        status: true,
      },
    ];
  onHandleClick() {
    console.log('Clicked!');
    this.productStatus = !this.productStatus;
  }
  onHandleRemove(id: number) {
    console.log('Deleted!');
    console.log(id);
    this.productList = this.productList.filter((product) => product.id !== id);
  }
  onHandleKeyPress(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;
  }
}
