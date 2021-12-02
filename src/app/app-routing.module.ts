import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'pelicula/:id', component: PeliculaComponent},
{path: 'buscar/:texto', component: BuscadorComponent},
{path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
