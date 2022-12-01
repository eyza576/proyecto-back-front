import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto:Producto[];
  constructor(private productoservice:ProductoService,private router:Router) { }

  ngOnInit(): void {
    this.obtenerproducto();
  }

  
  private obtenerproducto(){
    this.productoservice.listarproducto().subscribe(dato => {
      this.producto = dato;
    });
  }

}
