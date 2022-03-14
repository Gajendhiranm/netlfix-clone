import { Component, OnInit } from '@angular/core';
import { HomeDataService } from '../home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  results: any = [];
  actionResults: any =  [];
   image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = "https://image.tmdb.org/t/p/original/";
  constructor( private homeData : HomeDataService) {    
  }


 gethomeData = () => {
  this.homeData.PopularData()
  .subscribe(
   response => {
     this.results = response.results;
      }
  )
 }

 getActionMovies = () => {
   this.homeData.ActionMovies()
   .subscribe(
    response => {
      this.actionResults= response.results;
      console.log(response.results);
       }
   )
 }


  handleclick(direction : any){
   console.log(direction);
  }



  ngOnInit(): void { 
    this.gethomeData();
    this.getActionMovies();
  }

}
