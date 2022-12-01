import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseURL = "http://localhost:9080/producto";
  constructor(private httpClient : HttpClient) { }
  //este metodo nos sirve para obtener los empleados
  //listar
  listarproducto():Observable<Producto[]>{
    return this.httpClient.get<Producto[]>(`${this.baseURL+"/listar"}`);
  }
}
