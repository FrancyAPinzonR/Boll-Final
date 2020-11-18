import { Component, OnInit } from '@angular/core';
import { ImagenperfilService } from '../../service/imagenperfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css'],
})
export class PerfilUsuarioComponent implements OnInit {
  constructor(
    private imagenPerfil: ImagenperfilService,
    private router: Router
  ) { }
  
  ngOnInit(): void { }
  
  imagen = null

  capturarImagen(event) {
    this.imagen = event.target.files[0];
    console.log(event.target.files[0]);
  }

  subirImagen() {
    this.imagenPerfil.subirImagenPerfil(this.imagen).subscribe(
      (res) => {
        console.log('resp', res)
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
