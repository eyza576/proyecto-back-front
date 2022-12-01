import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { EditarComponent } from './categoria/editar/editar.component';
import { GuardarComponent } from './categoria/guardar/guardar.component';
import { ProductoComponent } from './producto/producto.component';

const routes: Routes = [
  {
    path:'categoria',
    component: CategoriaComponent
  },
  {
    path:'categoria/registrar',
    component: GuardarComponent
  },
  {
    path:'categoria/actualizar/:id',
    component: EditarComponent
  },
  {
    path:'producto',
    component: ProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
