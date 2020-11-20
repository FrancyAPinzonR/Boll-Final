import { Component, OnInit } from '@angular/core';
import { ImagenperfilService } from '../../service/imagenperfil.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  constructor(
    private imagenPerfil: ImagenperfilService,
    private router: Router,
    private auth: AuthService
  ) {}
  
  // Array para obtener la foto de perfil del usuario
  fotoPerfil = [''];
  // Array para obtener datos de usuario
  datosPerfil: any = [];

  ngOnInit(): void {
    this.imagenPerfil.obtenerImagenPerfil().subscribe(
      (res) => {
        this.fotoPerfil = res;
        // console.log(this.fotoPerfil);
      },
      (err) => {
        console.log(err);
      }
    );
    this.auth.obtenerDatosPerfil().subscribe(
      (res) => {
        this.datosPerfil = res;
        console.log(this.datosPerfil);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  imagen = null;

  capturarImagen(event) {
    this.imagen = event.target.files[0];
    // console.log(event.target.files[0]);
  }

  subirImagen() {
    // this.fotoPerfil.forEach(foto => console.log(foto));
    this.imagenPerfil.subirImagenPerfil(this.imagen).subscribe(
      (res) => {
        console.log('resp', res);
        window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrarImagen(foto) {
    // console.log(foto)
    // console.log(this.fotoPerfil.indexOf(foto))
    this.imagenPerfil.eliminarImagenPerfil(foto).subscribe(
      (res) => {
        const index = this.fotoPerfil.indexOf(foto);
        if (index > -1) {
          this.fotoPerfil.splice(index, 1);
          window.location.reload();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
