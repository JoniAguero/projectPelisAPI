import { RouterModule, Routes }   from '@angular/router';
import { HomeComponent } from './components/structure/home/home.component';
import { PeliculaComponent } from './components/structure/pelicula/pelicula.component';
import { BuscarComponent } from './components/structure/buscar/buscar.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
