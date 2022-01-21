import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer)
  ]
})
export class CartModule { }
