import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(
    private http : HttpClient
  ) { }

  getCartelera(){

    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=8f53a6f899de50743b106d977131bac1&language=es-ES&page=1')
  }
}
