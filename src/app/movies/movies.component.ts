import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  actionResults: any = [];
  romanticResults : any= [];
  comedyResults : any =[];
  horrorResults : any=[];
  image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = 'https://image.tmdb.org/t/p/original/';
  constructor(private homeData: HomeDataService) { }

  ngOnInit(): void {
    this.getActionMovies();
    this.getRomanticMovies();
    this.getHorrorMovies();
    this.getComedyMovies();
  }
  getActionMovies = () => {
    this.homeData.ActionMovies().subscribe((response) => {
      this.actionResults = response.results;
    });
  };

  getRomanticMovies = () => {
     this.homeData.RomanticMovies().subscribe((response) => {
      this.romanticResults = response.results;
      console.log(this.romanticResults);  
    });
  }
  getHorrorMovies = () => {
    this.homeData.HorrorMovies().subscribe((response) => {
     this.horrorResults = response.results;
     console.log(this.romanticResults);  
   });
 }

 getComedyMovies = () => {
  this.homeData.comedyMovies().subscribe((response) => {
   this.comedyResults = response.results;
   console.log(this.romanticResults);  
 });
}
}
