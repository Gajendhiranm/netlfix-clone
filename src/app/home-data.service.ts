import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeDataService {
  results: any = [];
  id: Number = 0;
  constructor(private http: HttpClient) {}

  PopularData = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/tv?api_key=0fc36919fff2603ac5d92fb95863f537'
    );
  };
  //export const ComedyMovie = `/discover/movie?api_key=${API_KEY}&with_genres=35`
  //export const HorrorMovie = `/discover/movie?api_key=${API_KEY}&with_genres=27`
  comedyMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=35'
    );
  };
  HorrorMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=27'
    );
  };

  RomanticMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=10749'
    );
  };

  documentaries = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=99'
    );
  };
  ActionMovies = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie?api_key=0fc36919fff2603ac5d92fb95863f537&with_genres=28'
    );
  };

  TopRated = () => {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/trending/all/week?api_key=0fc36919fff2603ac5d92fb95863f537'
    );
  };

  detailMovie = (e: any) => {
    this.id = e;
    console.log(this.id);
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/${this.id}?api_key=0fc36919fff2603ac5d92fb95863f537`
    );
  };
}
