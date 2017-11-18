import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html'
})
export class PeliculaComponent implements OnInit {

  private pelicula:any;
  private pagina:any;
  private busqueda:any;

  constructor(private activatedRoute:ActivatedRoute,
              private _peliculasService:PeliculasService,
              private router:Router){}

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
              this.pagina = parametros['pag'];
              if(parametros['busqueda']){
                this.busqueda = parametros['busqueda'];
              }
              if(parametros['details'] == 'pelicula'){
                this._peliculasService.getPelicula(parametros['id']).subscribe( data => {
                  this.pelicula = data;
                })
              } else {
                if (parametros['details'] == 'serie'){
                  this._peliculasService.getSerie(parametros['id']).subscribe( data => {
                    this.pelicula = data;
                  })
              }
          }
    })

  }

}
