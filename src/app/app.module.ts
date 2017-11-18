// Externos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

// Rutas
import {APP_ROUTING} from './app.routes';

// Servicios

import { PeliculasService } from './services/peliculas.service';

// Pipes
import { ImagenpeliculaPipe } from './pipes/imagenpelicula.pipe';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/structure/navbar/navbar.component';
import { HomeComponent } from './components/structure/home/home.component';
import { PeliculaComponent } from './components/structure/pelicula/pelicula.component';
import { GaleriaComponent } from './components/structure/home/galeria.component';
import { BuscarComponent } from './components/structure/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ImagenpeliculaPipe,
    PeliculaComponent,
    GaleriaComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    NgxPaginationModule,
    APP_ROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
