import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  private peliculasPopulares:any[] = [];
  private peliculasCartelera:any[] = [];

  private seriesPopulares:any[] = [];


  constructor(private _peliculasService:PeliculasService) { }

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
