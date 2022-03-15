import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { TrendingComponent } from './trending/trending.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SeriesComponent,
    MoviesComponent,
    TrendingComponent,
    FavoritesComponent,
    NavbarComponent,
    MoviedetailsComponent,
  ],
  imports: [
    // BrowserAnimationsModule, // required animations module
    // ToastrModule.forRoot({
    //   positionClass: 'toast-bottom-center',
    // }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
