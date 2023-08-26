import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "../helper";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public listarusuarios(){
    return this.http.get(`${baserUrl}/api/v1/usuario/`);
  }

  public detalleusuarios(usuarioId:number){
    return this.http.get(`${baserUrl}/api/v1/usuario/${usuarioId}`)
  }


  public guardarusuarios(usuario:any){
    return this.http.post(`${baserUrl}/api/v1/usuario/`,usuario);
  }

  public actualizarusuarios(usuario:any){
    return this.http.put(`${baserUrl}/api/v1/usuario/`,usuario);
  }

  public eliminarusuario(usuarioId:number){

    return this.http.delete(`${baserUrl}/api/v1/usuario/${usuarioId}`);
  }
}
