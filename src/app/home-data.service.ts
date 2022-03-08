import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor() { }
   

  // homeData = async() => {
  //   const data = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=0fc36919fff2603ac5d92fb95863f537')
  //   .then(response => response.json())
  //   .then(data => this.datas=[...data]);

  //   console.log(this.datas);
  // }

}
