import { Component, OnInit } from '@angular/core';
import { MovieserviceService } from '../services/movieservice.service';
import { MoviesData } from '../models/movies.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private movieService: MovieserviceService){
  }

  moviesData?: MoviesData;
  ngOnInit(): void {
    this.movieService.getMoviesData().subscribe(result => {
      console.log(result); 
      this.moviesData=result;
    });
  }

}
