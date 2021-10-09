import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
