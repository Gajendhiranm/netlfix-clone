import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  results: any = [];

   image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = "https://image.tmdb.org/t/p/original/";
  constructor(private homeData : HomeDataService) { }

  ngOnInit(): void {
    this.getTrendingData()
  }

  getTrendingData = () => {
    this.homeData.ActionMovies()
    .subscribe(
     response => {
       this.results= response.results;
       console.log(response.results);
        }
    )
  }

}
