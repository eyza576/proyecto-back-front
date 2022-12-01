import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {

  titulo: string="Registrar Nuevo Proveedor";
  categoria : Categoria = new Categoria();
  constructor(private categoriaService:CategoriaService,private router:Router) { }

  ngOnInit(): void {
  }
  public crearCategoria(): void{
    this.categoriaService.registrarCategorias(this.categoria).subscribe(
      categoria => {
        this.router.navigate(['/categoria'])
       swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )
  }

}
