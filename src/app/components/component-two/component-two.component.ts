import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/features/cart/cart.model';
import { cartAddItem } from 'src/app/features/cart/store/cart.actions';
import { cartItemsSelector } from 'src/app/features/cart/store/cart.selectors';
import { MovieAPI } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie-service.service';
import { AppSetTitle } from 'src/app/store/app.actions';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {
 // private idSeed=1;

  constructor(
    private store: Store,
    private movieService: MovieService,
    private activatedRoute : ActivatedRoute,
  ) { }
  private subscription= new Subscription;
  movie!:MovieAPI;
  cartItems$!: Observable <CartItem[]>;

  ngOnInit(): void {
    this.store.dispatch(
      AppSetTitle({title: 'Detail'})
    );
    this.cartItems$= this.store.pipe(
      select(cartItemsSelector))

      this.subscription.add(this.movieService.getDetailAPI(this.activatedRoute.snapshot.params['id']).subscribe(
        response => { this.movie = response;}));
  }



  addOneItem(title:string){
    const item:CartItem={ title, item:{name: ` ${title} `}};
    this.store.dispatch(cartAddItem({item}));
  }

}
