import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Observable, subscribeOn } from 'rxjs';
import {HttpClient} from "@angular/common/http";
//import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, NgFor],
})
export class HomePage {

  constructor(private http:HttpClient) {}

  movieData:any[] = [];

  ionViewWillEnter()
  {
    this.getMovieData().subscribe((data)=>{
      this.movieData = data.Search;
    });
  }

  getMovieData():Observable<any>
  {
    return this.http.get("http://www.omdbapi.com/?apikey=2ee2ed84&s=’war’");
  }

  // ngOnInit()
  // {
  //   this.movie.getMovieData().subscribe((data)=>{
  //     this.movieData = data.Search;
  //   });
  // }
}
