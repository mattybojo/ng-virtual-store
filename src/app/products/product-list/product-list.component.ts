import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products/products.service';

@Component({
  selector: 'ngvs-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  subscription$: Subscription[] = [];
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.subscription$.push(
      this.productsService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      })
    );
  }

  ngOnDestroy() {
    this.subscription$.forEach((sub) => sub.unsubscribe());
  }
}
