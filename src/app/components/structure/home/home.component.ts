import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public peliculasPopulares:any[] = [];
  public peliculasCartelera:any[] = [];

  public seriesPopulares:any[] = [];


  constructor(public _peliculasService:PeliculasService) { }

  ngOnInit() {
    this._peliculasService.getPeliculasPopulares()
                          .subscribe( data => {
                            this.peliculasPopulares = data.results;
                          });

    this._peliculasService.getPeliculasCartelera()
                          .subscribe( data => {
                            this.peliculasCartelera = data.results;
                          });

    this._peliculasService.getSeriesPopulares()
                          .subscribe( data => {
                            this.seriesPopulares = data.results;
                          });
  }



}
