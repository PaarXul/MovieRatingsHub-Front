import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import baserUrl from "../helper";


@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http:HttpClient) {}

  public agregarCalificacion(calificacion:any){
      return this.http.post(`${baserUrl}/api/v1/calificacion/`,calificacion);
    }

}
