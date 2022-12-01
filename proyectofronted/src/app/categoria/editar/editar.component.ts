import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id:number;
  categoria:Categoria = new Categoria();
  constructor(private categoriaService:CategoriaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.categoriaService.obtenerCategoriaPorId(this.id).subscribe(dato =>{
      this.categoria = dato;
    },error => console.log(error));
  }
irAlaListaDeCategoriaes(){
    this.router.navigate(['/categoria']);
    swal('Categoria actualizado',`El categoria ${this.categoria.nombre} ha sido actualizado con exito`,`success`);
  }
onSubmit(){
    this.categoriaService.actualizarCategoria(this.id,this.categoria).subscribe(dato => {
      this.irAlaListaDeCategoriaes();
    },error => console.log(error));
  }
}
function swal(arg0: string, arg1: string, arg2: string) {
  throw new Error('Function not implemented.');

}
