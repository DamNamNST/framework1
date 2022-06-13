import { Component, OnInit } from '@angular/core';
import { ProductType } from '../../models/Product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  // @Input('data') productList!: IProduct[];
  // productDetail!:IProduct;
  title: string = 'abc';
  breadcrumb: string = 'Sản Phẩm';
  testInput: string = 'myName';
  show: boolean = true;
  products: any;

  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: any;
  listOfCurrentPageData: [] = [];
  setOfCheckedId = new Set<number>();
  constructor(private productService: ProductService) {
    // this.productList = this.productService.getProducts();
    // this.showProducts();
  }

  ngOnInit(): void {
    this.onGetProduct();
  }
  onGetProduct() {
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
      this.listOfData = data;
      console.log(this.listOfData);
    });
  }

  onDelete(id: number | undefined) {
    if (confirm('Bạn có muốn Xóa?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.onGetProduct();
      });
    }
  }

  onHandlerClick() {
    this.show = !this.show;
  }

  // onHandlerDelete(id: number | undefined ){
  //   if(confirm("Bạn Có Muốn Xóa?")){
  //     this.products = this.products.filter(item => item.id !== id )
  //   }

  // }

  onHandlerAdd(data: ProductType) {
    data.id = 1;

    console.log(data);
    // this.products.push(data)
  }

  onHandlerKeyPress(event: any) {
    console.log(event.target.value);
    this.title = event.target.value;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: any): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(
      ({ disabled }) => !disabled
    );
    this.checked = listOfEnabledData.every(({ id }) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({ disabled }) => !disabled)
      .forEach(({ id }) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  // showProducts(){
  //   this.productService.getProducts().subscribe(data => {
  //     this.productList = data;
  //   })
  // }
  // onRemoveItem(id: number){
  //   //call api
  //   this.productService.removeProduct(id).subscribe(()=>{
  //     //reRender
  //     this.productList = this.productList.filter(item => item.id !== id)
  //   })
  // }
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
