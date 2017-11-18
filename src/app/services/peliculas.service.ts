import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';
import * as moment from 'moment';

@Injectable()
export class PeliculasService {

  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private apiKey:string = "6cd5de0b04e882f35b206fe4201fa53d";

  peliculas:any[] = [];
  cantidadPaginas:number;
  pagina:number = 1;

  constructor(private jsonp:Jsonp) { }

  getPeliculasCartelera(){

    let startDate = moment().add(-15, 'days').format('Y-MM-DD'); // 15 días
    let finishDate = moment().format('Y-MM-DD');

    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${startDate}&primary_release_date.lte=${finishDate}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( res => {
                      return res.json();
                    });
  }

  getPeliculasPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( res => {
                      return res.json();
                    });
  }

  getSeriesPopulares(){
    let url = `${this.urlMoviedb}/discover/tv?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( res => {
                      return res.json();
                    });
  }

  getPelicula(movie_id:any){

    let url = `${this.urlMoviedb}/movie/${movie_id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( res => {
                      console.log(res.json());
                      return res.json();
                    });
  }
  getSerie(movie_id:any){

    let url = `${this.urlMoviedb}/tv/${movie_id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
                    .map( res => {
                      return res.json();
                    });
  }


  buscarPelicula(nombrePelicula:any){
    let url = `${this.urlMoviedb}/search/multi?query=${nombrePelicula}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&page=${this.pagina}&include_adult=false&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url)
                    .map( res => {
                      this.cantidadPaginas = res.json().total_pages;
                      // Recorro todas las paginas para armar el array de peliculas
                      for (let i = 0; i < this.cantidadPaginas ; i++) {
                        // Recorro peliculas por pagina
                        this.buscarPeliculaPorPage(nombrePelicula,this.pagina).subscribe();
                        this.pagina +=1;
                        this.buscarPelicula(nombrePelicula);
                      }

                      return this.peliculas;
                    });
  }
buscarPeliculaPorPage(nombrePelicula:any, pag:number){
  let url = `${this.urlMoviedb}/search/multi?query=${nombrePelicula}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&page=${pag}&include_adult=false&callback=JSONP_CALLBACK`;
  return this.jsonp.get(url)
                  .map( res => {
                    this.peliculas.push(res.json().results);

                  })
}


}
