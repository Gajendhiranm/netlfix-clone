import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  results: any = [];
  constructor(private http: HttpClient) { }
   
  PopularData = () => {
    return this.http.get<any>("https://api.themoviedb.org/3/discover/tv?api_key=0fc36919fff2603ac5d92fb95863f537");
   }

  ActionMovies = () => {
    return this.http.get<any>("https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=28")
  }

 TopRated = () => {
    return this.http.get<any>("https://api.themoviedb.org/3/trending/all/week?api_key=0fc36919fff2603ac5d92fb95863f537")
  }

  // const topRatedAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=0fc36919fff2603ac5d92fb95863f537`;



}
