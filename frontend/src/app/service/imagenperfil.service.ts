import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagenperfilService {

  constructor(private http: HttpClient) { }
 
  private mostrarImagen = 'http://localhost:3000/api/imagenperfil/mostrarimagen'; //establecer metodo get en el back
  private cargarImagen = 'http://localhost:3000/api/imagenperfil/cargarImagen';
  private eliminarImagen = 'http://localhost:3000/api/imagenperfil/';

  obtenerImagenPerfil() {
    return this.http.get<any>(this.mostrarImagen);
  }  

  subirImagenPerfil(imagenUsuario: File) {
    const fd = new FormData();
    fd.append('sticker', imagenUsuario);
    return this.http.post<any>(this.cargarImagen, fd);
  }

  eliminarImagenPerfil(imagen) {
    const _id = imagen._id;
    const url = `${this.eliminarImagen}/${_id}`;
    return this.http.delete<any>(url); 
  }

}
