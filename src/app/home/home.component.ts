import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any = [];
   image_url = `https://image.tmdb.org/t/p/original/`;
  basicUrl = "https://image.tmdb.org/t/p/original/";
  constructor(  private http: HttpClient) { 
      http.get<any>("https://api.themoviedb.org/3/discover/tv?api_key=0fc36919fff2603ac5d92fb95863f537")
      .subscribe(
         response => {
        this.results = response.results;
          console.log("movies results : ",this.results);
         
         }
      )
     
      
      
  }




  ngOnInit(): void {
    
   // console.log(this.results);
    
  }

}
