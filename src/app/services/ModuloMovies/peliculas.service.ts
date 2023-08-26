import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "../helper";


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  public listarPeliculas(){
    return this.http.get(`${baserUrl}/api/v1/peliculas/`);
  }

  public obtenerPelicula(peliculaId:any){
    return this.http.get(`${baserUrl}/api/v1/peliculas/${peliculaId}`);
  }

  public guardarPelicula(pelicula:any){
    return this.http.post(`${baserUrl}/api/v1/peliculas/`,pelicula);
  }

  public actualizarPelicula(pelicula:any){
    return this.http.put(`${baserUrl}/api/v1/peliculas/`,pelicula);
  }

  public eliminarPelicula(peliculaId:any){
    return this.http.delete(`${baserUrl}/api/v1/peliculas/${peliculaId}`);
  }


}
