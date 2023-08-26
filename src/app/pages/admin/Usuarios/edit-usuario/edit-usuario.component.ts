import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../../../services/ModuloUsuarios/usuario.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {



  usuarioFG = this.formBuilder.group({
    id: 0,
    nombreusuario: '',
    enabled: true,
    correoelectronico:'',
    contrasena:'',
  })

  usuarioId = 0;
  usuarionombre = '';
  usuario:any ;

  ngOnInit(): void {
    this.usuarioId = this.route.snapshot.params['usuarioId'];
    this.usuarionombre = this.route.snapshot.params['nombre'];

    this.usuarioService.detalleusuarios(this.usuarioId).subscribe(
      (data) => {
        this.usuario = data;
        this.usuarioFG.value.id = this.usuario.usuarioId;
        this.usuarioFG.controls['nombreusuario'].setValue(this.usuario.nombreusuario);
        this.usuarioFG.controls['enabled'].setValue(this.usuario.enabled);
        this.usuarioFG.controls['correoelectronico'].setValue(this.usuario.correoelectronico);
        this.usuarioFG.controls['contrasena'].setValue(this.usuario.contrasena);
        console.log(this.usuario);
      },
      (error) => {
        console.log(error);
      })
  }




  constructor(
    private route:ActivatedRoute,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  usuarioPost: any = {
    id_usuario: 0,
    nombreusuario: '',
    enabled: true,
    correoelectronico:'',
    contrasena:'',

};


  public actualizarDatos(){

    this.usuarioPost.id_usuario =  this.usuarioId;
    this.usuarioPost.nombreusuario = this.usuarioFG.value.nombreusuario;
    this.usuarioPost.enabled = this.usuarioFG.value.enabled;
    this.usuarioPost.correoelectronico = this.usuarioFG.value.correoelectronico;
    this.usuarioPost.contrasena = this.usuarioFG.value.contrasena;

    console.log("Usuario A Actualizar");
    console.log(this.usuarioPost);


    let usuario = {
      id: 0,
      nombreusuario: this.usuarioFG.value.nombreusuario?.trim(),
      enabled: this.usuarioFG.value.enabled,
      correoelectronico:this.usuarioFG.value.correoelectronico,
      contrasena:this.usuarioFG.value.contrasena,
    }

    usuario.id = this.usuario.usuarioId;

    if (usuario.nombreusuario == '' || usuario.nombreusuario == null) {
      this.snackBar.open('El nombre es requerido', '', {
        duration: 3000
      });
      return;
    }

    if (usuario.correoelectronico == '' || usuario.correoelectronico == null) {
      this.snackBar.open('El email es requerido', '', {
        duration: 3000
      });
      return;
    }
    if (usuario.contrasena == '' || usuario.contrasena == null) {
      this.snackBar.open('El password es requerido', '', {
        duration: 3000
      });
      return;
    }
    console.log(usuario);
    console.log(this.usuario);



    this.usuarioService.actualizarusuarios(this.usuarioPost).subscribe(

      (data) => {
        Swal.fire('usuario actualizado','El Usuario ha sido actualizado con éxito','success').then(
          (e) => {
            this.router.navigate(['/admin/view-usuario']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el usuario','error');
        console.log(error);
      }
    )

  }




}
