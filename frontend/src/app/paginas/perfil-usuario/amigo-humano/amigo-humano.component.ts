import { Component, OnInit } from '@angular/core';
import { ImagenamigohumanoService } from '../../../service/perfil-usuario-service/imagenamigohumano.service';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-amigo-humano',
  templateUrl: './amigo-humano.component.html',
  styleUrls: ['./amigo-humano.component.css'],
})
export class AmigoHumanoComponent implements OnInit {
  constructor(
    private imagenHumano: ImagenamigohumanoService,
    private auth: AuthService
  ) {}

  // Array para obtener foto perfil del humano
  fotoPerfilHumano: any = [];

  ngOnInit(): void {
    this.imagenHumano.obtenerImagenHumano().subscribe(
      (res) => {
        this.fotoPerfilHumano = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  imagen = null;

  capturarImagenHumano(event) {
    this.imagen = event.target.files[0];
  }

  subirImagenHumano() {
    this.imagenHumano.subirImagenHumano(this.imagen).subscribe(
      (res) => {
        this.ngOnInit();
        // console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  borrarImagenHumano(foto) {
    this.imagenHumano.eliminarImagen(foto).subscribe(
      (res) => {
        const index = this.fotoPerfilHumano.indexOf(foto);
        if (index > -1) {
          this.fotoPerfilHumano.splice(index, 1);
          this.ngOnInit();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
