import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'series',
    component: SeriesComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'trending',
    component: TrendingComponent,
  },
  {
    path: 'favorites',
    component: MoviesComponent,
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
