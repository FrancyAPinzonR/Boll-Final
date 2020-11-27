import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ImagenamigohumanoService {
  constructor(private http: HttpClient) {}

  private mostrarImagenHumano ='http://localhost:3000/api/imagenamigohumano/mostrarimagenamigohumano';
  private cargarImagenHumano ='http://localhost:3000/api/imagenamigohumano/cargarimagenamigohumano';
  private eliminarImagenHumano = 'http://localhost:3000/api/imagenamigohumano/';

  obtenerImagenHumano() {
    return this.http.get<any>(this.mostrarImagenHumano);
  }

  subirImagenHumano(imagenHumano: File) {
    const fd = new FormData();
    fd.append('sticker', imagenHumano);
    return this.http.post<any>(this.cargarImagenHumano, fd);
  }

  eliminarImagen(imagen) {
    const _id = imagen._id;
    const url = `${this.eliminarImagenHumano}/${_id}`; 
    return this.http.delete<any>(url);
  }
}
