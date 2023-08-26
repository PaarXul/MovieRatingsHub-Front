

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
//import {PeliculaService} from "../../../../services/ModuloMovies/pelicula.service";
//import {CalificacionService} from "../../../../services/ModuloMovies/calificacion.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-calificacion',
  templateUrl: './add-calificacion.component.html',
  styleUrls: ['./add-calificacion.component.scss']
})
export class AddCalificacionComponent implements OnInit{

  constructor(
    //private route:ActivatedRoute,
    //private calificacionService:CalificacionService,
   // private peliculaService:PeliculaService,
    private router:Router,
  ) { }

  /*
  peliculaId = 0;
  rol:any ;
  rolNombre = '';

  calificacionPost: any = {
    puntuacion: 0,
    resena: '',
    id_pelicula: 0,
    id_usuario: 0,
  }

*/

  ngOnInit(): void {
  /*
    this.peliculaId = this.route.snapshot.params['id_pelicula'];

    this.calificacionService.obtenerRol(this.peliculaId).subscribe(
      (data) => {
        this.rol = data;

        this.calificacionPost.id = this.rol.id;
        this.calificacionPost.nombre = this.rol.nombre;

        this.rolNombre = this.rol.nombre;
        console.log(this.rol);
      },
      (error) => {
        console.log(error);
      })
      */

  }
/*

  public Calificar(){
    console.log(this.calificacionPost);
    this.calificacionService.actualizarRol(this.calificacionPost).subscribe(


      (data) => {
        Swal.fire('rol actualizado','El Cargo ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/view-rol']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el rol','error');
        console.log(error);
      }
    )
  }

*/



}



