// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-component-one',
//   templateUrl: './component-one.component.html',
//   styleUrls: ['./component-one.component.scss']
// })
// export class ComponentOneComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovieAPI } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie-service.service';
import { AppSetTitle } from 'src/app/store/app.actions';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store,
    private movieService: MovieService,
    private router: Router,
  ) { }

  private subscription= new Subscription;
  movies!: MovieAPI
  movie: MovieAPI[]=[];
  concat:any[]=[];
  ngOnInit(): void {
    this.store.dispatch(
      AppSetTitle({title: 'Movies'})
    );

    this.subscription.add(this.movieService.getListAPI().subscribe(response => {
       this.movies = response;
      console.log(this.movies);
    this.concat = this.movie.concat(this.movies);

  }));

  }

  moreInfo(id: string){
    this.router.navigate(['', id]);
  }

  ngOnDestroy(): void {
    //Nos desuscribimos
    this.subscription.unsubscribe();
  }

}
