import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  results: any = [];
  actionResults: any = [];
  romanticResults : any= [];
  comedyResults : any =[];
  horrorResults : any=[];
  image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = 'https://image.tmdb.org/t/p/original/';
  constructor(private homeData: HomeDataService, private route: Router) {}

  gethomeData = () => {
    this.homeData.PopularData().subscribe((response) => {
      this.results = response.results;
    });
  };

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
  handleclick(direction: any) {
    console.log(direction);
  }

  getId(e: any) {
    this.homeData.detailMovie(e);
    this.route.navigate([e]);
  }

  ngOnInit(): void {
    this.gethomeData();
    this.getActionMovies();
    this.getRomanticMovies();
    this.getHorrorMovies();
    this.getComedyMovies();
  }
}
