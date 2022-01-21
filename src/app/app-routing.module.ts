import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from './components/component-one/component-one.component';
import { ComponentTwoComponent } from './components/component-two/component-two.component';

const routes: Routes = [
  {
    path: 'one',
    component: ComponentOneComponent
  },

  {
    path: 'cart',
    loadChildren : () => import ('./features/cart/cart.module' ).then( m => m.CartModule)
  },
  {
    path: ':id',
    component: ComponentTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
