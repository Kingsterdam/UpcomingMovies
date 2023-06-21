import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesData } from '../models/movies.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http: HttpClient) { }

  getMoviesData(): Observable<MoviesData>{
    return this.http.get<MoviesData>("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming", {
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com')
      .set('X-RapidAPI-Key', 'ea94b566aamsh3e0ff94e64920b1p1a8d97jsnac2876b6c516'),
      params: new HttpParams()
      .set('limit', 50)
    })
  } 
}
