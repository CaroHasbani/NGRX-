import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieAPI } from '../models/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient
  ) { }
  private url = environment.movieApi;


  getListAPI(): Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(this.url);
  }

  getDetailAPI(id: string) : Observable<MovieAPI>{
    return this.httpClient.get<MovieAPI>(`${this.url}/${id}`);
  }



}
