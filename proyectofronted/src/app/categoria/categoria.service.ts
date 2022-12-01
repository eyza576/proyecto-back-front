import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Categoria } from './categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseURL = "http://localhost:9080/categoria";
  constructor(private httpClient : HttpClient) { }
  //este metodo nos sirve para obtener los empleados
  //listar
  listarcategoria():Observable<Categoria[]>{
    return this.httpClient.get<Categoria[]>(`${this.baseURL+"/Listar"}`);
  }
  //registrar
  registrarCategorias(categoria:Categoria) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL+"/guardar"}`,categoria);
  }
  //actualizar
  actualizarCategoria(id:number,categoria:Categoria) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL+"/Actualizar"}/${id}`,categoria);
  }
  //buscar por id
obtenerCategoriaPorId(id:number):Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.baseURL+"/BuscarPorId"}/${id}`);
  }

  //eliminar
  eliminarCategoria(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL+"/eliminar"}/${id}`);
}

}
