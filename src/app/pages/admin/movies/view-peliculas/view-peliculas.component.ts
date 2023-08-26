import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PeliculasService} from "../../../../services/ModuloMovies/peliculas.service";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatSort, Sort} from "@angular/material/sort";
import Swal from "sweetalert2";

@Component({
  selector: 'app-view-peliculas',
  templateUrl: './view-peliculas.component.html',
  styleUrls: ['./view-peliculas.component.scss']
})
export class ViewPeliculasComponent implements OnInit {

  displayedColumns: string[] = ['id_pelicula', 'titulo', 'anio_lanzamiento','genero',  'authorities', 'acciones'];

  dataSource = new MatTableDataSource();

  pelicula: any = []

  constructor(private peliculasService: PeliculasService,
              private _liveAnnouncer: LiveAnnouncer,
              private matExport: MatTableExporterModule
  ) {
  }


  @ViewChild(MatSort)
  sort!: MatSort;


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.peliculasService.listarPeliculas().subscribe(
      (dato: any) => {
        this.pelicula = dato;
        this.dataSource.data = this.pelicula;
        console.log(this.pelicula);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!', 'Error al cargar los usuario', 'error');
      }
    )


  }

  id_usuario = 0;
  exporter: any;

  eliminarPelicula(id: number) {
    Swal.fire({
      title: '¿Está seguro de continuar?',
      text: "El usuario será eliminado del sistema",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'

    }).then((result) => {
      if (result.isConfirmed) {
        this.peliculasService.eliminarPelicula(id).subscribe(
          (data) => {
            Swal.fire('Eliminado', 'la pelicula ha sido eliminado con éxito', 'success').then(
              (e) => {
                window.location.reload();
              }
            );
            this.pelicula = this.pelicula.filter((pelicula: any) => pelicula.id_pelicula != id)
          },
          (error) => {
            Swal.fire('Error en el sistema', 'No se ha podido eliminar el usuario', 'error');
            console.log(error);
          }
        )
      }

    })
  }
}
