import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  buscar:string = "";
  peliculas:any[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              public _peliculasService:PeliculasService) {

                this.activatedRoute.params.subscribe( parametros => {
                  if ( parametros['texto']){
                    this.buscar = parametros['texto'];
                    this.buscarPelicula();
                  }
                })
              }

  ngOnInit() {}

  buscarPelicula(){
    if(this.buscar.length == 0){
      return;
    }
    this._peliculasService.buscarPelicula(this.buscar).subscribe();
  }

}
