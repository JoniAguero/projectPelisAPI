import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenpelicula'
})
export class ImagenpeliculaPipe implements PipeTransform {

  transform(pelicula: any, arg?: boolean): any {

    let url:string = "http://image.tmdb.org/t/p/w500";

    if(arg){
      return url + pelicula.poster_path;
    } else{
      if(pelicula.backdrop_path){
        return url + pelicula.backdrop_path;
      } else {
        if(pelicula.poster_path){
          return url + pelicula.poster_path;
        } else {
          return "assets/img/noimage.jpg"
        }
      }
    }


  }

}
