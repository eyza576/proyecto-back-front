import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from './categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
///lista
  categoria:Categoria[];
  constructor(private categoriaService:CategoriaService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  
  private obtenerCategorias(){
    this.categoriaService.listarcategoria().subscribe(dato => {
      this.categoria = dato;
    });
  }

    //acatualizar
    actualizarCategoria(id:number){
      this.router.navigate(['categoria/actualizar',id]);
    }
  //eliminar
  eliminarCategoria(id:number){
    this.categoriaService.eliminarCategoria(id).subscribe(
      res=>{this.ngOnInit();},
      err=>console.log(err)
      
    );
  }
}
   